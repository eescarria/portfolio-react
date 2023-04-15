import React from 'react'
import { BsPersonFill, BsTools } from "react-icons/bs";
import "./About.css"

export const tech = [
    {src:"./java.png", alt:"Logo Java", name:"Java"},
    {src:"./spring.png", alt:"Logo Spring Boot", name:"Spring Boot"},
    {src:"./javascript.png", alt:"Logo JS", name: "JavaScript"},
    {src:"./git.png", alt:"Logo Git", name: "Git"},
    {src:"./react.png", alt:"Logo React", name:"React"},
    {src:"./css.png", alt:"Logo CSS", name:"CSS"},
    {src:"./html.png", alt:"Logo HTML", name:"HTML"}
]

export const About = () => {
  return (
    <div className='about'>
        <div className='about_header'>
            <BsPersonFill className='about_logo' />
            <div>
                <p>Acerca de mí</p>
                   
            </div>
        </div>
        <p className='about_text'>Durante los últimos 10 años me he desempeñado en el sector manufacturero, he trabajado como planeadora de materiales, de producción de planta, de fabricación en terceros. En la actualidad me estoy capacitando como Desarrolladora de Software, por lo cual busco oportunidades para poder desempeñarme como tal, aportar ideas y conocimiento de acuerdo con las habilidades que ya he adquirido y al mismo tiempo tener la posibilidad de seguir aprendiendo.</p>
        <p className='about_text'>Soy una persona con habilidades para trabajar en equipo, asumir retos y afrontar dificultades, trabajar bajo presión, caracterizada por su pensamiento analítico en la resolución de problemas y con capacidad para adaptarse al cambio.</p>

        <div className='about2'>
            <div className='about_header'>
                <BsTools className='about_logo'/>
                <div>
                    <p>Habilidades</p>
                </div>
            </div>
            <div className='about_skills'>
                {tech.map((tech, index)=>{
                    return(
                        <div className='about_skill' key={index}>
                        <img src={tech.src} alt={tech.alt} />
                        <span className='skills_name'>{tech.name}</span>
                        </div>
                        )
                    })}
            </div>
                
        
        </div>
        
    </div>
  )
}
