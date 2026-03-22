import { motion } from 'framer-motion';
// 1. Importa tu imagen local
import codeIcon from '../assets/code.svg'; 

export default function Preloader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
    >
      {/* 2. Reemplazo del icono por la imagen animada */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="mb-8" // Quitamos text-sky-400 y text-6xl, ya no son necesarios
      >
        {/* Usamos una etiqueta img con clases de Tailwind para controlar el tamaño */}
        <img 
          src={codeIcon} 
          alt="Cargando..." 
          className="h-20 w-20 object-contain" // Ajusta h-20 w-20 según el tamaño que desees
        />
      </motion.div>

      {/* 3. Texto de Carga Actualizado y Resumido */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white tracking-[0.3em] font-light text-sm mb-4"
      >
        CARGANDO DATOS
      </motion.div>

      {/* Barra de progreso animada (sin cambios) */}
      <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full bg-sky-500"
        />
      </div>
    </motion.div>
  );
}