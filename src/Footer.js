import React from 'react'

const Footer = () => {
    return (
        <div className="xyz">
            <div className="container pb-0 mb-0 justify-content-center text-light ">
                <footer>
                    <div className="row py-3 justify-content-center ">
                        <div className="col-xl-6 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                            <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> Pepper All Rights Reserved.</small>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 className="mt-55 mt-2 text-muted bold-text"><b>NISHANT</b></h6>
                            <small>
                                 <span>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>  Nishantlodhi2468@gmail.com
                            </small>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                            <h6 className="text-muted bold-text"><b>KAPIL</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> KAPIL@gmail.com</small>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
