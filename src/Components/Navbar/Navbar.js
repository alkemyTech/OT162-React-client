import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to="/">Inicio</Link>
        </div>
        <div>
            <Link to="/">Nosotros</Link>
        </div>
        <div>
            <Link to="/">Contacto</Link>
        </div>
        <div>
            <Link to="/">Campañas</Link>
        </div>
    </div>
  )
}

export default Navbar