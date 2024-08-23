// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import ImageCarousel from './components/ImageCarousel';
import Description from './components/Description';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ImageCarousel />
        <Description />
      </main>
    </div>
  );
}

export default App;
