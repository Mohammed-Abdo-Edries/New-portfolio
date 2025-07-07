import React from 'react'
// import { Typewriter } from "react-simple-typewriter"
import { FiGithub } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import Container from './Container'
import Title from './Title'
import ScrollAnimation from './Animation'
const Home = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: {opacity: 1 },
        exit: { opacity: 0}
    }
    const variants2 ={
        hidden: { opacity: 0, y: 30 },
        visible: {opacity: 1, y: 0 },
        exit: { opacity: 0}
    }
    return (
        <section id="home" className="py-24 px-10 relative">
        <div className='container dark:bg-black text-center sm:h-[calc(90vh+0px)]text-xl max-w-full' >
            <img src="/IMG.jpg" className='w-80 h-80 mx-auto border-2 border-black rounded-full' alt="" />
            <div className='flex justify-center my-2 sm:text-6xl font-bold text-3xl'> 
            <span  key='123' className='pr-4'>Hi, I'm</span>
            <span  className='pr-4 text-primary'>Mohamed</span>
            <span  className=''>Abdo</span>
            </div>
            <div key='45' className='mt-4 max-w-2xl mx-auto'>
                I create stellar web experiences with modern technologies. Specializing in front-end development,
                 I build interfaces that are both beautiful and functional.
                 </div>
                <div key='88' className='flex justify-center mt-4 gap-2 text-xl'>
                    <a href="https://github.com/Mohammed-Abdo-Edries" taret="_blank" rel="noopener noreferrer" className="p-1 rounded text-2xl">
                        <FiGithub />
                    </a>
                        <a href="https://www.linkedin.com/in/mohammed-abdo-92249a247" target="_blank" rel="noopener noreferrer" className="p-1 rounded text-2xl">
                        <FaLinkedin />
                        </a>
                    <a href="mailto:mohammed.abdo1916@gmail.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded text-2xl">
                        <CiMail />
                </a>
            </div>
                <div key='786' animation='slideInUp' className='duration-1500 delay-3000 mt-4'>
                    <button className='bg-primary text-white px-8 py-2 text-base rounded-3xl hover:scale-105 duration-300'><a href='#projects' >View My Work</a></button>
                </div>
            </div>
                </section>
    )
}

export default Home