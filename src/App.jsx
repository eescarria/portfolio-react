import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { Projects } from './Routes/Projects'
import { Contact } from './Routes/Contact'
import { Home } from './Routes/Home'
import { About } from './Routes/About'
import { useState } from 'react'
import LanguageContext, { languages } from './Context/context';


function App() {

  const [language, setLanguage] = useState(languages.spanish);

  const handleChangeLA = () => {
    if(language === languages.english) setLanguage(languages.spanish)
    if(language === languages.spanish) setLanguage(languages.english)
        
  }
  
  return (
    <LanguageContext.Provider value={{language, handleChangeLA}}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
        
        
      </div>
    </LanguageContext.Provider>
  )
}

export default App
