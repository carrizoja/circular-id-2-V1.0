import React from 'react';
import {Routes, Route } from "react-router-dom";
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Manifiesto from './pages/manifiesto/Manifiesto.jsx'
import Onboarding from './pages/onboarding/Onboarding.jsx';
import Contacto from './pages/contacto/Contacto.jsx'
import Servicios from './pages/servicios/Servicios.jsx'
function App() {
 
  return (
    <>
        
        <Routes>
          <Route
           exact path="/" element={<Onboarding></Onboarding>} />
          <Route
           exact path="/home" element={<Home></Home>} />
          <Route
           exact path="/about" element={<About></About>} />
          <Route
           exact path="/manifiesto" element={<Manifiesto></Manifiesto>} />
          <Route
           exact path="/contacto" element={<Contacto></Contacto>} />
          <Route
           exact path="/servicios" element={<Servicios></Servicios>} />
        </Routes>
    </>

  );
}



export default App;