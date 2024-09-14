// import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaReact, FaNpm, FaMobile, FaNode, FaJsSquare } from "react-icons/fa"
import { BiLogoGit, BiLogoMongodb } from "react-icons/bi"
// import Container from './Container'
import { AnimatePresence, motion } from "framer-motion"
import { SiJsonwebtokens } from "react-icons/si"
import Container from "./Container"
import Title from "./Title"
const Skills = () => {
    const variants = {
        hidden: { x: "-100vh", opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }
    return (
        <AnimatePresence>
        <div className='container max-w-screen-2xl text-center h-fit py-8 bg-white rounded-lg'>
            <Title title="Skills" />
            <div className='container skills grid gap-4 sm:grid-cols-3 my-4 px-4 sm:mx-auto'>
                <Container variants={variants} initial="hidden" animate="visible"
                 key="111"
                exit={{ opacity: 0, y: 20 }}>
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaHtml5 className='mx-auto' /></div>
                        <p className='mt-2'>HTML5</p>
                    </div>
                </Container>
                <div variants={variants} delay={.1} key="222">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaCss3 className='mx-auto' /></div>
                        <p className='mt-2'>CSS3</p>
                    </div>
                </div>
                <div variants={variants} delay={.2} key="333">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaJsSquare className='mx-auto' /></div>
                        <p className='mt-2'>JavaScript (ES6)</p>
                    </div>
                </div>
                <div variants={variants} delay={.3} key="444">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaReact className='mx-auto' /></div>
                        <p className='mt-2'>React.js</p>
                    </div>
                </div>
                <div variants={variants} delay={.4} key="555">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><BiLogoGit className='mx-auto' /></div>
                        <p className='mt-2'>Git</p>
                    </div>
                </div>
                <div variants={variants} delay={.5} key="666">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaGithub className='mx-auto' /></div>
                        <p className='mt-2'>Github</p>
                    </div>
                </div>
                <div variants={variants} delay={.6} key="777">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaNpm className='mx-auto' /></div>
                        <p className='mt-2'>Package Mangers</p>
                    </div>
                </div>
                <div variants={variants} delay={.7} key="888">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaMobile className='mx-auto' /></div>
                        <p className='mt-2'>Responsive Designs</p>
                    </div>
                </div>
                <div variants={variants} delay={.8} key="999">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaNode className='mx-auto' /></div>
                        <p className='mt-2'>Node.js</p>
                    </div>
                </div>
                <div variants={variants} delay={.9} key="998">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><BiLogoMongodb className='mx-auto' /></div>
                        <p className='mt-2'>Mongodb</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className='bg-white rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><SiJsonwebtokens className='mx-auto' /></div>
                        <p className='mt-2'>JWT</p>
                    </div>
                </div>
            </div>
        </div>
        </AnimatePresence>
    )
}

export default Skills