import Popup from 'reactjs-popup'
import { useState, useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {BsSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
const Navbar = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme])
      const variants = {
        hidden: { y: -20, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        exit: { y: 25, opacity: 0 }
      }
    return (
        <div className='fixed top-0 max-w-full container flex justify-between backdrop-blur-2xl z-10 backdrop-brightness-90 bg-white/10 h-14 sm:h-20 dark:text-white py-3 sm:py-7 px-8 sm:px-12'>
                <div className='px-4 text-xl font-bold'>
                <span className=''>Mohamed</span>{" "}<span className='text-primary'>Portfolio</span>
                </div>
                <div className='flex ml-auto'>
                  <div className='hidden sm:block'>
                    <a className='hover:text-primary transition-colors duration-300' href="#home">Home</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#about">About</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#skills">Skills</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#projects">Projects</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#contact">Contact</a>
                  </div>
                {theme === 'dark' ?
            <AnimatePresence mode='wait' >
              {theme === "dark" && (
                <motion.button key='sun' variants={variants} initial='hidden'
                  animate="enter"
                  exit='exit'
                  transition={{ duration: 0.3 }}
                  className='w-9 h-8 px-4 rounded text-orange-200'
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                  }}>
                  <BsSunFill className='' />
                </motion.button>
              )}
            </AnimatePresence>
            :
            <AnimatePresence mode='wait' >
              {theme === "light" && (
                <motion.button key='moon' initial="hidden"
                  animate="enter" variants={variants}
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className='px-4 w-9 h-8 rounded text-purple-700'
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                  }}>
                  <BsFillMoonStarsFill className='' />
                </motion.button>
              )}
            </AnimatePresence>
          }
                <Popup trigger={<button><GiHamburgerMenu className='ml-2 sm:hidden'/></button>} closeOnDocumentClick position={"bottom right"}>
                    <ul className='w-60 rounded-md bg-white dark:bg-slate-950 dark:text-white animate-slideInDown'>
                        <li className='pb-2 hover:pl-6 pl-4 py-2 border-slate-300 border-b-2'>
                            <a key={"home"} href="#home">Home</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pl-4 py-2 border-slate-300 border-b-2'>
                            <a key={"about"} href="#about">About Me</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pt-2 border-slate-300 pl-4 border-b-2'>
                            <a key={"skills"} href="#skills">Skills</a>
                        </li>
                        <li className='pb-2 hover:pl-6 py-2 border-slate-300 pl-4 border-b-2'>
                            <a key={"projects"} href="#projects">My Projects</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pl-4 py-2'>
                            <a key={"contact"} href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </Popup>
          </div>
    </div>
    )
}

export default Navbar