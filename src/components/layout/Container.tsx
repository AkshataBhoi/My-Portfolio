import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn("w-full md:max-w-[65%] mx-auto px-4 sm:px-0", className)}>
            {children}
        </div>
    );
};

export default Container;
