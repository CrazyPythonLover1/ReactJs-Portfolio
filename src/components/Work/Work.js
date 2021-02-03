import React, { useEffect } from 'react';
import './Work.css';
import Navbar from '../Shared/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

import resumeData from '../../fakeData/resumeData';
import Footer from '../Home/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


const Work = () => {
    useEffect(() => {
        AOS.init({duration: 2000,offset:180,});
    }, []);

    const projects = resumeData[0].projects;

    const classes = useStyles();
    return (
        <main id="work">
            <Navbar />
            <section className="container-fluid px-sm-5">
                <div className="work-container">
                    <h2 className="text-white mb-5"> <span > My Works</span></h2>

                    <div  className="project-container" >

                    {
                        projects.map(project => {
                            return  <div data-aos={project.animation} className="project-card">
                             <img className={`grid-image ${classes.img}`} alt="complex" src={require(`../../images/portfolio/${project.image}`)} />
                            <div>
                            <h3> {project.titleHead} </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column'}}>
                                               {project.description?.map(des=> <li> {des} </li>)}
                                          </ul>
                                          <h6 className="technology mt-lg-5"> {project.technology.map(tech=> <span> {tech} </span>)}
                                           </h6>
                                           <div className="button-container">
                                            <div className="button-group"> 
                                            <a href={project.github}> <GitHubIcon/> </a> 
                                            <a href={project.url} className="link-icon"> <LinkIcon/> </a>
                                           </div>
                                            </div>
                            </div>
                        </div>

                        })
                    }

                   



                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    );
};

export default Work;