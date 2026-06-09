import React from 'react';
import renacerImg from '../assets/images/FORTIS_LOGOFRASE.png';

const HelpDivider: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 py-10">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 text-center">
                        <h2 className="text-accent-500 text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                            ESTAMOS PARA <br />
                            <span className="text-white">BRINDARTE LA</span> <br />
                            MEJOR AYUDA...
                        </h2>
                    </div>

                    {/* Right Column: Image (Reducida) */}
                    <div className="md:w-1/2 flex justify-center">
                        {/* max-w-xs limita el tamaño de la imagen. Podés probar con max-w-sm o w-48 */}
                        <div className="relative max-w-[200px] md:max-w-[300px]">
                            <img
                                src={renacerImg}
                                alt="Fortis"
                                className="w-full h-auto object-contain transform transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpDivider;