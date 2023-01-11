
import { React, useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from './components/Header'
import Services from './components/Services';
import Jumbotron  from './components/Jumbotron';
import Portfolio from './components/Portfolio';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';
import './App.scss';
import Footer from './components/Footer';

function App() {
   
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.pageYOffset > 300) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     });
   }, []);
 
   // This function will scroll the window to the top 
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   };
  return (
    
  <Router>
    <div className="App">
      <Header />
      <Jumbotron />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <ArrowUpCircleFill size={50}/>
        </button>
       )}
    </div>
  </Router>

  );
}

export default App;
