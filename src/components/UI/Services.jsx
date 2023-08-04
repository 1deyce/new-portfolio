import React from 'react';
import 'aos/dist/aos.css';
import "../../App.css";
import html from "../../assets/images/html-5.png"; 
import css from "../../assets/images/css-3.png";
import js from "../../assets/images/js.png";
import node from "../../assets/images/node-js.png";
import tailwind from "../../assets/images/tailwind-css.svg";
import python from "../../assets/images/python.png";
import react from "../../assets/images/physics.png";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";

const Services = () => {
    const images = [
        html,
        css,
        js,
        node,
        react,
        tailwind,
        figma,
        python,
        git,
        github
    ];

    return (
        <section id='services' className='bg-white dark:bg-black pt-20'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-primaryColor dark:text-primaryColor font-[600] text-5xl mb-6'>
                        <span className='border-b-2 border-solid border-secondaryColor dark:border-white'>
                            Services
                        </span>
                    </h2>
                    <p 
                        className="lg:max-w-[1000px] lg:mx-auto text-headingColor dark:text-white font-[500] text-[16px] leading-7 pt-6"
                    >
                        I create visually appealing, user-friendly websites that deliver an exceptional online presence for your business. Using the latest web technologies and frameworks, I can develop responsive websites that are optimized for speed, performance, and search engine visibility. <br />
                        From informational websites to e-commerce platforms, I can build a solution that helps you connect with your target audience and achieve your online goals.
                    </p>
                </div>
                <div className="flex justify-center sm:justify-between sm:py-12">
                    <div className="w-full py-3 sm:max-w-3xl sm:mx-auto sm:px-0">
                        <div className="relative antialiased text-sm font-semibold">
                            <div className="mt-6 sm:mt-0 sm:mb-12 flex flex-wrap justify-between">
                                {/* ========== first card ========== */}
                                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 max-w-xs">
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1200"
                                        className="bg-white dark:bg-black p-4 rounded-xl group cursor-pointer ease-in duration-150 h-full"
                                    >
                                        <h3 
                                            className="text-primaryColor font-[700] mb-2 mt-1 text-xl text-center"
                                        >
                                            Frontend Development
                                        </h3>
                                        <p 
                                            className="text-[15px] text-secondaryColor dark:text-white dark:group-hover:text-white leading-7 text-center"
                                        >
                                            Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive interfaces that captivate users and enhance their interaction with your digital products.
                                        </p>
                                    </div>
                                </div>

                                {/* ========== second card ========== */}
                                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 max-w-xs">
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        className="bg-secondaryColor dark:bg-white p-4 rounded-xl group cursor-pointer ease-in duration-150 h-full"
                                    >
                                        <h3 className="text-white dark:text-secondaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-secondaryColor text-xl text-center">UI/UX Design</h3>
                                        <p className="text-[15px] text-white dark:text-secondaryColor group-hover:text-white dark:group-hover:text-secondaryColor leading-7 text-center">
                                        Using Balsamiq and Figma, I create intuitive and visually appealing user interfaces and then translate the design concepts into code, ensuring a seamless and engaging frontend experience for our users.
                                        </p>
                                    </div>
                                </div>

                                {/* ========== third card ========== */}
                                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 max-w-xs">
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1200"
                                        className="bg-white dark:bg-black p-4 rounded-xl group cursor-pointer ease-in duration-150 h-full"
                                    >
                                        <h3 className="text-primaryColor font-[700] mb-2 mt-1 text-xl text-center">Backend Development</h3>
                                        <p className="text-[15px] text-smallTextColor dark:text-white dark:group-hover:text-white leading-7 text-center">
                                        With expertise in server-side programming languages, databases, and frameworks, I can build robust back-end systems to power your software applications and websites. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infinite Slider */}
                <div className="flex items-center min-h-[200px] justify-center">
                    {/* 1 */}
                    <div className="w-[200%] h-20 border-t border-b border-white dark:border-black overflow-hidden relative animate-infinite-slider">
                        {/* 2. */}
                        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate-infinite-slide">
                            {/* 3 */}
                            {images.map((image) => {
                                return (
                                <div className="flex justify-center items-start w-[20rem]">
                                    <img className='h-16 w-16' src={image} alt=''/>
                                </div>
                                );
                            })}
                            {images.map((image) => {
                                return (
                                <div className="flex justify-center items-start w-[20rem]">
                                    <img className='h-16 w-16' src={image} alt=''/>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;