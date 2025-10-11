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
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
function App() {
  const [init, setInit] = useState(false);
  // const maxHeight = 300;
  //   gsap.registerPlugin(ScrollTrigger);
  //   useEffect(() => {
  //     gsap.to("#scroll-progress-vertical", {
  //       height: maxHeight, 
  //       ease: "none", 
  //     scrollTrigger: {
  //       trigger: "body", 
  //       start: "top top", 
  //       end: "bottom bottom", 
  //       scrub: true,
  //     }
  //   });
  //   const timeout = setTimeout(() => {
  //     ScrollTrigger.refresh(true);
  //   },500);
  //   return () => 
  //     clearTimeout(timeout);
  // },[])
  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressEl = document.getElementById("scroll-progress-vertical");
    if (progressEl) {
      // Define your max height (in pixels)
      const maxHeight = 200; // adjust for your preferred visual size
      const newHeight = (scrollPercent / 100) * maxHeight;
      progressEl.style.height = `${newHeight}px`;
    }
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
          value: "#545454",
        },
      },
      fpsLimit: 120,
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
          distance: 150,
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
          speed: 6,
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
    [],
  );
  return (
    <BrowserRouter>   
     <Particles
        id="tsparticles" className=''
        particlesLoaded={particlesLoaded}
        options={options}
      /> 
        <div className="relative rounded-xl z-20">
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
