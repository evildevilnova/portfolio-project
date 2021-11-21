import React from 'react';
// React Fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
        
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#010101"}}>
            <div className="container">
                <a className="navbar-brand text-warning logo" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#h">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#a">about</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#s">service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#e">work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#p">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#c">Contacts</a>
                    </li>
                    </ul>
                    
                </div>
            </div>
         </nav>  
        
        </>
    )
}

export default Navbar
