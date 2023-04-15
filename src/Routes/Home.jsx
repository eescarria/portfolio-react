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
            <h1>{text.title}</h1>
            <h1>Mi nombre es <br/>Estefanía Escarria García</h1>
            <p>Soy Ingeniera Industrial y actualmente estudiante de la <br/>carrera Certified Tech Developer 💻 en Digital House. </p>
            <p>Soy una apasionada por la tecnología y estoy en búsqueda <br/> de una oportunidad para incursionar en el mundo TI <br/>
            como Desarrolladora Backend y poder participar en proyectos <br/>desafiantes.</p>
       
        </div>
        <div className='button_container'>
                <a href="./CV.pdf" download="CV_Estefania_Escarria">
                <button className='button cv'>DESCARGAR CV</button>
                </a>
                
                <Link to="/contact"><button className='button'>CONTACTO</button></Link>                    
                
                
        </div>        
    </div>
  )
}
