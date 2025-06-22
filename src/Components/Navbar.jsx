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
        <div className='sticky top-0 max-w-full backdrop-blur-2xl z-10 backdrop-brightness-90 bg-stone-400 h-12 py-2 px-8'>
            <div className='container flex justify-between'>
                <div className='px-4'>
                    Portfolio
                </div>
                <div className='flex ml-auto'>
                {theme === 'dark' ?
            <AnimatePresence mode='wait' >
              {theme === "dark" && (
                <motion.button key='sun' variants={variants} initial='hidden'
                  animate="enter"
                  exit='exit'
                  transition={{ duration: 0.3 }}
                  className='w-9 h-8 px-2 rounded bg-orange-200 text-gray-900'
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
                  className='px-2 w-9 h-8 rounded bg-purple-700 text-white'
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                  }}>
                  <BsFillMoonStarsFill className='' />
                </motion.button>
              )}
            </AnimatePresence>
          }
                <Popup trigger={<button><GiHamburgerMenu className='ml-2'/></button>} closeOnDocumentClick position={"bottom right"}>
                    <ul className='w-60 pl-10 py-2 rounded-md bg-blue-700 text-white dark:bg-white dark:text-black'>
                        <li className='pb-2 hover:pl-2'>
                            <a  href="#skills">Skills</a>
                        </li>
                        <li className='pb-2 hover:pl-2'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='pb-2 hover:pl-2'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </Popup>
          </div>
            </div>
        </div>
    )
}

export default Navbar