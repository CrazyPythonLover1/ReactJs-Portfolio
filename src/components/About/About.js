import React from 'react';
import './About.css';
import profilePic from '../../images/Github-profile-pic.png'
import Navbar from '../Shared/Navbar';

const About = () => {
    return (
        <main id="aboutpage">
            <Navbar/>
            <div className="container-fluid about-container"  style={{maxWidth: "1300px",margin: "auto"}}>
                <div className="row px-1">
                    <div className="col-md-6 col-sm-12">
                        <img className="profile mb-4" src={profilePic} alt="" />

                        <p className="text-justify">I am a professional Web Developer with 2 years of experience. I love to write code everyday and solve web based problem. I can create full-stack web app with React and Node.js. Also I can create Django Web App. 
                        {/* I
                        have completed two long term course on "Python and Django Full Stack Web
                        Development" from Udemy and "Complete Web Development Course With
                        Jhankar Mahbub" from Programming Hero.  */}
                        
                        As my profession and career object
                        my goal is to provide 100% hard work and accurate Service.</p>

                        <div className="contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>  Md. Mainul Islam  </span><br />
                                    <span> 123 Fake Street<br />
                                    Cumiila, Bangladesh
                                    </span><br />
                                    <span>+880 1871203061</span><br />
                                    <span> mainulislamfaruqi@gmail.com </span>
                                </p>
                            </div>

                    </div>
                    <div className="col-md-6 col-sm-12"></div>
                </div>
            </div>
        </main>
    );
};

export default About;