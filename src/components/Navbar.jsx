import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled && "bg-primary"
      }  `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="A" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Arham
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Links) => (
            <li
              className={`${
                active === Links.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium cursor-pointer text-[18px]`}
              onClick={() => setActive(Links.title)}
              key={Links.id}
            >
              <a
                href={`
              #${Links.id}`}
              >
                {Links.title}
              </a>
            </li>
          ))}
        </ul>

        {/* -------- for mobile devices ------ */}
        <div className="sm:hidden flex flex-1  justify-end items-center">
          <img
            src={open ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${
              !open ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Links) => (
                <li
                  className={`${
                    active === Links.title ? "text-white" : "text-secondary"
                  } hover:text-white font-medium cursor-pointer`}
                  onClick={() => setActive(Links.title)}
                  key={Links.id}
                >
                  <a
                    href={`
              #${Links.id}`}
                  >
                    {Links.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
