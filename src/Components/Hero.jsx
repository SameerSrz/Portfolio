import React from "react";
import "./stars.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
          <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 px-12">
                {/* Logo */}
                <div>
                  <img 
                      src="/logo.png" 
                      width={80} 
                      height={12} 
                      className="bg-none" 
                      alt="Logo"
                    />
                </div>
                {/* Socials */}
                <Socials />
              </div>
            </div>
          </header>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am M. Sameer Riaz</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Full-Stack Engineer",
                    1000,
                    "Tech Enthusiast",
                    1000,
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl mt-4 text-gray-600 dark:text-gray-400"
                />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="mt-8 px-6 py-2 bg-blue-500 text-white js-scroll rounded-lg"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;