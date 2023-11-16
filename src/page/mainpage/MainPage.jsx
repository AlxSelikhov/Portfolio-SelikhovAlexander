import React from 'react'
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import MainPage__HeroSection from './sections/MainPage__HeroSection';
import SkillsSection from './sections/MainPage__SkillsSection';
import MyProjectsSection from './sections/MainPage__Portfolio';

function MainPage() {
    return (
        <>
            <Navbar />
            <MainPage__HeroSection />
            <SkillsSection />
            <MyProjectsSection />
            <Footer />
        </>
    )
}

export default MainPage;