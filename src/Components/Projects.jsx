import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ecommerceImage from "../../luxury.avif";
import facebookImage from "../../facebook.avif";

gsap.registerPlugin(ScrollTrigger);

const technologies = ["React", "Node.js", "MongoDB", "JWT"];

const projects = [
  {
    id: "facebook",
    titleKey: "projects.facebookTitle",
    descriptionKey: "projects.facebookDescription",
    imageAltKey: "projects.facebookImageAlt",
    image: facebookImage,
    imageHeight: "h-60",
    liveUrl: "https://facebook-clone-chi-one.vercel.app",
    githubUrl:
      "https://github.com/Mohammed-Abdo-Edries/Facebook-front",
  },
  {
    id: "ecommerce",
    titleKey: "projects.ecommerceTitle",
    descriptionKey: "projects.ecommerceDescription",
    imageAltKey: "projects.ecommerceImageAlt",
    image: ecommerceImage,
    imageHeight: "h-48",
    liveUrl: "https://luxury-pink.vercel.app",
    githubUrl:
      "https://github.com/Mohammed-Abdo-Edries/e-commerce-frontend",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.utils
        .toArray(".project-card, .projects-link")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              scrollTrigger: {
                trigger: element,
                start: "top bottom-=100",
                once: true,
              },
            }
          );
        });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      dir="ltr"
      className="px-10 py-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          ref={titleRef}
          dir="auto"
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          {t("projects.titlePrefix") && (
            <span>{t("projects.titlePrefix")} </span>
          )}

          <span className="text-primary">
            {t("projects.titleHighlight")}
          </span>
        </h2>

        <div
          dir="ltr"
          className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group flex min-w-0 flex-col overflow-hidden rounded-lg border-2 border-primary bg-slate-200 shadow-sm duration-300 hover:scale-105 dark:bg-slate-800"
            >
              <div
                className={`${project.imageHeight} shrink-0 overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={t(project.imageAltKey)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-8">
                <div
                  dir="ltr"
                  className="flex flex-wrap justify-center gap-2 text-xs"
                >
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-2xl border-2 border-slate-400 px-2 py-1"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <h3
                  dir="auto"
                  className="py-4 text-xl font-semibold"
                >
                  {t(project.titleKey)}
                </h3>

                <p dir="auto" className="pb-4">
                  {t(project.descriptionKey)}
                </p>

                <div
                  dir="ltr"
                  className="mt-auto flex items-center gap-3 text-xl"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("projects.liveDemo")}: ${t(
                      project.titleKey
                    )}`}
                    className="transition-colors hover:text-primary"
                  >
                    <FiExternalLink />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("projects.sourceCode")}: ${t(
                      project.titleKey
                    )}`}
                    className="transition-colors hover:text-primary"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/Mohammed-Abdo-Edries"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="projects-link inline-flex items-center gap-2 rounded-3xl bg-primary px-8 py-2 text-lg font-semibold text-white duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span dir="auto">{t("projects.viewGithub")}</span>
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;