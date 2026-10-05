import React, { useState } from 'react';
import { Film, Image as ImageIcon } from 'lucide-react';

export function MediaNode({ type = 'image', src, label, className = "" }) {
    const [loaded, setLoaded] = useState(false);

    if (src) {
        return (
            <div className={`w-full h-full relative overflow-hidden bg-stone-50 ${className}`}>
                {!loaded && <div className="absolute inset-0 bg-stone-100 animate-pulse" />}
                <img
                    src={src}
                    onLoad={() => setLoaded(true)}
                    className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt={label || "Agency Visual Node"}
                />
                <div className="absolute inset-0 z-20 bg-black/5" />
                {label && (
                    <div className="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur px-3 py-1.5 rounded text-[10px] text-white font-black uppercase tracking-widest z-30">
                        {label}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`w-full h-full bg-stone-100 flex flex-col items-center justify-center gap-4 ${className}`}>
            {type === 'video' ? (
                <>
                    <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-400">
                        <Film size={22} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-400 opacity-60">Technical Reel</span>
                </>
            ) : (
                <>
                    <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-400">
                        <ImageIcon size={22} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-400 opacity-60">Case Node</span>
                </>
            )}
        </div>
    );
}
