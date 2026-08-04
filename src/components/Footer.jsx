import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Udith Sandaruwan</h3>
                        <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                            Full Stack Developer & Software Engineer. I am a highly motivated and versatile individual, always eager to embrace new challenges and opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
                        <ul className="space-y-1.5 md:space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Home</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Projects</a></li>
                            <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Experience</a></li>
                            <li><a href="#education" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Education</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Contact</a></li>
                            <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base block py-1">Student Portal</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Connect</h3>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <a href="mailto:hello@udithsandaruwan.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>hello@udithsandaruwan.com</span>
                            </a>
                            <a href="mailto:info.dev.udith@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>info.dev.udith@gmail.com</span>
                            </a>
                            <div className="flex gap-4 mt-2">
                                <a href="https://github.com/udithsandaruwan2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="h-6 w-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/udithsandaruwan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a href="https://www.youtube.com/@UdithSandaruwan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
                    <p className="text-gray-400 text-xs md:text-sm flex items-center justify-center gap-2">
                        Made with <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-red-500" /> by Udith Sandaruwan © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
