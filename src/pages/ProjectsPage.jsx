import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Search, Globe2 } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage = () => {
    const [query, setQuery] = useState('');
    const [activeTech, setActiveTech] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const techOptions = useMemo(() => {
        const tags = new Set();
        projects.forEach((project) => {
            project.technologies.forEach((tech) => tags.add(tech));
        });
        return ['All', ...Array.from(tags).sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesTech =
                activeTech === 'All' || project.technologies.includes(activeTech);

            const haystack = [
                project.title,
                project.description,
                ...project.technologies,
            ]
                .join(' ')
                .toLowerCase();

            const matchesQuery =
                !normalizedQuery || haystack.includes(normalizedQuery);

            return matchesTech && matchesQuery;
        });
    }, [query, activeTech]);

    return (
        <div className="min-h-screen bg-black pt-24 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        All Projects
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                        Browse everything I have built. Search by name or stack, then open live previews when a project is deployed.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="sticky top-20 z-20 mb-8 space-y-4 rounded-xl bg-black/80 backdrop-blur-md py-3"
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search projects, tech, keywords..."
                            className="w-full rounded-xl bg-dark-card border border-dark-border pl-11 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/25 transition-colors"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-1">
                        {techOptions.map((tech) => (
                            <button
                                key={tech}
                                type="button"
                                onClick={() => setActiveTech(tech)}
                                className={`shrink-0 px-3 py-1.5 rounded-full text-sm border transition-colors ${
                                    activeTech === tech
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/25 hover:text-white'
                                }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <p className="text-sm text-gray-500 mb-6">
                    {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}
                </p>

                {filteredProjects.length === 0 ? (
                    <div className="rounded-xl border border-dark-border bg-dark-card px-6 py-16 text-center">
                        <p className="text-gray-300 mb-2">No projects match that search.</p>
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                setActiveTech('All');
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredProjects.map((project, index) => {
                            const Icon = project.icon;
                            const isLive = Boolean(project.demo);

                            return (
                                <motion.article
                                    key={project.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
                                    className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden"
                                >
                                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                                        <div className="p-6 md:p-8">
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                                                    <Icon className="h-6 w-6 text-white" />
                                                </div>
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${
                                                        isLive
                                                            ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10'
                                                            : 'text-gray-400 border-white/10 bg-white/5'
                                                    }`}
                                                >
                                                    <span className={`h-1.5 w-1.5 rounded-full ${isLive ? 'bg-emerald-400' : 'bg-gray-500'}`} />
                                                    {isLive ? 'Live preview' : 'Not deployed'}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl font-bold text-white mb-3">
                                                {project.title}
                                            </h2>
                                            <p className="text-gray-400 leading-relaxed mb-5">
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

                                            <div className="flex flex-wrap gap-4">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        Code
                                                    </a>
                                                )}
                                                {isLive && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Open live site
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="border-t lg:border-t-0 lg:border-l border-dark-border bg-black/40 p-4 md:p-5">
                                            <div className="h-full min-h-[220px] rounded-xl border border-white/10 overflow-hidden bg-[#0d0d0d] flex flex-col">
                                                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                                    <p className="ml-2 truncate text-xs text-gray-500">
                                                        {isLive ? project.demo : 'preview unavailable'}
                                                    </p>
                                                </div>

                                                {isLive ? (
                                                    <div className="relative flex-1 min-h-[180px] bg-black">
                                                        <iframe
                                                            title={`${project.title} preview`}
                                                            src={project.demo}
                                                            className="absolute inset-0 h-full w-full border-0 pointer-events-none"
                                                            loading="lazy"
                                                            sandbox="allow-scripts allow-same-origin"
                                                        />
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="absolute inset-0 flex items-end justify-end p-3 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                                                        >
                                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-black text-xs font-medium px-3 py-1.5">
                                                                <Globe2 className="h-3.5 w-3.5" />
                                                                View live
                                                            </span>
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 text-center min-h-[180px]">
                                                        <Globe2 className="h-5 w-5 text-gray-600" />
                                                        <p className="text-sm text-gray-500">
                                                            No live deployment yet
                                                        </p>
                                                        {project.github && (
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs text-gray-400 hover:text-white transition-colors"
                                                            >
                                                                Browse source on GitHub
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
