import React from 'react';
import Container from './layout/Container';

const Internship: React.FC = () => {
    return (
        <section id="internship" className="py-20">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-text-primary-dark flex items-center gap-3">
                    <span className="w-8 h-1 bg-accent-2 rounded-full"></span>
                    Internship
                </h2>

                <div className="space-y-8 pl-4 border-l-2 border-white/5 ml-4">
                    <div className="relative pl-8">
                        <span className="absolute -left-[21px] top-2 w-4 h-4 rounded-full bg-accent-2 border-4 border-dark-bg"></span>
                        <h3 className="text-xl font-bold text-text-primary-dark">Frontend Developer Intern</h3>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-accent-1 font-medium">TechCompany Inc.</span>
                            <span className="text-sm text-text-secondary-dark">Jun 2024 - Present</span>
                        </div>
                        <p className="text-text-secondary-dark text-sm leading-relaxed">
                            Developing responsive web applications using React and TypeScript. Collaborating with UX designers to implement pixel-perfect interfaces.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Internship;
