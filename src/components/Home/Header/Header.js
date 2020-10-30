import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header> 
            <div className="header container">
                <div className="row banner ">
                    <div className="banner-text">
                        <h1 className="headline text-center"> I'm  Mainul Islam </h1>
                        <div className="status"><ul> <li> Web Developer</li> <li> Crazy React & Python Lover </li></ul></div>
                        <h3><span> React || Django Developer && Web Developer @AnsWarIT.</span> A self-taught software developer with deep interest in javascript, Python & AI.  </h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;