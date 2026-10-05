import React, { useState } from 'react';

export function NodeImage({ src, className = "" }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className={`w-full h-full relative overflow-hidden bg-stone-50 ${className}`}>
            {!loaded && <div className="absolute inset-0 bg-stone-100 animate-pulse" />}
            <img src={src} onLoad={() => setLoaded(true)} className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-1200 ${loaded ? 'opacity-100' : 'opacity-0'}`} alt="Agency context" />
            <div className="absolute inset-0 z-20 bg-white/5 backdrop-blur-[0.1px]" />
        </div>
    );
}
