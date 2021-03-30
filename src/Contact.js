import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_h47xw3q', e.target, 'service_ywkh2p4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        }
    return (
        <>
        {/* #333a41 , */}
        <div id="c" className="py-5" style={{backgroundColor: "#333a41"}}>
          <div className="container">

            <section className="mb-4">
                <h1 className="h1-responsive text-center my-4" style={{color:'orange'}}>CONTACT ME</h1>
                <p className="text-center w-responsive mx-auto mb-5 txt">Please fill out the form and describe your projects needs and I'll contact you as soon as possible.</p>
                <div className="row">
                    <div className="col-md-12 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form form-group">
                                        <input type="text" className="inputfeild" id="name" name="name" placeholder="Name" className="form-control" />
                                    </div>
                                    <div className="md-form form-group">
                                        <input type="email" className="inputfeild" id="email" name="email" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="md-form form-group">
                                        <input type="number" className="inputfeild" id="Phone" name="Phone" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="md-form form-group ">
                                        <input type="text" className="inputfeild" id="subject" name="subject" placeholder="Subject" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form form-group pb-5">
                                        <textarea type="text" id="message" name="message" rows="7" placeholder="Please describle shortly your project.." className="form-control md-textarea" ></textarea>
                                    </div>
                                    <div className="text-center text-md-left">
                                        {/* <a className="btn btn-outline-danger btn-lg btn-block" onclick="document.getElementById('contact-form').submit();">CONTACT ME</a> */}
                                        <button type="submit" className="btn btn-outline-danger btn-lg btn-block">Contact ME</button>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                
                    </div>
                    </div>              
            </section>
          </div>
        </div>
        </>
    )
}

export default Contact
