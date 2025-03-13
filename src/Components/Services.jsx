import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import ServiceSlider from "./ServicesSlider";
import "./stars.scss";

const Services = () => {
  return (
    <div
      id="services"
      className="relative h-full py-20 md:py-36 flex items-center intro route bg-image background"
    >
      {/* Animated Stars */}
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* Text Content */}
          <div className="text-center xl:text-left xl:w-[35%] w-full">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              My Services <span className="text-blue-600">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-4 text-gray-200 text-sm md:text-base max-w-md mx-auto xl:mx-0"
            >
              As a MERN Stack developer, I offer a range of comprehensive
              services to bring your digital ideas to life. With expertise in
              MongoDB, Express.js, React, and Node.js, I build scalable and
              efficient applications.
            </motion.p>
          </div>

          {/* Services Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[58%] flex justify-center items-center mt-8 xl:mt-0"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;