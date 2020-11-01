import React from 'react';
import './About.css';
import profilePic from '../../images/Github-profile-pic.png'
import Navbar from '../Shared/Navbar';
import Typical from 'react-typical'

const About = () => {
    return (
        <main id="aboutpage">
            <Navbar />
            <div className="container-fluid about-container" style={{ maxWidth: "1300px", margin: "auto" }}>
                <div className="row px-1">
                    <div className="col-md-6 col-sm-12 ml-3">
                        <img className="profile mb-4" src={profilePic} alt="" />
                        <h3 className=" ">
                            
                            <span className=" animated-text" >
                            I'm {" "}
                                <Typical
                                    loop={Infinity}
                                    wraper=''
                                    steps={[
                                        'Mainul Islam',
                                        1000,
                                        'A Frontend Engineer 💻',
                                        1000,
                                        'A React Developer 🥰',
                                        1000,
                                        'A MERN Stack Developer 💻',
                                        1000,
                                        'A Django Developer ❤️',
                                        1000,
                                        'A Full-Stack Developer',
                                        1000,
                                    ]}
                                />
                            </span>
                        </h3>
                        <p className="text-justify aboutpage-text">I am a professional Web Developer with 2 years of experience. I love to write code everyday and solve web based problem. I can create full-stack web app with React and Node.js. Also I can create Django Web App. As my profession and career object
                        my goal is to provide 100% hard work and accurate Service.</p>

                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <p className="address aboutpage-text">
                                <span>  Md. Mainul Islam  </span><br />
                                <span>
                                    Dhaka, Bangladesh
                                    </span><br />
                                <span>+880 1871203061</span><br />
                                <span> mainulislamfaruqi@gmail.com </span>
                            </p>
                        </div>

                    </div>
                    <div className="col-md-5 col-sm-12 ml-3 mt-4">

                        <h4> <span>TECHNICAL SKILLS </span></h4>
                        <div className="skills">
                            {/* <div className="language">
                                <h6> <span className="language-headline"> LANGUAGES </span></h6>
                                <div className="language-skills my-2 pb-3">
                                 <span> JavaScript </span> 
                                    <span> ES6 </span>
                                    <span> Python </span> 
                                    <span> HTML </span>
                                    <span> CSS</span>
                                </div>
                                    
                                    
                            </div>

                            <div className="framework">
                                <h6> <span className="framework-headline"> FRAMEWORK </span> </h6>
                                <div className="framework-skills my-2 pb-3">
                                <span> React </span> 
                                <span> Express.jS </span> 
                                <span> Django </span>
                                <span> Material-ui </span>
                                <span> Bootstrap </span>
                                <span> React-Bootstrap </span>
                                </div>
                                
                                
                            </div>

                            <div className="databases">

                                <h6> <span className="databases-headline"> DATABASES </span> </h6>
                                <div className="databases-skills my-2 pb-3">
                                <span> MongoDB </span>
                                <span> MySQL</span>
                                <span> PostgreSQL </span>
                                </div>
                                
                                
                            </div>

                            <div className="os">
                                <h6> <span className="os-headline"> OS Platforms </span> </h6>
                                <div className="os-skills my-2 pb-3">
                                <span> Windows </span>
                                <span> Kali Linux </span>
                                </div>
                                
                                    
                            </div>

                            <div className="deployment">
                                <h6> <span className="deployment-headline"> DEPLOYMENT </span> </h6>
                                    <div className="deployment-skills my-2 pb-3">
                                    <span> Firebase Hosting </span> 
                                <span> Heroku </span>
                                <span> Netlify </span>
                                <span> Linux Shared Hosting Service </span>
                                    </div>
                                

                            </div>

                            <div className="others">
                                <h6> <span className="others-headline"> OTHERS </span> </h6>
                                <div className="others-skills my-2 pb-3">
                                <span> Node.js</span> 
                                <span> React Router  </span>
                                <span> Google Map </span>
                                <span> Stripe </span>
                                <span> Data Structure </span>
                                <span> Algorithm  </span>
                                </div>
                                

                            </div> */}

                            <div className="language">
                                <h5> <span className="language-headline"> Expertise </span></h5>
                                <div className="language-skills my-2 pb-3">
                                    <span> React.js </span>
                                    <span> JavaScript </span>
                                    <span> ES6 </span>

                                    <span> Material-ui </span>
                                    <span> Bootstrap4 </span>
                                    <span> React-Bootstrap </span>
                                    <span> React Router  </span>
                                    <span> HTML </span>
                                    <span> CSS</span>
                                    <span> Git </span>
                                    <span> Github </span>
                                    <span> VS Code </span>
                                    <span> Firebase Hosting </span>
                                    <span> Heroku </span>
                                    <span> Netlify </span>
                                    <span> Python </span>
                                    <span> Django </span>

                                </div>


                            </div>

                            <div className="framework">
                                <h5> <span className="framework-headline"> Comfortable </span> </h5>
                                <div className="framework-skills my-2 pb-3">
                                    <span> Node.js</span>
                                    <span> Express.jS </span>
                                    <span> MongoDB </span>
                                    <span> Redux </span>
                                    <span> Google Map </span>
                                    <span> Stripe </span>
                                    <span> MySQL</span>
                                    <span> PostgreSQL </span>
                                    <span> Linux Shared Hosting </span>
                                    <span> Chrome Dev Tool </span>

                                </div>


                            </div>

                            {/* <div className="databases">

                                <h5> <span className="databases-headline"> DATABASES </span> </h5>
                                <div className="databases-skills my-2 pb-3">
                                    
                                </div>


                            </div> */}

                            <div className="os">
                                <h5> <span className="os-headline"> OS Platforms </span> </h5>
                                <div className="os-skills my-2 pb-3">
                                    <span> Windows </span>
                                    <span> Kali Linux </span>
                                </div>
                            </div>

                            
                        

                            <div className="familiar">
                                <h5> <span className="familiar-headline"> FAMILIAR </span> </h5>

                                <div className="familiar-skills my-2 pb-3">
                                    <span> Data Structure </span>
                                    <span> Algorithm  </span>
                                    <span> React Native  </span>
                                    <span> JQuery  </span>
                                    <span> Django REST FRAMEWORK </span>
                                    <span> REST API </span>
                                    <span> GraphQL </span>
                                    <span> Docker  </span>
                                </div>


                            </div>

                        </div>


                        {/* I
                        have completed two long term course on "Python and Django Full Stack Web
                        Development" from Udemy and "Complete Web Development Course With
                        Jhankar Mahbub" from Programming Hero.  */}

                    </div>
                </div>
            </div>
        </main>
    );
};




export default About;


