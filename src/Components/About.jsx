// import Title from './Title'
import { FaBriefcase, FaUser, FaCode } from 'react-icons/fa'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
const About = () => {
const boxRef = useRef(null);
    const titleRef1 = useRef(null);
  const paragraphRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef1.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
    gsap.fromTo(
      titleRef1.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef1.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      }
    );
    gsap.utils.toArray(".skill-card").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=50",
            toggleActions: "restart none restart none",
          },
        }
      );
    });
    gsap.utils.toArray(".button").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        }
      );
    });
  }, []);
    return (
        <section id="about" className="py-24 px-10 relative">
        <div className='container mx-auto max-w-5xl h-fit sm:h-[calc(70vh+0px)]pt-24 text-center'>
            <div ref={titleRef1} className='mb-12 sm:text-4xl font-bold text-3xl'>
                <span>About</span>
                <span className=' pl-4 text-primary'>Me</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='mt-4 max-w-3xl mx-auto'>
                    <p className='font-semibold text-2xl'>
                        Passionate Web Developer & Tech Creator
                    </p>
                    <p ref={paragraphRef} className='pt-4'>
                        with 2 years of experience I'm looking forward to learning new technologies and create new projects
                    </p>
                    <p ref={boxRef} className='pt-4'>
                        I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at 
                        the forefront of the ever-evolving web landscape.
                    </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
                            <a href="#contact" className="button px-6 py-2 rounded-full bg-primary text-white hover:scale-105 duration-300">
                                {" "}
                                Get In Touch
                            </a>

                            <a 
                                href="/mohamedcv.pdf" download
                                className="button px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 hover:scale-105 duration-300 border-2 border-primary rounded-xl bg-slate-200 hover:shadow-xl card-color">
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
                    <div  className="skill-card p-6 hover:scale-105 duration-300 border-2 border-primary rounded-xl hover:shadow-xl bg-slate-200 dark:bg-slate-800">
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
                    <div  className="skill-card p-6 hover:scale-105 duration-300 border-2 border-primary rounded-xl hover:shadow-xl bg-slate-200 dark:bg-slate-800">
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