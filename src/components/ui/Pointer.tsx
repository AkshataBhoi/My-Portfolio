import React from 'react';

const Pointer: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6 6L26 14L16 18L12 28L6 6Z"
                fill="#38BDF8"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Pointer;
