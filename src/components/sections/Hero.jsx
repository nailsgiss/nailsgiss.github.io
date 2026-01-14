import { motion } from 'framer-motion';
import { Sparkles, Calendar, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/constants';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-neutral-950 dark:via-purple-950/20 dark:to-neutral-950" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-96 h-96 bg-linear-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-96 h-96 bg-linear-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-96 h-96 bg-linear-to-br from-blue-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full py-20 md:py-0">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] md:min-h-0 space-y-6 md:space-y-10">
          {/* Logo with glow effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse">
                <img src="/images/logo_giss.png" alt="" className="w-48 h-48 md:w-64 md:h-64" />
              </div>
              <img
                src="/images/logo_giss.png"
                alt="Nails Giss Logo"
                className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-pink-200 dark:border-pink-900/50">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Especialista en Belleza
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl brand-text">
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {BUSINESS_INFO.name}
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Manicura • Pedicura • Extensiones Soft Gel
            <br />
            Lifting de Pestañas • Perfilado de Cejas
          </motion.p>
        </div>

        {/* Scroll indicator - solo desktop */}
        <motion.div
          className="hidden absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-pink-500 dark:border-pink-400 rounded-full flex justify-center opacity-60">
            <motion.div
              className="w-1.5 h-3 bg-pink-500 dark:bg-pink-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
