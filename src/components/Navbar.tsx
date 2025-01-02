import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-primary-500" />
            <span className="font-bold text-xl text-white">CloudCraft</span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-primary-400">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-primary-400">Services</Link>
              <Link to="/learning-paths" className="text-gray-300 hover:text-primary-400">Learning Paths</Link>
              <Link to="/blogs" className="text-gray-300 hover:text-primary-400">Blogs</Link>
              <Link to="/events" className="text-gray-300 hover:text-primary-400">Events</Link>
            </div>
            <SocialLinks />
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Services</Link>
            <Link to="/learning-paths" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Learning Paths</Link>
            <Link to="/blogs" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Blogs</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Events</Link>
          </div>
          <div className="px-5 pb-3">
            <SocialLinks />
          </div>
        </div>
      )}
    </nav>
  );
}