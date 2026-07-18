import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Components/footer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Chatbot from './Components/chatbot';

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById("myBar");
      if (bar) bar.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <BrowserRouter>
      <Chatbot />
      <div className="header">
        <h2>Scroll Indicator</h2>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      
      <div id="email" className="fixed left-6 sm:left-8 text-white bottom-96 w-2 h-16 text-xs z-50 email-vertical">
        <a 
          href="mailto:mohammed.abdo1916@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-1 rounded text-2xl"
        >
          mohammed.abdo1916@gmail.com
        </a>
      </div>

      <Particles
        id="tsparticles" 
        className=""
        particlesLoaded={particlesLoaded}
        options={options}
      /> 
      <div className="relative rounded-xl z-20 text-white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;