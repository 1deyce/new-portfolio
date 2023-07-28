import React from 'react';
import "../../index.css";
import "../../App.css";
// import logo1 from "../../assets/images/logo (2).png";
import { Toggle } from "../../components/Toggle";
import { useDarkMode } from '../../styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../../styles/globalStyles';
import { ThemeProvider } from 'styled-components';  

const Header = () => {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
            <header className='w-full h-20 leading-[80px] flex items-center'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        {/* logo start */}
                        <div className='flex items-center gap-[10]'>
                            <span className='w-[50px] h-[50px] text-white text-[30px] font-[500] bg-primaryColor rounded-full flex items-center text-center justify-center cursor-pointer border-black border-2'>
                                K
                            </span>
                            <div className='leading-[20px] pl-2'>
                                <h2 className='text-xl text-primaryColor font-extrabold'>
                                    Keenan Deyce
                                </h2>
                                <p className='text-[14px] font-[500] text-black'>
                                    Personal
                                </p>
                            </div>
                        </div>
                        {/* logo end */}

                        {/* navbar start */}
                        <div className='menu mx-auto ml-64'>
                            <ul className='flex items-center justify-center gap-20'>
                                <li>
                                    <a className='text-black hover:text-primaryColor font-[700]' href="#about">About</a>
                                </li>
                                <li>
                                    <a className='text-black hover:text-primaryColor font-[700]' href="#services">Services</a>
                                </li>
                                <li>
                                    <a className='text-black hover:text-primaryColor font-[700]' href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a className='text-black hover:text-primaryColor font-[700]' href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* navbar end */}

                        {/* nav right start */}
                        <ThemeProvider theme={themeMode}>
                            <div>
                                <GlobalStyles />
                                <Toggle theme={theme} toggleTheme={toggleTheme} />
                            </div>
                        </ThemeProvider>
                        {/* nav right end */}
                    </div>
                </div>
            </header>
    )
}

export default Header;