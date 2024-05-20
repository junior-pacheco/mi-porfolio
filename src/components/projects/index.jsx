
import { useState,useEffect } from 'react';
import { IconTailwindcss, Iconjs, IconReact, IconNextjs, IconTypescript, IconJamPadlockF, DeviconNestjs } from '../../../public/icons/icons';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillImageFill } from 'react-icons/bs';
import { ClipLoader } from 'react-spinners'; // Importa el spinner
import { IoIosCloseCircle } from "react-icons/io";

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

    // Agrega una nueva clase al body cuando el modal se abre
    useEffect(() => {
      if (modalIsOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    }, [modalIsOpen]);
  

  const openModal = (project) => {
    setSelectedProject(project);
    setLoading(true); // Activa el estado de carga al abrir el modal
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const handleImageLoad = () => {
    setLoading(false); // Desactiva el estado de carga cuando la imagen se carga
  };

  const projects = [
    {
      name: 'Mvsion',
      description: "MVision is software for managing photos and videos on waiting room screens and advertising. It allows you to create and configure screens, upload content, and define schedules and playback order. The screens are connected to hardware controlled by MVision to manage kiosk mode.",
      images: ['/img/login.jpg', '/img/img1.jpg','/img/img2.jpg','/img/img3.jpg','/img/img4.jpg'],
    },
    {
      name: 'Tekneo',
      description: "It is a technological solution aimed at improving efficiency and security in companies, allowing you to view security cameras, keep track of entry times, and manage access to different areas connected to home automation systems.",
      images: ['/img/tekneo1.jpg', '/img/tekneo2.jpg','/img/tekneo3.jpg','/img/tekneo4.jpg'],
    },
    {
      name: 'Node maker',
      description: "It is a project that simplifies the creation and management of KNX and MQTT data sources on a local network. It facilitates communication between them, allows you to create profiles and routes, and offers a monitoring interface for data visualization. The software streamlines data transfer between sources, promoting efficient network management.",
      images: ['/img/node1.jpg', '/img/node2.jpg'],
    },
    {
      name: 'Login',
      description: "I developed an authentication system based on Firebase to manage the user login process in a web application. Firebase Authentication provides a secure and easy-to-implement solution for user management, password handling, and authentication with external providers.",
      images: ['/img/imagen1.png','/img/imagen2.png'],
    },
  ];


  return (
    <div className="p-10 bg-slate-950 overflow-y-auto">
      <h1 className="text-3xl font-extrabold text-yellow-500 mb-4">Proyectos</h1>
      <div className="grid grid-cols-1 bg-slate-900 p-5 rounded-2xl md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 shadow-2xl rounded-2xl">
            <div className='flex items-center mb-2 justify-between'>
              <h2 className="text-xl text-green-400 font-extrabold mb-2 inline-flex items-end">{project.name}</h2>
              {project.images ? (
                <button 
                  onClick={() => openModal(project)} 
                  className="flex items-center gap-3 justify-center px-2 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  View <BsFillImageFill className="mr-2" />
                </button>
              ) : (
                <IconJamPadlockF className="w-6" /> 
              )}
            </div>
            <p className="text-white mb-2">{project.description}</p>
            <div className='flex gap-3'>
              <Iconjs className="w-8" />
              {/* Renderiza los iconos aquí */}
              <IconTypescript className="w-8" />
              <IconTailwindcss className="w-8" />
              <IconNextjs className="w-8" />
              <IconReact className="w-8" />
              <DeviconNestjs className="w-8" />
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Images"
        className="bg-slate-900 p-5 rounded-2xl shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[95%]"
        overlayClassName="fixed inset-0  bg-black bg-opacity-70"
      >
        {selectedProject && (
          <div className='flex p-2 rounded-sm h-[100%] flex-col '>
            <div className='flex items-center rounded-sm  text-left  h-[7%] '>
              <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300"><IoIosCloseCircle size={40}/></button>
              <h2 className="text-2xl text-yellow-500 font-extrabold p-10 mb-4">Imágenes - {selectedProject.name}</h2>
            </div>
            <div className='flex justify-center items-center rounded-sm overflow-hidden  h-[93%] relative'>
              {loading && (
                <div className="absolute flex justify-center items-center w-full h-full bg-slate-900/70">
                  <ClipLoader color="red" loading={true} size={50} />
                </div>
              )}
              <Slider 
                arrows={true} dots={true} className='cursor-pointer rounded-sm w-[90%]'
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
              >
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img 
                      src={image} 
                      alt={`Project Image ${index + 1}`} 
                      className="w-full h-auto rounded-xl" 
                      onLoad={handleImageLoad} // Llama a handleImageLoad cuando la imagen se carga
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
