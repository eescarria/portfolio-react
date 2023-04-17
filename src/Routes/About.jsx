import React, { useContext } from 'react'
import { BsPersonFill, BsTools } from "react-icons/bs";
import "./About.css"
import LanguageContext from '../Context/context';

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

    const { language } = useContext(LanguageContext)
    const {text} = language

  return (
    <div className='about'>
        <div className='about_header'>
            <BsPersonFill className='about_logo' />
            <div>
                <p>{text.about.title}</p>
                   
            </div>
        </div>
        <p className='about_text'>{text.about.text1}</p>
        <p className='about_text'>{text.about.text2}</p>

        <div className='about2'>
            <div className='about_header'>
                <BsTools className='about_logo'/>
                <div>
                    <p>{text.about.title2}</p>
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
