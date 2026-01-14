import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-black border-t border-neutral-200 dark:border-neutral-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <img
                src="/images/logo_giss.png"
                alt="Nails Giss"
                className="h-16"
              />
              <span className="text-xl brand-text text-neutral-900 dark:text-white">
                NAILS GISS
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {BUSINESS_INFO.location}
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
              Seguime en Redes
            </h4>
            <div className="flex gap-4 justify-center">
              <motion.a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}</span>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              <span>en Neuquén, Argentina 🇦🇷</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
