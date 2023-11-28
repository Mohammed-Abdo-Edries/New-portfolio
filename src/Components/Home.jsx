import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Container from './Container'
const Home = () => {
    const variants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }
    return (
        <div className='container mx-auto text-center my-80' >
            <Container delay={0} variants={variants} className='text-xs'>
                Hi there,it's
            </Container>
            <Container delay={.1} variants={variants} className='my-2'>
                Mohamed Abdo
            </Container>
            <Container delay={.2} variants={variants}>I'm A <Typewriter loop={true} cursor={true} words={['Full-stack developer', 'Data entry clerk']} /> </Container>
            <Container delay={.3} variants={variants}>
                <div className='flex justify-center mt-2 gap-2 text-xl'>
                    <button className='bg-green-800 text-white p-1 rounded'>
                        <FaInstagram />
                    </button>
                    <button className='bg-green-800 text-white p-1 rounded'>
                        <FaGithub />
                    </button>
                    <button className='bg-green-800 text-white p-1 rounded'>
                        <FaLinkedin />
                    </button>
                </div>
            </Container>
            <Container delay={.4} variants={variants}>
                <div className='flex gap-2 justify-center mt-2'>
                    <button className='bg-green-800 text-white p-2 rounded-md'><a herf="./cv.pdf" download >Download CV</a></button>
                    <button className='bg-green-800 text-white p-2 rounded-md'>Contact Me</button>
                </div>
            </Container>
        </div>
    )
}

export default Home