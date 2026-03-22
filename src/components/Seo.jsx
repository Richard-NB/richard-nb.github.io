import { Helmet } from 'react-helmet-async';

const Seo = () => {
  const siteUrl = "https://richard-nb.github.io"; // Tu URL de GitHub Pages

  return (
    <Helmet>
      {/* Título: El factor #1 de SEO */}
      <title>Richard NB | Backend & Data Developer</title>
      <meta name="google-site-verification" content="CTuhz3WRSu9AMjSk4T9q7ZuSwXBIQbMPNGiW9SkMjQQ" />
      {/* Metadatos Básicos */}
      <meta name="description" content="Backend Developer especializado en optimización de flujos y arquitectura de datos. Diseño soluciones escalables con Rails, Laravel y automatización n8n." />
      <meta name="keywords" content="Backend Developer, Data Engineering, n8n, Python, Ruby on Rails, Laravel, SQL, ETL, Automatización de procesos, Richard NB" />
      <meta name="author" content="Richard NB" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph (Optimizado para LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="Richard NB | Ingeniería de Software y Automatización de Datos" />
      <meta property="og:description" content="Optimización de flujos de trabajo y desarrollo de arquitecturas de datos. Especialista en Rails, Laravel y automatizaciones a medida." />
      
      {/* IMPORTANTE: Usa un PNG para la imagen de redes sociales */}
      <meta property="og:image" content={`${siteUrl}/og-image.png`} /> 
      
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Richard NB | Backend & Data Developer" />
      <meta name="twitter:description" content="Especialista en desarrollo backend y optimización de flujos de datos." />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
    </Helmet>
  );
};

export default Seo;