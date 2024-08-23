import React from 'react';
import Navbar from './components/NavBar';
import CarouselComponent from './components/CarouselComponent';
import ConfigurationPanel from './components/ConfigurationPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <CarouselComponent />
        <ConfigurationPanel />
      </div>
    </div>
  );
}

export default App;
