import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './layout/Container';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success state after animation
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-main-bg/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20">

                        {/* Text Side */}
                        <div className="text-left">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-6 text-text-primary"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">amazing</span> together.
                            </motion.h2>
                            <motion.p
                                className="text-text-secondary text-lg mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                Whether you have a project idea, a question, or just want to say hi, I'm always open to connecting!
                            </motion.p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-violet-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>akshatabbhoi@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <motion.form
                            action="https://api.web3forms.com/submit"
                            onSubmit={handleSubmit}
                            className="space-y-6 relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <input type="hidden" name="access_key" value="c2cfff47-f9f7-4bf6-83c2-72702882d5c0"></input>
                            <div className="group relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all placeholder-transparent peer"
                                    placeholder="Your Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-3 text-text-secondary text-sm transition-all duration-300 
                                             peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-text-secondary/70
                                             peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-violet-500 peer-focus:bg-main-bg peer-focus:px-2
                                             peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-main-bg peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all placeholder-transparent peer"
                                    placeholder="Email Address"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-3 text-text-secondary text-sm transition-all duration-300 
                                             peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-text-secondary/70
                                             peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-violet-500 peer-focus:bg-main-bg peer-focus:px-2
                                             peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-main-bg peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="group relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all placeholder-transparent peer resize-none"
                                    placeholder="Message"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-3 text-text-secondary text-sm transition-all duration-300 
                                             peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-text-secondary/70
                                             peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-violet-500 peer-focus:bg-main-bg peer-focus:px-2
                                             peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-main-bg peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Message
                                </label>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`w-full relative h-12 rounded-xl font-bold overflow-hidden transition-all duration-300 ${isSuccess ? 'bg-green-500' : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:shadow-lg hover:shadow-violet-500/25'}`}
                                >
                                    <AnimatePresence mode="wait">
                                        {!isSubmitting && !isSuccess && (
                                            <motion.span
                                                key="idle"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center justify-center gap-2 text-white"
                                            >
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </motion.span>
                                        )}

                                        {isSubmitting && (
                                            <motion.div
                                                key="submitting"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </motion.div>
                                        )}

                                        {isSuccess && (
                                            <motion.div
                                                key="success"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <motion.svg
                                                    className="w-6 h-6 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </motion.svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Paper Plane Animation */}
                                    {isSuccess && (
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 text-white"
                                            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                            animate={{ x: 200, y: -200, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 1, ease: "easeIn" }}
                                        >
                                            <svg className="w-8 h-8 rotate-45" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
