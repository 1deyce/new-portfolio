import React from 'react'
import 'aos/dist/aos.css';

const About = () => {
    return (
        <section className='bg-white dark:bg-black pt-0'>
            {/* Exp/Edu start */}
            <div
                data-aos='fade-up-right' 
                data-aos-duration="1500"
                className='container flex justify-center transform transition ease-in duration-500 mb-7'
            > {/* Education Card */}
                <div className='bg-secondaryColor dark:bg-secondaryColor w-[660px] h-[250px] mt-20 pb-10 rounded-[30px] shadow-md dark:shadow-md shadow-black'>
                    <h1 className='text-white text-center px-10 pt-7 pb-3 font-[700] text-4xl underline-offset-8 underline decoration-2'>
                        Education
                    </h1>
                    <p className='text-white px-10 pt-2 font-[400] tracking-wider'>
                        <span className='pr-1.5 text-primaryColor'>
                            <i class="ri-box-3-fill"></i>
                        </span>
                            2019 - 2021 : BA Sport Science Degree <span className='text-primaryColor'>@</span>
                            <a 
                                className='hover:text-primaryColor' 
                                title='UWC' 
                                href="https://www.linkedin.com/school/uwc/"
                            > 
                                University of the Western Cape
                            </a>

                            <br /><br />

                        <span className='pr-1.5 text-primaryColor'>
                            <i class="ri-box-3-fill"></i>
                        </span>
                            Feb - Jul 2023 : Student Software Developer <span className='text-primaryColor'>@</span>
                            <a 
                                className='hover:text-primaryColor' 
                                title='CapaCiti' 
                                href="https://www.linkedin.com/showcase/capacitiza/"
                            >
                                CapaCiTi (UVU Africa)
                            </a>

                            <br /><br />

                        <span className='pr-1.5 text-primaryColor'>
                            <i class="ri-box-3-fill"></i>
                        </span>
                            Jul 2023 - Present : Student Software Engineer <span className='text-primaryColor'>@</span>
                            <a 
                                className='hover:text-primaryColor' 
                                title='ALX' 
                                href="https://www.linkedin.com/company/alx-africa-sa/mycompany/"
                            >
                                ALX Africa
                            </a>  
                    </p>
                </div>
            </div>
            {/* Experience Card */}
            <div
                data-aos='fade-up-left'
                data-aos-duration="1500" 
                className='flex justify-center transform transition ease-in duration-500'
            >
                <div className='bg-secondaryColor dark:bg-secondaryColor w-[660px] h-[200px] mt-10 rounded-[30px] cursor-pointer shadow-md dark:shadow-md shadow-black'>
                    <h1 className='text-white text-center px-10 pt-7 pb-3 font-[700] text-4xl underline-offset-8 underline decoration-2'>
                        Experience
                    </h1>
                    <p className='text-white px-10 pt-3 font-[400] tracking-wider'>
                        <span className='pr-1.5 text-primaryColor'>
                            <i class="ri-box-3-fill"></i>
                        </span>
                            Jun - Dec 2022 : Customer Service Agent <span className='text-primaryColor'>@</span>
                            <a 
                                className='hover:text-primaryColor' 
                                title='Sirius' 
                                href="https://www.linkedin.com/company/siriussupport/"
                            >
                                Sirius Support 
                            </a>
                            
                            <br /><br />

                        <span className='pr-1.5 text-primaryColor'>
                            <i class="ri-box-3-fill"></i>
                        </span>
                            Jul 2023 - Present : Junior Software Developer <span className='text-primaryColor'>@</span>
                            <a 
                                className='hover:text-primaryColor' 
                                title='Younglings' 
                                href="https://www.linkedin.com/company/younglingsafrica/mycompany/"
                            >
                                Younglings Africa 
                            </a>
                            
                            <br />
                    </p>
                </div>
            </div>
            {/* Exp/Edu end */}
        </section>
    )
}

export default About; 
