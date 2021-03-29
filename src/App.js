import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particlse from "react-particles-js";
import Navbar from "./Navbar";
import Header from './Header';
import About from './About';
import Service from './Service';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Client from './Client';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Particlse 
        className="particlse_canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      
      <Navbar />
      <Header />
      <About />
      <Service />
      <Experience />
      <Portfolio />
      {/* <Client /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
