import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaReact,
  FaNpm,
  FaNode,
  FaJsSquare,
} from "react-icons/fa";

import {
  BiLogoGit,
  BiLogoMongodb,
  BiLogoTailwindCss,
} from "react-icons/bi";

import {
  SiJsonwebtokens,
  SiSequelize,
  SiPostgresql,
} from "react-icons/si";

import {
  TbBrandFramerMotion,
  TbMobiledata,
  TbBrandNextjs,
} from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filtersRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "frontend", "backend", "tools"];

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
    { name: "JavaScript", icon: <FaJsSquare />, category: "frontend" },
    { name: "React", icon: <FaReact />, category: "frontend" },
    { name: "CSS", icon: <FaCss3 />, category: "frontend" },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
      category: "frontend",
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      category: "frontend",
    },
    { name: "Next.js", icon: <TbBrandNextjs />, category: "frontend" },

    { name: "Node.js", icon: <FaNode />, category: "backend" },
    { name: "MongoDB", icon: <BiLogoMongodb />, category: "backend" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
    { name: "JWT", icon: <SiJsonwebtokens />, category: "backend" },
    { name: "Sequelize", icon: <SiSequelize />, category: "backend" },
    { name: "RESTful APIs", icon: <TbMobiledata />, category: "backend" },

    { name: "GitHub", icon: <BiLogoGit />, category: "tools" },
    { name: "Git", icon: <FaGithub />, category: "tools" },
    { name: "NPM", icon: <FaNpm />, category: "tools" },
  ];

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        filtersRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".skill-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, [filteredSkills.length]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-10 py-24"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2
          ref={titleRef}
          dir="auto"
          className="mb-8 text-3xl font-bold sm:text-4xl"
        >
          <span>{t("skills.titlePrefix")}</span>{" "}
          {t("skills.titleHighlight") && (
            <span className="text-primary">
              {t("skills.titleHighlight")}
            </span>
          )}
        </h2>

        <div
          ref={filtersRef}
          dir="ltr"
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full bg-primary px-5 py-2 text-white transition-colors duration-300"
                  : "rounded-full bg-white px-5 py-2 dark:bg-transparent"
              }
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <div
          dir="ltr"
          className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              dir="auto"
              className="skill-card flex flex-col items-center rounded-xl border-2 border-primary bg-slate-200 p-6 duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-800"
            >
              <div className="pb-4 text-2xl">
                {skill.icon}
              </div>

              <h3
                dir="auto"
                className="mb-4 text-lg font-semibold"
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;