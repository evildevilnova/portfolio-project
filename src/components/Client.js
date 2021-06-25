import React from 'react'
import img7 from '../Images/kapil.jpg';
import img8 from '../Images/pradeep.jpg';
import img9 from '../Images/shubham.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Client = () => {
    return (
        <>
            <div className="container-size ">
                <div className="darks">

                    <h2 className="text-center py-md-5 py-4 my-md-0 mb-3 text-warning">TESTIMONIAL</h2>
                    <div className="paraclient">

                        <div className="cols text-center">
                            <Carousel
                                renderThumbs={() => { }}
                            >
                                <div className="cols">
                                    <img src={img8} alt="cleint_image" style={{ height: "8rem", width: "8rem", margin: "20px 0", borderRadius: "50%" }} />
                                    <h3 style={{ color: "#f9ab00" }}>Pradeep Verma</h3>
                                    <div className="px-md-5 px-1 mx-md-5">
                                        <p>The guys did a fantastic job creating a new website for Verma Litz Wire. They weere friendly and nothing was too much trouble. A fantastic service, we would highly recommend and we will continue to work with them.</p>
                                    </div>
                                </div>
                                <div className="cols">
                                    <img src={img9} alt="cleint_image" style={{ height: "8rem", width: "8rem", margin: "20px 0", borderRadius: "50%" }} />
                                    <h3 style={{ color: "#f9ab00" }}>Shubham</h3>
                                    <div className="px-md-5 px-1 mx-md-5">
                                        <p>Very grateful to Nishant Rajput for all the hard work they put into our website, finished product was fantastic. Jessie is such a pleasure to work with, would recommend them!</p>
                                    </div>
                                </div>
                                <div className="cols">
                                    <img src={img7} alt="cleint_image" style={{ height: "8rem", width: "8rem", margin: "20px 0", borderRadius: "50%" }} />
                                    <h3 style={{ color: "#f9ab00" }}>Kapil Rajput</h3>
                                    <div className="px-md-5 px-1 mx-md-5">
                                        <p>An absolute joy to work with Nishant, our businesses have used them for a number of years now for all our website needs and we have always received a first class service and such a quick to response to any queries I have........would highly recommend using them to all! 5 Stars!</p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client
