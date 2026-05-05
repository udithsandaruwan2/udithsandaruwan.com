import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Trainee Software Engineer',
            company: 'Seylan Bank PLC',
            period: 'Apr 2026 - Present',
            type: 'work',
            description: 'Contributing to software development tasks and collaborating with teams to build reliable internal banking solutions while improving product quality and delivery speed.',
            skills: ['Software Development', 'Team Collaboration', 'Problem Solving', 'Banking Domain']
        },
        {
            title: 'Tutor',
            company: 'National Institute of Business Management (NIBM - Sri Lanka)',
            period: 'Mar 2026 - Present',
            type: 'teaching',
            description: 'Teaching and mentoring students in software engineering, computer science, and related technical courses. Developing curriculum, conducting lectures, and guiding students through practical projects to build real-world skills.',
            skills: ['Teaching', 'Curriculum Development', 'Software Engineering', 'Mentoring', 'Project Guidance', 'Technical Training']
        },
        {
            title: 'Software Engineer Intern',
            company: 'Gampaha Wickramarachchi University of Indigenous Medicine',
            period: 'Mar 2025 - Current',
            type: 'work',
            description: 'Designed and developed web system using Django, collaborating with staff to create user-friendly and attractive online system for management purposes.',
            skills: ['Django', 'Web Apps', 'Web Design', 'Collaboration', 'Cloud', 'Hosting', 'Linux', 'Database Designing']
        },
        {
            title: 'Web Developer',
            company: 'Thineth Software Solutions (PVT) LTD',
            period: 'Mar 2024 - May 2024',
            type: 'work',
            description: 'Designed and developed portfolio and dynamic websites using core PHP, working closely with clients to create user-friendly and attractive online stores.',
            skills: ['PHP', 'Web Development', 'Portfolio Websites', 'Dynamic Websites', 'Client Collaboration']
        },
        {
            title: 'Web Developer',
            company: 'Mooverly.com',
            period: 'Jan 2023 - Apr 2023',
            type: 'work',
            description: 'Designed and developed e-commerce websites using WordPress, collaborating with clients to create user-friendly and attractive online stores for various business models including B2C, B2B, C2C, and marketplaces.',
            skills: ['WordPress', 'E-commerce', 'Web Design', 'Client Collaboration', 'B2C', 'B2B', 'C2C', 'Marketplaces']
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey as a developer and instructor
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1">
                                    <div className={`bg-dark-card border border-dark-border rounded-xl p-6 hover:border-white/20 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${exp.type === 'teaching' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                                            }`}>
                                            {exp.type === 'teaching' ? <GraduationCap className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                                            <span className="text-sm font-medium">{exp.period}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            {exp.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden md:flex relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
