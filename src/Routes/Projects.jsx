import React, { useContext } from 'react'
import "./Projects.css"
import { FaProjectDiagram } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import LanguageContext from '../Context/context';


export const projects =[
  { name: "Clínica odontológica",
    description : "Sistema que permite administrar la reserva de turnos entre pacientes y odontólogos.  Gestiona los datos de odontólogos, pacientes, turnos y tiene Login.",
    logos : [
      "./java.png",
      "./spring.png",
      "./html.png",
      "./javascript.png",
      "./css.png"
    ],
    github : "https://github.com/eescarria/PI-BackEnd-ORM",
    vercel:"",
    img : "./clinica.PNG",
    alt: "Foto back"
  },
  { name: "Aplicación Web - Temática de la salud",
    description : "Aplicación web ligada a la temática de la salud. Integra diferentes rutas, formularios de contacto, temas de estado, entre otros. Todo ello consumiendo información de una API.",
    logos : [
      "./react.png",
      "./javascript.png",
      "./css.png"
    ],
    github : "https://github.com/eescarria/ctd-esp-fe3-final",
    vercel: "https://ctd-esp-fe3-final-six.vercel.app/",
    img : "./app.PNG",
    alt: "Foto React"
  }
]

export const Projects = () => {

  const { language } = useContext(LanguageContext)
  const {text} = language

  return (
    <div className='container'>
      <div className='projects_header'>
        <FaProjectDiagram className='projects_logo'/>
        <p>{text.projects.title}</p>
      </div>
      <div>
        {
          projects.map((project, index)=>{
            return(
              <div key={index} className='project'>
                <div>
                  <h3 className='project_title'>{project.name}</h3>
                  <p className='project_description'>{project.description}</p>
                  <div>
                    {project.logos.map((logo,index)=>{
                      return(
                        <img key={index} src={logo} alt="logo" />
                      )
                    })}
                  </div>
                  <div>
                    <a href={project.vercel} target='.blank'><button className='button_project'><GrDeploy/> Deploy</button></a>
                    
                    <a href={project.github} target='.blank'><button className='button_project'><FaGithub/> Código</button></a>
                    
                  </div>
                </div>
                <a href={project.github} target='.blank'><img className='foto'  src={project.img} alt={project.alt} /></a>
                
                
              </div>
            )
          })
        }
      </div>
      
      
    </div>
  )
}
