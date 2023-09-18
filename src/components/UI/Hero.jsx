import React from "react";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import "../../styles/hero.css";
import ReadMoreReact from "read-more-react";
import heroGif from "../../assets/images/walk_gif.gif";

const Hero = () => {
  return (
    <section id="#home" className="bg-white dark:bg-black pt-0">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left start */}
          <div className="w-full md:w-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-black dark:text-white font-[500] text-[20px]"
            >
              Welcome!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor dark:text-white font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Keenan Deyce, <br />
              <span className="text-primaryColor">a Software Developer.</span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button 
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:dark:bg-white hover:dark:text-black py-2 px-3 rounded-[10px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-secondaryColor duration-500"
                >
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-black dark:text-primaryColor font-[600] text-[16px] border-b border-solid border-primaryColor dark:border-white hover:dark:text-primaryColor"
              >
                See portfolio
              </a>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex max-w-2xl gap-2 text-secondaryColor dark:text-white mt-12 font-[500] text-[18px] leading-7 sm:pr-10"
            >
              <span className="text-primaryColor">
                <i className="ri-apps-2-line"></i>
              </span>
                <ReadMoreReact
                  text={`
                  I am a junior software developer and web developer with a passion for building efficient and user-friendly software solutions. My skills and experience span a variety of programming languages and technologies including front-end, back-end web, and mobile application development.

                  In addition to my technical skills, I am a strong communicator and collaborator. I believe that building strong relationships with clients and team members is key to the success of any project, and I am committed to open communication and transparency throughout the development process.
                  
                  Take some time to browse my portfolio and explore some of the projects I have worked on. Please don't hesitate to get in touch, I look forward to hearing from you and working together to build something great!
                  `}
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText={
                    <span className="text-primaryColor cursor-pointer">
                      read more...
                    </span>
                  }
                />
            </div>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor dark:text-white text-[15px] font-[500]">
                Find me here:
              </span>
              <span className="animate-bounce">
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/keenan-deyce"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondaryColor dark:text-primaryColor text-[20px] font-[500]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="animate-bounce">
                <a
                  title="GitHub"
                  href="https://github.com/1deyce"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondaryColor dark:text-primaryColor text-[20px] font-[500]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Hero left end */}
          {/* Hero img */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:basis-1/2 flex sm:ml-0 text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col justify-center md:text-end pl-20"
          >
            <figure className="flex items-center justify-center">
              <img src={heroGif} alt="" className="mr-20 lg:mr-0 w-72 h-72" />
            </figure>
          </div>
          {/* Hero img */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
