import React from 'react'
// import Title from './Title'
import { FaBriefcase, FaUser, FaCode } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className="py-24 px-10 relative">
        <div className='container mx-auto max-w-5xl h-fit sm:h-[calc(70vh+0px)]pt-24 text-center'>
            <div className='mb-12 sm:text-4xl font-bold text-3xl'>
                <span>About</span>
                <span className=' pl-4 text-primary'>Me</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='mt-4 max-w-3xl mx-auto'>
                    <p className='font-semibold text-2xl'>
                        Passionate Web Developer & Tech Creator
                    </p>
                    <p className='pt-4'>
                        with 2 years of experience I'm looking forward to learning new technologies and create new projects
                    </p>
                    <p className='pt-4'>
                        I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at 
                        the forefront of the ever-evolving web landscape.
                    </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
                            <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-white hover:scale-105 duration-300">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href=""
                                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 hover:scale-105 duration-300 rounded-xl hover:shadow-xl bg-slate-200 dark:bg-slate-950">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <FaCode className='h-6 w-6' />
                        </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg"> Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive websites and web applications with
                            modern frameworks.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="p-6 hover:scale-105 duration-300 rounded-xl hover:shadow-xl bg-slate-200 dark:bg-slate-950">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <FaUser className='h-6 w-6'/>
                        </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                            Designing intuitive user interfaces and seamless user
                            experiences.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="p-6 hover:scale-105 duration-300 rounded-xl hover:shadow-xl bg-slate-200 dark:bg-slate-950">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <FaBriefcase className='h-6 w-6'/>
                        </div>

                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Project Management</h4>
                        <p className="text-muted-foreground">
                            Leading projects from conception to completion with agile
                            methodologies.
                        </p>
                        </div>
                    </div>
                    </div>
              </div>
            </div>
        </div>
        </section>
    )
}

export default About