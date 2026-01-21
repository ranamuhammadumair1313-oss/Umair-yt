
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-900/20 to-[#0f0f0f]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative text-center px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Download Your Favorite <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            YouTube Content
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
          Fast, free, and secure. Save videos directly to your device with umair.pk's advanced downloader.
        </p>
      </div>
    </section>
  );
};

export default Hero;
