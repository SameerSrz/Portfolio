import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// Navigation data
export const navData = [
  { name: "home", path: "#home", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  { name: "services", path: "#services", icon: <HiRectangleGroup /> },
  { name: "work", path: "#work", icon: <HiViewColumns /> },
  { name: "testimonials", path: "#testimonials", icon: <HiChatBubbleBottomCenterText /> },
  { name: "contact", path: "#contact", icon: <HiEnvelope /> },
];

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <a
            key={index}
            href={link.path} // ✅ Correct way to navigate to sections
            className="relative flex items-center group transition-all duration-300 hover:text-accent"
          >
            {/* Tooltip */}
            <div className="absolute right-full pr-4 hidden group-hover:flex">
              <div className="bg-white text-primary flex items-center p-2 rounded-md shadow-lg relative">
                <span className="text-sm font-semibold capitalize whitespace-nowrap">
                  {link.name}
                </span>
                {/* Triangle (Arrow) */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-y-8 border-y-transparent"></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;