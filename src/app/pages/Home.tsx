import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { Sparkles, Shield, Leaf, Users, ArrowRight, CheckCircle, Award, TrendingUp, Heart, Zap } from 'lucide-react';
import image1 from '../../imports/Purivita-Kaffee-trinken-geniessen.jpg';
import image2 from '../../imports/Roboter1-1024x685.jpg';

const features = [
  {
    icon: Shield,
    title: 'Cihazınızın Ömrünü Uzatan Formül',
    description: 'Özel formülümüz sayesinde cihazlarınız daha uzun ömürlü ve verimli çalışır',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Sparkles,
    title: 'Benzersiz Formül',
    description: 'Patentli formülümüzle rakipsiz temizlik performansı sunuyoruz',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    icon: Leaf,
    title: 'Etkili Temizlik',
    description: 'Profesyonel sonuçlar, her kullanımda parlak temizlik',
    color: 'from-purple-400 to-pink-600',
  },
];

const benefits = [
  { icon: Award, text: 'Uluslararası Kalite Sertifikaları' },
  { icon: TrendingUp, text: 'Sürekli Araştırma ve Geliştirme' },
  { icon: Heart, text: '%100 Müşteri Memnuniyeti' },
  { icon: Zap, text: 'Hızlı ve Güvenilir Teslimat' },
];

export default function Home() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#639922] via-[#7ab82d] to-[#8bc34a]" />

        {/* Optimized Floating Gradient Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${250 + i * 50}px`,
              height: `${250 + i * 50}px`,
              background: i % 3 === 0
                ? 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(139,195,74,0.25) 0%, transparent 60%)'
                : 'radial-gradient(circle, rgba(122,184,45,0.25) 0%, transparent 60%)',
              left: `${(i * 8) % 100}%`,
              top: `${(i * 10) % 100}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              x: [0, i % 2 === 0 ? 150 : -150, 0],
              y: [0, i % 2 === 0 ? -100 : 100, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
            >
              Temizlikte{' '}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Yeni Nesil
              </span>
              <br />
              Çözümler
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Premium kalitede temizlik ürünleriyle hayatınızı kolaylaştırıyoruz.
              Doğal, etkili ve güvenli çözümler.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            >
              <Link to="/urunler" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#639922] rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">Ürünleri Keşfet</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-50"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <a href="https://purivita.de" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#639922] transition-all"
                >
                  Purivita.de
                </motion.button>
              </a>
            </motion.div>

            {/* Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                >
                  <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ opacity: scrollIndicatorOpacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image 1 - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
              }}
              className="relative group"
              style={{ perspective: '1500px' }}
            >
              <motion.div
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#639922]/10 to-[#7ab82d]/10 shadow-2xl"
              >
                <motion.img
                  src={image1}
                  alt="Mükemmel bir kahve deneyimi"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              {/* Enhanced Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#639922]/30 to-[#7ab82d]/30 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Text 1 - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: 'spring',
                stiffness: 80,
              }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Mükemmel bir kahve deneyimi için her şey
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Kahvenizin tadını sürekli olarak çıkarabilmeniz için makinenin düzenli olarak temizlenmesi gerekir. Bunun için ihtiyacınız olan her şeyi biz sunuyoruz.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text 2 - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: 'spring',
                stiffness: 80,
              }}
              className="order-2 md:order-1"
            >
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Temizlikte akıllı çözümü seçin!
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Robot süpürgenizin paspas performansını ikiye katlayan aynı zamanda cihazınızın ömrünü uzatan bu özel sıvı, en zorlu lekeleri bile zahmetsizce çözer.
              </motion.p>
            </motion.div>

            {/* Image 2 - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
              }}
              className="relative group order-1 md:order-2"
              style={{ perspective: '1500px' }}
            >
              <motion.div
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#639922]/10 to-[#7ab82d]/10 shadow-2xl"
              >
                <motion.img
                  src={image2}
                  alt="Temizlikte akıllı çözüm - Robot süpürge"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              {/* Enhanced Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#639922]/30 to-[#7ab82d]/30 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Alman Kalitesi Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #639922 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-block px-4 py-2 bg-[#639922]/10 text-[#639922] rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
            >
              Almanya'dan Türkiye'ye
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Özel Alman Kalitesi{' '}
              <span className="text-[#639922]">Artık Türkiye'de</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Almanya'nın köklü mühendislik geleneği ve titiz kalite standartlarıyla üretilen Purivita ürünleri, artık Türk tüketicisiyle buluşuyor. Onlarca yıllık Alman ar-ge birikimini evinize taşıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { title: 'Alman Mühendisliği', desc: 'Onlarca yıllık ar-ge ve üretim deneyimi' },
                { title: 'Sertifikalı Formüller', desc: 'Uluslararası kalite standartlarına uygun' },
                { title: 'Türkiye\'de Yerel Destek', desc: 'Hızlı teslimat ve satış sonrası hizmet' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 bg-[#639922]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5 text-[#639922]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Advanced Animations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#639922]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-[#639922]/10 text-[#639922] rounded-full text-sm font-semibold mb-4"
            >
              ÖZELLİKLERİMİZ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden <span className="text-[#639922]">Purivita?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Temizlik sektöründe lider markayız. İşte bizi tercih etmeniz için sebepler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                {/* Glowing Background */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Effect */}
      <section className="py-32 bg-gradient-to-br from-[#639922] via-[#7ab82d] to-[#639922] relative overflow-hidden">
        {/* Animated Background Shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">100+ Mutlu İş Ortağı</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
            >
              Bizimle İş Ortağı Olun
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Purivita ailesine katılın, kazançlı bir iş modeli ile tanışın.
              Türkiye'nin en hızlı büyüyen temizlik markasının bir parçası olun.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link to="/bayi" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#639922] rounded-full font-bold text-base sm:text-lg shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Bayilik Başvurusu
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-50"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>

              <Link to="/iletisim" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#639922] transition-all"
                >
                  Daha Fazla Bilgi
                </motion.button>
              </Link>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
            >
              {['Yüksek Kar Marjı', 'Eğitim Desteği', 'Pazarlama Desteği', 'Güçlü Marka'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-white"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
