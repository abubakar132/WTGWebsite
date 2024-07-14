import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
/* import Logo from "../../assets/website/Vector.png"; */
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name:"Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Careers",
    link: "/#careers",
  },
];


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 w-full bg-black1 text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1"
            className="flex items-center gap-3"
          >
  {/*           <img src={Logo} alt="" className="w-5" /> */}
            <span className="text-2xl sm:text-3xl font-semibold">
              WTG
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="bg-neonPink text-dark shadow-neon px-4 py-2 rounded-md hover:bg-dark hover:text-neonPink transition duration-300"
                onClick={() => window.location.href = "#contact"}
              >
                Get in Touch
              </button>
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
