import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// Ürün görselleri
import product1 from '../../imports/61F2JcXoMiL._AC_SX679_-removebg-preview.png';
import product2 from '../../imports/robott_rk_e-removebg-preview.png';
import product3 from '../../imports/Gemini_Generated_Image_ux7nx0ux7nx0ux7n-removebg-preview.png';
import product4 from '../../imports/Gemini_Generated_Image_yqlyg6yqlyg6yqly-removebg-preview.png';
import product5 from '../../imports/Gemini_Generated_Image_fn2i80fn2i80fn2i-removebg-preview.png';
import product6 from '../../imports/Gemini_Generated_Image_iituqziituqziitu-removebg-preview.png';

// Animasyon stilleri
type AnimationStyle = 'rotate3d' | 'slide' | 'zoom' | 'flip' | 'carousel';

const products = [
  {
    id: 1,
    image: product4,
    name: 'Kahve Makinesi Kireç Çözücü Konsantresi',
    description: 'Renk göstergeli sıvı kireç çözücü veya pratik kireç çözücü tabletler sunuyoruz. Pratik bir avantajı da, bunları diğer tüm sıcak su cihazları için de kullanabilmenizdir.',
    color: '#639922',
    link: 'https://www.amazon.com.tr/PURIVITA-%C3%9Cniversal-makinesi-standart-markalar/dp/B07ZTMKVFL'
  },
  {
    id: 2,
    image: product2,
    name: 'Akıllı Robot Süpürge Temizlik Konsantresi',
    description: 'Robot süpürgeler için özel olarak geliştirilmiş, cihazınızın hassas su püskürtme sistemine zarar vermeden derinlemesine temizlik sağlar. Sıradan deterjanların aksine tortu bırakmaz ve tıkanmaları önler.',
    color: '#639922',
    link: 'https://purivita.de/product2'
  },
  {
    id: 3,
    image: product5,
    name: 'Islak/Kuru Temizlik Süpürgeleri için Temizlik Konsantresi',
    description: 'Bu konsantre, ultrasonik temizleyicilerde kullanıma uygundur. Birçok amaç için kullanılabilir. Ultrasonik temizleme sıvımız, mineral kalıntılarını, organik yağları, tortuları, yağlama filmlerini, yağları, pası, mumları, pigmentleri ve parlatma kalıntılarını güvenilir bir şekilde temizler. (Ferah Kokulu)',
    color: '#639922',
    link: 'https://purivita.de/product3'
  },
  {
    id: 4,
    image: product6,
    name: 'Islak/Kuru Temizlik Süpürgeleri için Temizlik Konsantresi',
    description: 'Bu konsantre, ultrasonik temizleyicilerde kullanıma uygundur. Birçok amaç için kullanılabilir. Ultrasonik temizleme sıvımız, mineral kalıntılarını, organik yağları, tortuları, yağlama filmlerini, yağları, pası, mumları, pigmentleri ve parlatma kalıntılarını güvenilir bir şekilde temizler. (Manolya Kokulu)',
    color: '#639922',
    link: 'https://purivita.de/product4'
  },
  {
    id: 5,
    image: product3,
    name: 'Süt Sistemi Temizleyici Konsantresi',
    description: 'Süt temizleme sistemimiz, süt yağları, laktoz ve süt proteinleri gibi süt kalıntılarını da giderir. Bu etkili süt temizleyici, kapsamlı ancak malzemelere karşı naziktir.',
    color: '#639922',
    link: 'https://purivita.de/product5'
  },
  {
    id: 6,
    image: product1,
    name: 'Döşeme Temizleme Konsantresi',
    description: 'Kanepe, halı ve araç koltuklarındaki derin lekeleri kumaş liflerine zarar vermeden temizler. Sert kimyasallar içermeyen yapısıyla hem manuel kullanıma hem de temizlik makinelerine uygun, güvenli bir çözüm sunar. Temizlenen yüzeylerde kötü kokuları yok ederken, oluşturduğu koruyucu tabaka sayesinde yeni kirlerin birikmesini de geciktirir.',
    color: '#639922',
    link: 'https://purivita.de/product6'
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const animationStyle = 'carousel'; // Sabit carousel animasyonu

  // Otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextProduct = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  // Farklı animasyon varyantları
  const animationVariants = {
    rotate3d: {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction > 0 ? 90 : -90,
        scale: 0.5,
      }),
      center: {
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
      },
      exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction < 0 ? 90 : -90,
        scale: 0.5,
      }),
    },
    slide: {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }),
    },
    zoom: {
      enter: () => ({
        scale: 0,
        opacity: 0,
        rotate: 180,
      }),
      center: {
        scale: 1,
        opacity: 1,
        rotate: 0,
      },
      exit: () => ({
        scale: 0,
        opacity: 0,
        rotate: -180,
      }),
    },
    flip: {
      enter: (direction: number) => ({
        rotateX: direction > 0 ? 90 : -90,
        opacity: 0,
        y: 100,
      }),
      center: {
        rotateX: 0,
        opacity: 1,
        y: 0,
      },
      exit: (direction: number) => ({
        rotateX: direction < 0 ? 90 : -90,
        opacity: 0,
        y: -100,
      }),
    },
    carousel: {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        rotateY: direction > 0 ? 45 : -45,
        opacity: 0,
        z: -500,
      }),
      center: {
        x: 0,
        rotateY: 0,
        opacity: 1,
        z: 0,
      },
      exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        rotateY: direction < 0 ? 45 : -45,
        opacity: 0,
        z: -500,
      }),
    },
  };

  const variants = animationVariants[animationStyle];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#639922] to-[#7ab82d] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Ürünlerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90"
          >
            Premium kalitede ultrasonik temizlik çözümleri
          </motion.p>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="relative overflow-hidden bg-black min-h-screen">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(circle at 50% 50%, ${currentProduct.color}33, #0a0a0a)`,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-0">
          <div className="w-full max-w-7xl grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">

            {/* Sol Taraf - Ürün Bilgileri */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="z-10 flex flex-col justify-center space-y-6 md:pr-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {currentProduct.name}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
                >
                  {currentProduct.description}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 overflow-hidden shadow-2xl w-full sm:w-fit cursor-default"
                >
                  <span className="relative z-10">Satın Al</span>
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Sağ Taraf - Ürün Görseli */}
            <div className="relative flex items-center justify-center order-first md:order-last" style={{ perspective: '2000px' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentProduct.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    rotateY: { duration: 0.6 },
                    rotateX: { duration: 0.6 },
                    scale: { duration: 0.4 },
                    rotate: { duration: 0.6 },
                  }}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                >
                  <motion.img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-auto drop-shadow-2xl"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex items-center justify-center gap-3 sm:gap-4 z-10 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProduct}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto max-w-[200px] sm:max-w-none">
            {products.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-6 sm:w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProduct}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
