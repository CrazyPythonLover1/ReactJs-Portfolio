import React from 'react';
import './Testimonials.css';
import resumeData from '../../../fakeData/resumeData';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Testimonials = () => {
    const testimonials = resumeData[0].testimonials.map(function(testimonials){
        return <li key={testimonials.user}>
            <blockquote>
                <p> {testimonials.text} </p>
                <cite> <span></span> {testimonials.user} </cite>
            </blockquote>
        </li>
    })
    return (
        <section id="testimonials">
            <div className="container-fluid text-container">
                <div className="row"  style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col-md-2 header-col">
                        <h1> <FormatQuoteIcon className="quote-icon" /><span> Client Testimonials </span></h1>
                    </div>
                    <div className="col-md-10 flex-container">
                        <ul className="slides">
                            {testimonials}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;