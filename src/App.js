import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero.jsx';
import "./App.css";
import Aos from 'aos';

function App() {   
  useEffect(() => {
    document.title = "Keenan Deyce | Portfolio"
    Aos.init();
  }, []);
  
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
