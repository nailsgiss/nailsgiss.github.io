import { motion } from 'framer-motion';
import { Instagram, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/constants';
import ScrollReveal from '../animations/ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-pink-200 dark:border-pink-900/50 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Contacto
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl brand-text mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Conectemos
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Seguime en Instagram para ver todos mis trabajos y mantenerte al día con las novedades
            </p>
          </div>
        </ScrollReveal>

        {/* Instagram CTA Card */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative z-10 p-12 md:p-16 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              >
                <Instagram className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl brand-text mb-4">
                Seguime en Instagram
              </h3>
              <p className="text-xl mb-10 opacity-95 max-w-xl mx-auto">
                Todos mis trabajos y servicios están en los destacados. ¡No te pierdas las novedades y promociones!
              </p>

              <motion.a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Instagram className="w-6 h-6" />
                Seguir {BUSINESS_INFO.instagramHandle}
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
