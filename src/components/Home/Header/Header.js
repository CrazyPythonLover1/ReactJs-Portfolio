import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typical from 'react-typical'

const Header = () => {
    return (
        <header> 
            <div  className="header container">
                <div  className="row banner ">
                    <div className="banner-text">
                        <h1 className="headline text-center">
                             I'm{''}
                            <span className="animated-text" > 
                             <Typical
                             loop={Infinity}
                             wraper=''
                             steps={[
                                'Mainul Islam',
                                1000,
                                'a Frontend Engineer 💻',
                                1000,
                                'a React Developer 🥰',
                                1000,
                                'a Django Developer ❤️',
                                1000,
                                'a Full-Stack Web Developer 📱',
                                1000,
                             ]}
                             />
                             </span>
                        </h1>
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