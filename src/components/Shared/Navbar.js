import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-light navbar-wrap ">
                <Link style={{textDecoration:"none"}}  to="/"><a className="navbar-brand" href="home"> Mainul Islam</a> </Link>
                <button className="navbar-toggler toggle-btn-color" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link style={{textDecoration:"none"}} activeClassName="active" to="/"><a className="nav-link link mr-2 ml-2" href="home">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/about"><a className="nav-link link mr-2 ml-2" href="about">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link mr-2 ml-2" href="works">Works</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link mr-2 ml-2" href="works">Blog</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link mr-2 ml-2" href="works">Contact</a></Link>
                    </li>
                    <li className="nav-item">
                    <   Link style={{textDecoration:"none"}}  to="/"><div className="nav-link link nav-button  ml-3" href="works">Resume</div></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;