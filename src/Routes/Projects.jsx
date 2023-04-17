import React, { useContext } from 'react'
import "./Projects.css"
import { FaProjectDiagram } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import LanguageContext from '../Context/context';


export const Projects = () => {

  const { language } = useContext(LanguageContext)
  const {text} = language
  
  const projects = text.projects.list
  
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
                    
                    <a href={project.github} target='.blank'><button className='button_project'><FaGithub/> {language.id === "EN" ?  "Code" : "Código"}</button></a>
                    
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
