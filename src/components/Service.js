import React from 'react'
import { Facebook, FileEarmarkCode, Google, Display } from 'react-bootstrap-icons';

const Service = () => {
    return (
        <div id="s" className="bg-light py-4">
            <h2 className="text-center text-secondary textsize"> MY SERVICES</h2>
            <div className="container">
                <div className="row py-5 text-center ">
                    <div className="col-md-3 col pb-md-5 pb-3">
                        <div className="card mx-auto" style={{ width: "16rem", height: "15rem" }}>
                            <div className="card-body">
                            <div className="cardIcon">
                            <Display
                                    size={40}
                                    color="#f9ab00"
                                />
                            </div>
                                
<<<<<<< HEAD
                                <h5 className="card-title pt-md-3 pt-1">UI/UX Development</h5>
=======
                                <h5 className="card-title pt-md-3 pt-1">Web Design</h5>
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                                <p className="card-text">I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col pb-md-5 pb-3">
                        <div className="card mx-auto" style={{ width: "16rem", height: "15rem" }}>
                            <div className="card-body">
                                <FileEarmarkCode
                                    size={40}
                                    color="#f9ab00"
                                />
                                <h5 className="card-title pt-md-3 pt-1">Web Development</h5>
                                <p className="card-text">Your website will be build with an new proven technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col pb-md-5 pb-3">
                        <div className="card mx-auto" style={{ width: "16rem", height: "15rem" }}>
                            <div className="card-body">
                                <Facebook
                                    size={40}
                                    color="#f9ab00"
                                />
<<<<<<< HEAD
                                <h5 className="card-title pt-md-3 pt-1">Facebook Ads</h5>
=======
                                <h5 className="card-title pt-md-3 pt-1">Facebook Ads SMM</h5>
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                                <p className="card-text">Your potential clients well see your service or product on Facebook.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col ">
                        <div className="card mx-auto" style={{ width: "16rem", height: "15rem" }}>
                            <div className="card-body">
                                <Google
                                    size={40}
                                    color="#f9ab00"
                                />
                                <h5 className="card-title pt-md-3 pt-1">Google Ads</h5>
                                <p className="card-text">Your sercice or product will appear at the top the google search.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
