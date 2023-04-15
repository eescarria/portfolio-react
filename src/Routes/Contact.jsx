import React from 'react'
import { GrContactInfo } from "react-icons/gr";
import { FaGithub, FaLinkedin, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import "./Contact.css"

export const Contact = () => {
  return (
    <div className='container'>
      <div className='contact_header'>
        <GrContactInfo className='contact_logo'/>
        <p>Contacto</p>
      </div>
      <p className='leyenda'>No dudes en ponerte en contacto conmigo de cualquier forma!</p>
      <div className='contact_options'>
        <div className='contact_list'>
          <div><FaWhatsapp className='contact_logos'/></div>
          <a href="https://wa.me/573108499764" target="_blank">+57 3108499764</a>
        </div>
        <div className='contact_list'>
          <div><FaLinkedin className='contact_logos'/></div>
          <a href="https://www.linkedin.com/in/estefan%C3%ADa-escarria-garc%C3%ADa-69ab3b57/" target="_blank">estefania-escarria-garcia</a>
        </div>
        <div className='contact_list'>
          <div><FaGithub className='contact_logos'/></div>
          <a href="https://github.com/eescarria" target="_blank">eescarria</a>
        </div>
        <div className='contact_list'>
          <div><FaRegEnvelope className='contact_logos'/></div>
          <a>estefy0114@gmail.com</a>
        </div>
        
      </div>
    </div>
  )
}
