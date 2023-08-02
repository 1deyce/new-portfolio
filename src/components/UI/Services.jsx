import React from 'react';

const Services = () => {
    return (
        <section id='services' className='bg-white dark:bg-black pt-20'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-6'>
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
                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-secondaryColor dark:text-white antialiased text-sm font-semibold">
                        {/* ========== vertical line running through the middle ========== */}
                        <div className="hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;    