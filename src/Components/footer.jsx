// import { ArrowUp } from "lucide-react";

import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 relative flex
    dark:bg-slate-800 flex-wrap justify-between items-center">
      <p className="text-sm ml-12">
        built by Mohamed Abdo.
      </p>
      <a
        href="#home"
        className="p-2 rounded-full hover:bg-primary transition-colors"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
};
