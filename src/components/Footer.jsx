import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/taha-saqib-ai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Taha Saqib on LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/mr-taha-saqib/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Taha Saqib on GitHub"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
