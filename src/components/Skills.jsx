import { motion } from 'framer-motion';
import excelIcon from '../assets/1-ms_excel.svg';
import htmlIcon from '../assets/13-html.svg';
import cssIcon from '../assets/2-css.svg';
import javascriptIcon from '../assets/3-javascript.svg';
import reactIcon from '../assets/4-react.svg';
import laravelIcon from '../assets/5-laravel.svg';
import railsIcon from '../assets/6-rails.svg';
import pythonIcon from '../assets/4-python.svg';
import batchIcon from '../assets/5-batch_script.svg';
import sqlServerIcon from '../assets/6-sql_server.svg';
import awsIcon from '../assets/10-aws_cloud.svg';
import gitIcon from '../assets/11-git.svg';
import n8nIcon from '../assets/7-n8n.svg';
import googleAnalyticsIcon from '../assets/7-google_analytics.svg';
import jsonIcon from '../assets/8-json.svg';

import linuxIcon from '../assets/12-linux.svg';
import webIcon from '../assets/16-web.svg';

export default function Skills() {
  const habilidades = [
    { nombre: "Laravel", img: laravelIcon, descripcion: "Desarrollo de aplicaciones robustas y sistemas de gestión a medida." },
    { nombre: "Ruby on Rails", img: railsIcon, descripcion: "Construcción de backends escalables y lógica de negocio eficiente." },
    { nombre: "Python", img: pythonIcon, descripcion: "Scripts de automatización, web scraping y procesamiento de datos." },
    { nombre: "n8n", img: n8nIcon, descripcion: "Automatización de flujos de trabajo e integración de servicios digitales." },
    { nombre: "SQL / NoSQL", img: sqlServerIcon, descripcion: "Diseño, modelado y optimización de bases de datos de alto rendimiento." },
    { nombre: "React", img: reactIcon, descripcion: "Creación de interfaces dinámicas y dashboards para visualización de datos." },
    { nombre: "Javascript", img: javascriptIcon, descripcion: "Desarrollo de lógica avanzada y funcionalidades interactivas web." },
    { nombre: "AWS Cloud", img: awsIcon, descripcion: "Despliegue y administración de soluciones en infraestructura nube." },
    { nombre: "Linux", img: linuxIcon, descripcion: "Manejo de servidores, terminal avanzada y entornos de despliegue." },
    { nombre: "Git / Github", img: gitIcon, descripcion: "Control de versiones y gestión colaborativa de repositorios de código." },
    { nombre: "JSON / XML", img: jsonIcon, descripcion: "Estructuración e intercambio de datos para integración de sistemas." },
    { nombre: "Batch Script", img: batchIcon, descripcion: "Automatización de tareas repetitivas y scripts de sistema en Windows." },
    { nombre: "Microsoft Excel", img: excelIcon, descripcion: "Análisis de datos avanzado, Power Pivot y automatización con macros." },
    { nombre: "Google Analytics", img: googleAnalyticsIcon, descripcion: "Seguimiento de métricas y análisis de comportamiento de usuarios." },
    { nombre: "HTML", img: htmlIcon, descripcion: "Estructuración de interfaces web modernas, limpias y accesibles." },
    { nombre: "CSS", img: cssIcon, descripcion: "Estilizado responsivo y diseño visual con frameworks modernos." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (

    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" id="skill">
      {/* Se eliminó el gradiente superior que venía de About */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
        >
          Habilidades
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {habilidades.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-4 h-14 w-14 flex items-center justify-center">
                <img 
                  src={skill.img} 
                  alt={skill.nombre} 
                  className="skill-icon h-12 w-12 object-contain transition-all duration-300"
                />
              </div>
              

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.nombre}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-snug text-xs px-2">
                {skill.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Se eliminó el gradiente inferior que iba hacia Projects */}

  
      <style>{`
  .skill-icon {
    filter: brightness(0) saturate(100%) invert(25%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
  }
  .dark .skill-icon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  .group:hover .skill-icon {
    filter: brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(1729%) hue-rotate(201deg) brightness(98%) contrast(101%) !important;
  }
`}</style>
    </section>
  );
}