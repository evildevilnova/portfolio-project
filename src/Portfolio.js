import React, { useState } from 'react'
import img1 from "./netflix.jpg";
import img2 from "./notes.png";
import img3 from "./enterprises.png";
import img4 from "./tamplate.png";
import 'reactjs-popup/dist/index.css';
import Window from "./Window";


const Portfolio = () => {
    return (
        <>

            <div id="p" className="container py-4">
                <h2 className="text-center py-5 text-warning">PORTFOLIO</h2>
                <div className="row pb-5">
                    <div className="col-md-3 col text-center pb-4">
                        <button type="button" data-toggle="modal" data-target="#1">
                          <img src={img1} className="imgedit" width="230px" height="120px"/>
                        </button>
                    </div>
                    <div className="col-md-3 col text-center pb-4">
                        <button type="button" data-toggle="modal" data-target="#2">
                            <img src={img2} className="imgedit" width="230px" height="120px"/>
                        </button>
                    </div>
                    <div className="col-md-3 col text-center pb-4">
                        <button type="button" data-toggle="modal" data-target="#3">
                            <img src={img3} className="imgedit" width="230px" height="120px"/>
                        </button>
                    </div>
                    <div className="col-md-3 col text-center ">
                    <button type="button" data-toggle="modal" data-target="#4">
                        <img src={img4} className="imgedit" width="230px" height="120px"/>
                    </button>
                    </div>
                </div>
            </div>
            <Window
                idn="1"
                name="NETFLIX"
                img={img1}
                code=""
                site=""
            />
            <Window
                idn="2"
                name="KeepNotes"
                img={img2}
                code=""
                site=""
            />
            <Window
                idn="3"
                name="Enterprises"
                img={img3}
                code="https://github.com/evildevilnova/React_project"
                site="https://evildevilnova.github.io/React_project/"
            />
            <Window
                idn="4"
                name="Decoration"
                img={img4}
                code=""
                site=""
            />            
 
        </>
    )
}

export default Portfolio
