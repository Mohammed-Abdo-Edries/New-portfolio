import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Components/footer';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import Chatbot from './Components/chatbot';
import { useTheme } from "../ThemeContext.jsx";

function App() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const Chatbot = lazy(() => import("./Components/chatbot"));
  const particleColor = theme === "dark" ? "#ffffff" : "#0f172a";
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
          value: theme === "dark" ? "#000000" : "#ffffff",
        },
      },
      fpsLimit: 40,
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
          value: theme === "dark" ? "#ffffff" : "#0f172a",
        },
        links: {
          color: theme === "dark" ? "#ffffff" : "#0f172a",
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
          value: 50,
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
    [theme]
  );

  return (
    <BrowserRouter>
     {isChatOpen && (
  <Suspense fallback={null}>
    <Chatbot onClose={() => setIsChatOpen(false)} />
  </Suspense>
)}

<button
  onClick={() => setIsChatOpen(true)}
  aria-label="Open chat"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-transform hover:scale-105"
>
  💬
</button>
      <div className="header">
        <h2>Scroll Indicator</h2>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      
      <div id="email" className="fixed left-6 sm:left-8 bottom-[16rem] sm:bottom-[22rem] w-2 h-16 text-xs z-50 email-vertical">
        <a 
          href="mailto:mohammed.abdo1916@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-1 rounded text-sm"
        >
          mohammed.abdo1916@gmail.com
        </a>
      </div>

      {init && (
  <Particles
    id="tsparticles"
    options={options}
  />
)}
      <div className="relative rounded-xl z-20 text-slate-900 dark:text-white">
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