import { motion } from 'framer-motion';
import { Calendar, MessageCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import ScrollReveal from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/Card';

const StepCard = ({ icon: Icon, title, description, index, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -10 }}
      className="relative"
    >
      <Card className="h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

        <CardContent className="p-8 text-center relative">
          {/* Step number badge */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold">
            {number}
          </div>

          {/* Animated icon */}
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-500 group-hover:to-purple-500 transition-all">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>

      {/* Arrow connector (hidden on mobile and last item) */}
      {index < 2 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 z-20">
          <ArrowRight className="w-6 h-6 text-pink-500" />
        </div>
      )}
    </motion.div>
  );
};

const Booking = () => {
  const handleReservar = () => {
    openWhatsApp('¡Hola Gise! Me gustaría reservar un turno.');
  };

  const steps = [
    {
      icon: Calendar,
      title: 'Elegí tu servicio',
      description: 'Mirá los servicios disponibles y elegí el que más te guste',
    },
    {
      icon: MessageCircle,
      title: 'Contactanos por WhatsApp',
      description: 'Envianos un mensaje y coordinamos día y horario',
    },
    {
      icon: CheckCircle,
      title: 'Confirmá tu turno',
      description: 'Recibís la confirmación y listo, nos vemos!',
    },
  ];

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-pink-200 dark:border-pink-900/50 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Reservá tu Turno
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl brand-text mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Coordiná tu Cita
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Reservar es fácil y rápido. Seguí estos 3 simples pasos
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-20 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              number={index + 1}
            />
          ))}
        </div>

        {/* Main CTA Card */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Floating shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl brand-text mb-4">
                ¿Lista para tu próximo servicio?
              </h3>
              <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
                Escribinos ahora y coordinamos tu turno en minutos. ¡Es fácil y rápido!
              </p>

              <motion.button
                onClick={handleReservar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Reservar por WhatsApp
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* Tip section */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 px-6 py-4 rounded-2xl border border-pink-200 dark:border-pink-900/20">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <p className="text-neutral-700 dark:text-neutral-300">
                <strong>Tip:</strong> Reservá con anticipación para asegurar tu horario preferido
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Booking;
