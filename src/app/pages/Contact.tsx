import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS'i başlat
  useEffect(() => {
    emailjs.init('gRVKbHSLTR4VkAkQX');
  }, []);


  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 554 181 41 06 / +90 541 338 10 10 / +39 344 451 03 66',
      link: 'tel:+905541814106',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@lumoragroups.com',
      link: 'mailto:info@lumoragroups.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Edincik Mah. Küçükkoru Cad. No:82 Bandırma - Balıkesir | Turkey',
      link: null,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#639922] to-[#7ab82d] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              İletişim
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Bize Ulaşın
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Formu doldurarak bize mesaj gönderebilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);

                  try {
                    // EmailJS ile mail gönderimi
                    const result = await emailjs.send(
                      'service_z8fqsgs',        // EmailJS Service ID
                      'template_6vqad8w',       // EmailJS Template ID
                      {
                        from_name: formData.name,
                        from_email: formData.email,
                        phone: formData.phone,
                        subject: formData.subject,
                        message: formData.message,
                      }
                    );

                    console.log('EmailJS Sonuç:', result);
                    alert('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                    });
                  } catch (error) {
                    console.error('Email gönderim hatası:', error);
                    alert('❌ Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan mail gönderin: info@lumoragroups.com');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-6"
              >

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
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
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                      placeholder="+90 XXX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639922] focus:border-transparent outline-none transition resize-none"
                    placeholder="Mesajınızı buraya yazın..."
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
                      Mesaj Gönder
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#639922]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#639922]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-xs sm:text-sm text-gray-600 hover:text-[#639922] transition-colors break-words"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google Map */}
              <div className="mt-6 sm:mt-8 rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.8!2d27.977!3d40.353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzEwLjgiTiAyN8KwNTgnMzcuMiJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Purivita Konum"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              En çok merak edilen sorular ve cevapları
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Ürünleriniz çevre dostu mu?',
                a: 'Evet, tüm ürünlerimiz çevre dostudur.',
              },
              {
                q: 'Ürünler cihazları temizlerken aynı zamanda temizlik için de kullanılabilir mi?',
                a: 'Evet, ürünlerimiz hem cihazlarınızı temizlerken aynı zamanda benzersiz formülleri ile temizlik için de kullanabilirsiniz.',
              },
              {
                q: 'Ürün iadesi yapabiliyor muyum?',
                a: 'Evet, 14 gün içerisinde koşulsuz iade hakkınız bulunmaktadır.',
              },
              {
                q: 'Ürünlerinizin garantisi var mı?',
                a: 'Evet, tüm ürünlerimiz kalite garantisi altındadır. Herhangi bir sorun durumunda bizimle iletişime geçebilirsiniz.',
              },
              {
                q: 'Toptan satış yapıyor musunuz?',
                a: 'Evet, bayi olmak için bayilik sayfamızdan başvurabilirsiniz.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
