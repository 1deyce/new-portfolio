import React from 'react';
import "../../index.css";


const Header = () => {
    return (
        <header className='w-full h-20 leading-[80px] flex items-center bg-black'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* logo start */}
                    <div className='flex items-center gap-[10]'>
                        <span className='w-[50px] h-[50px] text-white text-[30px] font-[500] bg-primaryColor rounded-full flex items-center text-center justify-center cursor-pointer border-white border-2'>
                            K
                        </span>
                        <div className='leading-[20px] ml-2'>
                            <h2 className='text-xl text-primaryColor font-extrabold'>
                                Keenan Deyce
                            </h2>
                            <p className='text-[14px] font-[500] text-white'>
                                Personal
                            </p>
                        </div>
                    </div>
                    {/* logo end */}

                    {/* navbar start */}
                    <div className='menu mx-auto'>
                        <ul className='gap-20 flex'>
                            <li>
                                <a className='text-white hover:text-primaryColor font-[500]' href="#about">about</a>
                            </li>
                            <li>
                                <a className='text-white hover:text-primaryColor font-[500]' href="#services">services</a>
                            </li>
                            <li>
                                <a className='text-white hover:text-primaryColor font-[500]' href="#portfolio">portfolio</a>
                            </li>
                            <li>
                                <a className='text-white hover:text-primaryColor font-[500]' href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;