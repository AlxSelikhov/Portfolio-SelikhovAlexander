import React from 'react'
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Portfolio_Hero from './Portfolio__HeroSection';
import PortfolioExample from './Portfolio__Projects';

function Portfolio() {
    return (
        <>
            <Navbar />
            <Portfolio_Hero />
            <PortfolioExample />
            <Footer />
        </>
    )
}

export default Portfolio;