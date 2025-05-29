import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const workSlides = [
  [
    { title: "BloomBery", path: "/BloomBerry.png", link: "https://bloombery.shop" },
    { title: "PopInTop", path: "/popintop.png", link: "https://popintop.shop" },
    { title: "Legal Tax Solutions", path: "/legaltaxsolutions.png", link: "https://legaltaxsolutions.net" },
    { title: "Legalinks", path: "/legalinks.png", link: "https://hafiz-legal-solutions.vercel.app/" },
  ],
  [
    { title: "Dev Oriented", path: "/Dev-Oriented.png", link: "https://dev-oriented.vercel.app/" },
    { title: "Shafiq Pak Packaging", path: "/Shafiq-Pak-Packaging.png", link: "#" },
    { title: "ZK TRANSLOGISTICS", path: "/ZK-TRANSLOGISTICS.png", link: "https://truck-dispatch-website.vercel.app/" },
    { title: "Review Hub", path: "/ReviewHub.png", link: "https://review-management-iota.vercel.app/" },
  ],
  [
    { title: "Rent Verse", path: "/RentVerse.png", link: "https://property-management-system-five.vercel.app/" },
    { title: "Digital Payments", path: "/Digital-Payments.png", link: "https://www.digitalpayment.services/" },
  ],
];

const WorkSlider = () => (
  <div className="relative w-full max-w-4xl mx-auto px-4">
    <Swiper
      spaceBetween={16}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="
            width: 8px;
            height: 8px;
            margin: 0 4px;
            background: rgba(255,255,255,0.5);
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.3s ease;
          "></span>`;
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[380px] sm:h-[450px] w-full"
      breakpoints={{
        640: {
          spaceBetween: 20,
        },
        1024: {
          spaceBetween: 24,
        },
      }}
    >
      {workSlides.map((slide, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
            {slide.map((image, idx) => (
              <a
                key={idx}
                href={image.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                {/* Image container */}
                <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3">
                  <img 
                    src={image.path} 
                    alt={image.title} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-gradient-to-r from-accent to-purple-600 p-2 sm:p-3 rounded">
                    <h3 className="text-white text-sm sm:text-base font-bold truncate">{image.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-white/80">View Project</span>
                      <BsArrowRight className="text-white text-sm sm:text-base" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom pagination styling */}
    <style jsx global>{`
      .swiper-pagination {
        position: absolute;
        bottom: 5px !important;
        z-index: 10;
      }
      .swiper-pagination-bullet-active {
        background: #e838cc !important;
        border-color: #e838cc !important;
        transform: scale(1.2);
      }
      @media (min-width: 640px) {
        .swiper-pagination {
          bottom: 10px !important;
        }
      }
    `}</style>
  </div>
);

export default WorkSlider;