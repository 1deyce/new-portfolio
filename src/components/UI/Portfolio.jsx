import React from "react";
import "aos/dist/aos.css";
import Img from "../../assets/images/portfolio-011.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white dark:bg-black pt-20">
      <div className="container mb-20">
        <div className="text-center mb-10">
          <h2 className="text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-6">
            <span className="border-b-2 border-solid border-secondaryColor dark:border-white">
              Portfolio
            </span>
          </h2>
          <p className="lg:max-w-[1000px] lg:mx-auto text-headingColor dark:text-white font-[500] text-[16px] leading-7 pt-6">
            Whether it's web development, graphic design, or any other creative
            endeavor, I always strive for excellence and attention to detail.
            Here, you'll find a showcase of my latest projects, where I've
            poured my creativity and expertise.
          </p>
        </div>
      </div>
      {/* first card */}
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="mx-20 flex justify-around"
      >
        <div className="max-w-sm bg-white dark:border-black rounded-2xl dark:bg-black hover:shadow-md">
          <img className="rounded-2xl pt-1 px-1" src={Img} alt="" />
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryColor dark:text-primaryColor">
              Fitness Trainer Website
            </h5>
            <p className="mb-3 font-normal text-secondaryColor dark:text-white">
              React, Tailwind, CSS, Firebase
            </p>
            <a
              href="https://github.com/1deyce/Gym-website"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:bg-primaryColor hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-primaryColor dark:hover:text-white dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* second card */}
        {/* <div className="max-w-sm bg-secondaryColor border-2 dark:border-white rounded-2xl shadow dark:bg-white">
                    <a href="https://github.com/1deyce/Gym-website" alt=''>
                        <img className="rounded-2xl pt-1 px-1" src={Img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="*">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-primaryColor">Fitness Trainer Website</h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-secondaryColor">React, Tailwind, CSS</p>
                        <a href="*" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div> */}
        {/* third card */}
        {/* <div className="max-w-sm bg-secondaryColor border-2 dark:border-white rounded-2xl shadow dark:bg-white">
                    <a href="https://github.com/1deyce/Gym-website" alt=''>
                        <img className="rounded-2xl pt-1 px-1" src={Img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="*">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-primaryColor">Fitness Trainer Website</h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-secondaryColor">React, Tailwind, CSS</p>
                        <a href="*" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
