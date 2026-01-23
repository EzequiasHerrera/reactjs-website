import React from 'react';
import Hero from '../components/Hero';
import TextTicker from '../components/TextTicker';
import AdvisorsSection from '../components/AdvisorsSection';
import NewLifeSection from '../components/NewLifeSection';
import Services from '../components/Services';
import OurProcess from '../components/OurProcess';
import InstallationsGallery from '../components/InstallationsGallery';
import Testimonials from '../components/Testimonials';
import HelpDivider from '../components/HelpDivider';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <TextTicker />
            <AdvisorsSection />
            <NewLifeSection />
            <Services />
            <OurProcess />
            <HelpDivider />
            <Testimonials />
            <InstallationsGallery />
            <Contact />
        </>
    );
};

export default HomePage;
