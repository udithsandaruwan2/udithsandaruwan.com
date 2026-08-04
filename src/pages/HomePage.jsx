import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
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
