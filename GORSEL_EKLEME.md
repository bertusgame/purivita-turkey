# Görselleri Ekleme Rehberi

## 📸 Ana Sayfaya Görsel Ekleme

Ana sayfada 3 tane görsel alanı hazırlandı. Her biri **600x600px** boyutunda (aspect-ratio: square) olacak şekilde ayarlandı.

### Görselleri Yükleme Adımları:

1. **Görselleri hazırlayın:**
   - Önerilen boyut: 600x600px veya 1200x1200px (daha yüksek çözünürlük için)
   - Format: PNG, JPG, WebP
   - Kare (square) oran önemli

2. **Görselleri src/imports/ klasörüne ekleyin:**
   ```
   src/imports/
   ├── product-showcase-1.jpg
   ├── eco-friendly-2.jpg
   └── expert-team-3.jpg
   ```

3. **Home.tsx dosyasını güncelleyin:**

   Dosya yolu: `src/app/pages/Home.tsx`

   Dosyanın en üstüne import ekleyin:
   ```typescript
   import image1 from '../../imports/product-showcase-1.jpg';
   import image2 from '../../imports/eco-friendly-2.jpg';
   import image3 from '../../imports/expert-team-3.jpg';
   ```

4. **Placeholder div'leri değiştirin:**

   **Görsel 1** için (satır ~170 civarı):
   ```tsx
   {/* Eski kod: */}
   <div className="w-full h-full flex items-center justify-center text-gray-400">
     <div className="text-center">
       <div className="text-6xl mb-4">📸</div>
       <p className="text-sm">Görsel 1</p>
     </div>
   </div>

   {/* Yeni kod: */}
   <img
     src={image1}
     alt="Ultrasonik Temizlik Teknolojisi"
     className="w-full h-full object-cover"
   />
   ```

   **Görsel 2** için (satır ~260 civarı):
   ```tsx
   <img
     src={image2}
     alt="Çevre Dostu Üretim"
     className="w-full h-full object-cover"
   />
   ```

   **Görsel 3** için (satır ~300 civarı):
   ```tsx
   <img
     src={image3}
     alt="Uzman Ekip ve Kalite Garantisi"
     className="w-full h-full object-cover"
   />
   ```

## 🖼️ Görsel Konumları ve Açıklamaları:

### Görsel 1 (Sol taraf)
- **Konu:** Ultrasonik Temizlik Teknolojisi
- **Önerilen içerik:** Ürün görseli, ultrasonik cihaz, teknoloji odaklı
- **Metin yanında:** Sağ tarafta

### Görsel 2 (Sağ taraf)
- **Konu:** Çevre Dostu Üretim
- **Önerilen içerik:** Doğa, yaprak, yeşil konsept, sürdürülebilirlik
- **Metin yanında:** Sol tarafta

### Görsel 3 (Sol taraf)
- **Konu:** Uzman Ekip ve Kalite Garantisi
- **Önerilen içerik:** Ekip, kalite kontrol, sertifika, profesyonellik
- **Metin yanında:** Sağ tarafta

## 💡 İpuçları:

- Görseller otomatik olarak kare (aspect-square) olacak şekilde kırpılır
- `object-cover` ile görselin tamamı kapsar
- Görseller rounded-2xl (yuvarlatılmış köşe) şeklinde görünür
- Hover efekti ile glow (parıltı) efekti aktif
- Responsive: Mobilde alt alta, masaüstünde yan yana

## 🎨 Örnek Görseller:

Eğer henüz görselleriniz yoksa, şu kaynaklardan ücretsiz görseller bulabilirsiniz:
- Unsplash.com
- Pexels.com
- Pixabay.com

**Arama terimleri:**
- "ultrasonic cleaner"
- "eco friendly product"
- "quality control team"
- "green technology"
