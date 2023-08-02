import { useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/UI/Hero.jsx';
import About from './components/UI/About.jsx';
import Services from './components/UI/Services.jsx';
import "./App.css";
import Aos from 'aos';
import { Triangle } from 'react-loader-spinner';

function App() {   
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Keenan Deyce | Portfolio"
    Aos.init();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // value of delay length in ms.
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isloading ? (
        <div className="loader-wrapper flex justify-center items-center h-screen">
          <Triangle
            height="150"
            width="150"
            color="#007ced"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName="" 
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Services/>
        </div>
      )}
    </div>
  );
}

export default App;
