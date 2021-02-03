import React, { useState, useEffect } from 'react';
import {NavLink, useLocation} from "react-router-dom";
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
    let navbarClasses= [""];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    
    return (
        <div  className={`navbar-container ${navbarClasses.join(" ")}`} >
            <nav  className="navbar navbar-expand-md  navbar-wrap "  style={{maxWidth: "1500px",margin: "auto"}}>
                <NavLink style={{textDecoration:"none"}}  to="/"><a className="navbar-brand brand-name" href="#"> Mainul Islam</a> </NavLink>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggle-btn-color "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                       <a className="nav-link link mr-2 ml-2" href="#">  <NavLink activeClassName="selected" to={"/home" || '/'} > Home </NavLink> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link mr-2 ml-2" href="#"> <NavLink activeClassName="selected" to="/about" > About </NavLink></a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link mr-2 ml-2" href="#"> <NavLink activeClassName="selected" style={{textDecoration:"none"}} to="/work"> Works </NavLink></a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link link mr-2 ml-2" href="#"> <NavLink activeClassName="selected" style={{textDecoration:"none"}} to="/blog"> Blog </NavLink></a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link link mr-2 ml-2" href="#"> <NavLink activeClassName="selected" style={{textDecoration:"none"}} to="/contact"> Contact </NavLink></a>
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