# Wordle Oyunu

Wordle Oyunu, popüler Wordle oyunundan esinlenerek oluşturulmuş basit bir React uygulamasıdır. Oyunun amacı, belirli bir kelimeyi tahmin etmektir. Her tahminde doğru harflerin doğru konumunu (yeşil), doğru harflerin yanlış konumunu (sarı) ve yanlış harfleri (gri) gösteren geri bildirim sağlanır. Oyun, tahmin edilen kelimenin tamamen doğru tahmin edilmesiyle veya belirli tahmin hakkı sayısının tamamlanmasıyla sona erer.

## Özellikler

- **Tahmin Girişi:** Ekran klavyesi veya fiziksel klavye kullanılarak 5 harfli bir kelime tahmin edilir.
- **Geri Bildirim:** Her harf için doğruluğuna göre görsel geri bildirim sağlanır.
- **Modal Penceresi:** Oyun sona erdiğinde kazanma veya kaybetme durumunu gösteren modal penceresi açılır.
- **Zaman Sınırlaması:** Oyun, her gün gece yarısında (00:00) sıfırlanır ve yeni bir kelime tahmin edilmesi gerekebilir.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.
- **LocalStorage:** Oyun ilerlemesini ve güncel tahmin edilecek kelimeyi saklamak için tarayıcı tabanlı depolama kullanılır.
- **CSS:** Oyun arayüzünü stil ve animasyonlarla zenginleştirmek için kullanılan teknoloji.
- **Framer Motion:** Oyun arayüzün animasyonları için kullanılan kütüphane.

## Kurulum

1. **Projeyi İndirin veya Klonlayın:**

```bash
   git clone https://github.com/cnsbelirdi/wordletr-game-app.git
   cd wordle-game
```

2. **Gerekli Bağımlılıkları Yükleyin:**

```bash
   npm install
```

3. **Projeyi Başlatın:**

```bash
   npm start
```

4. **Tarayıcıda Görüntüleyin:**
   Tarayıcınızda `http://localhost:3000` adresine giderek oyunu görebilirsiniz.

## Nasıl Oynanır

1. **Kelime Tahmini:**
   - Ekran klavyesi veya fiziksel klavye kullanarak 5 harfli bir kelime tahmin edin.
   - Her harf için doğruluğuna göre geri bildirim alırsınız:
     - Yeşil: Doğru harf, doğru konumda.
     - Sarı: Doğru harf, yanlış konumda.
     - Gri: Yanlış harf.
2. **Kazanma ve Kaybetme:**

   - Kelimeyi doğru tahmin ettiğinizde (tüm harfler yeşil) veya tahmin hakkınız bittiğinde oyun sona erer.

3. **Oyunun Sıfırlanması:**
   - Oyun her gün gece yarısında (00:00) sıfırlanır ve yeni bir kelime tahmin edilmesi gerekebilir.

## Ekran Görüntüsü

![Wordle Screenshot](screenshot.png)

## Notlar

- Proje React kullanarak oluşturulmuş olup, bazı bileşenler örnek veri veya sabit değerlerle çalışır.
- Projenin özelleştirilmesi veya genişletilmesi gereken herhangi bir bölüm varsa, ilgili bileşenlerin kodunu inceleyebilir ve uygun şekilde güncelleyebilirsiniz.
