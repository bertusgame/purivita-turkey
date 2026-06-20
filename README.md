# Purivita - Premium Temizlik Ürünleri Web Sitesi

Modern, responsive ve SEO optimize edilmiş e-ticaret web sitesi.

## 🚀 Özellikler

- ✨ Modern ve premium tasarım
- 🎨 Gelişmiş animasyonlar (Motion/Framer Motion)
- 📱 Tam responsive (mobil, tablet, desktop)
- 🔍 SEO optimizasyonu
- ⚡ Hızlı yükleme ve performans
- 🐳 Docker desteği
- 🎯 Multi-page navigation
- 🌐 Türkçe dil desteği

## 📦 Teknolojiler

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router 7.13.0
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🛠️ Kurulum

### Geliştirme Ortamı

\`\`\`bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm run dev
\`\`\`

### Production Build

\`\`\`bash
# Production build oluştur
pnpm run build

# Build'i preview et
pnpm run preview
\`\`\`

## 🐳 Docker ile Deployment

### Docker Image Build

\`\`\`bash
# Docker image oluştur
docker build -t purivita-website .

# Container'ı çalıştır
docker run -d -p 80:80 --name purivita purivita-website
\`\`\`

### Docker Compose (Opsiyonel)

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
\`\`\`

\`\`\`bash
docker-compose up -d
\`\`\`

## 📁 Proje Yapısı

\`\`\`
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Ana navigasyon
│   │   └── Footer.tsx          # Footer component
│   ├── pages/
│   │   ├── Home.tsx            # Ana sayfa
│   │   ├── Products.tsx        # Ürünler sayfası
│   │   ├── About.tsx           # Hakkımızda
│   │   ├── Contact.tsx         # İletişim
│   │   └── Dealer.tsx          # Bayimiz Olun
│   └── App.tsx                 # Ana uygulama
├── imports/                    # Görseller
└── styles/                     # CSS dosyaları
\`\`\`

## 🎨 Sayfalar

1. **Ana Sayfa** (`/`) - Hero section, özellikler, istatistikler, CTA
2. **Ürünler** (`/urunler`) - Animasyonlu ürün showcase
3. **Hakkımızda** (`/hakkimizda`) - Şirket hikayesi, değerler, timeline
4. **İletişim** (`/iletisim`) - İletişim formu, bilgiler, SSS
5. **Bayimiz Olun** (`/bayi`) - Bayilik başvuru formu

## 🎯 SEO Optimizasyonu

- ✅ Dinamik sayfa başlıkları
- ✅ Meta açıklamaları
- ✅ Semantic HTML
- ✅ Responsive images
- ✅ Fast loading
- ✅ Clean URL structure

## 🎨 Renk Paleti

- **Ana Renk**: #639922 (Yeşil)
- **İkincil Renk**: #7ab82d
- **Vurgu Renkleri**: Ürün bazlı dinamik renkler

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Production Deployment

1. Build oluştur: \`pnpm run build\`
2. \`dist\` klasörünü web sunucusuna yükle
3. SPA routing için nginx/Apache ayarla

### Nginx Örnek Konfigürasyon

\`\`\`nginx
server {
    listen 80;
    server_name purivita.com;
    root /var/www/purivita/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
\`\`\`

## 📄 Lisans

© 2024 Purivita. Tüm hakları saklıdır.

## 🤝 Destek

Sorularınız için: info@purivita.com
\`\`\`
