import React from 'react';
import './Work.css';
import Navbar from '../Shared/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

import resumeData from '../../fakeData/resumeData';
import Footer from '../Home/Footer/Footer';



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
                            // return <Grid container spacing={0}>
                            //             <Grid item xs={12} sm={5}  >
                            //                 <ButtonBase className={classes.image}>
                            //                     <img className={`grid-image ${classes.img}`} alt="complex" src={require(`../../images/portfolio/${project.image}`)} />
                            //                 </ButtonBase>
                            //             </Grid>
                                        
                            //             <Grid item xs={12} sm={7} className="grid-body" >
                            //                <h3> {project.titleHead} </h3>
                            //                <ul style={{ display: 'flex', flexDirection: 'column'}}>
                            //                    {project.description?.map(des=> <li> {des} </li>)}
                            //                </ul>
                            //                <h6 className="technology"> {project.technology.map(tech=> <span> {tech} </span>)}
                            //                </h6>
                            //                <div className="button-container">
                            //                <div className="button-group"> 
                            //                 <a href="https://github.com/CrazyPythonLover1"> <GitHubIcon/> </a> 
                            //                 <a href={project.url} className="link-icon"> <LinkIcon/> </a>
                            //                </div>
                            //                </div>
                                           
                                          
                            //             </Grid>
                            //         </Grid>

                            return  <div className="project-card">
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