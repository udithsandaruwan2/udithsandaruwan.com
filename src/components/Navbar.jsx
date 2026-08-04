import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { isAuthenticated, logout, user } = useAuth();

    const navLinks = [
        { name: 'Home', path: '/', section: 'home' },
        { name: 'Projects', path: '/', section: 'projects' },
        { name: 'Experience', path: '/', section: 'experience' },
        { name: 'Education', path: '/', section: 'education' },
        { name: 'Testimonials', path: '/', section: 'testimonials' },
        { name: 'Contact', path: '/', section: 'contact' },
    ];

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Code2 className="h-8 w-8 text-white" />
                        <span className="text-xl font-bold text-white">Udith Sandaruwan</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.section}
                                onClick={() => scrollToSection(link.section)}
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Auth buttons disabled for now */}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-black/95 border-t border-dark-border">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.section}
                                onClick={() => scrollToSection(link.section)}
                                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-card rounded-md transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Auth buttons disabled for now */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
