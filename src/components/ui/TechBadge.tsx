import React from 'react';

interface TechBadgeProps {
    name: string;
    logoUrl?: string; // Optional URL for logo image
    colorHex?: string; // Hex color for border/text accent
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, logoUrl, colorHex = '#a1a1aa' }) => {
    return (
        <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border transition-colors duration-300 hover:bg-white/10"
            style={{ borderColor: `${colorHex}40` }} // 25% opacity border
        >
            {/* Logo or Fallback */}
            <div className="w-4 h-4 flex items-center justify-center rounded-full overflow-hidden bg-white/10 shrink-0">
                {logoUrl ? (
                    <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-[8px] font-bold text-white uppercase" style={{ color: colorHex }}>
                        {name.slice(0, 2)}
                    </span>
                )}
            </div>

            {/* Name */}
            <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};

export default TechBadge;
