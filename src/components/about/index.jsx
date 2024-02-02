import React from 'react';
import { DeviconHtml5, IconTailwindcss, Iconjs, IconNodejs, IconReact, IconVue, IconVitejs, IconSass, IconCss3, IconNextjs, IconPm2, IconMariadb, IconFigma, IconTypescript, IconDocker, IconFeGit } from '../../../public/icons/icons';

const About = () => {
  return (
    <div className="bg-slate-900 text-white min-h-[90vh] h-full overflow-y-auto flex flex-col md:flex-row">

      <div className="md:w-1/2 p-10 flex flex-col justify-center  items-center flex-1">
        <div className='mb-5'>
          <p className="text-white 2xl:text-2xl text-base text-center md:text-left">
            ¡Hola! Soy ElKIN PACHECO, Un apasionado por la creación de experiencias web impresionantes, con habilidades sólidas en diseño y tecnología. Me mantengo actualizado y comprometido con la comunicación efectiva y la colaboración en equipo para lograr los mejores resultados posibles.
          </p>
        </div>
        <div className="text-white p-5 flex-col flex justify-center gap-5">
          <h2 className="2xl:text-3xl text-2xl text-green-400 font-semibold">Skills</h2>
          <ul className="list-disc text-lg list-inside">
            <li>Desarrollo web y software con React, Next, Vite, Vue</li>
            <li>HTML5, CSS3 y Sass</li>
            <li>Estilización con Tailwind CSS</li>
            <li>Desarrollo en TypeScript, JavaScript</li>
            <li>Construcción de proyectos con Node.js-Express (básico)</li>
            <li>Contenedorización con Docker (básico)</li>
            <li>Inglés (medio)</li>
            <li>Metodología SCRUM</li>
          </ul>
          <h2 className="2xl:text-3xl text-2xl text-green-400 font-semibold mt-5">Tools</h2>
          <ul className="list-disc text-lg list-inside">
            <li>Manejo de proyectos con PM2 (básico)</li>
            <li>Visual Studio Code</li>
            <li>Git lad</li>
            <li>Postman</li>
            <li>Npm</li>
          </ul>
        </div>
      </div>

      <div className="md:w-1/2 p-10 flex flex-col justify-start md:items-start">
        <div className='flex  p-5 gap-2 md:gap-5 justify-center  flex-wrap'>
          <DeviconHtml5 className="icon-bounce w-8 md:w-12" />
          <IconCss3 className="icon-bounce w-8 md:w-12" />
          <IconSass className="icon-bounce w-8 md:w-12" />
          <Iconjs className="icon-bounce w-8 md:w-12" />
          <IconTypescript className="icon-bounce w-8 md:w-12" />
          <IconNextjs className="icon-bounce w-8 md:w-12" />
          <IconReact className="icon-bounce w-8 md:w-12" />
          <IconVue className="icon-bounce w-8 md:w-12" />
          <IconVitejs className="icon-bounce w-8 md:w-12" />
          <IconTailwindcss className="icon-bounce w-8 md:w-12" />
          <IconNodejs className="icon-bounce w-8 md:w-12" />
          <IconFeGit className="icon-bounce w-8 md:w-12" />
          <IconPm2 className="icon-bounce w-8 md:w-12" />
          <IconMariadb className="icon-bounce w-8 md:w-12" />
          <IconFigma className="icon-bounce w-8 md:w-12" />
          <IconDocker className="icon-bounce w-8 md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default About;
