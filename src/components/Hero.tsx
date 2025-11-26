import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Container from './layout/Container';
import DraggableCarousel from './ui/DraggableCarousel';

const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);

    // Scroll Parallax
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth - 0.5;
        const y = clientY / innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const xSpring = useSpring(mouseX, springConfig);
    const ySpring = useSpring(mouseY, springConfig);

    const xBackground = useTransform(xSpring, [-0.5, 0.5], ["5%", "-5%"]);
    const yBackgroundMouse = useTransform(ySpring, [-0.5, 0.5], ["5%", "-5%"]);

    const xContent = useTransform(xSpring, [-0.5, 0.5], ["-2%", "2%"]);
    const yContent = useTransform(ySpring, [-0.5, 0.5], ["-2%", "2%"]);

    const carouselImages = [
        '/images/Ak2.jpeg',
        '/images/Ak1.jpeg',
        '/images/Ak3.jpg',
        '/images/Ak4.png',
        '/images/AK5.png',
    ];

    return (
        <section
            ref={ref}
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-0 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: yBackground, x: xBackground, translateY: yBackgroundMouse }}
                className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-2/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-[50px] animate-pulse"></div>

                {/* Artistic Strokes */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="stroke-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet */}
                            <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                        </linearGradient>
                        <linearGradient id="stroke-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" /> {/* Pink */}
                            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
                        </linearGradient>
                    </defs>

                    <motion.path
                        d="M-100,100 C200,300 400,0 600,200 S1000,100 1200,400"
                        fill="none"
                        stroke="url(#stroke-grad-1)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M-100,300 C300,500 500,200 800,400 S1200,300 1400,600"
                        fill="none"
                        stroke="url(#stroke-grad-2)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.path
                        d="M100,600 C400,400 600,700 900,500 S1300,600 1500,300"
                        fill="none"
                        stroke="url(#stroke-grad-1)"
                        strokeWidth="1.5"
                        strokeDasharray="10 10"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
                    />
                </svg>
            </motion.div>

            <div className="fixed left-0 top-0 h-full w-32 bg-gradient-to-r from-accent-2/5 to-transparent -z-10 pointer-events-none"></div>

            <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image Side - Carousel with Parallax */}
                <motion.div
                    className="relative order-2 md:order-1 flex justify-center md:justify-start"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ x: xContent, y: yContent }}
                >
                    <div className="relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
                        <DraggableCarousel images={carouselImages} />
                    </div>
                    {/* Decorative Blob behind image */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Typography Side with Scroll Parallax */}
                <motion.div
                    className="order-1 md:order-2 text-center md:text-right flex flex-col items-center md:items-end relative"
                    style={{ y: yText, opacity: opacityText, x: useTransform(xContent, (v) => typeof v === 'number' ? v * -1.5 : v) }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-blue-500/10 px-4 py-1.5 rounded-full text-xs mb-6 backdrop-blur-sm border border-violet-500/20 text-violet-400 shadow-lg shadow-violet-500/5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
                        Available for opportunities
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-3 relative perspective-1000">
                        <motion.div
                            className="block"
                            initial={{ opacity: 0, x: 20, rotateX: 20 }}
                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <span className="text-text-primary">Hi, Its </span>
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-300% animate-gradient">
                                    Akshata
                                </span>
                                <motion.div
                                    className="absolute -inset-1 bg-violet-500/20 blur-xl -z-10"
                                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </span>
                        </motion.div>
                    </h1>

                    {/* Subtitle with gradient */}
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <span className="text-text-secondary">I craft </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            beautiful
                        </span>
                        <span className="text-text-secondary"> & </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                            functional
                        </span>
                        <br />
                        <span className="text-text-secondary">web experiences</span>
                    </motion.h2>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center md:justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        {/* Resume Button with Blob Effect */}
                        <a
                            href="/public/Akshata Bhoi.pdf"
                            target='_blank'
                            download
                            className="group relative px-6 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                                </div>
                            </div>
                            <span className="relative z-10 flex items-center gap-2">
                                Resume
                                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </span>
                        </a>

                        {/* GitHub Icon Button */}
                        <a
                            href="https://github.com/AkshataBhoi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full border-2 border-slate-700 text-text-primary hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300 hover:scale-110"
                            aria-label="GitHub Profile"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        {/* LinkedIn Icon Button */}
                        <a
                            href="https://www.linkedin.com/in/akshata-bhoi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full border-2 border-slate-700 text-text-primary hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
