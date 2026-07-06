// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const inputPath = path.join(process.cwd(), 'docs', 'infinitychassis-seo-audit-on-rapor.md');
const outputPath = path.join(process.cwd(), 'docs', 'InfinityChassis_Teknik_SEO_Migration_On_Rapor.html');

const md = fs.readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return text;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi, '-')
    .replace(/^-+|-+$/g, '');
}

const lines = md.split('\n');
let html = '';
let i = 0;
let inList = false;
let inCode = false;
let codeBuffer = [];
const toc = [];

function closeList() {
  if (inList) {
    html += '</ul>\n';
    inList = false;
  }
}

function renderTable(start) {
  const rows = [];
  let cursor = start;
  while (cursor < lines.length && /^\|.*\|$/.test(lines[cursor].trim())) {
    rows.push(lines[cursor].trim());
    cursor += 1;
  }
  const parsed = rows.map((row) => row.slice(1, -1).split('|').map((cell) => cell.trim()));
  if (parsed.length < 2) return null;

  const head = parsed[0];
  const body = parsed.slice(2);
  let table = '<table><thead><tr>';
  for (const cell of head) table += `<th>${inline(cell)}</th>`;
  table += '</tr></thead><tbody>';
  for (const row of body) {
    table += '<tr>';
    for (const cell of row) table += `<td>${inline(cell)}</td>`;
    table += '</tr>';
  }
  table += '</tbody></table>\n';
  return { html: table, next: cursor };
}

while (i < lines.length) {
  const raw = lines[i];
  const line = raw.trim();

  if (line.startsWith('```')) {
    closeList();
    if (!inCode) {
      inCode = true;
      codeBuffer = [];
    } else {
      html += `<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>\n`;
      inCode = false;
    }
    i += 1;
    continue;
  }

  if (inCode) {
    codeBuffer.push(raw);
    i += 1;
    continue;
  }

  if (!line) {
    closeList();
    i += 1;
    continue;
  }

  if (line === '---') {
    closeList();
    html += '<hr />\n';
    i += 1;
    continue;
  }

  if (/^\|.*\|$/.test(line) && i + 1 < lines.length && /^\|?\s*:?-{3,}:?\s*\|/.test(lines[i + 1].trim())) {
    closeList();
    const table = renderTable(i);
    if (table) {
      html += table.html;
      i = table.next;
      continue;
    }
  }

  const heading = /^(#{1,4})\s+(.+)$/.exec(line);
  if (heading) {
    closeList();
    const level = heading[1].length;
    const text = heading[2].trim();
    const id = slugify(text);
    if (level === 2 || level === 3) toc.push({ level, text, id });
    html += `<h${level} id="${id}">${inline(text)}</h${level}>\n`;
    i += 1;
    continue;
  }

  const bullet = /^-\s+(.+)$/.exec(line);
  if (bullet) {
    if (!inList) {
      html += '<ul>\n';
      inList = true;
    }
    html += `<li>${inline(bullet[1])}</li>\n`;
    i += 1;
    continue;
  }

  closeList();
  html += `<p>${inline(line)}</p>\n`;
  i += 1;
}

closeList();

const tocHtml = toc
  .filter((item) => item.level === 2 && item.text !== 'Teknik SEO ve Migration Ön İnceleme Raporu')
  .map((item) => `<li><a href="#${item.id}">${inline(item.text)}</a></li>`)
  .join('\n');

const documentHtml = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <title>Infinity Chassis Units - Teknik SEO ve Migration Ön İnceleme Raporu</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm 18mm 16mm;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #172033;
      font-family: Inter, Arial, Helvetica, sans-serif;
      font-size: 10.4pt;
      line-height: 1.55;
      background: #fff;
    }
    .cover {
      min-height: 257mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
      padding: 8mm 0;
    }
    .brandline {
      width: 72px;
      height: 5px;
      background: #bd1d37;
      margin-bottom: 18mm;
    }
    .eyebrow {
      color: #bd1d37;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-size: 9pt;
      margin-bottom: 8mm;
    }
    .cover h1 {
      font-size: 34pt;
      line-height: 1.05;
      margin: 0 0 8mm 0;
      color: #111827;
      letter-spacing: 0;
    }
    .cover h2 {
      font-size: 15pt;
      line-height: 1.35;
      color: #475569;
      font-weight: 500;
      margin: 0;
      max-width: 145mm;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 20mm;
      max-width: 150mm;
    }
    .meta-card {
      border: 1px solid #e5e7eb;
      border-left: 4px solid #bd1d37;
      padding: 10px 12px;
      border-radius: 6px;
      background: #fafafa;
    }
    .meta-card b {
      display: block;
      color: #111827;
      margin-bottom: 2px;
      font-size: 9pt;
    }
    .meta-card span {
      color: #475569;
      font-size: 9pt;
    }
    .footer-note {
      color: #64748b;
      font-size: 9pt;
      border-top: 1px solid #e5e7eb;
      padding-top: 8mm;
    }
    .toc {
      page-break-after: always;
      padding-top: 6mm;
    }
    .toc h2 {
      font-size: 22pt;
      margin-top: 0;
      color: #111827;
    }
    .toc ul {
      columns: 2;
      column-gap: 18mm;
      padding-left: 0;
      margin-top: 10mm;
      list-style: none;
    }
    .toc li {
      break-inside: avoid;
      margin: 0 0 7px 0;
      color: #475569;
    }
    .toc a {
      color: #172033;
      text-decoration: none;
    }
    main h1 {
      display: none;
    }
    main h2 {
      font-size: 18pt;
      line-height: 1.2;
      color: #111827;
      margin: 12mm 0 5mm;
      padding-top: 2mm;
      border-top: 2px solid #bd1d37;
      page-break-after: avoid;
    }
    main h3 {
      font-size: 12.5pt;
      color: #bd1d37;
      margin: 8mm 0 3mm;
      page-break-after: avoid;
    }
    main h4 {
      font-size: 11pt;
      margin: 6mm 0 2mm;
      page-break-after: avoid;
    }
    p {
      margin: 0 0 3.2mm;
    }
    ul {
      margin: 0 0 4mm 0;
      padding-left: 18px;
    }
    li {
      margin-bottom: 1.4mm;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 4mm 0 6mm;
      font-size: 9.2pt;
      page-break-inside: avoid;
    }
    th {
      background: #172033;
      color: #fff;
      font-weight: 700;
      text-align: left;
      padding: 7px 8px;
    }
    td {
      border: 1px solid #e5e7eb;
      padding: 6px 8px;
      vertical-align: top;
    }
    tr:nth-child(even) td {
      background: #f8fafc;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 1px 4px;
      font-size: 8.8pt;
      color: #9f1239;
    }
    pre {
      background: #111827;
      color: #f8fafc;
      border-radius: 6px;
      padding: 10px 12px;
      overflow: hidden;
      white-space: pre-wrap;
      font-size: 8.8pt;
      page-break-inside: avoid;
    }
    pre code {
      background: transparent;
      color: inherit;
      border: 0;
      padding: 0;
    }
    hr {
      border: 0;
      height: 1px;
      background: #e5e7eb;
      margin: 8mm 0;
    }
    strong {
      color: #111827;
    }
    .callout {
      border-left: 5px solid #bd1d37;
      background: #fff7f8;
      padding: 12px 14px;
      border-radius: 6px;
      margin: 0 0 8mm;
      color: #334155;
    }
  </style>
</head>
<body>
  <section class="cover">
    <div>
      <div class="brandline"></div>
      <div class="eyebrow">Teknik SEO ve Migration Ön İnceleme</div>
      <h1>Infinity Chassis Units</h1>
      <h2>WordPress'ten React/Next yapıya geçiş sonrası organik görünürlük kaybı, indexleme sorunları ve kurtarma yol haritası.</h2>
      <div class="meta-grid">
        <div class="meta-card"><b>Site</b><span>infinitychassis.com</span></div>
        <div class="meta-card"><b>İnceleme Tarihi</b><span>2 Temmuz 2026</span></div>
        <div class="meta-card"><b>Kapsam</b><span>GSC, cPanel, DB, sitemap, robots, redirect</span></div>
        <div class="meta-card"><b>Durum</b><span>Ön teknik rapor ve aksiyon planı</span></div>
      </div>
    </div>
    <div class="footer-note">Hazırlayan: NT Works - Teknik SEO / Migration İncelemesi</div>
  </section>
  <section class="toc">
    <h2>İçindekiler</h2>
    <ul>${tocHtml}</ul>
  </section>
  <main>
    ${html}
  </main>
</body>
</html>`;

fs.writeFileSync(outputPath, documentHtml, 'utf8');
console.log(outputPath);
