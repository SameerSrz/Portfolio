import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const workSlides = [
  [
    { title: "BloomBery", path: "/BloomBerry.png" },
    { title: "PopInTop", path: "/popintop.png" },
    { title: "Legal Tax Solutions", path: "/legaltaxsolutions.png" },
    { title: "Legalinks", path: "/legalinks.png" },
  ],
  [
    { title: "Project 5", path: "/thumb4.jpg" },
    { title: "Project 6", path: "/thumb1.jpg" },
    { title: "Project 7", path: "/thumb2.jpg" },
    { title: "Project 8", path: "/thumb3.jpg" },
  ],
];

const WorkSlider = () => (
  <Swiper spaceBetween={10} pagination={{ clickable: true }} modules={[Pagination]} className="h-[210px] sm:h-[450px]">
    {workSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.map((image, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden group flex items-center justify-center">
              <img src={image.path} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-500">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <span className="delay-100">Live</span>
                  <span className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Projects</span>
                  <BsArrowRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
