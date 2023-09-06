import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Triangle } from 'react-loader-spinner';
import "./App.css";
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from './components/Header/Header.jsx';
import Hero from './components/UI/Hero.jsx';
import About from './components/UI/About.jsx';
import Services from './components/UI/Services.jsx';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const isMobile = useMediaQuery({ maxWidth: '640px' });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Keenan Deyce | Portfolio"
    Aos.init();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2700); // value of delay length in ms.

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='overflow-hidden'>
      {isloading ? (
        <div className="loader-wrapper flex justify-center items-center h-screen">
          <Triangle
            height="100"
            width="100"
            color="#007ced"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          {/* <p className='text-primaryColor text-xl font-extrabold'>Loading...</p> */}
        </div>
      ) : (
        <div className={`min-h-screen ${isMobile ? 'overflow-hidden' : ''}`}>
          <Header />
          <main />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <main />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
