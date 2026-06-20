import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Purivita Turkey - Premium Temizlik Ürünleri | Kahve Makinesi & Robot Süpürge Temizleyici',
  description = 'Purivita Turkey - Türkiye\'nin lider temizlik ürünleri markası. Kahve makinesi kireç çözücü, robot süpürge temizleyici ve ultrasonik temizlik çözümleri. 250.000+ mutlu müşteri. Ücretsiz kargo ve hızlı teslimat.',
  keywords = 'purivita, purivita turkey, purivita türkiye, temizlik ürünleri, kahve makinesi temizleyici, kireç çözücü, robot süpürge temizleyici, ultrasonik temizlik, süt sistemi temizleyici, döşeme temizleyici, islak kuru süpürge temizleyici, temizlik konsantresi, purivita bayilik',
  image = 'https://purivita.com.tr/og-image.jpg',
  url = 'https://purivita.com.tr'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Purivita Turkey" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Purivita Turkey" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Geo Tags */}
      <meta name="geo.region" content="TR-10" />
      <meta name="geo.placename" content="Balıkesir, Turkey" />
      <meta name="geo.position" content="40.353;27.977" />
      <meta name="ICBM" content="40.353, 27.977" />
    </Helmet>
  );
}
