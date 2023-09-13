import React from "react";
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-black pt-20 pb-20">
      {/* Exp/Edu start */}
      {/* Education Card */}
      <div
        data-aos="fade-up-right"
        data-aos-duration="1500"
        className="container flex justify-center transform transition ease-in duration-500 mb-7"
      >
        <div className="bg-secondaryColor dark:bg-gray-100 w-[660px] md:h-[270px] mt-20 pb-10 rounded-[30px] shadow-md dark:shadow-md shadow-black">
          <h1 className="text-white dark:text-secondaryColor text-center px-10 pt-7 pb-3 font-[700] text-4xl underline-offset-8 underline decoration-2">
            Education
          </h1>
          <p className="text-white dark:text-secondaryColor px-10 pt-2 font-[600] tracking-wider">
            <span className="pr-1.5 text-primaryColor">
              <i className="ri-box-3-fill"></i>
            </span>
            2019 - 2021 : BA Sport Science Degree{" "}
            <span className="text-primaryColor">@ </span>
            <a
              className="hover:text-primaryColor"
              title="UWC"
              href="https://www.linkedin.com/school/uwc/"
              target="_blank"
              rel="noreferrer"
            >
              University of the Western Cape
            </a>
            <br />
            <br />
            <span className="pr-1.5 text-primaryColor">
              <i className="ri-box-3-fill"></i>
            </span>
            Feb - Jul 2023 : Student Software Developer{" "}
            <span className="text-primaryColor">@ </span>
            <a
              className="hover:text-primaryColor"
              title="CapaCiti"
              href="https://www.linkedin.com/showcase/capacitiza/"
              target="_blank"
              rel="noreferrer"
            >
              CapaCiTi (UVU Africa)
            </a>
            <br />
            <br />
            <span className="pr-1.5 text-primaryColor">
              <i className="ri-box-3-fill"></i>
            </span>
            Jul 2023 - Present : Student Software Engineer{" "}
            <span className="text-primaryColor">@ </span>
            <a
              className="hover:text-primaryColor"
              title="ALX"
              href="https://www.linkedin.com/company/alx-africa-sa/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              ALX Africa
            </a>
          </p>
        </div>
      </div>
      {/* Experience Card */}
      <div
        data-aos="fade-up-left"
        data-aos-duration="1500"
        className="container flex justify-center transform transition ease-in duration-500"
      >
        <div className="bg-secondaryColor dark:bg-gray-100 w-[660px] md:h-[200px] mt-10 pb-10 rounded-[30px] cursor-pointer shadow-md dark:shadow-md shadow-black">
          <h1 className="text-white dark:text-secondaryColor text-center px-10 pt-7 pb-3 font-[700] text-4xl underline-offset-8 underline decoration-2">
            Experience
          </h1>
          <p className="text-white dark:text-secondaryColor px-10 pt-3 font-[600] tracking-wider">
            <span className="pr-1.5 text-primaryColor">
              <i className="ri-box-3-fill"></i>
            </span>
            Jun - Dec 2022 : Customer Service Agent{" "}
            <span className="text-primaryColor">@ </span>
            <a
              className="hover:text-primaryColor"
              title="Sirius"
              href="https://www.linkedin.com/company/siriussupport/"
              target="_blank"
              rel="noreferrer"
            >
              Sirius Support
            </a>
            <br />
            <br />
            <span className="pr-1.5 text-primaryColor">
              <i className="ri-box-3-fill"></i>
            </span>
            Jul 2023 - Present : Junior Software Developer{" "}
            <span className="text-primaryColor">@ </span>
            <a
              className="hover:text-primaryColor"
              title="Younglings"
              href="https://www.linkedin.com/company/younglingsafrica/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              Younglings Africa
            </a>
          </p>
        </div>
      </div>
      {/* Exp/Edu end */}
    </section>
  );
};

export default About;
