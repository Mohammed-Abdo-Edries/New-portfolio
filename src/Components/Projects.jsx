import React from 'react'
import Title from './Title'
import { FiExternalLink } from 'react-icons/fi'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import myImage from '../../Luxury.png'
const Projects = () => {
    return (
        <section id='projects' className='py-24 px-10'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                    {" "}
                    My <span className="text-primary"> Projects </span>
                </h2>
                <div className='text-center sm:flex'>
                    {/* <div className="overflow-hidden shadow-xs py-4 px-4 rounded-lg sm:mr-12
                    bg-slate-200 dark:bg-slate-800 hover:scale-105 duration-300"> */}
                        {/* <div className='py-8 px-2'>
                            <div className='text-xs'>
                                <span className='mr-2 px-2 py-1 border-2 border-slate-500 rounded-2xl'>Next.js</span>
                                <span className='mr-2 px-2 py-1 border-2 border-slate-500 rounded-2xl'>Node.js</span>
                                <span className='mr-2 px-2 py-1 border-2 border-slate-500 rounded-2xl'>MongoDB</span>
                                <span className='px-2 py-1 border-2 border-slate-500 rounded-2xl'>JWT</span>
                            </div>
                            <h3 className='py-4 font-semibold text-xl'>
                            Facebook clone
                            </h3> 
                            <p>
                                
                            </p>
                            <div className='flex text-xl'> 
                            <a href="https://luxury-t0tu.onrender.com" target="_blank" className='pr-2' 
                            rel="noopener noreferrer"><FiExternalLink /></a>
                            <a href="https://github.com/Mohammed-Abdo-Edries/Facebook-front" target='_blank' rel='noopener noreferrer' ><FaGithub /> </a>
                                </div>
                        </div> */}
                        {/* </div> */}
                        <div className="overflow-hidden shadow-xs rounded-lg mt-8 sm:mt-0
                        bg-slate-200 dark:bg-slate-800 hover:scale-105 duration-300">
                            <div className='h-48 overflow-hidden'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={myImage} alt="" />
                            </div>
                            <div className='px-4 py-4'>
                        <div className='py-8 px-2'>
                            <div className='text-xs'>
                            <span className='mr-2 px-2 py-1 border-2 border-slate-400 rounded-2xl'>React</span>
                            <span className='mr-2 px-2 py-1 border-2 border-slate-400 rounded-2xl'>Node.js</span>
                            <span className='mr-2 px-2 py-1 border-2 border-slate-400 rounded-2xl'>MongoDB</span>
                            <span className='px-2 py-1 border-2 border-slate-400 rounded-2xl'>JWT</span>
                        </div>
                        <h3 className='py-4 font-semibold text-xl'>
                        ecommerce website
                        </h3>
                        <p className='pb-4'>
                        an e-commerce platform with user authentication
                        </p>
                        <div className='flex text-xl'>
                        <a href="https://luxury-t0tu.onrender.com" className='pr-2' target="_blank" 
                        rel="noopener noreferrer"><FiExternalLink /></a>
                        <a href="https://github.com/Mohammed-Abdo-Edries/e-commerce-frontend" target='_blank' rel='noopener noreferrer' ><FaGithub /> </a>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                <button className='bg-primary text-white px-8 py-2 text-base flex items-center 
                mx-auto rounded-3xl mt-8 hover:scale-105 duration-300 hover:shadow-xl'>
                    <a href='https://github.com/Mohammed-Abdo-Edries' className='flex font-semibold text-lg' >
                    Check My Github <FaArrowRight className='pl-2 text-2xl pt-2' /></a></button>
            </div>
        </section>
    )
}

export default Projects