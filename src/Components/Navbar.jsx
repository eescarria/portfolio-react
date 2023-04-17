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
            <Link to="/">{language.id === "EN" ?  "Home" : "Inicio"}</Link>            
            <Link to="/about">{language.id === "EN" ?  "About me" : "Acerca de mi"}</Link>
            <Link to="projects">{language.id === "EN" ?  "Projects" : "Proyectos"}</Link>
            <Link to="/contact">{language.id === "EN" ?  "Contact" : "Contacto"}</Link>
        </div>

        <button className="button_flag" onClick={handleChangeLA}>{language.id === "EN" ?  <> <img className='flag' src="./spain.png" alt="Spanish" /></> : <> <img className='flag' src="./usa2.png" alt="English" /></>} </button>
    </nav>
    
  )
}

export default Navbar