import React from 'react';
import Navbar from '../../Shared/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Resume/>
            <Portfolio/>
        </div>
    );
};

export default Home;