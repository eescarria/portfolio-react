import React from 'react'
import "./Projects.css"
import { FaProjectDiagram } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


export const projects =[
  { name: "Clínica odontológica",
    description : "Sistema que permite administrar la reserva de turnos entre pacientes y odontólogos.  Gestiona los datos de odontólogos, pacientes, turnos y tiene Login.",
    logos : [
      "./java.png",
      "./spring.png",
      "./html.png",
      "./javascript.png",
      "./css.png"
    ]
  }
]

export const Projects = () => {
  return (
    <div className='container'>
      <div className='projects_header'>
        <FaProjectDiagram className='projects_logo'/>
        <p>Proyectos</p>
      </div>
      <div>
        {
          projects.map((project, index)=>{
            return(
              <div key={index} className='project'>
                <h3 className='project_title'>{project.name}</h3>
                <p className='project_description'>{project.description}</p>
                <div>
                  {project.logos.map((logo,index)=>{
                    return(
                      <img key={index} src={logo} alt="logo" />
                    )
                  })}
                </div>
              </div>
            )

          })
        }
      </div>
      <div>
        <button><GrDeploy/> Deploy</button>
        <button><FaGithub/> Código</button>
      </div>
      
    </div>
  )
}
