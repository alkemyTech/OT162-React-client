import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <NavLink to="/">Inicio</NavLink>
        </div>
        <div>
            <NavLink to="/miembros">Nosotros</NavLink>
        </div>
        <div>
            <NavLink to="/contacto">Contacto</NavLink>
        </div>
        <div>
            <NavLink to="/school-campaign">Campañas: Escuelas</NavLink>
        </div>
        <div>
            <NavLink to="/toys-campaign">Campañas: Juguetes</NavLink>
        </div>
    </div>
  )
}

export default Navbar