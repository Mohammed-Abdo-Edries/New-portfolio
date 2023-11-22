import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaReact, FaNpm, FaMobile, FaJsSquare } from "react-icons/fa"
import { BiLogoGit } from "react-icons/bi"
export const skills =
    [
        { id: 111, icon: <FaHtml5 className='mx-auto' />, text: "HTML5" },
        { id: 222, icon: <FaCss3 className='mx-auto' />, text: "CSS3" },
        { id: 333, icon: <FaJsSquare className='mx-auto' />, text: "JavaScript (ES6)" },
        { id: 444, icon: <FaReact className='mx-auto' />, text: "React.js" },
        { id: 555, icon: <BiLogoGit className='mx-auto' />, text: "Git" },
        { id: 666, icon: <FaNpm className='mx-auto' />, text: "Package Mangers" },
        { id: 777, icon: <FaMobile className='mx-auto' />, text: "Responsive Designs" },
    ]

