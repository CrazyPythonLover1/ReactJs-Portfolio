import React from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Shared/Navbar';

const ContactPage = () => {
    return (
        <main>
            <Navbar/>
            <Contact/>
            <Footer/>
        </main>
    );
};

export default ContactPage;