import React from 'react';
import './style.css';

const Cube = () => {
    return (
        <>
            <div className="bodys">
                <div className="containers">
                    <div className="cube">
                        <div className="sides">
                            <div className="top"></div>
                            <div className="right"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                    <a href="/home" className="btn btn-dark texts">Get Start</a>
                </div>
            </div>

        </>
    )
}

export default Cube;
