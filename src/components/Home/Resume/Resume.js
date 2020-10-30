import React from 'react';
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
        <section>
            <div className="row education">
                <div className="col-md-3">
                    <h1> <span> Education </span></h1>
                </div>
                <div className="col-md-9">
                {education}
                </div>
            </div>
        </section>
    );
};

export default Resume;