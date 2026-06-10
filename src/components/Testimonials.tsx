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
                    <div className="bg-gray-800 p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-400 italic text-center text-lg leading-relaxed">
                                "Llegué buscando una salida y encontré mucho más que eso: encontré una razón para despertar cada día con esperanza. La contención recibida aquí fue el pilar fundamental que me permitió reconstruir mi confianza y dejar atrás las sombras de mi pasado. Hoy vivo con plenitud y metas claras."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-gray-400 text-lg">Roberto S.</p>
                            <p className="text-accent-600 text-sm font-bold">52 años</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-800 p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-400 italic text-center text-lg leading-relaxed">
                                "Pensé que era tarde para cambiar, pero este espacio me demostró lo contrario. La guía profesional y el apoyo constante de los compañeros me dieron las herramientas necesarias para transformar mi realidad. Me siento una persona nueva, capaz de enfrentar el mundo con serenidad y una voluntad renovada."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-gray-400 text-lg">Lucía V.</p>
                            <p className="text-accent-600 text-sm font-bold">38 años</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-800  p-8 rounded-sm shadow-lg flex flex-col h-full border border-brand-100 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                        <Quote className="absolute top-6 left-6 text-accent-500 opacity-20 w-10 h-10" />
                        <div className="flex-grow flex items-center justify-center mt-4">
                            <p className="text-gray-400 italic text-center text-lg leading-relaxed">
                                "Esta comunidad se convirtió en mi lugar seguro, un refugio donde pude ser yo mismo sin miedo a ser juzgado. Gracias a este acompañamiento, logré sanar vínculos y, sobre todo, aprender a valorarme nuevamente. Cada paso aquí ha sido decisivo para recuperar mi libertad y mi paz mental."
                            </p>
                        </div>
                        <div className="mt-8 text-center pt-6 border-t border-brand-100">
                            <p className="font-bold text-gray-400 text-lg">Julián D.</p>
                            <p className="text-accent-600 text-sm font-bold">29 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
