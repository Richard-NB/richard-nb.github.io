import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Seo from "./components/Seo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

// 1. Importamos el icono desde la ruta que indicaste
import codeIcon from "./assets/code.ico";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [loading, setLoading] = useState(true);

  // Lógica para forzar el Favicon desde assets
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = codeIcon;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = codeIcon;
      document.head.appendChild(newLink);
    }
  }, []);

  // Lógica del Tema (Oscuro/Claro)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Simulación de carga para el Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
        
        <Seo />

        <AnimatePresence mode="wait">
          {loading && <Preloader key="loader" />}
        </AnimatePresence>

        {!loading && (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;