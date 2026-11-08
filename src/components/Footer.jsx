import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
  href="https://github.com/mr-taha-saqib/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Taha Saqib on GitHub"
>
  <FaGithub size={24} />
</a>

    </footer>
  );
};

export default Footer;
