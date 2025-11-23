import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const skills = [
        "React", "TypeScript", "Tailwind CSS", "Node.js",
        "Figma", "UI/UX Design", "Git", "Next.js"
    ];

    return (
        <section id="about" className="py-10 my-10">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-main-bg/50 border border-white/10 rounded-4xl p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-violet-500 rounded-full"></span>
                            About Me
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            With a background in both computer science and digital design, I bridge the gap between engineering and aesthetics. I don't just write code; I design experiences. My approach blends technical efficiency with user-centric design principles.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            I specialize in building scalable web applications that look great and perform even better. Whether it's crafting a pixel-perfect UI or optimizing backend logic, I enjoy every part of the development process.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-text-primary mb-4">My Toolkit</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 text-accent-1 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-colors cursor-default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        className="relative w-full max-w-md mx-auto"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group shadow-2xl shadow-violet-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                            {/* Abstract Art / Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 border-2 border-violet-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-2 border-2 border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl">👩‍💻</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-24 h-24 bg-violet-500 rounded-full blur-2xl opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        ></motion.div>
                        <motion.div
                            className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        ></motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
