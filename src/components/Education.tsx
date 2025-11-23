import React from 'react';
import Container from './layout/Container';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-text-primary-dark flex items-center gap-3">
                    <span className="w-8 h-1 bg-accent-3 rounded-full"></span>
                    Education
                </h2>

                <div className="space-y-8 pl-4 border-l-2 border-white/5 ml-4">
                    <div className="relative pl-8">
                        <span className="absolute -left-[21px] top-2 w-4 h-4 rounded-full bg-accent-3 border-4 border-dark-bg"></span>
                        <h3 className="text-xl font-bold text-text-primary-dark">Bachelor of Engineering in CS</h3>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-accent-3 font-medium">University of Technology</span>
                            <span className="text-sm text-text-secondary-dark">2021 - 2025</span>
                        </div>
                        <p className="text-text-secondary-dark text-sm">
                            Focused on Data Structures, Algorithms, and Web Technologies.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Education;
