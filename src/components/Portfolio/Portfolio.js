import React from 'react';

import resumeData from '../../fakeData/resumeData';

const Portfolio = () => {
   
        const projects = resumeData[0].projects.map(projects =>{
            var projectImage = require(`../../images/portfolio/${projects.image}`)
            return <div key={projects.title} className=" columns portfolio-item">
                <a href="projects.url" title={projects.title}>
                    <img src={projectImage} alt={projects.title}  />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5> {projects.title} </h5>
                            <p> {projects.category} </p>
                        </div>
                    </div>
                </a>
            </div>
        })
    return (
        <section id="portfolio">
            <div className="row">
                <div className="col-md-12 collapseed">
                    <h1> Check Out Some of MY Works. </h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;