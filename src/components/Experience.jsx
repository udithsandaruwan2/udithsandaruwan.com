import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Transformation & AI Engineer',
            company: 'Seylan Bank PLC',
            period: 'Sep 2026 - Present',
            type: 'work',
            description: 'Driving digital transformation and AI initiatives across banking workflows, collaborating with teams to design automation opportunities, improve process efficiency, and deliver practical technology solutions.',
            skills: ['AI', 'Digital Transformation', 'Automation', 'Problem Solving', 'Banking Domain', 'Team Collaboration']
        },
        {
            title: 'CTO',
            company: 'SEBS (PVT) LTD',
            period: 'Aug 2026 - Present',
            type: 'work',
            logo: '/sebs-logo.png',
            website: 'https://sebslabs.com',
            description: 'Leading technology strategy and product engineering at SEBS Labs, overseeing architecture, delivery, and innovation across SaaS and AI-powered platforms.',
            skills: ['Leadership', 'Technology Strategy', 'Product Engineering', 'AI', 'SaaS', 'Architecture']
        },
        {
            title: 'Transformation & AI Engineer Intern',
            company: 'Seylan Bank PLC',
            period: 'Apr 2026 - Aug 2026',
            type: 'work',
            description: 'Supported digital transformation and AI initiatives across banking workflows, collaborating with teams to explore automation opportunities, improve process efficiency, and help deliver practical technology solutions.',
            skills: ['AI', 'Digital Transformation', 'Automation', 'Problem Solving', 'Banking Domain', 'Team Collaboration']
        },
        {
            title: 'Visiting Tutor',
            company: 'National Institute of Business Management (NIBM - Sri Lanka)',
            period: 'Mar 2026 - Present',
            type: 'teaching',
            description: 'Teaching and mentoring students in software engineering, computer science, and related technical courses. Developing curriculum, conducting lectures, and guiding students through practical projects to build real-world skills.',
            skills: ['Teaching', 'Curriculum Development', 'Software Engineering', 'Mentoring', 'Project Guidance', 'Technical Training']
        },
        {
            title: 'Content Creator',
            company: 'YouTube',
            period: 'Feb 2026 - Present',
            type: 'teaching',
            description: 'Creating educational content on software engineering and technology, mentoring learners with career advice, skill development strategies, and practical guidance to support academic and professional growth.',
            skills: ['Content Creation', 'Teaching', 'Mentoring', 'Technical Guidance', 'Career Advice', 'Skill Development']
        },
        {
            title: 'Instructor',
            company: 'National Institute of Business Management (NIBM - Sri Lanka)',
            period: 'Jul 2025 - Jan 2026',
            type: 'teaching',
            description: 'Taught and mentored students in software engineering and computing courses, delivering lectures and supporting practical project work to strengthen real-world technical skills.',
            skills: ['Teaching', 'Software Engineering', 'Mentoring', 'Curriculum Support', 'Technical Training']
        },
        {
            title: 'IT Intern',
            company: 'Gampaha Wickramarachchi University of Indigenous Medicine',
            period: 'Mar 2025 - Jul 2025',
            type: 'work',
            description: 'Designed and developed web systems using Django, collaborating with staff to create user-friendly online tools for university management workflows.',
            skills: ['Django', 'Web Apps', 'Web Design', 'Collaboration', 'Cloud', 'Hosting', 'Linux', 'Database Designing']
        },
        {
            title: 'Web Developer & Content Writer',
            company: 'Assetcate.com',
            period: 'Sep 2023 - Jan 2024',
            type: 'work',
            description: 'Built and maintained web experiences while producing technical content that explained complex software concepts clearly for a broader audience.',
            skills: ['Web Development', 'Content Writing', 'Technical Communication', 'HTML', 'Python']
        },
        {
            title: 'Web Developer',
            company: 'Mooverly (Pvt) Ltd',
            period: 'Jan 2023 - Dec 2023',
            type: 'work',
            description: 'Designed and developed e-commerce websites using WordPress, collaborating with clients to create user-friendly and attractive online stores for various business models including B2C, B2B, C2C, and marketplaces.',
            skills: ['WordPress', 'E-commerce', 'Web Design', 'Client Collaboration', 'B2C', 'B2B', 'C2C', 'Marketplaces']
        },
        {
            title: 'Content Writer',
            company: 'Ebranding Bizsolutions (Pvt) Ltd',
            period: 'Aug 2023 - Nov 2023',
            type: 'work',
            description: 'Wrote clear, engaging web and marketing content for clients, helping communicate product value and technical ideas in an accessible way.',
            skills: ['Content Writing', 'SEO', 'Technical Communication', 'Marketing']
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
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                            {exp.logo && (
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="h-8 w-8 object-contain rounded-md bg-white/5 p-1"
                                                />
                                            )}
                                            {exp.website ? (
                                                <a
                                                    href={exp.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 font-medium hover:text-white transition-colors"
                                                >
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400 font-medium">{exp.company}</p>
                                            )}
                                        </div>
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
