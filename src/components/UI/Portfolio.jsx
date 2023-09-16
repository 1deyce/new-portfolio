import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import "../../styles/modal.css";
import Img from "../../assets/images/portfolio-011.jpg";
import Img1 from "../../assets/images/blogapp.png";
import Modal from "react-modal";

const Portfolio = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <section id="portfolio" className="bg-white dark:bg-black pt-28 pb-20">
      <div className="container mb-20">
        <div className="text-center mb-10">
          <h2 className="text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-6">
            <span className="border-b-2 border-solid border-secondaryColor dark:border-white">
              Work
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
      {/* Container */}
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="mx-60 flex justify-around gap-0 flex-wrap"
      >
        {/* first card */}
        <div className="max-w-sm bg-white dark:border-black rounded-2xl dark:bg-black hover:shadow-md mb-10">
          <img
            className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-2xl pt-1 px-1"
            src={Img}
            alt=""
            onClick={openModal1}
          />
          <Modal
            isOpen={isModalOpen1}
            onRequestClose={closeModal1}
            contentLabel="Image Modal"
            className="modal bg-black"
            overlayClassName="modal-overlay"
          >
            <div className="modal-content">
              <img src={Img} alt="" className="modal-image" />
              <button
                onClick={closeModal1}
                className="absolute top-0.5 right-3 text-gray-300 hover:text-primaryColor text-[30px] hover:scale-125"
              >
                <span>&times;</span>
              </button>
            </div>
          </Modal>
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryColor dark:text-primaryColor">
              Fitness Trainer Website
            </h5>
            <p className="mb-3 font-normal text-secondaryColor dark:text-white">
              React, Tailwind, CSS
            </p>
            <a
              href="https://github.com/1deyce/Gym-website"
              className="inline-flex items-center px-3 mx-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:bg-primaryColor hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-primaryColor dark:hover:text-white dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              Coming Soon...
              {/* <svg
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
              </svg> */}
            </a>
            <a
              href="https://github.com/1deyce/Gym-website"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:bg-primaryColor hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-primaryColor dark:hover:text-white dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
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
        <div className="max-w-sm bg-white dark:border-black rounded-2xl dark:bg-black hover:shadow-md">
          <img
            className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-2xl pt-1 px-1"
            src={Img1}
            alt=""
            onClick={openModal2}
          />
          <Modal
            isOpen={isModalOpen2}
            onRequestClose={closeModal2}
            contentLabel="Image Modal"
            className="modal bg-black"
            overlayClassName="modal-overlay"
          >
            <div className="modal-content">
              <img src={Img1} alt="" className="modal-image" />
              <button
                onClick={closeModal2}
                className="absolute top-0.5 right-3 text-gray-300 hover:text-primaryColor text-[30px] hover:scale-125"
              >
                <span>&times;</span>
              </button>
            </div>
          </Modal>
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryColor dark:text-primaryColor">
              Modern Blog App
            </h5>
            <p className="mb-3 font-normal text-secondaryColor dark:text-white">
              Next.js, Tailwind CSS, GraphQL
            </p>
            <a
              href="https://modern-blog-app-ten.vercel.app/"
              className="inline-flex items-center px-3 py-2 mx-3 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:bg-primaryColor hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-primaryColor dark:hover:text-white dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
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
            <a
              href="https://github.com/1deyce/modern-blog-app/tree/main/cms_blog"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:bg-primaryColor hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-primaryColor dark:hover:text-white dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
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
      </div>
    </section>
  );
};

export default Portfolio;
