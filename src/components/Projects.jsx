import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function ProjectCard({ proyecto, variants }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered && proyecto.imagenes.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImg(prev => (prev + 1) % proyecto.imagenes.length);
      }, 1000); // cambia cada 1 segundo
    } else {
      clearInterval(intervalRef.current);
      setCurrentImg(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, proyecto.imagenes.length]);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all group shadow-sm hover:shadow-blue-100"
    >
      <div className="relative overflow-hidden">
        {proyecto.imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${proyecto.titulo} - ${i}`}
            style={{ filter: 'none', opacity: currentImg === i ? 1 : 0, transition: 'opacity 0.5s ease' }}
            className="w-full h-auto absolute top-0 left-0"
          />
        ))}
        {/* imagen base para mantener altura */}
        <img
          src={proyecto.imagenes[0]}
          alt={proyecto.titulo}
          style={{ filter: 'none', opacity: 0 }}
          className="w-full h-auto"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {proyecto.titulo}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
          {proyecto.descripcion}
        </p>
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-blue-300 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200 dark:border-slate-600 font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const misProyectos = [
    {
      titulo: "Sistema de cobranza interno",
      descripcion: "Plataforma integral para la gestión de cobranzas, seguimiento de periodos de facturación, control de pagos y estados de cuenta en tiempo real.",
      imagenes: [
        `/projects/s1-1.png`,
        `/projects/s1-2.png`,
        `/projects/s1-3.png`,
        `/projects/s1-4.png`,
      ],
      tecnologias: ["Ruby on rails", "SQLite", "Tailwind", "Pago Efectivo"],
    },
    {
      titulo: "API REST de cobros | Integración Banca",
      descripcion: "API robusta para la conciliación bancaria y procesamiento de pagos, incluye sincronización bidireccional de datos con sistemas ERP.",
      imagenes: [
        `/projects/s2-1.png`,
        `/projects/s2-2.png`,
        `/projects/s2-3.png`,
      ],
      tecnologias: ["Ruby on rails", "SQLite", "Tailwind", "Api Rest"],
    },
    {
      titulo: "SMART HR| Landing Page",
      descripcion: "Landing Page con diseño responsivo para la gestión de recursos humanos. SEO y diseño UX optimizado para la presencia de marca en Chile.",
      imagenes: [
        `/projects/smarthr-1.png`,
        `/projects/smarthr-2.png`,
        `/projects/smarthr-3.png`,
        `/projects/smarthr-4.png`,
        `/projects/smarthr-5.png`,
      ],
      tecnologias: ["Html", "Css", "Javascript", "Bootstrap"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500" id="project">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
        >
          Proyectos
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {misProyectos.map((proyecto, index) => (
            <ProjectCard key={index} proyecto={proyecto} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}