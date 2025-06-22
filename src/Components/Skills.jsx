// import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaReact, FaNpm, FaMobile, FaNode, FaJsSquare } from "react-icons/fa"
import { BiLogoGit, BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi"
// import { RiNextjsLine } from "react-icons/ri"
import { SiJsonwebtokens,SiSequelize, SiPostgresql } from "react-icons/si"
import { TbBrandFramerMotion, TbMobiledata } from "react-icons/tb"
import { GoCommandPalette } from "react-icons/go"
import Container from "./Container"
import Title from "./Title"
const Skills = () => {
    const variants = {
        hidden: { x: "-100vh", opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }
    return (
        // <AnimatePresence>
        <div id="#skills" className='container max-w-screen-2xl text-center h-fit py-8 bg-white dark:bg-black  dark:text-white rounded-lg'>
            <Title title="Skills" />
            <div className='container skills grid gap-4 sm:grid-cols-3 my-4 px-4 sm:mx-auto'>
                <Container variants={variants} initial="hidden" animate="visible"
                 key="111"
                exit={{ opacity: 0, y: 20 }}>
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaHtml5 className='mx-auto' /></div>
                        
                        <p className='mt-2'>HTML5</p>
                        <p className='mt-2'>Express.js</p>
                    </div>
                </Container>
                <div variants={variants} delay={.1} key="222">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaCss3 className='mx-auto' /></div>
                        <p className='mt-2'>CSS3</p>
                    </div>
                </div>
                <div variants={variants} delay={.1} key="222">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaCss3 className='mx-auto' /></div>
                        <p className='mt-2'>CSS3</p>
                    </div>
                </div>
                <div variants={variants} delay={.2} key="333">
                    <div className='rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaJsSquare className='mx-auto' /></div>
                        <p className='mt-2'>JavaScript (ES6)</p>
                    </div>
                </div>
                <div variants={variants} delay={.3} key="444">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaReact className='mx-auto' /></div>
                        <p className='mt-2'>React.js</p>
                    </div>
                </div>
                <div variants={variants} delay={.4} key="555">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><BiLogoGit className='mx-auto' /></div>
                        <p className='mt-2'>Git</p>
                    </div>
                </div>
                <div variants={variants} delay={.5} key="666">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaGithub className='mx-auto' /></div>
                        <p className='mt-2'>Github</p>
                    </div>
                </div>
                <div variants={variants} delay={.6} key="777">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaNpm className='mx-auto' /></div>
                        <p className='mt-2'>Package Mangers</p>
                    </div>
                </div>
                <div variants={variants} delay={.7} key="888">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaMobile className='mx-auto' /></div>
                        <p className='mt-2'>Responsive Designs</p>
                    </div>
                </div>
                <div variants={variants} delay={.8} key="999">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><FaNode className='mx-auto' /></div>
                        <p className='mt-2'>Node.js</p>
                    </div>
                </div>
                <div variants={variants} delay={.9} key="998">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><BiLogoMongodb className='mx-auto' /></div>
                        <p className='mt-2'>Mongodb</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><SiJsonwebtokens className='mx-auto' /></div>
                        <p className='mt-2'>JWT</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><BiLogoTailwindCss className='mx-auto' /></div>
                        <p className='mt-2'>Tailwind</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><TbBrandFramerMotion className='mx-auto' /></div>
                        <p className='mt-2'>framer motion</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><TbMobiledata className='mx-auto' /></div>
                        <p className='mt-2'>RESTful API's</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><GoCommandPalette className='mx-auto' /></div>
                        <p className='mt-2'>Command line</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><SiPostgresql className='mx-auto' /></div>
                        <p className='mt-2'>Postgresql</p>
                    </div>
                </div>
                <div variants={variants} delay={1} key="997">
                    <div className=' rounded-xl w-full mx-auto py-2'>
                        <div className='text-3xl '><SiSequelize className='mx-auto' /></div>
                        <p className='mt-2'>Postgresql</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills