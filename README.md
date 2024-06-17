# Wordle Oyunu

Bu proje, kullanıcıların belirli bir kelimeyi tahmin etmeye çalıştığı basit bir oyun olan Wordle'ı React ve JavaScript ile oluşturur. Oyun sırasında kullanıcı doğru harfleri ve pozisyonlarını tahmin etmeye çalışır ve her tahmin sonrasında geri bildirim alır.

## Özellikler

- Klavye aracılığıyla harf girişi yapılabilir.
- Tahmin edilen kelime doğruluğuna göre harfler arka plan renkleriyle işaretlenir.
- Oyun bitiminde modal penceresi açılır ve kalan süre gösterilir.
- Oyun sonrasında yeni bir kelimeye geçiş için belirlenen süre beklenir.
- Oyun durumu ve tahminler localStorage'da saklanır, böylece sayfa yenilendiğinde devam edebilir.

## Kullanılan Teknolojiler

- React.js
- JavaScript
- HTML/CSS

## Kurulum

1. **Projeyi İndirin veya Klonlayın:**

git clone <repo-url>

cd wordle-game

2. **Gerekli Bağımlılıkları Yükleyin:**

npm install

3. **Projeyi Başlatın:**

npm start

4. **Tarayıcıda Görüntüleyin:**
   Tarayıcınızda `http://localhost:3000` adresine giderek oyunu görebilirsiniz.

## Nasıl Oynanır?

1. Sayfa yüklendiğinde, oyunun başlamasını bekleyin.
2. Ekran klavyesi veya bilgisayar klavyesi aracılığıyla harf girişi yapın.
3. Her harf girdiğinizde, tahmininiz doğruluğuna göre harfler işaretlenir.
4. Doğru kelimeyi bulduğunuzda, oyun biter ve modal penceresi açılır.
5. Modal penceresinde kalan süre gösterilir ve yeni kelimeye geçiş için beklenir.
6. Yeni kelimeye geçildiğinde, tahmin girişi yeniden başlar.

## Ekran Görüntüsü

![Wordle Screenshot](screenshot.png)

## Notlar

- Oyunun yeni kelimeye geçiş süresi her gün 00:00'da yenilenir.
- Proje React kullanarak oluşturulmuş olup, bazı bileşenler örnek veri veya sabit değerlerle çalışır.
- Projenin özelleştirilmesi veya genişletilmesi gereken herhangi bir bölüm varsa, ilgili bileşenlerin kodunu inceleyebilir ve uygun şekilde güncelleyebilirsiniz.
