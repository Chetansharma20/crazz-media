import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Eye, Users, Zap, Hexagon, ArrowRight, Linkedin, Twitter, Target, Shield, Handshake, TrendingUp, Users2, Briefcase, GraduationCap, PieChart, Award, CheckCircle2 } from 'lucide-react';
import { ASSETS_CONFIG } from '../config/assets';
import { MediaNode } from '../components/common/MediaNode';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaBanner } from '../components/common/CtaBanner';

export function AboutView() {
    const navigate = useNavigate();

    const breadcrumbs = [
        { name: "About Us", path: "/about" }
    ];

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="About Crazz Media | Top Digital Marketing Agency Mumbai & India"
                description="Learn about Crazz Media, our philosophy, leadership under Siddhi Chopra, and our performance-driven approach to SEO, content, and paid marketing."
                keywords="about crazz media, best digital marketing agency in mumbai, digital marketing company india, siddhi chopra, marketing agency leadership, creative marketing mumbai"
                canonicalPath="/about"
                breadcrumbs={breadcrumbs}
            />

            {/* 1. ABOUT HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-stone-900 text-white">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-50 grayscale brightness-90"
                    >
                        <source src={ASSETS_CONFIG.aboutVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-[#fdfaf8]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 backdrop-blur-md mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span className="text-[10px] font-black tracking-widest text-violet-300 uppercase">
                            Agency Narrative & DNA
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                        Creative <span className="text-violet-500">Content.</span> <br /> Performance <span className="text-violet-500">Driven.</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                        Fueling digital dominance through the intersection of bold creativity, semantic SEO strategy, and mathematical ad performance.
                    </p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* 2. ABOUT CRAZZ MEDIA */}
            <div className="bg-white py-24 border-b border-stone-100 text-black">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <SectionHeader subtitle="The Narrative" title="About Crazz Media." centered={false} />
                        <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-medium">
                            <p>
                                <strong>Crazz Media</strong> is a full-service, 360° digital marketing agency headquartered in Mumbai and partnering with ambitious brands across India and international markets.
                            </p>
                            <p>
                                We believe digital marketing should do far more than generate superficial vanity metrics. It should build genuine demand, establish brand authority, and engineer predictable revenue growth. Our philosophy unites high-energy creative storytelling with rigorous data analytics to deliver outsized returns on investment.
                            </p>
                            <p>
                                Whether scaling eCommerce revenues through Meta & Google Ads, dominating Google's organic search results with high-intent technical SEO, or producing viral short-form video content, we treat every client's growth with radical ownership.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl border border-stone-200 aspect-[4/5]">
                            <MediaNode src={ASSETS_CONFIG.gallery?.[3]} label="Agency Culture" />
                        </div>
                    </div>
                </section>
            </div>

            {/* 3. MISSION & VISION */}
            <div className="bg-[#fdfaf8] py-24 border-b border-stone-100 text-black">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="p-10 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-6">
                        <SectionHeader subtitle="The Purpose" title="Our Mission." centered={false} />
                        <p className="text-stone-600 text-lg font-medium leading-relaxed">
                            To empower ambitious brands to dominate their categories through crazy, scroll-stopping content, high-authority search engine optimization, and performance-focused advertising that delivers up to 10X ROAS.
                        </p>
                    </div>
                    <div className="p-10 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-6">
                        <SectionHeader subtitle="The Future" title="Our Vision." centered={false} />
                        <p className="text-stone-600 text-lg font-medium leading-relaxed">
                            To be the undisputed growth engine and creative partner of choice for visionary founders and global enterprises seeking disruptive ideas and measurable, compounding revenue.
                        </p>
                    </div>
                </section>
            </div>

            {/* 4. OUR APPROACH */}
            <div className="bg-white py-24 border-b border-stone-100 text-black">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Execution" title="Our Strategic Framework." centered={true} />
                    <p className="text-stone-600 text-lg font-medium leading-relaxed text-center max-w-3xl mx-auto mb-16 mt-6">
                        Our framework is engineered for speed, scalability, and compounding ROI across every digital touchpoint.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { t: "Think Creatively", desc: "Crafting bold, thumb-stopping concepts that cut through digital noise.", i: <Rocket size={24} /> },
                            { t: "Plan Strategically", desc: "Formulating data-backed roadmaps and keyword funnels for sustainable growth.", i: <Eye size={24} /> },
                            { t: "Execute Precisely", desc: "Flawless deployment across technical SEO, paid advertising, and web architecture.", i: <Users size={24} /> },
                            { t: "Optimize Continuously", desc: "Real-time algorithmic bid management and conversion rate optimization.", i: <Zap size={24} /> },
                        ].map((v, i) => (
                            <div key={i} className="p-8 bg-[#fdfaf8] border border-stone-200 rounded-[32px] hover:border-violet-600/30 transition-all shadow-sm group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-violet-600 shadow-md mb-6 group-hover:scale-110 transition-transform">
                                    {v.i}
                                </div>
                                <h3 className="text-base font-black uppercase tracking-wider text-stone-900 mb-3">{v.t}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* 5. FOUNDER SECTION */}
            <div className="bg-[#fdfaf8] py-24 border-b border-stone-100 text-black">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <SectionHeader subtitle="Agency Leadership" title="Leadership." centered={false} />
                            <div className="mt-8 space-y-6">
                                <div>
                                    <h3 className="text-3xl font-black text-stone-900">Siddhi Chopra</h3>
                                    <p className="text-violet-600 font-bold text-xs uppercase tracking-[0.2em] mt-1">Founder, Crazz Media</p>
                                </div>

                                <div className="space-y-4 text-stone-600 text-base md:text-lg leading-relaxed font-medium">
                                    <p>
                                        Siddhi Chopra is a seasoned digital marketing strategist with over 4 years of hands-on experience in scaling ambitious brands across diverse verticals.
                                    </p>
                                    <p>
                                        With deep domain expertise in viral content strategy, technical SEO architecture, performance marketing, and brand positioning, Siddhi has helped companies turn digital marketing into their most profitable revenue channel.
                                    </p>
                                    <p>
                                        Under her strategic leadership, Crazz Media has evolved into a premier agency known for fearless creative ideas, transparent client partnerships, and measurable, high-ROAS results.
                                    </p>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href="https://www.linkedin.com/company/107023675/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-violet-600 transition-colors shadow-sm"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-violet-600/10 rounded-full -rotate-6 scale-105" />
                                <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-stone-100">
                                    <MediaNode src={ASSETS_CONFIG.team?.[1]} label="Founder & Strategist" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 6. CTA BANNER */}
            <CtaBanner
                title="Ready to Partner with a High-Performance Digital Agency?"
                subtitle="Connect with our growth strategists to build your bespoke marketing blueprint."
                buttonText="Start Your Growth Project"
                buttonLink="/contact"
            />
        </div>
    );
}
