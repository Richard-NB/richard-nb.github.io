import { Helmet } from 'react-helmet-async';

const Seo = () => {
  return (
    <Helmet>
      {/* Título Principal - Esto es lo que ves en la pestaña */}
      <title>Richard NB | Backend & Data Developer</title>
      
      {/* Metadatos Básicos */}
      <meta name="description" content="Backend Developer especializado en optimización de flujos y arquitectura de datos. Construyo soluciones escalables con Rails, Laravel y automatizaciones con n8n." />
      <meta name="keywords" content="Backend Developer, Data Engineering, n8n, Python, Ruby on Rails, Laravel, Automatización de flujos, SQL, Richard NB" />
      <meta name="author" content="Richard NB" />
      
      {/* Configuración para Redes Sociales (Open Graph) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Richard NB | Backend & Data Developer" />
      <meta property="og:description" content="Diseño y desarrollo herramientas personalizadas para optimizar flujos de trabajo y procesos de datos." />
      <meta property="og:image" content="/img/user.svg" /> 
      
      {/* Configuración para Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Richard NB | Backend & Data Developer" />
      <meta name="twitter:description" content="Especialista en optimización de flujos y desarrollo de software a medida." />
    </Helmet>
  );
};

export default Seo;