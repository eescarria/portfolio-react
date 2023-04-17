import React, { useContext } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import LanguageContext from '../Context/context'

export const Home = () => {

  const { language } = useContext(LanguageContext)
  const {text} = language
  
  
  return (
    <div className='info'>
          <div className='container'>
            <h1>{text.home.title}</h1>
            <h1>{text.home.title2} <br/>Estefanía Escarria García</h1>
            <p> {text.home.description} </p>
            <p>{text.home.description2}</p>
       
          </div>
        <div className='button_container'>
                <a href="./CV.pdf" download="CV_Estefania_Escarria">
                <button className='button cv'>{language.id === "EN" ? "DOWNLOAD CV" : "DESCARGAR CV"}</button>
                </a>
                
                <Link to="/contact"><button className='button'>{language.id === "EN" ? "CONTACT" : "CONTACTO"}</button></Link>                    
                
                
        </div>        
    </div>
  )
}
