import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/header/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import Contact from './components/contact/index';

const App = () => {
  return (
      <div className='h-[100vh]'>
        <Header />
        <main>
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='/*' element={<Navigate to={'/'}/>} />
        </Routes>
        </main>
      </div>
  );
};

export default App;
