import Header from './components/Header/Header.jsx';
import "./App.css";
import { useEffect } from 'react';
import Aos from 'aos';

function App() { 
  useEffect(() => {
    document.title = "Keenan Deyce | Portfolio"
    Aos.init();
  }, []);
  
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
