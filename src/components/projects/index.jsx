// Projects.js
import React from 'react';
import { IconJamPadlockF } from '../../../public/icons/icons';

const Projects = () => {
  return (
    <div className="h-[90vh] p-10 bg-slate-900 overflow-y-auto">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proyecto 1 */}
        <div className="bg-slate-800/90 p-4 rounded-md shadow-md">
          <h2 className="text-xl text-green-400 font-semibold mb-2">Tekneo</h2>
          <p className="text-white mb-2">
          Es una solución tecnológica para mejorar la eficiencia y seguridad en empresas, permitiendo visualizar cámaras de seguridad, llevar un registro de horarios de ingreso y gestionar accesos a diferentes áreas,conectadas a equipos domoticas.
          </p>
            <IconJamPadlockF/>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-slate-800/90 p-4 rounded-md shadow-md">
          <h2 className="text-xl text-green-400  font-semibold mb-2">Node Maker</h2>
          <p className="text-white mb-2">
          Es un proyecto que simplifica la creación y gestión de fuentes de datos KNX y MQTT en una red local. Facilita la comunicación entre ellas, permite crear perfiles y rutas, y ofrece una interfaz de monitoreo para visualizar datos. El software facilita el envío de datos entre fuentes, promoviendo una gestión eficiente de la red.
          </p>
          <IconJamPadlockF/>
        </div>

        {/* Proyecto 3 */}
        <div className="bg-slate-800/90 p-4 rounded-md shadow-md">
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
        </div>


        {/* Proyecto 4 */}
        <div className="bg-slate-800/90 p-4 rounded-md shadow-md">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
