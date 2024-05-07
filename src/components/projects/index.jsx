// Projects.js
import React from 'react';
import { IconJamPadlockF } from '../../../public/icons/icons';
import { DeviconHtml5, IconTailwindcss, Iconjs, IconNodejs, IconReact, IconVue, IconVitejs, IconSass, IconCss3, IconNextjs, IconPm2,  IconFigma, IconTypescript, IconDocker, IconFeGit } from '../../../public/icons/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  return (
    <div className="p-10 bg-slate-900 overflow-y-auto">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proyecto 1 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 shadow-2xl rounded-2xl ">
          <div className=' flex items-center mb-2 justify-between'>
        <h2 className="text-xl text-green-400 font-semibold mb-2 inline-flex items-end">Tekneo</h2>
        <IconJamPadlockF/>
          </div>
          <p className="text-white mb-2">
            It's a technological solution aimed at enhancing efficiency and security in companies, enabling the visualization of security cameras, keeping a record of entry times, and managing access to different areas connected to home automation systems.
          </p>
        </motion.div>

        {/* Proyecto 2 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
        <div className=' flex items-center justify-between'>
        <h2 className="text-xl text-green-400 font-semibold mb-2 inline-flex items-end">Node maker</h2>
        <IconJamPadlockF/>
          </div>
          <p className="text-white mb-2">
            It's a project that simplifies the creation and management of KNX and MQTT data sources on a local network. It facilitates communication between them, allows for the creation of profiles and routes, and provides a monitoring interface for data visualization. The software streamlines data transfer between sources, promoting efficient network management.
          </p>
        </motion.div>

        {/* Proyecto 3 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-xl text-green-400  font-semibold mb-2">Task Manager</h2>
          <p className="text-white mb-2">
            It's a platform where administrators create tasks and users can view the list of pending tasks. Users can confirm when they complete a task. A simple solution for collaborative task management.
          </p>
          <a
            href="https://taskmanagerjp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View project
          </a>
        </motion.div>


        {/* Proyecto 4 */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-xl text-green-400  font-semibold mb-2">Login</h2>
          <p className="text-white mb-2">
            I developed an authentication system based on Firebase to manage the user login process in a web application. Firebase Authentication provides a secure and easy-to-implement solution for user management, password handling, and authentication with external providers.
        </p>
          <a
            href="https://loginjp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
             View project
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
