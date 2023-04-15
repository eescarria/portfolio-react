import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import LanguageContext from '../Context/context'


const Navbar = () => {

  const { language, handleChangeLA } = useContext(LanguageContext)
  const {text} = language

  return (
    <nav>
        <img src="./images/foto.jpg" alt="" />
        <div className='nav_elements'>
            <Link to="/">Inicio</Link>            
            <Link to="/about">Acerca de mi</Link>
            <Link to="projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
        </div>

        <button className="button_flag" onClick={handleChangeLA}>{language.id === "EN" ?  <> <img className='flag' src="./spain.png" alt="Spanish" /></> : <> <img className='flag' src="./usa2.png" alt="English" /></>} </button>
    </nav>
    
  )
}

export default Navbar