import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Highlights />
      <Schedule />
      <CallToAction />
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Talent Acceleration Tournament. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
