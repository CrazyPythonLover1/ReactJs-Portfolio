import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className=" container-fluid px-md-5 pl-md-5">
                <div className="row"  style={{maxWidth: "1300px",margin: "auto"}}>
                    
                    <div className="col-md-8 col-sm-12 ">
                        <form  className="contact-form " action="" >
                            <div className="form-group">


                                <input type="text" name="name"
                                    placeholder="Your name " id=""
                                      required
                                />

                                <input type="email" name="name"
                                    placeholder="Your email address " id=""
                                      required
                                />

                                <input type="text" name="subject"
                                    placeholder="Subject" id=""
                                      required
                                />

                                <textarea type="text-area" name="description"
                                    placeholder=" Your message " id=""
                                      required
                                    rows="4" cols="38"
                                    className="order-text-area  contact-text-area"
                                    style={{ height: " 160px", paddingTop: "15px" }}
                                />

                            </div>

                            <div className="" style={{ width: " 170px", }}>
                                <input
                                    className="submit-button "
                                    type="submit"
                                    value="Submit"
                                    style={{
                                        background: "inherit",
                                        padding: " 0 50px 0 45px",
                                        width: "170px",
                                        marginTop: "-10px",
                                        border: "2px solid #64ffda",
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}
                                />
                            </div>

                        </form>
                    </div>

                    <div className="col-md-4 contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>  Md. Mainul Islam  </span><br />
                                    <span> 123 Fake Street<br />
                                    Cumiila Bangladesh, ABC 123
                                    </span><br />
                                    <span>+880 1871203061</span><br />
                                   
                                </p>
                            </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;