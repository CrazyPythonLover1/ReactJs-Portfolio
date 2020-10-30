import React from 'react';
import './About.css';
import profilePic from '../../../images/Github-profile-pic.png'
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    return (
        <section className="about" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img className="profile" src={profilePic} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h2> About Me </h2>
                        <p>I am a professional Web Developer & designer with 2 years of experience. I
                        have completed two long term course on "Python and Django Full Stack Web
                        Development" from Udemy and "Complete Web Development Course With
                        Jhankar Mahbub" from Programming Hero. As my profession and career object
                        my goal is to provide 100% hard work and accurate Service.</p>

                        <div className="row">
                            <div className="col-md-6 contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>  Md. Mainul Islam  </span><br />
                                    <span> 123 Fake Street<br />
                                    Cumiila Bangladesh, ABC 123
                                    </span><br />
                                    <span>+880 1871203061</span><br />
                                    <span> mainulislamfaruqi@gmail.com </span>
                                </p>
                            </div>
                            <div className="col-md-6 download">
                            <p>
                                <a href="" className=" download-button"> <GetAppIcon/> Download Resume</a>
                  </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;