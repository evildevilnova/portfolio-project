import React from 'react'
import Typed from "react-typed";

function Header() {
    return (
        <div id="h" className="header-wraper">
            <div className="main-info">
                <h1 >Web development and websites promotions</h1>
                <Typed 
                className="typed-text"
                strings={['Web Design', 'Web development','Facebook Ads SMM','Google Ads']} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#c" className="btn-main-offer ">contact me</a>
            </div>
        </div>
    )
}

export default Header
