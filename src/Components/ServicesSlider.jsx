import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

// Updated Services Data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Full-Stack Web Development',
    description: 'Building high-performance websites with React, Node.js, and MongoDB.',
  },
  {
    icon: <RxCrop />,
    title: 'Custom Web Applications',
    description: 'Creating tailored web apps to fit business needs with scalable architectures.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'Crafting user-friendly and visually appealing designs for a seamless experience.',
  },
  {
    icon: <RxRocket />,
    title: 'Performance Optimization',
    description: 'Enhancing speed, SEO, and user experience through efficient coding techniques.',
  },
  {
    icon: <RxReader />,
    title: 'Technical Consulting',
    description: 'Providing expert guidance on web technologies, scalability, and best practices.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 25 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-auto pb-10"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-[300px] sm:h-[320px] rounded-lg px-8 py-10 flex flex-col items-center justify-between text-center group cursor-pointer hover:bg-[rgba(89,65,169,0.2)] transition-all duration-300">
            {/* Icon */}
            <div className="text-5xl text-accent mb-4">{item.icon}</div>
            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="max-w-[300px] leading-relaxed text-gray-200">{item.description}</p>
            </div>
            {/* Arrow */}
            <div className="text-3xl mt-4">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;