import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';

const AllProjects: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <Container>
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-violet-500 transition-colors mb-6 group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">All Projects</h1>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        A complete collection of my work, experiments, and open source contributions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AllProjects;
