import { motion } from 'motion/react';
import { TrendingUp, Users, Package, Award, CheckCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Yüksek Kar Marjı',
    description: 'Rekabetçi fiyatlar ve yüksek kar marjı ile kazançlı bir iş modeli',
  },
  {
    icon: Package,
    title: 'Geniş Ürün Yelpazesi',
    description: '50\'den fazla ürün çeşidi ile müşterilerinize çözüm sunun',
  },
  {
    icon: Users,
    title: 'Eğitim ve Destek',
    description: 'Satış eğitimleri ve 7/24 teknik destek ile yanınızdayız',
  },
  {
    icon: Award,
    title: 'Güçlü Marka',
    description: 'Tanınmış ve güvenilir bir marka ile çalışmanın avantajı',
  },
];

const steps = [
  { title: 'Başvuru Formu', description: 'Online formu doldurun' },
  { title: 'Değerlendirme', description: 'Başvurunuz incelenir' },
  { title: 'Görüşme', description: 'Detaylı bilgilendirme' },
  { title: 'Anlaşma', description: 'Sözleşme imzalanır' },
  { title: 'Eğitim', description: 'Satış eğitimi alırsınız' },
  { title: 'Başlangıç', description: 'Bayilik başlar' },
];

export default function Dealer() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    experience: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS'i başlat
  useEffect(() => {
    emailjs.init('gRVKbHSLTR4VkAkQX');
  }, []);


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#639922] to-[#7ab82d] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Purivita Ailesi'ne Katılın
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              Türkiye'nin önde gelen temizlik ürünleri markası ile iş ortağı olun,
              karlı bir iş modeliyle kazanmaya başlayın
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Avantajlı İş Birliği</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Yüksek Kazanç</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Sürekli Destek</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Bayi Olmanın Avantajları
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Purivita bayisi olarak kazanacağınız avantajlar
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#639922]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#639922]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Bayi Olma Süreci
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              6 basit adımda Purivita bayisi olun
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#639922] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#639922]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#639922]/5 to-[#7ab82d]/5 p-6 sm:p-8 rounded-2xl border-2 border-[#639922]/20 mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Bayimiz Olma Şartları
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Başvuruda bulunmak için ticari faaliyet gösteren bir işletmeye sahip olmanız gerekmektedir. Gerekli belge ve evrakları başvuru sırasında sunmanız beklenmektedir.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-3 sm:mt-4">
              Satış ve müşteri desteği süreçlerimizde temel eğitimleri tamamlayan iş ortaklarımız ile uzun soluklu iş birlikleri hedefliyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Başvuru Formu
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Formu doldurun, sizinle en kısa sürede iletişime geçelim
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              try {
                // EmailJS ile mail gönderimi
                const result = await emailjs.send(
                  'service_z8fqsgs',        // EmailJS Service ID
                  'template_zn61kym',       // EmailJS Template ID (Bayilik formu için)
                  {
                    company_name: formData.companyName,
                    contact_name: formData.contactName,
                    from_email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    address: formData.address,
                    experience: formData.experience,
                    message: formData.message,
                  }
                );

                console.log('EmailJS Sonuç:', result);
                alert('✅ Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                setFormData({
                  companyName: '',
                  contactName: '',
                  email: '',
                  phone: '',
                  city: '',
                  address: '',
                  experience: '',
                  message: '',
                });
              } catch (error) {
                console.error('Email gönderim hatası:', error);
                alert('❌ Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan mail gönderin: info@lumoragroups.com');
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="bg-gray-50 p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Firma Adı *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                  placeholder="Firma adınız"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yetkili Adı Soyadı *
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                  placeholder="+90 XXX XXX XX XX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şehir *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                  placeholder="Şehir"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sektör Tecrübesi
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                >
                  <option value="">Seçiniz</option>
                  <option value="0-1">0-1 yıl</option>
                  <option value="1-3">1-3 yıl</option>
                  <option value="3-5">3-5 yıl</option>
                  <option value="5+">5+ yıl</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adres *
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                placeholder="Tam adresiniz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ek Bilgiler
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition resize-none"
                placeholder="Bize iletmek istediğiniz ek bilgiler..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-8 py-4 bg-[#639922] text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#7ab82d] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  Başvuru Gönder
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="text-sm text-gray-500 text-center">
              * ile işaretli alanlar zorunludur
            </p>
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#639922] to-[#7ab82d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Sorularınız mı Var?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Bayilik hakkında detaylı bilgi almak için bizimle iletişime geçin
            </p>
            <a href="mailto:info@lumoragroups.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#639922] rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                info@lumoragroups.com
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
