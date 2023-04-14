import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <img src="./images/foto.jpg" alt="" />
        <div className='nav_elements'>
            <Link to="/">Inicio</Link>            
            <Link to="/about">Acerca de mi</Link>
            <Link to="projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
        </div>
    </nav>
    
  )
}

export default Navbar