import React from 'react'
import '../App.css';

import { NavLink } from 'react-router-dom';
export const Navbar = () => {

  return (
    <div className='navbar'>


        <p className='logo'>
    Locos X el Padel
</p>


 <nav className='menu'>
<ul>
    <li><NavLink to='/Data'>Club</NavLink></li>
  <li><NavLink to='/Mapa'>Mapa</NavLink></li>
    <li><NavLink to='/Home'>Contacto</NavLink></li>
</ul>
 </nav>

 </div>
  )
}
