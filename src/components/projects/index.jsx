// Projects.js
import React from 'react';
import { IconJamPadlockF } from '../../../public/icons/icons';
import { DeviconHtml5, IconTailwindcss, Iconjs, IconNodejs, IconReact, IconVue, IconVitejs, IconSass, IconCss3, IconNextjs, IconPm2,  IconFigma, IconTypescript, IconDocker, IconFeGit } from '../../../public/icons/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  return (
    <div className="p-10 bg-slate-900 overflow-y-auto">
      <div className='text-center mb-5'>
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">Experience</h1>
        <p className='text-white mb-2 text-base md:text-xl'>Desarrollador de software y web en <span className='font-bold'>Colmotica S.A.S</span> desde agosto de 2022 hasta la actualidad</p>
      </div>

      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proyecto 1 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 shadow-2xl rounded-2xl ">
          <div className=' flex items-center mb-2 justify-between'>
        <h2 className="text-xl text-green-400 font-semibold mb-2 inline-flex items-end">Tekneo</h2>
        <IconJamPadlockF/>
          </div>
          <p className="text-white mb-2">
          Es una solución tecnológica para mejorar la eficiencia y seguridad en empresas, permitiendo visualizar cámaras de seguridad, llevar un registro de horarios de ingreso y gestionar accesos a diferentes áreas,conectadas a equipos domoticas.
          </p>
        </motion.div>

        {/* Proyecto 2 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
        <div className=' flex items-center justify-between'>
        <h2 className="text-xl text-green-400 font-semibold mb-2 inline-flex items-end">Node maker</h2>
        <IconJamPadlockF/>
          </div>
          <p className="text-white mb-2">
          Es un proyecto que simplifica la creación y gestión de fuentes de datos KNX y MQTT en una red local. Facilita la comunicación entre ellas, permite crear perfiles y rutas, y ofrece una interfaz de monitoreo para visualizar datos. El software facilita el envío de datos entre fuentes, promoviendo una gestión eficiente de la red.
          </p>
        </motion.div>

        {/* Proyecto 3 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-xl text-green-400  font-semibold mb-2">Task Manager</h2>
          <p className="text-white mb-2">
          es una plataforma donde los administradores crean tareas y los usuarios pueden ver la lista de tareas pendientes. Los usuarios pueden confirmar cuando completan una tarea. Una solución sencilla para la gestión colaborativa de tareas.
          </p>
          <a
            href="https://taskmanagerjp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver proyecto
          </a>
        </motion.div>


        {/* Proyecto 4 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-xl text-green-400  font-semibold mb-2">Login</h2>
          <p className="text-white mb-2">
          Desarrollé un sistema de autenticación basado en Firebase para gestionar el proceso de inicio de sesión de usuarios en una aplicación web. Firebase Authentication proporciona una solución segura y fácil de implementar para la gestión de usuarios, manejo de contraseñas y autenticación con proveedores externos.
          </p>
          <a
            href="https://loginjp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver proyecto
          </a>
        </motion.div>
      </div>
      
<div className="w-full p-10">
<div className='flex flex-wrap justify-center gap-5'>
  <DeviconHtml5 className="icon-bounce w-12" />
  <IconCss3 className="icon-bounce w-12" />
  <IconSass className="icon-bounce w-12" />
  <Iconjs className="icon-bounce w-12" />
  <IconTypescript className="icon-bounce w-12" />
  <IconNextjs className="icon-bounce w-12" />
  <IconReact className="icon-bounce w-12" />
  <IconVue className="icon-bounce w-12" />
  <IconVitejs className="icon-bounce w-12" />
  <IconTailwindcss className="icon-bounce w-12" />
  <IconNodejs className="icon-bounce w-12" />
  <IconFeGit className="icon-bounce w-12" />
  <IconPm2 className="icon-bounce w-12" />
  <IconFigma className="icon-bounce w-12" />
  <IconDocker className="icon-bounce w-12" />
</div>
</div>
    </div>

  );
};

export default Projects;
