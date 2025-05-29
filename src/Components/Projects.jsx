import { motion } from 'framer-motion';
import { fadeIn } from '../varients';
import WorkSlider from './WorkSlider';
import './stars.scss';

const Projects = () => {
  return (
    <div
      id="work"
      className="h-full bg-primary py-16 md:py-24 lg:py-36 flex flex-col items-center intro route bg-image background relative"
    >
      {/* Stars must be outside of content */}
      <div id="stars" className="absolute top-0 left-0 w-full h-full" />
      <div id="stars2" className="absolute top-0 left-0 w-full h-full" />
      <div id="stars3" className="absolute top-0 left-0 w-full h-full" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-[40%] flex flex-col">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl sm:text-4xl font-bold text-gray-100"
            >
              My Work <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-4 text-sm sm:text-base text-gray-300 max-w-[400px] mx-auto lg:mx-0"
            >
              Crafting Digital Experiences with MERN Mastery: As a dedicated MERN Stack developer, 
              I specialize in weaving intricate technologies into seamless digital solutions.
            </motion.p>
          </div>

          {/* Work Slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:w-[60%] h-[300px] sm:h-[480px]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;