import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import About from './Components/About'
function App() {

  return (
    <div className="bg-blue-700 rounded-xl">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
