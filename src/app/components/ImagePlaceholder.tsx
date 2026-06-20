import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  placeholder?: string;
  className?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  placeholder = "Görsel",
  className = ""
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-[#639922]/10 to-[#7ab82d]/10 ${className}`}>
        <div className="text-center">
          <div className="text-6xl mb-4">📸</div>
          <p className="text-sm text-gray-500">{placeholder}</p>
          <p className="text-xs text-gray-400">600x600px</p>
        </div>
      </div>
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      onError={() => setImageError(true)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
