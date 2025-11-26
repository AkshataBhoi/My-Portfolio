import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ui/ThemeToggle';

const Navbar: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>

            {/* Desktop Navbar - Top Center */}
            <nav className="hidden md:flex fixed top-0 left-0 w-full justify-center pt-4 z-50">
                <div className="max-w-[500px] w-full bg-main-bg/80 backdrop-blur-md rounded-full 
                  px-5 py-1 flex justify-between items-center border border-white/10 
                  shadow-lg shadow-black/5">

                    <Link to="/">
                        <div className="w-8 h-8 flex items-center justify-center font-bold text-white text-sm z-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full h-8 cursor-pointer relative">
                            AB
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold text-text-secondary">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar - Bottom - Centered */}
            <nav className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
                <div className="bg-main-bg/80 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 shadow-2xl shadow-black/20 max-w-sm w-full pointer-events-auto flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/">
                        <div className="w-8 h-8 flex items-center justify-center font-bold text-white text-xs bg-gradient-to-r from-purple-600 to-blue-600 rounded-full cursor-pointer">
                            AB
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="/"
                            className="text-text-secondary hover:text-violet-500 transition-colors"
                            aria-label="Home"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>

                        <a
                            href="/#projects"
                            className="text-text-secondary hover:text-violet-500 transition-colors"
                            aria-label="Projects"
                        >
                            {/* <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg> */}
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"
                                />
                            </svg>


                        </a>

                        <a
                            href="/contact"
                            className="text-text-secondary hover:text-violet-500 transition-colors"
                            aria-label="Contact"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>

                    {/* Theme Toggle */}
                    <div className="pl-2 border-l border-white/10">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
