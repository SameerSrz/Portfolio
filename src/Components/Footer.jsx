import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./stars.scss";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-8 relative background sm:py-9">
      {/* Stars stay in place without making footer large */}
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white">M. Sameer Riaz</h2>
        <p className="mt-2 text-sm text-gray-400">
          Full-Stack Developer | MERN Stack | React & Node.js Enthusiast
        </p>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#work" className="hover:text-white transition">Projects</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          <a href="https://github.com/SameerSrz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaGithub className="text-white text-xl" />
          </a>
          <a href="https://linkedin.com/in/SameerSrz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaLinkedin className="text-white text-xl" />
          </a>
          {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaTwitter className="text-white text-xl" />
          </a> */}
          <a href="mailto:sameerriaz910@gmail.com" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <FaEnvelope className="text-white text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500 pb-12">
          © {new Date().getFullYear()} Sameer Riaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;