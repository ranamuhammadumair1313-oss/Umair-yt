
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Downloader from './components/Downloader';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <Downloader />
        </div>
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
};

export default App;
