import React from 'react';
import bg from './globe.png';
import logo from './icons8-compass-48.png'
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (

    <div className="">
      <img src={bg} />
      <div>
        <Navbar />
        <div className="tagline-section">
          <h1>Discover the world!</h1>
          <p>Search over 1000+ countries and enjoy</p>
        </div>

      </div>
    </div>

  );
}

export default App;
