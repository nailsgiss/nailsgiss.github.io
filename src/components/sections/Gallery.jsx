import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Instagram, ExternalLink, Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/constants';
import ScrollReveal from '../animations/ScrollReveal';

// Imágenes reales de Nails Giss
const GALLERY_IMAGES = [
  {
    url: '/images/gallery/1.jpeg',
    alt: 'Trabajo de uñas 1'
  },
  {
    url: '/images/gallery/2.jpeg',
    alt: 'Trabajo de uñas 2'
  },
  {
    url: '/images/gallery/3.jpeg',
    alt: 'Trabajo de uñas 3'
  },
  {
    url: '/images/gallery/4.jpeg',
    alt: 'Trabajo de uñas 4'
  },
  {
    url: '/images/gallery/5.jpeg',
    alt: 'Trabajo de uñas 5'
  },
  {
    url: '/images/gallery/6.jpeg',
    alt: 'Trabajo de uñas 6'
  },
  {
    url: '/images/gallery/7.jpeg',
    alt: 'Trabajo de uñas 7'
  },
  {
    url: '/images/gallery/8.jpeg',
    alt: 'Trabajo de uñas 8'
  },
    {
    url: '/images/gallery/9.jpeg',
    alt: 'Trabajo de uñas 9'
  },
];

const ImageCard = ({ image, index, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer"
    >
      {/* Skeleton loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/20 dark:to-purple-900/20 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={image.url}
        alt={image.alt}
        onLoad={() => setImageLoaded(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold text-sm">{image.alt}</p>
      </div>

      {/* Top right icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <ExternalLink className="w-5 h-5 text-pink-500" />
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
  const displayImages = GALLERY_IMAGES;

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-pink-200 dark:border-pink-900/50 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Nuestros Trabajos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl brand-text mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Galería de Diseños
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Cada diseño cuenta una historia única. Inspirate con nuestros trabajos recientes
            </p>

            <motion.a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Instagram className="w-5 h-5" />
              Seguir {BUSINESS_INFO.instagramHandle}
            </motion.a>
          </div>
        </ScrollReveal>


        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {displayImages.slice(0, visibleCount).map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-0 cursor-pointer"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {visibleCount < displayImages.length && (
          <ScrollReveal>
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setVisibleCount(prev => Math.min(prev + 6, displayImages.length))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Ver Más Diseños
              </motion.button>
            </div>
          </ScrollReveal>
        )}

        {/* Call to action */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-xl border border-neutral-200 dark:border-neutral-800">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl brand-text mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Encontrá Más Inspiración
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
                Todos nuestros servicios y trabajos están en los destacados de Instagram. ¡Seguinos para ver contenido exclusivo!
              </p>
              <motion.a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Instagram className="w-6 h-6" />
                Ver Instagram
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Gallery;
