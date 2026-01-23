import React from 'react';
import renacerImg from '../assets/images/renacer.webp';

const HelpDivider: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 text-center">
                        <h2 className="text-accent-500 text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                            ESTAMOS PARA <br />
                            <span className="">BRINDARTE LA</span> <br />
                            MEJOR AYUDA...
                        </h2>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src={renacerImg}
                                alt="Renacer Nuevo"
                                className="w-full h-auto object-cover transform transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpDivider;
