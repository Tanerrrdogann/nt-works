# Kütüphane Arama Motoru

Qt ile hazırlanmış kütüphane arama motorunun tarayıcıda çalışan sürümüdür.
Arayüz ve davranış `main.cpp` akışına göre korunmuştur.

## Özellikler

- Normal arama / listeleme modu
- BFS bağlantı bulma modu
- Trie tabanlı arama ve öneri mantığı
- TF-IDF akıllı arama fallback'i
- Merge Sort / Quick Sort seçimi
- Yazar, etiket, yıl, puan filtreleri
- Başlık, yazar, yıl, puan sıralaması
- Sağ tıkla güncelle / sil
- Kitap ekleme dialogu
- Undo / redo stack'i
- `kitaplar.csv` veri seti

## Çalıştırma

```bash
cd /home/taner/kutuphane-arama-motoru
python3 -m http.server 5500
```

Sonra tarayıcıda:

```text
http://localhost:5500
```

