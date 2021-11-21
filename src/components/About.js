import React from 'react'
import img from '../Images/Nishant1.jpg';

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
<<<<<<< HEAD
                      <p>I’m Nishant, presently working as Full Stack developer and having 6 months exprience in Kaamcube Service Private Ltd & IOTFY Solution Pvt Ltd. I'm also developed many website that provide IT expertise, and work intensively on client projects .I persued Computer Engineering diploma from Guru Nanak Dev Institute of Technology. 
                         
                      </p>
                      {/* <p>I’m Nishant and i am Full Stack Web Developer. It's been 9 months, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good full stack web developer projects.I have done my diploma in Computer Engineering.
                         I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                      </p> */}
                      <h5>My Skill Set </h5><p><span className="font-weight-bold"> HTML5, CSS3, JavaScript, Bootstrap and React js.
                                        Node js, Express js, Mongodb, Redux, Postman, 
                                        Git, SCSS, SEO, VScode, DigitalOcean, Linux</span></p>
                       <p>Curriculum vitae(CV)</p>
                      
                      <a href="https://drive.google.com/file/d/1I02EgdPhAhhLipLIyDdkF8F3qm6W7w-w/view?usp=sharing" target="_target" className="btn btn-outline-success">Download</a>
=======
                      <p>I’m Nishant and i am Full Stack Web Developer. It's been 1 years, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good full stack web developer projects.I have done my diploma in Computer Engineering.
                         I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                      </p>
                      <p>My Skill Set : HTML5, CSS3, JavaScript, Bootstrap and React js.
                                        Node js, Express js, Mongodb, Redux, Postman, 
                                        Git, SCSS, SEO, VScode, DigitalOcean, Linux,</p>
                       <p>Curriculum vitae(CV)</p>
                      
                      <a href="https://drive.google.com/file/d/17CWB6yRqswixNn2NuyhLssUs8FprN96G/view?usp=drivesdk" target="_target" className="btn btn-outline-success">Download</a>
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                  </div>
              </div>
          </div>  
        </>
    )
}

export default About
