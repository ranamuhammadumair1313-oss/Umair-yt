
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent py-6 px-8 absolute top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">umair<span className="text-red-600">.pk</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#" className="hover:text-red-500 transition-colors">How it works</a>
          <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
