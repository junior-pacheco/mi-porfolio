import React from 'react';
import { DeviconHtml5, IconTailwindcss, Iconjs, IconNodejs, IconReact, IconVue, IconVitejs, IconSass, IconCss3, IconNextjs, IconPm2, IconMariadb, IconFigma, IconTypescript, IconDocker, IconFeGit } from '../../../public/icons/icons';

const About = () => {

  return (
    <div className="flex h-[90vh] text-white bg-slate-900">
      <div className="md:w-1/2 p-10">
        <div className='flex items-center justify-center h-[70%]'>
          <img src='/public/img/perfil.png' height={'100%'} width={'50%'}/>
        </div>
        <div className='flex p-5 gap-5 justify-center items-center h-[15%]'>
          <DeviconHtml5 className="icon-bounce"/>
          <IconCss3 className="icon-bounce"/>
          <IconSass className="icon-bounce"/>
          <Iconjs className="icon-bounce"/>
          <IconTypescript className="icon-bounce"/>
          <IconNextjs className="icon-bounce"/>
          <IconReact className="icon-bounce"/>
          <IconVue className="icon-bounce"/>p
          <IconVitejs className="icon-bounce"/>
          <IconTailwindcss className="icon-bounce"/>
        </div>
        <div className='flex p-8 gap-5 justify-center items-center h-[15%]'>
          <IconNodejs className="icon-bounce"/>
          <IconFeGit className="icon-bounce"/>
          <IconPm2 className="icon-bounce"/>
          <IconMariadb className="icon-bounce"/>
          <IconFigma className="icon-bounce"/>
          <IconDocker className="icon-bounce"/>
        </div>
      </div>
        <div className="text-white p-5 flex-col">
          <div className=' flex items-center justify-center h-[30%]'>
            <p className="text-white 2xl:text-2xl text-base ">
              ¡Hola! Soy ElKIN PACHECO,Un apasionado por la creación de experiencias web impresionantes, con habilidades sólidas en diseño y tecnología. Me mantengo actualizado y comprometido con la comunicación efectiva y la colaboración en equipo para lograr los mejores resultados posibles..
            </p>
          </div>
          <div className="text-white h-[70%] p-5 flex-col flex justify-center 2xl:gap-5 ">
            <h2 className=" 2xl:text-3xl text-2xl text-green-400 font-semibold">Habilidades</h2>
            <ul className="list-disc 2xl:text-xl list-inside">
              <li>Desarrollo web y software con React,Next,vite,vue</li>
              <li>HTML5, CSS3 y Sass</li>
              <li>Estilización con Tailwind CSS</li>
              <li>Desarrollo en TypeScript,js</li>
              <li>Construcción de proyectos con Node.js-Express(basico)</li>
              <li>Contenedorización con Docker(basico)</li>
              <li>Ingles(medio)</li>
              <li>Metodología SCRUM</li>
            </ul>
            <h2 className="2xl:text-3xl text-2xl text-green-400 font-semibold">Herramientas</h2>
            <ul className="list-disc  2xl:text-xl  list-inside">
              <li>Manejo de proyectos con PM2(basico)</li>
              <li>Visual studio code</li>
              <li>Git lad</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default About;
