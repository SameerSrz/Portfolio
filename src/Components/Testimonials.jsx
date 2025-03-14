import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./stars.scss";

const testimonials = [
  {
    name: "Mushood H",
    position: "Software Engineer",
    feedback:
      "I have had the pleasure of working closely with Sameer as their mentor during their journey into the MERN stack development and JavaScript world. Sameer is a remarkable talent, and I am excited to provide this recommendation to highlight his exceptional skills and dedication. Sameer possesses a unique blend of skills and knowledge that sets him apart. Having initially gained experience in game development using C#, he seamlessly transitioned into the world of JavaScript and the MERN stack. His strong foundation in JavaScript and object-oriented programming, honed through his work in game development, has been a valuable asset to our team. One of the most striking aspects of Sameer's work is his passion for learning and problem-solving. He consistently demonstrates a deep understanding of JavaScript, showing proficiency that goes well beyond his years. His ability to grasp complex concepts and apply them to real-world projects is truly impressive. What truly sets Sameer apart is his dedication and commitment to excellence. He consistently takes the initiative to tackle challenging tasks, and his work consistently exceeds expectations. Sameer is a collaborative team player who is always willing to lend a helping hand to colleagues, making him a pleasure to work with. I have no doubt that Sameer will continue to excel and make significant contributions in his software engineering career. I wholeheartedly recommend him to any organization seeking a talented and motivated software engineer who is passionate about technology and dedicated to producing high-quality results. It has been a pleasure to work with Sameer, and I have no doubt that he has a bright future ahead.",
  },
  {
    name: "Usman Khan",
    position: "Managing Director at HexaExperts",
    feedback:
      "As a member of the game development team at HexaExperts, Sameer has proven himself to be an invaluable asset to the company. His exceptional technical skills, creativity, and dedication to his work have contributed greatly to the success of our projects. I highly recommend Sameer for his exceptional skills in game development. He has proven to be a highly talented and creative developer, with a great eye for detail and an excellent understanding of game mechanics. Sameer has consistently produced high-quality games that have received critical acclaim, and he has always demonstrated a deep understanding of the gaming industry and its latest trends. He is always willing to listen to feedback and make changes as needed to ensure that the game meets or exceeds expectations. Overall, Sameer is an excellent game developer who is passionate about his work and committed to delivering top-quality games that exceed expectations. Any company would be lucky to have him on their team.",
  },
  // {
  //   name: "Michael Brown",
  //   position: "Founder, StartupX",
  //   feedback:
  //     "Great experience! Professionalism and dedication were evident throughout the process.",
  // },
];

const Testimonials = () => (
  <div id="testimonials" className="intro route bg-image background">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div className="py-10 px-5 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
        What My Clients Say
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-[90%] md:w-full sm:p-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-md rounded-lg p-6 sm:p-8"
          >
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 150; // Number of characters before truncating

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-200 italic text-sm md:text-base text-justify leading-relaxed max-w-full">
        {expanded ? testimonial.feedback : `${testimonial.feedback.slice(0, previewLength)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-400 text-sm hover:underline"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
      <h3 className="font-semibold mt-4">{testimonial.name}</h3>
      <p className="text-xs md:text-sm text-gray-400">{testimonial.position}</p>
    </div>
  );
};

export default Testimonials;