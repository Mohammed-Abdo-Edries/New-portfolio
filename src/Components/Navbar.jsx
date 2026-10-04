import Popup from "reactjs-popup";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || "en";
  const isArabic = currentLanguage === "ar";

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const variants = {
    hidden: { y: -20, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: 25, opacity: 0 },
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    localStorage.setItem("language", currentLanguage);
  }, [currentLanguage, isArabic]);

  return (
    <header
      dir="ltr"
      className="fixed inset-x-0 top-0 z-10 h-14 w-full border-b border-primary/20 bg-white text-primary dark:bg-black dark:text-white sm:h-20"
    >
      <div className="container mx-auto flex h-full max-w-full items-center justify-between px-8 sm:px-12">
        <div dir="ltr" className="px-4 text-xl font-bold">
          <span>Mohamed</span>{" "}
          <span className="text-primary">Portfolio</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <nav dir="ltr" className="hidden items-center gap-4 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                dir="auto"
                className="flex h-8 w-24 items-center justify-center whitespace-nowrap transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t(
              isArabic ? "nav.switchToEnglish" : "nav.switchToArabic"
            )}
            className="rounded-lg border px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-white"
          >
            {isArabic ? "EN" : "عربي"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("nav.toggleTheme")}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-800 transition-transform duration-300 hover:scale-125 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-800"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-orange-200"
                >
                  <BsSunFill />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-purple-700"
                >
                  <BsFillMoonStarsFill />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Popup
            trigger={
              <button
                type="button"
                aria-label="Open menu"
                className="sm:hidden"
              >
                <GiHamburgerMenu className="text-xl" />
              </button>
            }
            closeOnDocumentClick
            position="bottom right"
          >
            <ul className="w-60 rounded-md bg-white shadow-lg dark:bg-slate-950 dark:text-white">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="border-b-2 border-slate-300 px-4 py-2 transition-all duration-200 hover:pl-6"
                >
                  <a href={item.href} dir="auto">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Popup>
        </div>
      </div>
    </header>
  );
};

export default Navbar;