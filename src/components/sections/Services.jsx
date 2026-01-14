import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Check, Star, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { SERVICES } from '../../utils/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleConsultar = () => {
    openWhatsApp(`¡Hola! Me interesa el servicio de ${service.name}`);
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'manos':
        return 'from-pink-500 to-rose-500';
      case 'pies':
        return 'from-purple-500 to-pink-500';
      case 'belleza':
        return 'from-blue-500 to-purple-500';
      default:
        return 'from-pink-500 to-purple-500';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'manos':
        return '💅';
      case 'pies':
        return '🦶';
      case 'belleza':
        return '✨';
      default:
        return '💎';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className={`relative h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col ${
        service.popular ? 'ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-neutral-950' : ''
      }`}>
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {/* Popular badge */}
        {service.popular && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3 fill-white" />
              Más Popular
            </div>
          </div>
        )}

        <CardHeader className="space-y-4">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-3xl shadow-lg`}>
            {getCategoryIcon(service.category)}
          </div>

          <div>
            <CardTitle className="text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-500 group-hover:to-purple-500 transition-all">
              {service.name}
            </CardTitle>
            <CardDescription className="text-base">
              {service.description}
            </CardDescription>
          </div>

        </CardHeader>

        <CardContent className="flex flex-col flex-1">
          {/* Features */}
          <ul className="space-y-3 mb-6 flex-1">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`mt-0.5 rounded-full p-1 bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            onClick={handleConsultar}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center gap-2 mt-auto`}
          >
            <MessageCircle className="w-4 h-4" />
            Consultar Precio
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const handleReservar = () => {
    openWhatsApp('¡Hola Gise! Me gustaría reservar un turno.');
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-pink-200 dark:border-pink-900/50 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Nuestros Servicios
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl brand-text mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Tratamientos
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Cada servicio está diseñado para realzar tu belleza natural con técnicas profesionales
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid - All 6 services in 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-4xl font-serif font-bold text-white mb-4">
                  ¿Lista para tu transformación?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Reservá tu turno ahora y descubrí la mejor versión de vos misma
                </p>
                <motion.button
                  onClick={handleReservar}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar por WhatsApp
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
