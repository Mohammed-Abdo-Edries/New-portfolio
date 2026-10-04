import { useTranslation } from "react-i18next";
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      dir="ltr"
      className="relative flex flex-col items-center justify-between gap-4 bg-transparent px-6 pb-20 pt-8 dark:bg-slate-800 sm:flex-row sm:px-12 sm:pb-8 sm:pt-12"
    >
      <p
        dir="auto"
        className="text-center text-sm sm:text-left"
      >
        {t("footer.builtBy")}
      </p>

      <a
        href="#home"
        dir="ltr"
        aria-label={t("footer.backToTop")}
        className="mr-0 inline-flex rounded-full p-3 transition-colors hover:bg-primary sm:mr-20"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
};