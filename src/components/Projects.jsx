import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { featuredProjects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent work focusing on backend development and fullstack applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-dark-card to-black border border-dark-border rounded-xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github className="h-5 w-5" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:border-white/35 transition-colors"
                    >
                        More projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
