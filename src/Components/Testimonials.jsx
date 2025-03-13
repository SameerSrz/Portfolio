import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './stars.scss'

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    image: "/Usman.jpeg",
    feedback: "This service exceeded my expectations! Highly recommend for anyone looking for quality work."
  },
  {
    name: "Usman Khan",
    position: "Managing Director at HexaExperts",
    image: "/Usman.jpeg",
    feedback: "As a member of the game development team at HexaExperts, Sameer has proven himself to be an invaluable asset to the company. His exceptional technical skills, creativity, and dedication to his work have contributed greatly to the success of our projects. I highly recommend Sameer for his exceptional skills in game development. He has proven to be a highly talented and creative developer, with a great eye for detail and an excellent understanding of game mechanics. Sameer has consistently produced high-quality games that have received critical acclaim, and he has always demonstrated a deep understanding of the gaming industry and its latest trends. He is always willing to listen to feedback and make changes as needed to ensure that the game meets or exceeds expectations. Overall, Sameer is an excellent game developer who is passionate about his work and committed to delivering top-quality games that exceed expectations. Any company would be lucky to have him on their team."
  },
  {
    name: "Michael Brown",
    position: "Founder, StartupX",
    image: "/user3.jpg",
    feedback: "Great experience! Professionalism and dedication were evident throughout the process."
  }
];

const Testimonials = () => (
  <div id="testimonials" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="py-10 px-5 max-w-4xl mx-auto text-center ">
            <h2 className="text-3xl font-bold mb-6">What My Clients Say</h2>
            <Swiper 
            spaceBetween={30} 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 4000, disableOnInteraction: false }} 
            modules={[Pagination, Autoplay]} 
            className="w-full"
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="bg-white/10 backdrop-blur-sm shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                    <p className="text-gray-200 italic mb-4">"{testimonial.feedback}"</p>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-200">{testimonial.position}</p>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
  </div>
);

export default Testimonials;