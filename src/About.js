import React from 'react'
import img from './Nishant.jpg';

const About = () => {
    return (
        <>
          <div id="a" className="container">
              <div className="row py-4">
                  <div className="col-md-6 py-md-5 pb-4 text-center d-flex justify-content-center">
                    <img src={img} className="image" alt="image"  />
                  </div>
                  <div className="col-md-6 text-md-left text-center py-md-5">
                      <h2 className="aboutme text-warning">ABOUT ME</h2>
                      <p>I’m Nishant and i am Front-End Web Developer. It's been 1 years, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good front end web developer projects.I have done my diploma in Computer Engineering.
                         I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                      </p>
                      <p>My Skill Set : HTML5, CSS3, JavaScript, Bootstrap and React js</p>
                      
                      <a href="https://drive.google.com/file/d/1USi6d0P7rkG9op_f2ndlIIPkL1jsaK4C/view?usp=drivesdk" target="_target" className="btn btn-outline-success">Resume</a>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default About
