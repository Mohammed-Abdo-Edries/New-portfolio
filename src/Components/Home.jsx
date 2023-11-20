import React from 'react'
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Container from './Container'
const Home = () => {

    return (
        <div className='container mx-auto text-center my-60' >
            <Container delay={0} className='text-xs'>
                Hi there,it's
            </Container>
            <Container delay={.2} className='my-2'>
                Mohamed Abdo
            </Container>
            <div>I'm A <Typewriter loop={true} cursor={true} words={['Full-stack developer', 'Data entry clerk']} /> </div>
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
            <Container delay={.4}>
                <div className='flex gap-2 justify-center mt-2'>

                    <button className='bg-green-800 text-white p-2 rounded-md'><a herf="./cv.pdf" download >Download CV</a></button>
                    <button className='bg-green-800 text-white p-2 rounded-md'>Contact Me</button>
                </div>
            </Container>
        </div>
    )
}

export default Home