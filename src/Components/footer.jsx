// import { ArrowUp } from "lucide-react";

import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative pt-8 flex bg-slate-200
    dark:bg-slate-800 flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm">
        {" "}
        &copy; {new Date().getFullYear()} Mohamed Abdo All rights reserved.
      </p>
      <a
        href="#home"
        className="p-2 rounded-full hover:bg-primary transition-colors"
      >
        {/* <ArrowUp className='w-5 h-5' /> */}
        <FaArrowUp />
      </a>
    </footer>
  );
};
