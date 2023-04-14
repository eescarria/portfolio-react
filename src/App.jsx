import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { Projects } from './Routes/Projects'
import { Contact } from './Routes/Contact'
import { Home } from './Routes/Home'
import { About } from './Routes/About'


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
      
    </div>
  )
}

export default App
