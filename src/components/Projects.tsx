import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './layout/Container';
import ProjectCard from './ui/ProjectCard';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section id="projects" className="py-20">
            <Container>
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Centered Title and Description */}
                    <div className="flex flex-col items-center text-center mb-4">
                        <h2 className="text-2xl font-bold mb-4 text-text-primary flex items-center gap-3">
                            <span className="w-10 h-1 bg-violet-500 rounded-full"></span>
                            Featured Projects
                            <span className="w-10 h-1 bg-violet-500 rounded-full"></span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl">
                            A selection of my recent work, featuring web applications and system design projects.
                        </p>
                    </div>

                    {/* View All - Right Corner Below Description */}
                    <div className="flex justify-end">
                        {projectsData.length > 3 && (
                            <Link
                                to="/projects"
                                className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-violet-500 transition-colors"
                            >
                                <span>View all</span>
                                <div className="w-8 h-8 rounded-full border-2 border-text-secondary group-hover:border-violet-500 flex items-center justify-center group-hover:bg-violet-500/10 transition-all">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        )}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
