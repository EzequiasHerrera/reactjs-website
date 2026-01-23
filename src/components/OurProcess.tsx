import React from 'react';

const OurProcess: React.FC = () => {
    return (
        <section className="py-20 bg-white text-brand-900 border-t border-brand-100">
            <div className="container mx-auto px-4">
                <div className="text-left mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 border-l-4 border-accent-500 pl-4 py-2">
                        NUESTRO PROCESO
                    </h2>
                </div>

                <div className="max-w-none">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        En nuestra comunidad, <span className="text-accent-600 font-bold">adoptamos un enfoque profundamente centrado en la persona.</span> Nos esforzamos por comprender la experiencia única de cada individuo, explorando su realidad desde una perspectiva amplia y empática. Creemos que cada persona es un participante activo, valioso y esencial en su propio proceso de transformación.
                        <br /><br />
                        Cada intervención que realizamos no solo busca acompañar, sino enseñar y fortalecer. Incluso los retrocesos, lejos de ser vistos como fracasos, se convierten en valiosas oportunidades de aprendizaje y crecimiento personal. <span className="text-accent-600 font-bold">Nuestro propósito es guiar a cada persona a descubrir sus propias respuestas</span>, motivaciones y la fuerza para asumir el control de su bienestar.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
