import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-white/10 py-10 bg-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <motion.div
                className="max-w-5xl mx-auto flex flex-col items-center space-y-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >

                {/* Initials Logo */}
                <div className="text-3xl font-bold tracking-widest bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent select-none">
                    Akshata Bhoi
                </div>

                {/* Tagline */}
                <p className="text-text-secondary text-center text-sm sm:text-base">
                    Crafting clean, modern & responsive web experiences.
                </p>

                {/* Social Icons */}
                <div className="flex space-x-6">
                    <motion.a
                        href="https://github.com/AkshataBhoi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                       text-text-secondary hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 hover:scale-110 transition-all"
                        whileHover={{ y: -3 }}
                    >
                        <FaGithub size={20} />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/akshata-bhoi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                       text-text-secondary hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110 transition-all"
                        whileHover={{ y: -3 }}
                    >
                        <FaLinkedin size={20} />
                    </motion.a>

                    <motion.a
                        href="mailto:akshatabbhoi@gmail.com"
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                       text-text-secondary hover:text-white hover:bg-pink-500/20 hover:border-pink-500/50 hover:scale-110 transition-all"
                        whileHover={{ y: -3 }}
                    >
                        <FaEnvelope size={20} />
                    </motion.a>
                </div>

                {/* Copyright */}
                <p className="text-text-secondary/60 text-xs mt-4">
                    © {new Date().getFullYear()} Akshata Bhoi — All Rights Reserved.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
