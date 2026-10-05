import React from 'react';

export function SectionHeader({ subtitle, title, centered = true }) {
    return (
        <div className={`space-y-4 md:space-y-6 ${centered ? 'text-center' : 'text-left'}`}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600 block">
                {subtitle}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-stone-900 uppercase tracking-tighter leading-none">
                {title}
            </h2>
        </div>
    );
}
