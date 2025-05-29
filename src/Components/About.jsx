import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
  FaNodeJs,
  FaUnity,
  FaGamepad,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "../varients";
import './stars.scss';

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaReact key="react" />,
          <SiNextdotjs key="next" />, <SiFramer key="framer" />, <FaWordpress key="wordpress" />,
          <FaNodeJs key="node" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: "Game Development",
        icons: [<FaUnity key="unity" />, <FaGamepad key="gamepad" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Intern Game Developer - AxsisLoop", stage: "03-2021 - 07-2021" },
      { title: "Game Developer - HexaExpert", stage: "06-2022 - 09-2022" },
      { title: "Intern Software Engineer - PureLogics", stage: "04-2023 - 06-2023" },
      { title: "Associate Software Engineer - PureLogics", stage: "06-2023 - 11-2023" },
      { title: "Software Engineer - Legalinks", stage: "01-2024 - 02-2025" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "BSSE - University of Central Punjab, Lahore", stage: "2020 - 2025" },
      { title: "Pre-Engineering - Garrison College for Boys, Lahore", stage: "2018 - 2020" },
      { title: "SSC - Garrison Boys High School, Lahore", stage: "2018" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div id="about" className="min-h-screen py-12 text-center text-white bg-image background relative">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">MERN Stack Developer</h2>
        <p className="max-w-lg mx-auto text-white/80 text-sm md:text-lg mt-4">
          I am a skilled MERN-Stack developer with nearly 3 years of experience in designing, developing, and deploying software applications.
        </p>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-12">
          {[
            { label: "Years of Experience", value: 2 },
            { label: "Satisfied Clients", value: 15 },
            { label: "Finished Projects", value: 20 },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 border border-white/20 rounded-lg min-w-[100px]">
              <div className="text-2xl md:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={stat.value} duration={3} /> +
              </div>
              <div className="text-xs uppercase tracking-wide mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all ${
                index === itemIndex ? "bg-accent text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-2xl bg-gray-900 p-6 mt-6 rounded-lg"
        >
          {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col md:flex-row items-center md:justify-between py-2">
              <div className="text-white text-center md:text-left">{item.title}</div>
              <div className="text-gray-400 text-xs md:text-sm">{item.stage}</div>
              {item.icons && <div className="flex gap-3 text-lg text-white">{item.icons}</div>}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;