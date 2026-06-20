import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../imports/cropped-purivita_logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Ürünler', path: '/urunler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];


  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="Purivita" className="h-12 sm:h-14 md:h-16 w-auto brightness-0 invert" />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Temizlik sektöründe lider marka. Premium kalite ürünlerle hayatınızı kolaylaştırıyoruz.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://www.linkedin.com/company/lumora-construction-foreign-trade-ltd/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#639922] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#639922] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#639922]">Hızlı Erişim</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#639922] transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#639922]">İletişim</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0 text-[#639922]" />
                <span>Edincik Mah. Küçükkoru Cad. No:82<br />Bandırma - Balıkesir | Turkey</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0 text-[#639922]" />
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <a href="tel:+905541814106" className="hover:text-[#639922] transition-colors">
                    +90 554 181 41 06
                  </a>
                  <a href="tel:+905413381010" className="hover:text-[#639922] transition-colors">
                    +90 541 338 10 10
                  </a>
                  <a href="tel:+393444510366" className="hover:text-[#639922] transition-colors">
                    +39 344 451 03 66
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#639922]" />
                <a
                  href="mailto:info@lumoragroups.com"
                  className="hover:text-[#639922] transition-colors break-all"
                >
                  info@lumoragroups.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Purivita. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/gizlilik" className="text-gray-400 hover:text-[#639922] transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim" className="text-gray-400 hover:text-[#639922] transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
