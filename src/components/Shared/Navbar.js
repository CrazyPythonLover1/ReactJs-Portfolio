import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link style={{textDecoration:"none"}}  to="/"><a className="navbar-brand" href="home">Navbar</a> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link" href="home">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/about"><a className="nav-link link" href="about">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link" href="works">Works</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link" href="works">Blog</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{textDecoration:"none"}} to="/"><a className="nav-link link" href="works">Contact</a></Link>
                    </li>
                    <li className="nav-item">
                    <   Link style={{textDecoration:"none"}}  to="/"><a className="nav-link link button" href="works">Resume</a></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;