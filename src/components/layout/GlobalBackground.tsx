// import React, { useEffect } from 'react';
// import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';

const GlobalBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-main-bg transition-colors duration-300">
            {/* Optional Subtle Noise Texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay dark:opacity-[0.03] opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Static Radial Glow: Purple (Top Left) */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
                }}
            />

            {/* Static Radial Glow: Cyan (Bottom Right) */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
                }}
            />

            {/* Static Radial Glow: Blue (Center Subtle) */}
            <div
                className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
                }}
            />
        </div>
    );
};

export default GlobalBackground;
