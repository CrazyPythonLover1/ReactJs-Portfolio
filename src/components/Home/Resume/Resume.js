import React from 'react';
import './Resume.css';
import resumeData from '../../../fakeData/resumeData'

const Resume = () => {
    const resume = resumeData[0]
    const skillmessage = resume.skillmessage;

    const education = resume.education.map(education => {
        return <div key={education.school}>
            <h3> {education.school} </h3>
            <p className="info"> {education.degree}<span>&bull;</span> <em className="date"> {education.graduated} </em> </p>
            <p> {education.description} </p> 
        </div>
    })
    const work = resume.work.map(work=> {
        return <div key={work.company}>
            <h3> {work.company} </h3>
            <p className="info"> {work.title}<span>&bull;</span><em className="date"> {work.years} </em> </p>
            <p> {work.description} </p>
        </div>
    })

    const skills = resume.skills.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}>
            <span style={{width:skills.level}} className={className}></span><em> {skills.name} </em>
        </li>
    })
    return (
        <section id="resume">
            <div className="container-fluid">
                <div className="row education" style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col-md-3 header-col">
                        <h1 className="pb-3" > <span> Education </span></h1>
                    </div>

                    <div className="col-md-9 main-col">
                        <div className="row">
                            <div className="col-md-12">
                                {education}
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="row work" style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col-md-3 header-col">
                        <h1 className="pb-3" > <span> work </span></h1>
                    </div>

                    <div className="col-md-9 main-col">
                        <div className="row">
                            <div className="col-md-12">
                                {work}
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="row skill pt-5 " style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col-md-3 header-col">
                        <h1 className="pb-3"> <span> Skills  </span></h1>
                    </div>

                    <div className="col-md-9 main-col">
                        <p className="text-center pb-3 pt-3">
                            {skillmessage}
                        </p>
                        <div className="bars">
                            <ul className="skills">  {skills} </ul>
                        </div>
                    </div>
                </div>


            </div>
            
        </section>
    );
};

export default Resume;