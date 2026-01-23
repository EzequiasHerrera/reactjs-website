import React from 'react';
import About from '../components/About';
import HeroNoText from '../components/HeroNoText';
import AdvisorsSection from '@/components/AdvisorsSection';
import NewLifeSection from '@/components/NewLifeSection';

const AboutPage = () => {
    return (
        <div className="pt-20"> {/* Adjusted padding since Hero images will sit at the top */}
            <HeroNoText />
            <AdvisorsSection />
            <div className="bg-brand-50 w-full py-16 md:py-24 border-l-4 border-accent-500 shadow-sm flex items-center justify-center text-center">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-800 uppercase tracking-wide px-4">
                    Una vida libre de conductas dañinas
                </h3>
            </div>
        </div>
    );
};

export default AboutPage;
