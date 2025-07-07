import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/tahasaqib6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
  href="https://github.com/mr-taha-saqib/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub size={24} />
</a>

    </footer>
  );
};

export default Footer;