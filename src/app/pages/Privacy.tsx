import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#639922] to-[#7ab82d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gizlilik ve Güvenlik Politikası
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-8">
              Lumora İnşaat İç ve Dış Ticaret ("Lumora" veya "Şirket") olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumak ve şeffaf bir deneyim sunmak önceliğimizdir. Bu metin, sitemizi ziyaretiniz sırasında hangi verilerin işlendiği ve güvenliğinizin nasıl sağlandığı hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Veri Sorumlusu Bilgileri
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sorumlusu:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Ünvan:</strong> Lumora İnşaat İç ve Dış Ticaret</li>
                  <li><strong>Adres:</strong> EDİNCİK MAH. KÜÇÜKKORU CAD. NO:82 BANDIRMA - BALIKESİR / TÜRKİYE</li>
                  <li><strong>E-posta:</strong> info@lumoragroups.com</li>
                  <li><strong>Telefon:</strong> +90 554 181 41 06 | +90 541 338 10 10 | +39 344 451 03 66</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Toplanan Veriler ve İşleme Amaçları
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitemizde herhangi bir üyelik veya veri giriş formu bulunmamaktadır. Bu nedenle doğrudan kimlik bilgileriniz (isim, soyisim vb.) sitemiz üzerinden toplanmaz. Ancak, sitenin işleyişi gereği şu veriler işlenebilir:
                </p>
                <div className="ml-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Teknik Bilgiler:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sitemizi ziyaret ettiğinizde; IP adresiniz, erişim sağladığınız cihaz türü, tarayıcı bilgileriniz ve site içindeki gezinme istatistikleriniz (çerezler aracılığıyla) anonim olarak kaydedilebilir. Bu bilgiler, sitenin performansını artırmak ve güvenliğini sağlamak amacıyla kullanılır.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">İletişim Talepleri:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sitemizde yer alan telefon numaraları veya e-posta adresleri üzerinden bizimle iletişime geçmeniz durumunda, paylaştığınız bilgiler sadece talebinize yanıt vermek amacıyla kullanılır.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Çerez (Cookie) Kullanımı
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sitemizde kullanıcı deneyimini iyileştirmek için temel çerezler kullanılmaktadır. Çerezler, web tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri reddetme veya silme hakkına sahipsiniz; ancak bu durum sitenin bazı özelliklerinin tam çalışmasını engelleyebilir.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Veri Güvenliği
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lumora, ziyaretçilerine ait teknik verilerin güvenliğini sağlamak amacıyla endüstri standartlarında teknik önlemler almaktadır:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Sitemiz SSL (Secure Sockets Layer) sertifikası ile korunmaktadır. Bu sayede cihazınız ile sunucularımız arasındaki veri akışı şifrelenmiş olarak gerçekleşir.
                  </li>
                  <li>
                    Sitemiz üzerinden herhangi bir ödeme işlemi alınmadığı veya form doldurulmadığı için kritik kişisel verileriniz (kredi kartı, adres vb.) risk altında değildir.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Verilerin Paylaşımı
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Toplanan teknik veya iletişim verileri, yasal bir zorunluluk (adli makamlarca talep edilmesi vb.) dışında üçüncü şahıslarla paylaşılmaz, satılmaz veya ticari amaçla devredilmez.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Haklarınız
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  KVKK'nın 11. maddesi kapsamında, bize yukarıdaki iletişim kanallarından ulaşarak; verilerinizin işlenip işlenmediğini öğrenme, yanlış verilerin düzeltilmesini isteme veya verilerinizin silinmesini talep etme hakkına sahipsiniz.
                </p>
              </div>

              {/* Last Update */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  <strong>Son Güncelleme:</strong> Nisan 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
