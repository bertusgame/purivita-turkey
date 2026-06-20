import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purivita Turkey",
    "alternateName": "Purivita Türkiye",
    "url": "https://purivita.com.tr",
    "logo": "https://purivita.com.tr/logo.png",
    "description": "Türkiye'nin lider temizlik ürünleri markası. Kahve makinesi kireç çözücü, robot süpürge temizleyici ve ultrasonik temizlik çözümleri.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edincik Mah. Küçükkoru Cad. No:82",
      "addressLocality": "Bandırma",
      "addressRegion": "Balıkesir",
      "addressCountry": "TR",
      "postalCode": "10200"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.353",
      "longitude": "27.977"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-554-181-41-06",
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-541-338-10-10",
        "contactType": "sales",
        "areaServed": "TR",
        "availableLanguage": ["Turkish"]
      }
    ],
    "email": "info@lumoragroups.com",
    "sameAs": [
      "https://www.linkedin.com/company/lumora-construction-foreign-trade-ltd/",
      "https://purivita.de"
    ],
    "foundingDate": "2020",
    "slogan": "Temizlikte Yeni Nesil Çözümler"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purivita Turkey",
    "image": "https://purivita.com.tr/logo.png",
    "priceRange": "₺₺",
    "telephone": "+90-554-181-41-06",
    "email": "info@lumoragroups.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edincik Mah. Küçükkoru Cad. No:82",
      "addressLocality": "Bandırma",
      "addressRegion": "Balıkesir",
      "addressCountry": "TR",
      "postalCode": "10200"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.353",
      "longitude": "27.977"
    },
    "url": "https://purivita.com.tr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Purivita Turkey",
    "alternateName": "Purivita Türkiye",
    "url": "https://purivita.com.tr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://purivita.com.tr/urunler?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://purivita.com.tr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ürünler",
        "item": "https://purivita.com.tr/urunler"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hakkımızda",
        "item": "https://purivita.com.tr/hakkimizda"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "İletişim",
        "item": "https://purivita.com.tr/iletisim"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Bayilik",
        "item": "https://purivita.com.tr/bayi"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
