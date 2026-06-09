import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

const AdvisorsSection: React.FC = () => {
    return (
        <section className="py-5 pb-20 bg-white text-brand-900 relative overflow-hidden">
            {/* Decorative background element - Adjusted for light theme */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-100 rounded-full blur-3xl mix-blend-multiply"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-100 rounded-full blur-3xl mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row lg:gap-10 items-center">

                    {/* Left Column: Title */}
                    <div className="lg:w-5/12 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-brand-900">
                            <span className="text-accent-600">ASESORES</span> <br />
                            <span className="">EN LINEA</span> <br />
                            <span className="font-bold text-accent-600">LAS 24HS</span>
                        </h2>
                        <div className="h-1 w-24 bg-accent-500 mx-auto lg:ml-auto rounded-full mt-6"></div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-7/12 space-y-3 text-center lg:text-left">
                        <h3 className="text-accent-500 text-2xl md:text-3xl font-serif font-bold leading-snug">
                            ¡Comenza de nuevo con nosotros!
                        </h3>

                        <div className="space-y-3 text-brand-600 text-lg leading-relaxed font-light">
                            <p>
                                Te acompañamos, <span className="font-bold text-[rgb(147,196,125)]">te impulsamos a redescubrir tu verdadero potencial.</span> Aquí encontrarás un espacio seguro donde sanar, reconectar con tu esencia y fortalecer los lazos que realmente importan.
                            </p>
                            <p>
                                Nuestro equipo, comprometido y preparado, estará a tu lado en cada paso, inspirándote a construir una vida plena, saludable y llena de propósito. El cambio comienza cuando te rodeas de personas que creen en ti.
                            </p>
                            <p className="text-brand-800 font-bold text-xl">
                                "¡Déjanos ser tu apoyo en esta travesía hacia la paz y la alegría en tu día a día!"
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                href="https://wa.me/5491124009374?text=Hola%20Renacer%20Nuevo!"
                                icon={<MessageCircle className="w-5 h-5" />}
                            >
                                Consulta Online
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisorsSection;