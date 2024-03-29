import React, { useRef } from 'react';
import { MaterialSymbolsDownload } from '../../../public/icons/icons';
import CvElkin from '../../../public/pdf/cv.pdf';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

emailjs.init('M3ZC5gpi1W4VGfIhY');

const Contact = () => {
  const formRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CvElkin;
    link.download = 'Cv_Elkin_Pacheco.pdf';
    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.from_name.value,
      message_id: e.target.message_id.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send('service_1kfhdae', 'template_l8e1xxu', templateParams);
      console.log('Correo electrónico enviado con éxito');
      toast.success('Email sent successfully!');

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      toast.error('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row  bg-slate-900 overflow-y-auto">
      <div className="md:w-[50%] p-8">
        <div className="max-w-md mx-auto bg-slate-800 rounded-xl overflow-hidden shadow-md p-8 mb-4">
          <h1 className="text-2xl font-bold mb-4 text-green-400">Contacto</h1>
          <form className="text-black" ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message_id" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="message_id"
                name="message_id"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 w-[110px] text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="md:w-[50%] p-8 flex flex-col bg-slate-900 justify-center items-center space-y-4">
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-4 text-green-400">Download Cv</h1>
    <a
      href={CvElkin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline inline-block mx-auto" // Añade la clase mx-auto aquí
      onClick={handleDownload}
    >
      <MaterialSymbolsDownload />
    </a>
  </div>
</div>
    </div>
  );
};

export default Contact;
