import React, { useEffect, useState, useRef } from "react";
import "../../index.css";
import "../../App.css";
import "../../styles/toggle.css";

const Header = () => {
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (menuRef.current !== null) {
      menuRef.current.classList.toggle("show__menu");
    }
  };

  return (
    <header className="w-full h-20 leading-[80px] flex items-center dark:bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo start */}
          <div className="flex items-center gap-[10]">
            <span className="w-[50px] h-[50px] text-white text-[30px] font-[500] bg-primaryColor rounded-full flex items-center text-center justify-center cursor-pointer border-black dark:border-white border-2">
              K
            </span>
            <div className="leading-[20px] pl-2">
              <h2 className="text-xl text-black dark:text-white font-[600]">
                Keenan Deyce
              </h2>
              <p className="text-[14px] font-[600] text-primaryColor">
                Portfolio
              </p>
            </div>
          </div>
          {/* logo end */}

          {/* nav  start */}
          <div
            className="menu navbar mx-auto ml-72"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <ul className="md:flex items-center justify-center gap-20 hidden">
              <li>
                <a
                  className="text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor font-[600]"
                  href="#portfolio"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* nav end */}

          {/* toggle start */}
          <label className="switch">
            <span className="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle r="5" cy="12" cx="12"></circle>
                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
              </svg>
            </span>
            <span className="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input
              type="checkbox"
              className="input"
              onChange={handleThemeSwitch}
            />
            <span className="slider"></span>
          </label>
          {/* toggle end */}

          {/* hamburgermenu start */}
          <span
            onClick={toggleMenu}
            className="text-2xl text-smallTextColor dark:text-white md:hidden cursor-pointer"
          >
            <i className="ri-menu-line"></i>
          </span>
          {/* hamburgermenu start */}
        </div>
      </div>
    </header>
  );
};

export default Header;
