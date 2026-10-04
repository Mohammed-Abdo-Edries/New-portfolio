import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import gsap from "gsap";
import myImage from "../../image.avif";

const Home = () => {
const { t, i18n } = useTranslation();

const isArabic = (i18n.resolvedLanguage || "en") === "ar";

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const socialRef = useRef(null);
  // const buttonRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(titleRef.current, {
          opacity: 0,
          y: -30,
          duration: 1,
        })
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          socialRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        // .from(
        //   buttonRef.current,
        //   {
        //     opacity: 0,
        //     y: 20,
        //     duration: 0.8,
        //   },
        //   "-=0.6"
        // );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative px-10 py-16">
  <div className="container mx-auto flex min-h-[calc(100vh-5rem)] max-w-full flex-col items-center justify-center text-center text-xl">
        <img
  src={myImage}
  alt="Mohamed Abdo"
  className="relative top-4 mx-auto h-64 w-64 rounded-full border-2 border-black sm:h-72 sm:w-72"
/>

        <h1
  ref={titleRef}
  dir={isArabic ? "rtl" : "ltr"}
  className="my-2 text-3xl font-bold sm:text-6xl"
>
  <span>{t("home.intro")}</span>{" "}
  <span className="text-primary">{t("home.firstName")}</span>{" "}
  <span>{t("home.lastName")}</span>
</h1>

        <p ref={paragraphRef} dir="auto" className="mt-4 max-w-2xl">
          {t("home.description")}
        </p>

        <div
          ref={socialRef}
          dir="ltr"
          className="mt-4 flex justify-center gap-2 text-2xl"
        >
          <a
            href="mailto:mohammed.abdo1916@gmail.com"
            aria-label={t("home.emailLabel")}
            className="rounded p-1"
          >
            <CiMail />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-abdo-edries"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("home.linkedinLabel")}
            className="rounded p-1"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Mohammed-Abdo-Edries"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("home.githubLabel")}
            className="rounded p-1"
          >
            <FiGithub />
          </a>
        </div>

       <a
  href="#projects"
  dir="auto"
  className="relative z-10 mt-6 inline-block rounded-3xl bg-primary px-8 py-2 text-base text-white opacity-100 transition-transform duration-300 hover:scale-105"
>
  {t("home.viewWork")}
</a>
      </div>
    </section>
  );
};

export default Home;