import React from 'react';
import "../App.css";


import{ Principal} from '../components/Principal';
import Contacto from '../components/Contacto';
import Mapa from '../components/Mapa';

import {Data} from '../components/Data';

import { Routes,Route,BrowserRouter } from 'react-router-dom';



export const Rutas = () => {

  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route exact  path="/Data" element={<Data/>}/> ;
     <Route  exact path="/Mapa" element={<Mapa />} />;
        <Route  exact path="/Home" element={<Contacto />} />;
        <Route exact  path="/"  element={<Principal/>} />;
</Routes>
    </BrowserRouter>

    </>
  )
}
