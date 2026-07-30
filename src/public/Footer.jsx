import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#024d4d] text-white rounded-2xl mt-3">
      <div className="w-[90%] mx-auto py-10 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo & Description */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Vivek Anand</h2>
          <p className="mt-3 text-gray-300 text-sm leading-6 max-w-sm">
            Full Stack Developer passionate about building responsive,
            scalable, and modern web applications using React, FastAPI,
            Python, and MongoDB.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-gray-300">
            <a href="#home" className="hover:text-white duration-300">
              Home
            </a>

            <a href="#about" className="hover:text-white duration-300">
              About
            </a>

            <a href="#skills" className="hover:text-white duration-300">
              Skills
            </a>

            <a href="#services" className="hover:text-white duration-300">
              Services
            </a>

            <a href="#projects" className="hover:text-white duration-300">
              Projects
            </a>

            <a href="#contact" className="hover:text-white duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Connect</h3>

          <div className="flex gap-4 text-2xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white flex justify-center items-center hover:bg-white hover:text-[#024d4d] duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white flex justify-center items-center hover:bg-white hover:text-[#024d4d] duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white flex justify-center items-center hover:bg-white hover:text-[#024d4d] duration-300"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#04665a] py-5 px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Vivek Anand. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white text-[#024d4d] flex justify-center items-center hover:scale-110 duration-300"
        >
          <FaArrowUp />
        </a>

      </div>
    </footer>
  );
}