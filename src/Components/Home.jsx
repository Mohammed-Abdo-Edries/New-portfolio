import { FiGithub } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { useEffect,useRef } from "react"
import gsap from "gsap"
import myImage from '../../IMG.jpg'
const Home = () => {
    const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
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
        <section id="home" className="py-24 px-10 relative">
        <div className='container dark:bg-black text-center sm:h-[calc(90vh+0px)]text-xl max-w-full' >
            <img src={myImage} className='w-80 h-80 mx-auto border-2 border-black rounded-full' alt="" />
            <div ref={titleRef} className='flex justify-center my-2 sm:text-6xl font-bold text-3xl'> 
            <div  className='pr-4 whitespace-nowrap'>Hi, I'm</div>
            <span  className='pr-4 text-primary'>Mohamed</span>
            <span  className=''>Abdo</span>
            </div>
            <div key='45' ref={paragraphRef} className='mt-4 max-w-2xl mx-auto'>
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
                    <button className='button bg-primary text-white px-8 py-2 text-base rounded-3xl hover:scale-105 duration-300'><a href='#projects' >View My Work</a></button>
                </div>
            </div>
                </section>
    )
}

export default Home