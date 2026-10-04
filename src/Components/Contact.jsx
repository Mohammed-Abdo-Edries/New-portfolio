import emailjs from "@emailjs/browser";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineMail } from "react-icons/md";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t, i18n } = useTranslation();

  const isArabic = (i18n.resolvedLanguage || "en") === "ar";
  const infoAlignment = isArabic ? "text-right" : "text-left";
  const infoDirection = isArabic ? "rtl" : "ltr";

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

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
        paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.utils
        .toArray(".contact-card, .contact-form")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
            }
          );
        });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_yutqxp8",
        "template_7ukvip4",
        formRef.current,
        "vEjBKvvVFAosxOS7A"
      )
      .then(() => {
        toast.success(t("contact.success"));
        formRef.current.reset();
      })
      .catch(() => {
        toast.error(t("contact.failure"));
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-10 pb-8 pt-24 text-center"
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          dir="auto"
          className="mb-8 text-3xl font-bold sm:text-4xl"
        >
          <span>{t("contact.titlePrefix")}</span>{" "}
          <span className="text-primary">
            {t("contact.titleHighlight")}
          </span>
        </h2>

        <p
          ref={paragraphRef}
          dir="auto"
          className="mx-auto mb-8 max-w-2xl text-lg"
        >
          {t("contact.intro")}
        </p>

        <div
          dir="ltr"
          className="container mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div dir={infoDirection}>
            <h3 className="mb-6 text-2xl font-semibold">
              {t("contact.information")}
            </h3>

            <div className="space-y-4">
              <div
                dir="ltr"
                className="contact-card flex items-start rounded-xl border-2 border-primary bg-slate-200 px-4 py-2 duration-300 hover:scale-105 dark:bg-slate-800"
              >
                <div className="shrink-0 px-4 py-4">
                  <MdOutlineMail className="text-2xl text-primary" />
                </div>

                <div
                  dir={infoDirection}
                  className={`min-w-0 flex-1 ${infoAlignment}`}
                >
                  <h4 className="font-medium">
                    {t("contact.email")}
                  </h4>

                  <a
                    href="mailto:mohammed.abdo1916@gmail.com"
                    dir="ltr"
                    className={`block break-all text-xs transition-colors hover:text-primary sm:text-base ${infoAlignment}`}
                  >
                    mohammed.abdo1916@gmail.com
                  </a>
                </div>
              </div>

              <div
                dir="ltr"
                className="contact-card flex items-start rounded-xl border-2 border-primary bg-slate-200 px-4 py-2 duration-300 hover:scale-105 dark:bg-slate-800"
              >
                <div className="shrink-0 px-4 py-4">
                  <FiPhone className="text-2xl text-primary" />
                </div>

                <div
                  dir={infoDirection}
                  className={`min-w-0 flex-1 ${infoAlignment}`}
                >
                  <h4 className="font-medium">
                    {t("contact.phone")}
                  </h4>

                  <a
                    href="tel:+249112408191"
                    dir="ltr"
                    className={`block transition-colors hover:text-primary ${infoAlignment}`}
                  >
                    +249 112 40 8191
                  </a>
                </div>
              </div>

              <div
                dir="ltr"
                className="contact-card flex items-start rounded-xl border-2 border-primary bg-slate-200 px-4 py-2 duration-300 hover:scale-105 dark:bg-slate-800"
              >
                <div className="shrink-0 px-4 py-4">
                  <FiMapPin className="text-2xl text-primary" />
                </div>

                <div
                  dir={infoDirection}
                  className={`min-w-0 flex-1 ${infoAlignment}`}
                >
                  <h4 className="font-medium">
                    {t("contact.location")}
                  </h4>

                  <span className={`block ${infoAlignment}`}>
                    {t("contact.locationValue")}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4 font-medium">
                {t("contact.connect")}
              </h4>

              <div
                dir="ltr"
                className="flex justify-center gap-4 text-2xl"
              >
                <a
                  href="https://www.linkedin.com/in/mohamed-abdo-edries"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-primary"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/Mohamme05936302?t=99PLgceH8BqbQCXSaUH77w&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="transition-colors hover:text-primary"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://www.instagram.com/moha_abdo4?igsh=cjFnZzFyand1Z3px"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-primary"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            dir={infoDirection}
            className="contact-form rounded-lg border-2 border-primary bg-slate-200 px-8 pb-10 pt-8 text-start shadow-sm dark:bg-slate-800"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              {t("contact.sendTitle")}
            </h3>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                {t("contact.yourName")}
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                required
                dir={infoDirection}
                className="w-full rounded-md border-2 border-slate-300 bg-transparent px-4 py-3 focus:outline-none dark:bg-black"
              />
            </div>

            <div className="my-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                {t("contact.yourEmail")}
              </label>

              <input
  type="email"
  id="email"
  name="email"
  placeholder={t("contact.emailPlaceholder")}
  required
  dir="ltr"
  style={{
    textAlign: isArabic ? "right" : "left",
  }}
  className="w-full rounded-md border-2 border-slate-300 bg-transparent px-4 py-3 focus:outline-none dark:bg-black"
/>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                {t("contact.yourMessage")}
              </label>

              <textarea
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
                dir={infoDirection}
                className="min-h-32 w-full rounded-md border-2 border-slate-300 bg-transparent px-4 py-3 focus:outline-none dark:bg-black"
              />
            </div>

            <button
              type="submit"
              dir="ltr"
              className="flex w-full justify-center gap-2 rounded-3xl bg-primary py-2 text-white duration-300 hover:scale-105"
            >
              <span dir={infoDirection}>{t("contact.send")}</span>
              <TbBrandTelegram className="pt-1 text-xl" />
            </button>
          </form>
        </div>

        <Toaster />
      </div>
    </section>
  );
};

export default Contact;