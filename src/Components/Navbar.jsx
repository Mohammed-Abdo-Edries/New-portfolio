import Popup from 'reactjs-popup'
import { useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from "../context/ThemeContext";
const Navbar = () => {
    const {theme, toggleTheme} = useTheme("light")
    
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
        <div className='fixed top-0 max-w-full container flex justify-between z-10 bg-white dark:bg-black
text-slate-900 dark:text-white border-b border-primary/20 text-primary h-14 sm:h-20 py-3 sm:py-7 px-8 sm:px-12'>
            <div className='px-4 text-xl font-bold'>
                <span>Mohamed</span>{" "}<span className='text-primary'>Portfolio</span>
            </div>
            <div className='flex ml-auto items-center'>
                <div className='hidden sm:block'>
                    <a className='hover:text-primary transition-colors duration-300' href="#home">Home</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#about">About</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#skills">Skills</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#projects">Projects</a>
                    <a className='pl-4 hover:text-primary transition-colors duration-300' href="#contact">Contact</a>
                </div>
<div className="top-3 sm:top-7 mr-2 text-slate-900 dark:text-white">
      <button
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        className="ml-4 rounded-full p-2 text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-800"
      >
        {theme === "dark" ? <BsSunFill /> : <BsFillMoonStarsFill />}
      </button>
      </div>
                <Popup trigger={<button><GiHamburgerMenu className='ml-2 sm:hidden text-xl'/></button>} closeOnDocumentClick position={"bottom right"}>
                    <ul className='w-60 rounded-md bg-white dark:bg-slate-950 dark:text-white animate-slideInDown shadow-lg'>
                        <li className='pb-2 hover:pl-6 pl-4 py-2 border-slate-300 border-b-2 transition-all duration-200'>
                            <a key={"home"} href="#home">Home</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pl-4 py-2 border-slate-300 border-b-2 transition-all duration-200'>
                            <a key={"about"} href="#about">About Me</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pt-2 border-slate-300 pl-4 border-b-2 transition-all duration-200'>
                            <a key={"skills"} href="#skills">Skills</a>
                        </li>
                        <li className='pb-2 hover:pl-6 py-2 border-slate-300 pl-4 border-b-2 transition-all duration-200'>
                            <a key={"projects"} href="#projects">My Projects</a>
                        </li>
                        <li className='pb-2 hover:pl-6 pl-4 py-2 transition-all duration-200'>
                            <a key={"contact"} href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </Popup>
            </div>
        </div>
    )
}

export default Navbar