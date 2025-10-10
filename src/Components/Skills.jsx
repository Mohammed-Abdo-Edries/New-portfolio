import { FaCss3, FaGithub, FaHtml5, FaReact, FaNpm, FaNode, FaJsSquare } from "react-icons/fa"
import { BiLogoGit, BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi"
import { useState } from "react"
import { SiJsonwebtokens,SiSequelize, SiPostgresql } from "react-icons/si"
import { TbBrandFramerMotion, TbMobiledata, TbBrandNextjs } from "react-icons/tb"
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
// import Title from "./Title"
const Skills = () => {
     const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
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
          start: "top bottom-=50",
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
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        }
      );
    });
  }, []);
    const skills = [
  { name: "HTML", icon: <FaHtml5 /> , category: "frontend" },
  { name: "JavaScript", icon: <FaJsSquare /> , category: "frontend" },
  { name: "React", icon: <FaReact /> , category: "frontend" },
  { name: "CSS", icon: <FaCss3 /> , category: "frontend" },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> , category: "frontend" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> , category: "frontend" },
  { name: "Next.js", icon: <TbBrandNextjs /> , category: "frontend" },

  { name: "Node.js", icon: <FaNode /> , category: "backend" },
  { name: "MongoDB", icon: <BiLogoMongodb /> , category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql /> , category: "backend" },
  { name: "JWT", icon: <SiJsonwebtokens /> , category: "backend" },
  { name: "Sequelize", icon: <SiSequelize /> , category: "backend" },
  { name: "RESTful API's", icon: <TbMobiledata /> , category: "backend" },

  { name: "GitHub", icon: <BiLogoGit /> , category: "tools" },
  { name: "Git", icon: <FaGithub /> , category: "tools" },
  { name: "NPM", icon: <FaNpm /> , category: "tools" },
];
    const variants = {
        hidden: { x: "-100vh", opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }
    const [activeCategory, setActiveCategory] = useState("all");
const categories = ["all", "frontend", "backend", "tools"];
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
    return (
        <section id="skills" className="py-24 px-10">
        <div className='container max-w-5xl text-center mx-auto'>
            <div ref={titleRef} className='text-3xl sm:text-4xl mb-8 font-bold'>
                My <span className=' pl-2 text-primary'>Skills</span>
            </div>
                <div ref={paragraphRef} className="flex flex-wrap justify-center gab-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        >
                            <div 
                            className={(
                                activeCategory === category
                                ? "bg-primary mx-4 text-white px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                                : "bg-white dark:bg-transparent mx-4 px-5 py-2 rounded-full capitalize mt-4 sm:mt-0"
                            )}
                            >
                        {category}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {filteredSkills.map((skill, key) => (
                    <div 
                    key={key}
                    className="skill-card bg-slate-200 dark:bg-slate-800 p-6 rounded-xl border-2 border-primary hover:scale-105 duration-300 hover:shadow-xl flex flex-col items-center"
                    >
                        <div className="text-2xl pl-4 pb-4">{skill.icon}</div>
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg"> {skill.name}</h3>
                    </div>
                    </div>
                ))}
            </div>
            </div>
    </section>
    )
}

export default Skills