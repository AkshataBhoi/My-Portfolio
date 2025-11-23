import React from 'react';
import TechBadge from './TechBadge';

export interface ProjectProps {
    id: number | string;
    title: string;
    year: string;
    screenshotUrl: string;
    description: string;
    tech: Array<{
        name: string;
        logoUrl?: string;
        colorHex?: string;
    }>;
    repoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, screenshotUrl, description, tech, repoUrl }) => {
    return (
        <div className="group relative flex flex-col w-full h-full">

            {/* Monitor Mockup */}
            <div className="relative aspect-video bg-gray-900 rounded-xl border-[6px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Top Bar (macOS style) */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-gray-800 flex items-center px-3 gap-1.5 z-20 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-inner"></div>
                </div>

                {/* Screen Content */}
                <div className="w-full h-full pt-7 bg-gray-950 relative overflow-hidden">
                    <img
                        src={screenshotUrl}
                        alt={title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500"
                    />
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 flex flex-col gap-4 px-2">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-text-primary">{title}</h3>
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 group/git"
                                aria-label={`View ${title} repository`}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                    {tech.map((t) => (
                        <TechBadge key={t.name} {...t} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
