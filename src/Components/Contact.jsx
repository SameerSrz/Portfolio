import { motion } from "framer-motion";
import "./stars.scss";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 md:px-6 intro route bg-image background flex flex-col items-center justify-center"
    >
      {/* Stars must be outside of content */}
      <div id="stars" className="absolute top-0 left-0 w-full h-full" />
      <div id="stars2" className="absolute top-0 left-0 w-full h-full" />
      <div id="stars3" className="absolute top-0 left-0 w-full h-full" />

      {/* Centering wrapper */}
      <div className="container mx-auto flex justify-center">
        <div className="max-w-lg w-full text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
          
          {/* Centered Form */}
          <form className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.input
              type="text"
              placeholder="Your Name"
              whileHover={{ scale: 1.05 }}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              whileHover={{ scale: 1.05 }}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            />
            <motion.textarea
              placeholder="Your Message"
              rows="5"
              whileHover={{ scale: 1.05 }}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;