import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import resumeSrc from '../../images/Resume of MD. MAINUL ISLAM.pdf';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses= [''];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    return (
        <div  className={`navbar-container ${navbarClasses.join(" ")}`} >
            <nav  className="navbar navbar-expand-md  navbar-wrap ">
                <Link style={{textDecoration:"none"}}  to="/"><a className="navbar-brand brand-name" href="home"> Mainul Islam</a> </Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggle-btn-color "></span>
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
                        <a className="nav-link ml-3" href={resumeSrc} download> <span className="nav-button "> Resume</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;