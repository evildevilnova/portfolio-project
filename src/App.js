import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
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
<<<<<<< HEAD


function App() {
=======
import Cube from './components/Cube/Cube';


function App() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     <Cube />
  //   }, 9000);
  //   return () => clearTimeout(timer);
  // }, []);
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f


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

