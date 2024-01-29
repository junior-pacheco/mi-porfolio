import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-11 text-2xl bg-slate-800 h-[10vh] p-4">
      <h1 className="text-2xl text-white font-semibold">{'< Mi Porfolio >'}</h1>
      <nav className="flex space-x-4 text-white mt-2 font-semibold">
        <Link to="/" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
