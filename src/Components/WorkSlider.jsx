import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const workSlides = [
  [
    { title: "BloomBery", path: "/BloomBerry.png", link: "https://bloombery.shop" },
    { title: "PopInTop", path: "/popintop.png", link: "https://popintop.shop" },
    { title: "Legal Tax Solutions", path: "/legaltaxsolutions.png", link: "https://legaltaxsolutions.net" },
    { title: "Legalinks", path: "/legalinks.png", link: "https://hafiz-legal-solutions.vercel.app/" },
  ],
];

const WorkSlider = () => (
  <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="h-[300px] sm:h-[450px]"
  >
    {workSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.map((image, idx) => (
            <a
              key={idx}
              href={image.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center w-full min-h-[150px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[250px] rounded-lg overflow-hidden"
            >
              {/* Fixed Image Size */}
              <img src={image.path} alt={image.title} className="w-full h-full object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

              {/* Hover Effect - Text & Arrow */}
              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center">
                <span className="text-white text-sm font-semibold">{image.title}</span>
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white mt-2">
                  <span className="delay-100">Live</span>
                  <BsArrowRight className="text-xl" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;