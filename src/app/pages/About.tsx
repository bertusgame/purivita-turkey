import { motion } from 'motion/react';
import { Target, Award, Users, TrendingUp, Leaf, Heart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Cihazınızın Ömrünü Uzatan Formül',
    description: 'Özel olarak geliştirilmiş formüllerimiz sayesinde cihazlarınız daha uzun ömürlü ve verimli çalışır, bakım maliyetlerinizi azaltır.',
  },
  {
    icon: Award,
    title: 'Kalite Odaklı',
    description: 'Avrupa standartlarında test edilmiş ürünler sunuyoruz.',
  },
  {
    icon: Users,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin güveni ve sürekliliği, kalitemizin en büyük göstergesidir. Tercih eden kişilerin devamlılığı ile büyüyoruz.',
  },
  {
    icon: TrendingUp,
    title: 'İnovasyon',
    description: 'Sürekli araştırma ve geliştirme ile sektöre yön veriyoruz.',
  },
];

export default function About() {
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
              Hakkımızda
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Uzun süredir temizlik sektöründe yenilikçi çözümler sunan Purivita artık Türkiye'de.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Hikayemiz
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Purivita, yüksek performanslı formülleri, sürdürülebilir üretim yaklaşımı ve Avrupa standartlarındaki kalite anlayışıyla temizlik sektöründe fark yaratan bir markadır. Biz de bu güçlü markanın Türkiye'deki temsilcisi olarak, tüketicilere yalnızca temizlik ürünleri değil; güven, kalite ve modern yaşam standartları sunmayı hedefliyoruz.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Uluslararası iş ortaklıklarımızdan aldığımız güç, kaliteye olan bağlılığımız ve müşteri odaklı hizmet anlayışımızla Purivita'yı Türkiye pazarında güçlü ve kalıcı bir konuma taşımak için çalışıyoruz. Amacımız, Alman mühendisliği ve kalite kültürüyle geliştirilen yenilikçi çözümleri Türkiye'nin dört bir yanına ulaştırarak temizlik deneyimini yeni bir seviyeye taşımaktır.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Kaliteye değer veren herkes için, güvenilir, etkili ve sürdürülebilir çözümler sunmaya devam ediyor; Purivita'nın global vizyonunu Türkiye'de başarıyla temsil etmekten gurur duyuyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#639922] to-[#7ab82d] rounded-2xl p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center h-full">
                <div className="space-y-6">
                  {[
                    { icon: '🇩🇪', title: 'Alman Mühendisliği', desc: 'Onlarca yıllık ar-ge ve üretim deneyimi' },
                    { icon: '✅', title: 'Avrupa Standartları', desc: 'Uluslararası kalite sertifikaları' },
                    { icon: '🇹🇷', title: "Türkiye'de Yerel Destek", desc: 'Hızlı teslimat ve satış sonrası hizmet' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="font-bold text-lg mb-1">{item.title}</div>
                        <div className="text-white/80 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Değerlerimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Bizi biz yapan, ilkelerimiz ve değerlerimizdir
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#639922]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#639922]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#639922] to-[#7ab82d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Misyonumuz ve Değerlerimiz</h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 sm:mb-4">
                Modern temizlik teknolojilerine olan tutkumuzla kurulan markamız, yaşam alanlarınızdaki hijyen standartlarını sadece yüzeysel bir temizliğin ötesine taşıyarak profesyonel ve yenilikçi çözümlerle yeniden tanımlamaktadır. Temizliği bir rutin olmaktan çıkarıp modern teknolojinin sunduğu pratiklik ve verimlilikle harmanlayan vizyonumuzla, en hassas yüzeylerden en yoğun kullanılan alanlara kadar maksimum koruma ve zahmetsiz temizlik vaat ediyoruz.
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 sm:mb-4">
                Uluslararası kalite standartlarını temel alan operasyonel yapımız ve sürdürülebilirlik odaklı üretim anlayışımızla, hem değerli eşyalarınızın ömrünü uzatıyor hem de gelecek nesillere daha temiz bir dünya bırakmayı hedefliyoruz. Geleneksel ticaretin güvenilirliğini, dijital dünyanın dinamizmi ve müşteri odaklı bir Ar-Ge süreciyle birleştirerek, temizlik sektöründe sadece bir ürün sağlayıcısı değil, hayatınızı kolaylaştıran güvenilir bir çözüm ortağı olma yolunda emin adımlarla ilerliyoruz.
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Şirketimiz dürüstlük, şeffaflık ve ekip çalışmasına önem verir. Ortak akıl ile müşterilerimizin ihtiyaçlarına en iyi şekilde cevap vermek için tutkuyla çalışıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Neden Buradayız</h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 sm:mb-4">
                Günümüzün hızla değişen dünyasında evlerimiz ve çalışma alanlarımız artık sadece birer mekan değil; aynı zamanda ofisimiz, oyun alanımız ve huzur köşemiz haline gelmişken, bu çok işlevli alanların temizliği de aynı derecede akıllı, etkili ve teknoloji odaklı olmalıdır. Türkiye pazarında temizlik kültürünü modernleştirmeyi hedefleyen firmamız, en değerli teknolojik cihazlarınızdan en hassas yüzeylerinize kadar her alanda maksimum performans ve minimum efor prensibiyle çalışan ürünler sunarak, sektöre yön veren yenilikleri ve en kaliteli kimyasal çözümleri erişilebilir kılmaya kararlıdır.
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 sm:mb-4">
                Temizliğin sadece görünür bir hijyenden ibaret olmadığı, aynı zamanda eşyalarınızın ömrünü uzatan bir bakım süreci olduğu bilinciyle; geleneksel yöntemleri modern teknolojinin sunduğu pratiklikle birleştiriyor ve yaşam kalitenizi artırmak için her gün daha iyisini tasarlıyoruz.
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Başarılarımızın temelinde, ekip ruhuna ve karşılıklı güvene dayalı bir çalışma ortamı yer alıyor. Birlikte büyüyor, her gün daha iyiye ulaşmayı hedefliyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
