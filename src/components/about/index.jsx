import React, { useState } from 'react';
import Projects from '../projects';
import Contact from '../contact';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="bg-slate-900 gap-7 text-white min-h-screen flex flex-col justify-center items-center">
        <Element name="about" className="w-full p-5 mt-2 gap-5 flex flex-col justify-center items-center" style={{ height: "100vh" }}>
        <motion.p className={`text-center text-4xl md:text-6xl`} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onAnimationComplete={handleAnimationComplete}>
          Hello! I Am Elkin Pacheco
        </motion.p>
        <motion.span className={`text-center text-3xl md:text-4xl font-bold text-blue-500`} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          a developer frontend
        </motion.span>
        <AnimatePresence>
          {animationComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </Element>

      <div className="relative">
        <Element name="info" className="w-full p-5 mt-4 flex justify-center gap-5 rounded-lg flex-col md:flex-row">
          <motion.div whileHover={{ scale: 1.05 }} className='custom-click-effect bg-slate-800/90 flex flex-col items-center justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card'>
            <h2 className="text-3xl text-green-400 font-semibold mb-5">About me</h2>
            <p className="text-base">
              Experto en diseño web comprometido con crear experiencias impresionantes mediante una combinación de habilidades sólidas en diseño y tecnología, siempre enfocado en la comunicación efectiva y la colaboración en equipo para lograr resultados excepcionales.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className='flex flex-col bg-slate-800/90 items-center justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card'>
            <h2 className="text-3xl text-green-400 font-semibold mb-5">Skills</h2>
            <ul className="list-disc text-base list-inside">
              <li>Desarrollo web y software con React, Next, Vite, Vue</li>
              <li>HTML5, CSS3 y Sass</li>
              <li>Estilización con Tailwind CSS</li>
              <li>Desarrollo en TypeScript, JavaScript</li>
              <li>Construcción de proyectos con Node.js-Express (básico)</li>
              <li>Contenedorización con Docker (básico)</li>
              <li>Inglés (medio)</li>
              <li>Metodología SCRUM</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className='flex flex-col bg-slate-800/90 items-center justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card'>
            <h2 className="text-3xl text-green-400 font-semibold mb-5">Tools</h2>
            <ul className="list-disc text-base list-inside">
              <li>Manejo de proyectos con PM2 (básico)</li>
              <li>Visual Studio Code</li>
              <li>Git lad</li>
              <li>Postman</li>
              <li>Npm</li>
            </ul>
          </motion.div>
        </Element>
      </div>

      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
};

export default About;
