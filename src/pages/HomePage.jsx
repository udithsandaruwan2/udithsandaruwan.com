import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="pt-16">
            <Hero />
            <Projects />
            <Experience />
            <Education />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
