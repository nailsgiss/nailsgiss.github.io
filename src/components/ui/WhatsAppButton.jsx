import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../utils/whatsapp';

const WhatsAppButton = () => {
  const handleClick = () => {
    openWhatsApp('¡Hola Gise! Tengo una consulta sobre tus servicios.');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
    </motion.button>
  );
};

export default WhatsAppButton;
