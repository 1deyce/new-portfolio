import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-white text-[26px] leading-10 font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button className="flex items-center gap-2 bg-primaryColor text-white font-[500] ease-in duration-300 py-2 px-4 rounded-[8px] hover:bg-white hover:text-secondaryColor">
                <i className="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Feel free to reach out to me through the contact information
              provided. I look forward to connecting with you !
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Find me here:
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/keenan-deyce-5b9ab3219/"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/1deyce"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-6 sm:gap-16 mt-10">
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-primaryColor"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-primaryColor"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-primaryColor"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-primaryColor"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* footer top */}
      {/* footer bottom */}
      <div className="bg-[#1b1e29] py-4 mt-14">
        <div className="container flex justify-center">
          <div className="flex items-center justify-center sm:justify-between">
            <p className="text-gray-400 text-[14px] text-center">
              Copyright © {year} -
              <a
                className="hover:text-primaryColor"
                href="https://github.com/1deyce"
              >
                {" "}
                1deyce
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      {/* footer bottom */}
    </footer>
  );
};

export default Footer;
