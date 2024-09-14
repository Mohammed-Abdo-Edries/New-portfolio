import React from 'react'
import { Typewriter } from "react-simple-typewriter"
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
        <div className='container mx-auto text-center mt-56 mb-64 text-xl' >
            <Container delay={0} variants={variants} className='text-xs'>
                Hi there,it's
            </Container>
            <Title title="Mohamed Abdo" className='my-2'/>
            <Container delay={.2} variants={variants}>I'm A <Typewriter loop={true} cursor={true} words={['frontend developer', 'backend developer']} /> </Container>
            <Container delay={.3} variants={variants}>
                <div className='flex justify-center mt-2 gap-2 text-xl'>
                    <button className='bg-white text-black p-1 rounded'>
                        <FiGithub />
                    </button>
                    <button className='bg-white text-black p-1 rounded'>
                        <CiLinkedin />
                    </button>
                    <button className='bg-white text-black p-1 rounded'>
                        <CiMail />
                    </button>
                </div>
            </Container>
            <Container delay={.4} variants={variants}>
                <div className='flex gap-2 justify-center mt-2'>
                    <button className='bg-blue-700 text-white p-2 rounded-md'><a herf="./cv.pdf" download >Get my Resume</a></button>
                    <button className='bg-blue-700 text-white p-2 rounded-md'>Contact Me</button>
                </div>
            </Container>
        </div>
    )
}

export default Home