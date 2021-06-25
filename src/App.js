import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import Particlse from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cube from './components/Cube/Cube';


function App() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     <Cube />
  //   }, 9000);
  //   return () => clearTimeout(timer);
  // }, []);


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
      <Client />
      <Contact />
      <Footer />

    </>
  );
}

export default App;

