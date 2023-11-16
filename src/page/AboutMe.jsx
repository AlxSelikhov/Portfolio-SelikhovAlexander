import React from 'react'
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import AboutMe__HeroSection from './AboutMe__HeroSection';
import TimelineSection from './AboutMe__Timeline';

function AboutMe() {
    return (
        <>
            <Navbar />
            <AboutMe__HeroSection />
            <TimelineSection />
            <Footer />
        </>
    )
}

export default AboutMe;