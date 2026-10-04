import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaUser, FaCode } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".about-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".about-button").forEach((button) => {
        gsap.fromTo(
          button,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: button,
              start: "top 85%",
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
      id="about"
      className="relative px-10 py-24"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2
          ref={titleRef}
          dir="auto"
          className="mb-12 text-3xl font-bold sm:text-4xl"
        >
          <span>{t("about.titlePrefix")}</span>{" "}
          <span className="text-primary">
            {t("about.titleHighlight")}
          </span>
        </h2>

        <div
          dir="ltr"
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <div className="mx-auto mt-4 max-w-3xl">
            <p
              dir="auto"
              className="text-2xl font-semibold"
            >
              {t("about.role")}
            </p>

            <p
              ref={paragraphRef}
              dir="auto"
              className="pt-4"
            >
              {t("about.paragraphOne")}
            </p>

            <p
              ref={boxRef}
              dir="auto"
              className="pt-4"
            >
              {t("about.paragraphTwo")}
            </p>

            <div
              dir="ltr"
              className="flex flex-col justify-center gap-4 pt-10 sm:flex-row"
            >
              <a
                href="#contact"
                dir="auto"
                className="about-button rounded-full bg-primary px-6 py-2 text-white duration-300 hover:scale-105"
              >
                {t("about.getInTouch")}
              </a>

              <a
                href="/Mohamed_Abdo_Resume.pdf"
                download
                dir="auto"
                className="about-button rounded-full border-2 border-primary px-6 py-2 text-primary duration-300 hover:bg-primary hover:text-white"
              >
                {t("about.downloadCv")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="about-card rounded-xl border-2 border-primary bg-slate-200 p-6 duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-800">
              <div dir="ltr" className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FaCode className="h-6 w-6" />
                </div>

                <div dir="auto" className="text-start">
                  <h3 className="text-lg font-semibold">
                    {t("about.webDevelopment")}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    {t("about.webDevelopmentDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card rounded-xl border-2 border-primary bg-slate-200 p-6 duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-800">
              <div dir="ltr" className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FaUser className="h-6 w-6" />
                </div>

                <div dir="auto" className="text-start">
                  <h3 className="text-lg font-semibold">
                    {t("about.uiuxDesign")}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    {t("about.uiuxDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card rounded-xl border-2 border-primary bg-slate-200 p-6 duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-800">
              <div dir="ltr" className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FaBriefcase className="h-6 w-6" />
                </div>

                <div dir="auto" className="text-start">
                  <h3 className="text-lg font-semibold">
                    {t("about.projectManagement")}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    {t("about.projectManagementDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;