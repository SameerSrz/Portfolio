import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Node.js", level: 85, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 80, icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4 text-blue-500">{skill.icon}</div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;