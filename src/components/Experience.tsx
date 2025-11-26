import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './layout/Container';

type Tab = 'work' | 'education';

const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('work');

    const educationData = [
        {
            id: 1,
            date: "Sept 2024 - Dec 2027 (Ongoing)",
            title: "Datta Meghe College of Engineering",
            subtitle: "B.E. in Computer Engineering",
            details: [
                "Pursuing Bachelor of Engineering in Computer Engineering.",
                "Focusing on advanced algorithms, system design, and full-stack development."
            ],
            badges: []
        },
        {
            id: 2,
            date: "2021 - 2024",
            title: "VPM's Polytechnic",
            subtitle: "Diploma in Computer Engineering",
            details: [
                "Completed Diploma with 90% aggregate.",
                "Built strong foundation in programming and computer science principles."
            ],
            badges: ["Grade: 90%", "MSBTE"]
        }
    ];

    const workData = [
        {
            id: 1,
            date: "June 2024 - July 2024",
            title: "Java Internship",
            subtitle: "Java Developer Intern",
            details: [
                "Implemented core Java concepts in real-world scenarios.",
                "Explored advanced Java frameworks and object-oriented programming patterns."
            ],
            badges: ["Java", "OOP"]
        },
        {
            id: 2,
            date: "June 2023 - July 2023",
            title: "Lazy Infotech Pvt Ltd",
            subtitle: "Web Developer Intern",
            details: [
                "Created various responsive web pages and UI replicas.",
                "Gained hands-on experience with HTML, CSS, and JavaScript."
            ],
            badges: ["Web Development", "Frontend"]
        }
    ];

    return (
        // <section id="experience" className="py-20 ">
        <Container>
            <motion.div
                className="max-w-2xl md:max-w-xl mx-auto w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Tabs */}
                <div className="flex p-1 bg-card rounded-2xl border border-white/10 mb-12 relative">
                    <div className="absolute inset-0 p-1 flex">
                        <motion.div
                            className="w-1/2 bg-violet-500 rounded-xl shadow-sm"
                            layoutId="activeTab"
                            initial={false}
                            animate={{ x: activeTab === 'work' ? '0%' : '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`flex-1 py-3 text-center font-bold relative z-10 transition-colors ${activeTab === 'work' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                        Work
                    </button>
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`flex-1 py-3 text-center font-bold relative z-10 transition-colors ${activeTab === 'education' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                        Education
                    </button>
                </div>

                {/* Content */}
                <div className="bg-main-bg/50 border border-white/10 rounded-3xl p-4 md:p-10 overflow-hidden min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            {(activeTab === 'work' ? workData : educationData).map((item) => (
                                <div key={item.id} className="flex gap-6 md:gap-8 group">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-violet-500/10 border-2 border-violet-500 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                                            {activeTab === 'education' ? (
                                                <svg className="w-6 h-6 text-violet-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 text-violet-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                        </div>
                                        {/* Vertical Line */}
                                        <div className="w-0.5 flex-1 bg-violet-500/50 mt-4 group-last:hidden"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-12 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                            <span className="text-sm font-mono text-violet-500">{item.date}</span>
                                            <div className="flex gap-2 flex-wrap">
                                                {item.badges.map((badge, i) => (
                                                    <span key={i} className="text-sm font-bold px-2 rounded-full bg-white/10 text-text-secondary border border-white/5">
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-text-primary mb-1">{item.title}</h3>
                                        <p className="text-lg text-text-secondary mb-4">{item.subtitle}</p>

                                        <ul className="space-y-2 hidden md:block">
                                            {item.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-2 text-text-secondary/80 text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-2 flex-shrink-0"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div >
            </motion.div >
        </Container >
        // </section>
    );
};

export default Experience;
