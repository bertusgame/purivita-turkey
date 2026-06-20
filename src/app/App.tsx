import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Dealer from './pages/Dealer';
import Privacy from './pages/Privacy';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  const getSEO = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Purivita Turkey - Premium Temizlik Ürünleri | Kahve Makinesi & Robot Süpürge Temizleyici',
          description: 'Purivita Turkey - Türkiye\'nin lider temizlik ürünleri markası. Kahve makinesi kireç çözücü, robot süpürge temizleyici ve ultrasonik temizlik çözümleri. 250.000+ mutlu müşteri.',
          keywords: 'purivita, purivita turkey, purivita türkiye, temizlik ürünleri, kahve makinesi temizleyici, robot süpürge temizleyici',
          url: 'https://purivita.com.tr'
        };
      case '/urunler':
        return {
          title: 'Purivita Ürünleri - Kahve Makinesi, Robot Süpürge & Ultrasonik Temizleyiciler | Turkey',
          description: 'Purivita Turkey ürünleri: Kahve makinesi kireç çözücü, robot süpürge temizlik konsantresi, süt sistemi temizleyici, döşeme temizleyici. Premium kalite, hızlı kargo.',
          keywords: 'purivita ürünleri, kahve makinesi kireç çözücü, robot süpürge temizleyici, ultrasonik temizlik, süt sistemi temizleyici, döşeme temizleyici',
          url: 'https://purivita.com.tr/urunler'
        };
      case '/hakkimizda':
        return {
          title: 'Purivita Turkey Hakkında - Türkiye\'nin Lider Temizlik Ürünleri Markası',
          description: 'Purivita Turkey - 5+ yıllık tecrübe, 250.000+ mutlu müşteri. Türkiye\'nin önde gelen temizlik ürünleri markası. Çevre dostu, etkili çözümler.',
          keywords: 'purivita hakkında, purivita turkey, temizlik ürünleri turkey, purivita türkiye',
          url: 'https://purivita.com.tr/hakkimizda'
        };
      case '/iletisim':
        return {
          title: 'Purivita Turkey İletişim - Bize Ulaşın | Bandırma, Balıkesir',
          description: 'Purivita Turkey iletişim bilgileri. Bandırma, Balıkesir merkezli temizlik ürünleri şirketi. Tel: +90 554 181 41 06. Email: info@lumoragroups.com',
          keywords: 'purivita iletişim, purivita turkey iletişim, purivita bandırma, purivita balıkesir',
          url: 'https://purivita.com.tr/iletisim'
        };
      case '/bayi':
        return {
          title: 'Purivita Turkey Bayilik - Temizlik Ürünleri Bayisi Olun | Yüksek Kazanç',
          description: 'Purivita Turkey bayisi olun! Türkiye\'nin lider temizlik ürünleri markasıyla iş ortağı olun. Yüksek kar marjı, eğitim desteği, güçlü marka.',
          keywords: 'purivita bayilik, purivita turkey bayi, temizlik ürünleri bayilik, purivita türkiye bayilik başvuru',
          url: 'https://purivita.com.tr/bayi'
        };
      case '/gizlilik':
        return {
          title: 'Purivita Turkey Gizlilik Politikası - Kişisel Verilerin Korunması',
          description: 'Purivita Turkey gizlilik ve güvenlik politikası. Kişisel verilerinizin korunması ve güvenliği hakkında bilgiler.',
          keywords: 'purivita gizlilik, purivita kvkk, purivita güvenlik',
          url: 'https://purivita.com.tr/gizlilik'
        };
      default:
        return {
          title: 'Purivita Turkey - Premium Temizlik Ürünleri',
          description: 'Purivita Turkey - Premium kalitede temizlik ürünleri',
          keywords: 'purivita, purivita turkey',
          url: 'https://purivita.com.tr'
        };
    }
  };

  const seo = getSEO();

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url={seo.url}
      />
      <StructuredData />
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Navigation />
        <main className="relative flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/bayi" element={<Dealer />} />
            <Route path="/gizlilik" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
