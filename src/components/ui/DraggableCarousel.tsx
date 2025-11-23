import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DraggableCarouselProps {
    images: string[];
    className?: string;
}

const DraggableCarousel: React.FC<DraggableCarouselProps> = ({ images, className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className={`relative ${className}`}>
            {/* Main Card Container with Stacked Effect */}
            <div className="relative">
                {/* Background Cards for Stacked Effect */}
                <div className="absolute -left-4 -top-4 w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl transform -rotate-6 opacity-40"></div>
                <div className="absolute -right-4 -top-2 w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl transform rotate-6 opacity-40"></div>

                {/* Main Image Card */}
                <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-slate-800">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
                            style={{ imageRendering: 'crisp-edges' }}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400';
                            }}
                        />
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        // className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                        //     ? 'bg-violet-500 w-8'
                        //     : 'bg-white/30 hover:bg-white/50'
                        //     }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Swipe Hint */}
            <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-text-secondary/60 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* ← Drag to browse → */}
            </motion.div>
        </div>
    );
};

export default DraggableCarousel;
