import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InstallationsPage from './pages/InstallationsPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/nosotros" element={<AboutPage />} />
                        <Route path="/instalaciones" element={<InstallationsPage />} />
                        <Route path="/contacto" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </Router>
    );
}

export default App;