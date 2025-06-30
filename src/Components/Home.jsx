import React from 'react'
// import { Typewriter } from "react-simple-typewriter"
import { FiGithub } from "react-icons/fi"
import { CiLinkedin, CiMail } from "react-icons/ci"
import Container from './Container'
import Title from './Title'
const Home = () => {
    const variants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: {x: "+100%", opacity: 0}
    }
    return (
        <div id='home' className='container dark:bg-black text-center sm:h-[calc(90vh+0px)] my-10 pt-28 text-xl max-w-full' >
            <img src="/public/IMG.jpg" className='w-80 h-80 mx-auto rounded-full' alt="" />
            <Container delay={0} variants={variants} className='text-xs'>
                Hi, I am
            </Container>
            <Title title="Mohamed Abdo" className='my-2'/>
            <Container delay={.2} variants={variants}>a junior full stack web developer </Container>
            <Container delay={.3} variants={variants}>
                <div className='flex justify-center mt-4 gap-2 text-xl'>
                    <button className='p-1 rounded'>
                    <a href="https://github.com/Mohammed-Abdo-Edries" target="_blank" rel="noopener noreferrer" className="logo">
                        <FiGithub />
                    </a>
                    </button>
                    <button className='p-1 rounded'>
                        <a href="https://www.linkedin.com/in/mohammed-abdo-92249a247" target="_blank" rel="noopener noreferrer" className="logo">
                        <CiLinkedin />
                        </a>
                    </button>
                    <button className='p-1 rounded'>
                    <a href="mailto:mohammed.abdo1916@gmail.com" target="_blank" rel="noopener noreferrer" className="logo">
                        <CiMail />
                </a>
                    </button>
                </div>
            </Container>
            <Container delay={.4} variants={variants}>
                <div className='flex gap-2 justify-center mt-4'>
                    <button className='bg-primary text-white px-8 py-2 text-base rounded-3xl'><a href='#projects' >View My Work</a></button>
                </div>
            </Container>
        </div>
    )
}

export default Home