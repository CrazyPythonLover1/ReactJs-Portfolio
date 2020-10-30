import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Header = () => {
    return (
        <header> 
            <div className="header container">
                <div className="row banner ">
                    <div className="banner-text">
                        <h1 className="headline text-center"> I'm  Mainul Islam </h1>
                        <div className="status"><ul> <li> Web Developer</li> <li> Crazy React & Python Lover </li></ul></div>
                        <h3><span> React || Django Developer && Web Developer @AnsWarIT.</span> A self-taught software developer with deep interest in javascript, Python & AI.  </h3>
                        
                        <div className="social">
                            <a href="https://github.com/CrazyPythonLover1"> <GitHubIcon/> </a>
                            <a href="https://www.linkedin.com/in/md-mainul-islam-4466a2179/"> <LinkedInIcon/> </a>
                            <a href="https://www.facebook.com/mainul.mif"> <FacebookIcon/>  </a>
                            <a href="https://www.instagram.com/mainul_islam_faruqi/"> <InstagramIcon/> </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </header>
    );
};

export default Header;