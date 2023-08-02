import React from 'react';

const Services = () => {
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
                        className="lg:max-w-[1000px] lg:mx-auto text-headingColor dark:text-white font-[500] text-[16px] leading-7"
                    >
                        I create visually appealing, user-friendly websites that deliver an exceptional online presence for your business. Using the latest web technologies and frameworks, I can develop responsive websites that are optimized for speed, performance, and search engine visibility. <br />
                        From informational websites to e-commerce platforms, I can build a solution that helps you connect with your target audience and achieve your online goals. With Flask and Node.js, I can design and develop a scalable and efficient backend architecture for your app.. 
                    </p>
                </div>
                <div className="flex justify-around sm:py-12">
                <div className="w-full py-3 sm:max-w-3xl sm:mx-auto sm:px-0">
                    <div className="relative antialiased text-sm font-semibold">
                    <div className="mt-6 sm:mt-0 sm:mb-12 flex flex-wrap justify-around">
                        {/* ========== first card ========== */}
                        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <div
                            data-aos="fade-right"
                            dat-aos-duration="1200"
                            className="bg-white dark:bg-black hover:dark:bg-primaryColor p-4 rounded-xl group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full"
                        >
                            <h3 className="text-primaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-black group-hover:font-[600] text-xl text-center">Frontend Development</h3>
                            <p className="text-[15px] text-smallTextColor dark:text-white group-hover:text-white dark:group-hover:text-white group-hover:font-[500] leading-7 text-center">
                            Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive interfaces that captivate users and enhance their interaction with your digital products.
                            </p>
                        </div>
                        </div>

                        {/* ========== second card ========== */}
                        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <div
                            data-aos="fade-up"
                            dat-aos-duration="1200"
                            className="bg-secondaryColor dark:bg-white p-4 rounded-xl group cursor-pointer ease-in duration-150 h-full"
                        >
                            <h3 className="text-white dark:text-secondaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-secondaryColor group-hover:font-[600] text-xl text-center">UI/UX Design</h3>
                            <p className="text-[15px] text-white dark:text-secondaryColor group-hover:text-white dark:group-hover:text-secondaryColor group-hover:font-[500] leading-7 text-center">
                            Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive and intuitive interfaces that captivate users and enhance their interaction with your digital products.
                            </p>
                        </div>
                        </div>

                        {/* ========== third card ========== */}
                        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <div
                            data-aos="fade-left"
                            dat-aos-duration="1200"
                            className="bg-white dark:bg-black hover:dark:bg-primaryColor p-4 rounded-xl group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full"
                        >
                            <h3 className="text-primaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-black group-hover:font-[600] text-xl text-center">Backend Development</h3>
                            <p className="text-[15px] text-smallTextColor dark:text-white group-hover:text-white dark:group-hover:text-white group-hover:font-[500] leading-7 text-center">
                            With expertise in server-side programming languages, databases, and frameworks, I can build robust back-end systems to power your software applications and websites. 
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Services;    