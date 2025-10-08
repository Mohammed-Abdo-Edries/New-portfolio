import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './Components/footer'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function App() {
  const maxHeight = 300;
gsap.registerPlugin(ScrollTrigger);
gsap.to("#scroll-progress-vertical", {
 height: maxHeight, 
  ease: "none", 
  scrollTrigger: {
    trigger: "body", 
    start: "top top", 
    end: "bottom bottom", 
    scrub: true,
  }
});
  return (
    <BrowserRouter>
    <div className="bg-white dark:bg-black dark:text-white rounded-xl">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
