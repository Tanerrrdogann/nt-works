const K = {
  TF_IDF: "smart",
  TITLE: "title",
  AUTHOR: "author",
  YEAR: "year",
  POPULARITY: "popularity",
  TAG: "tag",
};

const state = {
  books: [],
  nextId: 1,
  trie: null,
  idIndex: new Map(),
  undoStack: [],
  redoStack: [],
  mode: "normal",
  filterActive: false,
  useSmartSort: false,
  selectedCardId: null,
  editingId: null,
  filters: {
    author: "",
    tag: "",
    minYear: -1,
    maxYear: -1,
    minScore: 0,
    maxScore: 10,
    algorithm: "merge",
    sort: K.TF_IDF,
    direction: "desc",
  },
};

const els = {};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.books = [];
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(key, book) {
    if (!key) return;
    let node = this.root;
    for (const ch of normalizeTr(key)) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
      node.books.push(book);
    }
    node.end = true;
  }

  search(prefix) {
    if (!prefix) return null;
    let node = this.root;
    for (const ch of normalizeTr(prefix)) {
      if (!node.children.has(ch)) return null;
      node = node.children.get(ch);
    }
    return uniqueBooks(node.books);
  }
}

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindElements();
  enhanceNumberInputs();
  bindEvents();
  try {
    await loadBooks();
  } catch (error) {
    els.bookList.innerHTML = `<article class="book-card"><h3>Kitaplar yuklenemedi</h3><p>${error.message}</p></article>`;
    return;
  }
  rebuildIndexes();
  updateBookList();
  updateCompleters();
  updateUndoRedoState();
}

function enhanceNumberInputs() {
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    if (input.closest(".number-control")) return;
    const wrapper = document.createElement("span");
    wrapper.className = "number-control";
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    const steps = document.createElement("span");
    steps.className = "number-steps";

    const up = document.createElement("button");
    up.type = "button";
    up.setAttribute("aria-label", "Artır");
    up.innerHTML = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 8 6 4l4 4"/></svg>';

    const down = document.createElement("button");
    down.type = "button";
    down.setAttribute("aria-label", "Azalt");
    down.innerHTML = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4"/></svg>';

    up.addEventListener("click", () => stepNumberInput(input, 1));
    down.addEventListener("click", () => stepNumberInput(input, -1));

    steps.append(up, down);
    wrapper.appendChild(steps);
  });
}

function stepNumberInput(input, direction) {
  const step = Number(input.step && input.step !== "any" ? input.step : 1);
  const min = input.min === "" ? -Infinity : Number(input.min);
  const max = input.max === "" ? Infinity : Number(input.max);
  const current = input.value === "" ? 0 : Number(input.value);
  const next = Math.min(max, Math.max(min, current + step * direction));
  input.value = Number.isInteger(step) ? String(next) : next.toFixed(1);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function bindElements() {
  const ids = [
    "undoBtn", "redoBtn", "modeBtn", "modeMenu", "searchPill", "searchInput", "searchSuggest",
    "filterBtn", "searchBtn", "bookList", "addBtn", "resetDataBtn", "filterOverlay", "overlayDismiss",
    "filterClose", "applyFilterBtn", "resetFilterBtn", "filterAuthor", "filterTag",
    "filterMinYear", "filterMaxYear", "filterMinScore", "filterMaxScore", "filterAlgorithm",
    "filterSort", "filterDirection", "normalSearchWrap", "startWrap", "targetWrap",
    "startBookInput", "targetBookInput", "startSuggest", "targetSuggest", "bfsArrow",
    "bfsCriteria", "bookDialog", "bookForm", "dialogTitle", "bookTitle", "bookAuthor",
    "bookYear", "bookTags", "bookScore", "saveBookBtn", "cardMenu", "cardUpdateBtn",
    "cardDeleteBtn",
  ];
  ids.forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.undoBtn.addEventListener("click", onUndo);
  els.redoBtn.addEventListener("click", onRedo);
  els.resetDataBtn.addEventListener("click", resetToSeedData);
  els.modeBtn.addEventListener("click", showModeMenu);
  els.modeMenu.addEventListener("click", onModeMenuClick);
  els.filterBtn.addEventListener("click", openFilterOverlay);
  els.filterClose.addEventListener("click", closeFilterOverlay);
  els.overlayDismiss.addEventListener("click", closeFilterOverlay);
  els.applyFilterBtn.addEventListener("click", applyFilters);
  els.resetFilterBtn.addEventListener("click", resetFilters);
  els.searchBtn.addEventListener("click", onSearch);
  els.searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") onSearch();
  });
  els.addBtn.addEventListener("click", showAddBookDialog);
  els.saveBookBtn.addEventListener("click", saveBookFromDialog);
  els.cardUpdateBtn.addEventListener("click", () => {
    hideCardMenu();
    showUpdateBookDialog(state.selectedCardId);
  });
  els.cardDeleteBtn.addEventListener("click", () => {
    hideCardMenu();
    deleteBook(state.selectedCardId);
  });

  [els.searchInput, els.startBookInput, els.targetBookInput].forEach((input) => {
    input.addEventListener("input", () => showSuggestionsFor(input));
    input.addEventListener("focus", () => showSuggestionsFor(input));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") onSearch();
      if (e.key === "Escape") closeSuggestions();
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete")) closeSuggestions();
    if (!e.target.closest(".context-menu")) hideCardMenu();
    if (!e.target.closest(".menu-popover") && !e.target.closest("#modeBtn")) hideModeMenu();
  });

  document.addEventListener("contextmenu", (e) => {
    const card = e.target.closest(".book-card");
    if (!card) return;
    e.preventDefault();
    state.selectedCardId = Number(card.dataset.id);
    showCardMenu(e.clientX, e.clientY);
  });
}

async function loadBooks() {
  const saved = localStorage.getItem("kutuphane.books");
  if (saved) {
    const savedBooks = JSON.parse(saved);
    if (Array.isArray(savedBooks) && savedBooks.length > 0) {
      state.books = savedBooks;
      state.nextId = Math.max(0, ...state.books.map((b) => b.id)) + 1;
      return;
    }
  }

  state.books = await loadSeedBooks();
  state.nextId = Math.max(0, ...state.books.map((b) => b.id)) + 1;
}

async function loadSeedBooks() {
  const res = await fetch(new URL("kitaplar.csv", document.baseURI));
  if (!res.ok) {
    throw new Error(`Kitap verisi yuklenemedi: ${res.status}`);
  }
  const csv = await res.text();
  return parseCsv(csv);
}

function parseCsv(csv) {
  return csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",");
      const id = Number(parts[0]);
      const title = parts[1] || "Bilinmiyor";
      const author = parts[2] || "Bilinmiyor";
      const isbn = parts[3] || "-";
      const year = Number(parts[4] || 0);
      const tagCount = Number(parts[5] || 0);
      const score = Number(parts[6] || 0);
      const tags = (parts.slice(7).join(",") || "")
        .split("|")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .slice(0, tagCount || 20);
      return { id, title, author, isbn, year, tags, score };
    });
}

function persistBooks() {
  localStorage.setItem("kutuphane.books", JSON.stringify(state.books));
}

function rebuildIndexes() {
  state.trie = new Trie();
  state.idIndex = new Map();
  for (const book of state.books) {
    state.idIndex.set(book.id, book);
    state.trie.insert(book.title, book);
    state.trie.insert(book.author, book);
    for (const tag of book.tags) state.trie.insert(tag, book);
  }
}

function updateBookList() {
  if (state.mode === "bfs") return;

  const query = els.searchInput.value.trim();
  let workingList = null;

  if (!query) {
    workingList = [...state.books];
  } else if (state.useSmartSort) {
    workingList = tfIdfSearch(query);
  } else {
    workingList = state.trie.search(query);
    if (!workingList || workingList.length === 0) workingList = tfIdfSearch(query);
  }

  let filteredList = workingList;

  if (state.filterActive) {
    filteredList = workingList ? detailedFilter(workingList) : [];
  }

  if (
    filteredList &&
    filteredList.length > 1 &&
    state.filters.sort !== K.TF_IDF
  ) {
    filteredList = [...filteredList];
    sortBooks(filteredList, state.filters.sort, state.filters.direction, state.filters.algorithm);
  }

  renderBooks(filteredList || [], state.filterActive || query.length > 0);
  updateUndoRedoState();
}

function detailedFilter(source) {
  const f = state.filters;
  const author = normalizeTr(f.author);
  const tag = normalizeTr(f.tag);

  return source.filter((book) => {
    if (author && !normalizeTr(book.author).includes(author)) return false;
    if (tag && !book.tags.some((t) => normalizeTr(t).includes(tag))) return false;
    if (f.minYear !== -1 && book.year < f.minYear) return false;
    if (f.maxYear !== -1 && book.year > f.maxYear) return false;
    if (book.score < f.minScore || book.score > f.maxScore) return false;
    return true;
  });
}

function applyFilters() {
  state.filterActive = true;
  state.filters.author = els.filterAuthor.value;
  state.filters.tag = els.filterTag.value;
  state.filters.minYear = numberOrDefault(els.filterMinYear.value, -1, true);
  state.filters.maxYear = numberOrDefault(els.filterMaxYear.value, -1, true);
  state.filters.minScore = numberOrDefault(els.filterMinScore.value, 0);
  state.filters.maxScore = numberOrDefault(els.filterMaxScore.value, 10);
  state.filters.algorithm = els.filterAlgorithm.value;
  state.filters.sort = els.filterSort.value;
  state.filters.direction = els.filterDirection.value;
  state.useSmartSort = state.filters.sort === K.TF_IDF;
  closeFilterOverlay();
  updateBookList();
}

function resetFilters() {
  state.filterActive = false;
  state.useSmartSort = false;
  els.filterAuthor.value = "";
  els.filterTag.value = "";
  els.filterMinYear.value = "";
  els.filterMaxYear.value = "";
  els.filterMinScore.value = "0";
  els.filterMaxScore.value = "10";
  els.filterAlgorithm.value = "merge";
  els.filterSort.value = K.TF_IDF;
  els.filterDirection.value = "desc";
  state.filters = {
    author: "",
    tag: "",
    minYear: -1,
    maxYear: -1,
    minScore: 0,
    maxScore: 10,
    algorithm: "merge",
    sort: K.TF_IDF,
    direction: "desc",
  };
  closeFilterOverlay();
  updateBookList();
}

function renderBooks(books, showEmpty) {
  els.bookList.innerHTML = "";
  if (books.length === 0) {
    if (showEmpty) {
      const info = document.createElement("div");
      info.className = "empty-state";
      info.textContent = "Sonuç bulunamadı.";
      els.bookList.appendChild(info);
    }
    return;
  }
  for (const book of books) els.bookList.appendChild(createBookCard(book));
}

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.dataset.id = String(book.id);

  const title = document.createElement("h3");
  title.textContent = book.title || "İsimsiz Kitap";

  const meta = document.createElement("div");
  meta.className = "book-meta";
  meta.textContent = `${book.author || "Yazar Bilinmiyor"}  •  ${book.year}`;

  const bottom = document.createElement("div");
  bottom.className = "book-bottom";

  const tags = document.createElement("div");
  tags.className = "book-tags";
  tags.textContent = book.tags.length ? book.tags.join(", ") : "Etiket Yok";

  const score = document.createElement("div");
  score.className = "book-score";
  score.textContent = `★ ${book.score.toFixed(1)}`;

  bottom.append(tags, score);
  card.append(title, meta, bottom);
  return card;
}

function onSearch() {
  if (state.mode === "bfs") {
    runBfsSearch();
  } else {
    updateBookList();
  }
}

function runBfsSearch() {
  const start = findBookByTitle(els.startBookInput.value);
  const target = findBookByTitle(els.targetBookInput.value);
  els.bookList.innerHTML = "";

  if (!start || !target) {
    renderMessage("Kitaplar bulunamadı! Tam isimleri kontrol edin.", true);
    return;
  }

  const path = bfsShortestPath(start.id, target.id, els.bfsCriteria.value);
  if (!path.length) {
    renderMessage("Seçilen kritere göre iki kitap arasında bağlantı bulunamadı.", false);
    return;
  }

  for (let i = 0; i < path.length; i++) {
    els.bookList.appendChild(createBookCard(path[i]));
    if (i < path.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "path-arrow";
      arrow.textContent = "⌄";
      els.bookList.appendChild(arrow);
    }
  }
}

function bfsShortestPath(startId, targetId, criterion) {
  const startIndex = state.books.findIndex((b) => b.id === startId);
  const targetIndex = state.books.findIndex((b) => b.id === targetId);
  if (startIndex === -1 || targetIndex === -1) return [];

  const visited = new Array(state.books.length).fill(false);
  const previous = new Array(state.books.length).fill(-1);
  const queue = [startIndex];
  visited[startIndex] = true;

  while (queue.length) {
    const current = queue.shift();
    if (current === targetIndex) break;

    for (let i = 0; i < state.books.length; i++) {
      if (!visited[i] && areConnected(state.books[current], state.books[i], criterion)) {
        visited[i] = true;
        previous[i] = current;
        queue.push(i);
      }
    }
  }

  if (!visited[targetIndex]) return [];

  const path = [];
  let cursor = targetIndex;
  while (cursor !== -1) {
    path.push(state.books[cursor]);
    cursor = previous[cursor];
  }
  return path.reverse();
}

function areConnected(a, b, criterion) {
  switch (criterion) {
    case K.TITLE:
      return compareTr(a.title, b.title) === 0;
    case K.AUTHOR:
      return compareTr(a.author, b.author) === 0;
    case K.YEAR:
      return a.year === b.year;
    case K.POPULARITY:
      return a.score === b.score;
    case K.TAG:
      return a.tags.some((tagA) => b.tags.some((tagB) => compareTr(tagA, tagB) === 0));
    default:
      return false;
  }
}

function showAddBookDialog() {
  state.editingId = null;
  els.dialogTitle.textContent = "Yeni Kitap Ekle";
  els.saveBookBtn.textContent = "KAYDET";
  els.bookTitle.value = "";
  els.bookAuthor.value = "";
  els.bookYear.value = "2023";
  els.bookTags.value = "";
  els.bookScore.value = "5";
  els.bookDialog.showModal();
}

function showUpdateBookDialog(id) {
  const book = state.idIndex.get(Number(id));
  if (!book) return;
  state.editingId = book.id;
  els.dialogTitle.textContent = "Kitap Güncelle";
  els.saveBookBtn.textContent = "GÜNCELLE";
  els.bookTitle.value = book.title;
  els.bookAuthor.value = book.author;
  els.bookYear.value = String(book.year);
  els.bookTags.value = book.tags.join(", ");
  els.bookScore.value = String(book.score);
  els.bookDialog.showModal();
}

function saveBookFromDialog(e) {
  e.preventDefault();
  const title = els.bookTitle.value.trim();
  const author = els.bookAuthor.value.trim();
  if (!title || !author) {
    alert("Lütfen Kitap Başlığı ve Yazar adını giriniz.");
    return;
  }

  const nextData = {
    id: state.editingId ?? state.nextId++,
    title,
    author,
    isbn: "-",
    year: Number(els.bookYear.value || 0),
    tags: els.bookTags.value.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 20),
    score: Number(els.bookScore.value || 0),
  };

  if (state.editingId) {
    const oldBook = cloneBook(state.idIndex.get(state.editingId));
    const index = state.books.findIndex((b) => b.id === state.editingId);
    state.books[index] = nextData;
    pushUndo({ type: "update", before: oldBook, after: cloneBook(nextData) });
  } else {
    state.books.push(nextData);
    pushUndo({ type: "add", book: cloneBook(nextData) });
  }

  afterMutation();
  els.bookDialog.close();
}

function deleteBook(id) {
  const book = state.idIndex.get(Number(id));
  if (!book) return;
  if (!confirm("Emin misin?")) return;
  state.books = state.books.filter((b) => b.id !== book.id);
  pushUndo({ type: "delete", book: cloneBook(book) });
  afterMutation();
}

function pushUndo(action) {
  state.undoStack.push(action);
  state.redoStack.length = 0;
}

function onUndo() {
  const action = state.undoStack.pop();
  if (!action) return;
  applyInverse(action);
  state.redoStack.push(action);
  afterMutation(false);
}

function onRedo() {
  const action = state.redoStack.pop();
  if (!action) return;
  applyAction(action);
  state.undoStack.push(action);
  afterMutation(false);
}

function applyAction(action) {
  if (action.type === "add") state.books.push(cloneBook(action.book));
  if (action.type === "delete") state.books = state.books.filter((b) => b.id !== action.book.id);
  if (action.type === "update") {
    const index = state.books.findIndex((b) => b.id === action.after.id);
    if (index !== -1) state.books[index] = cloneBook(action.after);
  }
}

function applyInverse(action) {
  if (action.type === "add") state.books = state.books.filter((b) => b.id !== action.book.id);
  if (action.type === "delete") state.books.push(cloneBook(action.book));
  if (action.type === "update") {
    const index = state.books.findIndex((b) => b.id === action.before.id);
    if (index !== -1) state.books[index] = cloneBook(action.before);
  }
}

function afterMutation(resetRedo = true) {
  if (resetRedo) state.redoStack.length = 0;
  persistBooks();
  rebuildIndexes();
  updateCompleters();
  updateBookList();
  updateUndoRedoState();
}

function updateUndoRedoState() {
  els.undoBtn.disabled = state.undoStack.length === 0;
  els.redoBtn.disabled = state.redoStack.length === 0;
}

function showModeMenu() {
  const rect = els.modeBtn.getBoundingClientRect();
  els.modeMenu.style.left = `${rect.left}px`;
  els.modeMenu.style.top = `${rect.bottom + 8}px`;
  els.modeMenu.classList.toggle("hidden");
}

function hideModeMenu() {
  els.modeMenu.classList.add("hidden");
}

function onModeMenuClick(e) {
  const btn = e.target.closest("button[data-mode]");
  if (!btn) return;
  state.mode = btn.dataset.mode;
  updateModeUI();
  hideModeMenu();
}

function updateModeUI() {
  const isBfs = state.mode === "bfs";
  els.searchPill.classList.toggle("bfs", isBfs);
  els.normalSearchWrap.classList.toggle("hidden", isBfs);
  els.filterBtn.classList.toggle("hidden", isBfs);
  els.startWrap.classList.toggle("hidden", !isBfs);
  els.bfsArrow.classList.toggle("hidden", !isBfs);
  els.targetWrap.classList.toggle("hidden", !isBfs);
  els.bfsCriteria.classList.toggle("hidden", !isBfs);
  els.bookList.innerHTML = "";
  if (!isBfs) updateBookList();
}

async function resetToSeedData() {
  if (!confirm("Örnek veri setine dönülsün mü? Eklediğin yerel kayıtlar temizlenir.")) return;
  try {
    state.books = await loadSeedBooks();
    state.nextId = Math.max(0, ...state.books.map((b) => b.id)) + 1;
    state.undoStack = [];
    state.redoStack = [];
    localStorage.removeItem("kutuphane.books");
    rebuildIndexes();
    updateCompleters();
    updateBookList();
    updateUndoRedoState();
  } catch (error) {
    alert(error.message || "Örnek veri yüklenemedi.");
  }
}

function openFilterOverlay() {
  els.filterOverlay.classList.remove("hidden");
}

function closeFilterOverlay() {
  els.filterOverlay.classList.add("hidden");
}

function showCardMenu(x, y) {
  els.cardMenu.style.left = `${x}px`;
  els.cardMenu.style.top = `${y}px`;
  els.cardMenu.classList.remove("hidden");
}

function hideCardMenu() {
  els.cardMenu.classList.add("hidden");
}

function renderMessage(text, isError) {
  const info = document.createElement("div");
  info.className = "bfs-message";
  info.style.color = isError ? "#dc2626" : "#64748b";
  info.style.fontWeight = isError ? "700" : "500";
  info.textContent = text;
  els.bookList.appendChild(info);
}

function updateCompleters() {
  const titles = state.books.map((b) => b.title).filter(Boolean);
  [els.searchInput, els.startBookInput, els.targetBookInput].forEach((input) => {
    input.dataset.completions = JSON.stringify(titles);
  });
}

function showSuggestionsFor(input) {
  const query = normalizeTr(input.value);
  const box = suggestionBoxFor(input);
  if (!box) return;
  box.innerHTML = "";
  if (!query) {
    box.classList.remove("open");
    return;
  }

  const titles = JSON.parse(input.dataset.completions || "[]");
  const matches = titles
    .filter((title) => normalizeTr(title).includes(query))
    .slice(0, 10);

  if (!matches.length) {
    box.classList.remove("open");
    return;
  }

  for (const title of matches) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = title;
    btn.addEventListener("click", () => {
      input.value = title;
      box.classList.remove("open");
    });
    box.appendChild(btn);
  }
  box.classList.add("open");
}

function suggestionBoxFor(input) {
  if (input === els.searchInput) return els.searchSuggest;
  if (input === els.startBookInput) return els.startSuggest;
  if (input === els.targetBookInput) return els.targetSuggest;
  return null;
}

function closeSuggestions() {
  [els.searchSuggest, els.startSuggest, els.targetSuggest].forEach((box) => {
    box.classList.remove("open");
  });
}

function tfIdfSearch(query) {
  const normalized = normalizeTr(query);
  if (!normalized) return [...state.books];

  let contains = 0;
  const scores = [];
  for (const book of state.books) {
    const tf = termFrequency(book, normalized);
    if (tf > 0) contains += 1;
    scores.push({ book, tf });
  }
  if (contains === 0) return [];

  const idf = Math.log(state.books.length / contains);
  return scores
    .filter((entry) => entry.tf > 0)
    .map((entry) => ({ book: entry.book, score: entry.tf * idf }))
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.book);
}

function termFrequency(book, normalizedQuery) {
  let count = 0;
  count += occurrences(normalizeTr(book.title), normalizedQuery) * 5;
  count += occurrences(normalizeTr(book.author), normalizedQuery) * 3;
  for (const tag of book.tags) count += occurrences(normalizeTr(tag), normalizedQuery) * 2;
  return count;
}

function occurrences(source, needle) {
  if (!source || !needle) return 0;
  let index = 0;
  let count = 0;
  while ((index = source.indexOf(needle, index)) !== -1) {
    count += 1;
    index += needle.length;
  }
  return count;
}

function sortBooks(books, criterion, direction, algorithm) {
  if (algorithm === "quick") {
    quickSortBooks(books, 0, books.length - 1, criterion, direction);
  } else {
    const sorted = mergeSortBooks(books, criterion, direction);
    books.splice(0, books.length, ...sorted);
  }
}

function mergeSortBooks(books, criterion, direction) {
  if (books.length <= 1) return books;
  const mid = Math.floor(books.length / 2);
  return merge(
    mergeSortBooks(books.slice(0, mid), criterion, direction),
    mergeSortBooks(books.slice(mid), criterion, direction),
    criterion,
    direction,
  );
}

function merge(left, right, criterion, direction) {
  const out = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (isBefore(left[i], right[j], criterion, direction)) out.push(left[i++]);
    else out.push(right[j++]);
  }
  return out.concat(left.slice(i), right.slice(j));
}

function quickSortBooks(books, low, high, criterion, direction) {
  if (high <= low) return;
  const pivot = partition(books, low, high, criterion, direction);
  quickSortBooks(books, low, pivot - 1, criterion, direction);
  quickSortBooks(books, pivot + 1, high, criterion, direction);
}

function partition(books, low, high, criterion, direction) {
  const pivot = books[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (isBefore(books[j], pivot, criterion, direction)) {
      i += 1;
      [books[i], books[j]] = [books[j], books[i]];
    }
  }
  [books[i + 1], books[high]] = [books[high], books[i + 1]];
  return i + 1;
}

function isBefore(a, b, criterion, direction) {
  const cmp = compareByCriterion(a, b, criterion);
  return direction === "asc" ? cmp < 0 : cmp > 0;
}

function compareByCriterion(a, b, criterion) {
  if (criterion === K.TITLE) return compareTr(a.title, b.title);
  if (criterion === K.AUTHOR) return compareTr(a.author, b.author);
  if (criterion === K.YEAR) return numericCompare(a.year, b.year);
  if (criterion === K.POPULARITY) return numericCompare(a.score, b.score);
  if (criterion === K.TAG) return numericCompare(a.tags.length, b.tags.length);
  return 0;
}

function findBookByTitle(title) {
  const target = normalizeTr(title);
  return state.books.find((book) => normalizeTr(book.title) === target) || null;
}

function normalizeTr(value) {
  return String(value || "")
    .replaceAll("İ", "i")
    .replaceAll("I", "ı")
    .toLocaleLowerCase("tr-TR");
}

function compareTr(a, b) {
  const left = normalizeTr(a);
  const right = normalizeTr(b);
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

function numericCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function uniqueBooks(books) {
  const seen = new Set();
  const out = [];
  for (const book of books) {
    if (seen.has(book.id)) continue;
    seen.add(book.id);
    out.push(book);
  }
  return out;
}

function numberOrDefault(value, fallback, zeroIsUnset = false) {
  if (value === "" || value === null || value === undefined) return fallback;
  const n = Number(value);
  if (zeroIsUnset && n === 0) return fallback;
  return Number.isFinite(n) ? n : fallback;
}

function cloneBook(book) {
  return JSON.parse(JSON.stringify(book));
}
