import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white text-brand-900 border-t border-brand-100">
            <div className="container mx-auto px-4">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 border-l-4 border-accent-500 pl-4 py-2">
                        TESTIMONIOS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-600 italic text-center text-lg leading-relaxed">
                                "Llegué a la comunidad sin esperanza, abatido por mis propias conductas. Aquí encontré un hogar, una familia y la oportunidad de reconstruir mi vida. Gracias al apoyo del equipo y mis compañeros, hoy siento la libertad en mi interior y un futuro prometedor por delante."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-brand-900 text-lg">Carlos</p>
                            <p className="text-accent-600 text-sm font-bold">40 años</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-600 italic text-center text-lg leading-relaxed">
                                "Cuando llegué, me sentía perdido y sin rumbo. En esta comunidad encontré no solo apoyo, sino un verdadero hogar. El acompañamiento y la calidez del equipo me ayudaron a redescubrir mi valor y a construir una vida con propósito. Hoy me siento más fuerte, con la certeza de que puedo superar cualquier desafío."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-brand-900 text-lg">Martín R.</p>
                            <p className="text-accent-600 text-sm font-bold">45 años</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-600 italic text-center text-lg leading-relaxed">
                                "Nunca imaginé que un lugar pudiera cambiar tanto mi vida. Aquí aprendí a valorarme, a sanar mis heridas emocionales y a rodearme de personas que realmente me impulsan a ser mejor. Estoy profundamente agradecida por cada palabra de aliento y por el ambiente de respeto que me permitió crecer."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-brand-900 text-lg">Carolina M.</p>
                            <p className="text-accent-600 text-sm font-bold">34 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
