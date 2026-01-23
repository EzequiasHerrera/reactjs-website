import React from 'react';
import InstallationsGallery from '../components/InstallationsGallery';

const InstallationsPage = () => {
    return (
        <>
            <section className="bg-brand-50 pt-32 pb-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-brand-100 max-w-5xl mx-auto text-center">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light italic">
                            Descubre momentos únicos capturados durante nuestras actividades y eventos. Cada imagen refleja el compromiso, el esfuerzo y los avances alcanzados por quienes han confiado en nosotros para transformar sus conductas y mejorar su calidad de vida. Déjate inspirar por estas historias de cambio y superación que nos motivan a seguir brindando un apoyo integral a quienes lo necesitan.
                        </p>
                    </div>
                </div>
            </section>
            <InstallationsGallery />
        </>
    );
};

export default InstallationsPage;
