import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-md-12">
                    <div className="social">
                        <a href="https://github.com/CrazyPythonLover1"> <GitHubIcon/> </a>
                        <a href="https://www.linkedin.com/in/md-mainul-islam-4466a2179/"> <LinkedInIcon/> </a>
                        <a href="https://www.facebook.com/mainul.mif"> <FacebookIcon/>  </a>
                        <a href="https://www.instagram.com/mainul_islam_faruqi/"> <InstagramIcon/> </a>
                    </div>

                    <p>
                          Modified with love by the Answarit team <span> ♥️ </span>  
                    </p>

                    <p className="copyright">
                          &copy; All credit goes to Mainul Islam - Copyright 2020 Mainul Ialam   
                          Developed by <a title="Styleshout" href="http://www..com/">Mainul Islam</a>   
                    </p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;