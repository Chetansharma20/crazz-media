import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaBanner({
    title = "Ready to Scale Your Brand with Maximum ROI?",
    subtitle = "Partner with Mumbai & India's top digital marketing team. Let's engineer real revenue growth for your business.",
    buttonText = "Schedule Free Strategy Consultation",
    buttonLink = "/contact"
}) {
    const navigate = useNavigate();

    return (
        <section className="bg-stone-900 text-white py-28 md:py-36 text-center relative overflow-hidden w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-600/15 blur-[140px] pointer-events-none" />
            <div className="max-w-6xl w-full mx-auto px-6 sm:px-10 md:px-16 relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                    <Sparkles size={14} className="text-violet-400" />
                    <span>Free Growth Audit Included</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                    {title}
                </h2>
                
                <p className="text-white/80 text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => navigate(buttonLink)}
                        className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.35)] text-base md:text-lg flex items-center gap-3 cursor-pointer"
                    >
                        <span>{buttonText}</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
                
                <p className="pt-4 text-xs font-semibold tracking-wider text-white/40 uppercase">
                    Trusted by 50+ Ambitious Brands Across Mumbai & India
                </p>
            </div>
        </section>
    );
}
