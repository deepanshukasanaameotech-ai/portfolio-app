import Home from './components/Home'
import Skills from './pages/skills'
import Projects from './pages/projects'
import About from './pages/about'
import GetInTouch from './pages/GetInTouch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Routes>
  
    </Router>
  )
}

export default App
