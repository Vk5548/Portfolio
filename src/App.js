import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

//importing components

import Layout from './components/Layout';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Layout />  }/>
      </Routes>    
    </div>
  );
}

export default App;
