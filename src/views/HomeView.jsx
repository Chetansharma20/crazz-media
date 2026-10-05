import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Zap, ArrowRight, Target, Search, Stars, Code,
    MonitorPlay, TrendingUp, BarChart, Rocket, Quote, Hexagon, CheckCircle2,
    Users, User, Heart, Lightbulb, PieChart, Shield, Layout, Globe, Users2,
    Briefcase, GraduationCap, MapPin, Sparkles
} from 'lucide-react';
import { ASSETS_CONFIG } from '../config/assets';
import { MediaNode } from '../components/common/MediaNode';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEOHead } from '../components/common/SEOHead';
import { FaqSection } from '../components/common/FaqSection';
import { CtaBanner } from '../components/common/CtaBanner';

export function HomeView() {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const homeFaqs = [
        {
            q: "What makes Crazz Media the best digital marketing agency in Mumbai & India?",
            a: "Crazz Media is a 360° digital growth agency that unites viral creative content with high-precision technical performance. From technical search engine optimization (SEO) that ranks #1 on Google to paid ad funnels delivering up to 10X ROAS, we focus exclusively on revenue-generating results."
        },
        {
            q: "What digital marketing services does Crazz Media specialize in?",
            a: "We specialize in Search Engine Optimization (SEO), Custom Web Design & Development, Social Media Marketing & Reels Production, Performance Marketing (Meta & Google Ads), Influencer Collaborations, and Branding & Packaging Design."
        },
        {
            q: "Do you work with local businesses in Mumbai as well as national brands across India?",
            a: "Yes! We operate our primary headquarters in Mumbai (serving Bandra, Andheri, BKC, South Mumbai, Navi Mumbai, and Thane) while managing nationwide digital campaigns for brands across Delhi NCR, Bengaluru, Hyderabad, Pune, and all across India."
        },
        {
            q: "How does Crazz Media guarantee high ROAS on ad spend?",
            a: "We use full-funnel conversion tracking, server-side Conversions API (CAPI), multivariate creative testing, high-converting bespoke landing pages, and daily algorithmic bid management to ensure every marketing dollar drives maximum return."
        }
    ];

    return (
        <div className="relative bg-[#fdfaf8]" ref={containerRef}>
            <SEOHead
                title="Best Digital Marketing Agency in Mumbai & India | Crazz Media"
                description="Crazz Media is the best digital marketing agency in Mumbai & India. We provide high-ROI SEO services, web design & development, performance marketing, social media, and branding."
                keywords="best digital marketing agency in mumbai, digital marketing agency near me, seo agency mumbai, web designing company in mumbai, social media marketing agency mumbai, performance marketing agency mumbai, branding agency mumbai, best digital marketing company in india, top 10 digital marketing agencies in mumbai, digital marketing company in india"
                canonicalPath="/"
                faqs={homeFaqs}
            />

            {/* 1. HERO */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-stone-900 w-full">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-45 grayscale brightness-75"
                    >
                        <source src={ASSETS_CONFIG.homeVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-[#fdfaf8]" />
                </div>
                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-16 px-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-600/15 border border-violet-500/30 backdrop-blur-xl mb-4">
                        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                        <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-violet-300 uppercase">
                            Top Digital Marketing Agency in Mumbai & India
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl max-w-6xl mx-auto">
                        We Create <br className="hidden sm:block" />
                        <span className="text-violet-500">Crazy Content</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
                        Crazz Media is a 360° <strong className="text-white font-bold">digital marketing agency in Mumbai & India</strong> helping brands scale through <span className="text-white font-black italic">bold creative ideas</span>, high-performance SEO, and conversion-engineered ad campaigns.
                    </p>

                    <div className="inline-flex flex-wrap gap-8 md:gap-14 justify-center py-8 px-8 sm:px-14 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl max-w-4xl mx-auto w-full">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                                <Stars size={20} />
                            </div>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/80 text-left">Viral<br />Content</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                                <Rocket size={20} />
                            </div>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/80 text-left">#1 Google<br />Rankings</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                                <BarChart size={20} />
                            </div>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/80 text-left">Up to 10X<br />ROAS</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 justify-center pt-6">
                        <button
                            onClick={() => navigate('/contact')}
                            className="group relative bg-violet-600 hover:bg-violet-500 text-white font-black px-12 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] flex items-center gap-4 cursor-pointer overflow-hidden uppercase text-sm tracking-widest"
                        >
                            <span className="relative z-10">Get Free Strategy Consultation</span>
                            <ArrowRight size={20} className="relative z-10" />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-12 py-6 border border-white/20 font-black text-sm uppercase tracking-widest rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all text-white active:scale-95 cursor-pointer flex items-center gap-3"
                        >
                            Explore All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <section className="bg-white border-y border-stone-100 overflow-hidden py-10 w-full">
                <div className="flex gap-20 animate-none opacity-40 grayscale overflow-x-auto no-scrollbar justify-center px-10 w-full">
                    {["SEO AGENCY MUMBAI", "WEB DESIGN & DEV", "PERFORMANCE MARKETING", "SOCIAL MEDIA", "BRANDING AGENCY", "PAN-INDIA GROWTH"].map((c, i) => (
                        <div key={i} className="flex items-center gap-4 shrink-0">
                            <Zap size={22} className="text-violet-600" />
                            <span className="font-black text-xs md:text-sm uppercase tracking-[0.3em] text-stone-700">{c}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. WHO WE ARE */}
            <div className="relative bg-white py-32 border-b border-stone-100 text-black w-full">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-10">
                        <SectionHeader subtitle="Agency Authority" title="Who We Are — Digital Growth Leaders" centered={false} />
                        <div className="space-y-6 text-stone-600 text-lg font-medium leading-relaxed">
                            <p>
                                <strong>Crazz Media</strong> is built for brands that refuse to be ordinary. Headquartered in Mumbai and serving forward-thinking businesses across India, we are recognized as a top 360° digital marketing company.
                            </p>
                            <p>
                                We combine high-velocity creative content with mathematical performance marketing. From technical search engine optimization that captures high-intent customers on Google to full-funnel paid advertising on Meta and Google Ads, every campaign is engineered for tangible business growth.
                            </p>
                            <p>
                                If you want safe, passive marketing, we are not the right agency. If you want disruptive creative campaigns that drive customer acquisition and generate up to 10X ROAS, you are in the right place.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="rounded-[48px] overflow-hidden shadow-2xl border border-stone-200 aspect-video bg-stone-100 w-full">
                            <MediaNode src={ASSETS_CONFIG.gallery?.[1]} label="Agency Headquarters" />
                        </div>
                    </div>
                </section>
            </div>

            {/* 3. WHAT MAKES US DIFFERENT */}
            <div className="relative bg-[#fdfaf8] py-32 border-b border-stone-100 text-black w-full">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="The Competitive Edge" title="Why We Are Mumbai & India's Premier Marketing Agency" centered={true} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            { t: "Viral, High-Energy Content Creation", i: <Lightbulb size={24} /> },
                            { t: "Technical SEO & #1 Google Rankings", i: <Search size={24} /> },
                            { t: "Performance-Focused ROAS Engineering", i: <Target size={24} /> },
                            { t: "Custom Web & eCommerce Architecture", i: <Layout size={24} /> },
                            { t: "End-to-End Influencer Collaborations", i: <Users2 size={24} /> },
                            { t: "Data-Backed Decision Making", i: <PieChart size={24} /> },
                        ].map((v, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-10 bg-white rounded-3xl border border-stone-100 shadow-sm hover:border-violet-600/20 transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-violet-600/5 flex items-center justify-center text-violet-600 mb-6 font-bold">
                                    {v.i}
                                </div>
                                <span className="font-black text-sm uppercase tracking-widest text-stone-900 leading-tight">
                                    {v.t}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* 4. SERVICES WITH INTERNAL LINKS */}
            <div className="relative bg-white py-32 border-b border-stone-100 text-black w-full">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Growth Solutions" title="Our 360° Digital Marketing Services" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                t: "Search Engine Optimization (SEO)",
                                d: "Technical SEO, on-page optimization, and high-authority link acquisition for top Google rankings.",
                                link: "/services/seo-agency-mumbai",
                                i: <Search size={24} />
                            },
                            {
                                t: "Web Design & Development",
                                d: "Custom, lightning-fast, conversion-focused websites and scalable eCommerce storefronts.",
                                link: "/services/web-design-development-mumbai",
                                i: <Globe size={24} />
                            },
                            {
                                t: "Social Media Marketing",
                                d: "Viral short-form reels, strategic content calendars, and community growth across Instagram & LinkedIn.",
                                link: "/services/social-media-marketing-agency",
                                i: <Users2 size={24} />
                            },
                            {
                                t: "Performance Marketing (Paid Ads)",
                                d: "High-ROAS Meta Ads and Google Ads campaigns engineered with mathematical precision.",
                                link: "/services/performance-marketing-agency",
                                i: <BarChart size={24} />
                            },
                            {
                                t: "Branding & Packaging Design",
                                d: "Iconic brand positioning, logo systems, and packaging design from Mumbai's top creative agency.",
                                link: "/services/branding-creative-agency",
                                i: <Stars size={24} />
                            },
                            {
                                t: "Influencer Marketing",
                                d: "Vetted creator partnerships and authentic brand collaborations that drive credibility and conversions.",
                                link: "/services/social-media-marketing-agency",
                                i: <User size={24} />
                            },
                        ].map((s, i) => (
                            <Link
                                key={i}
                                to={s.link}
                                className="bg-stone-50/70 p-10 rounded-3xl border border-stone-200 hover:border-violet-600/40 hover:shadow-xl transition-all group block"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-violet-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    {s.i}
                                </div>
                                <h3 className="font-black text-base uppercase mb-4 text-stone-900 tracking-wider group-hover:text-violet-600 transition-colors">{s.t}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed font-medium mb-6">{s.d}</p>
                                <span className="text-violet-600 text-xs font-black uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Explore Service <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:underline">
                            <span>View Complete Capabilities Matrix</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>
            </div>

            {/* 5. LOCATION HUBS (MUMBAI & INDIA) */}
            <div className="relative bg-[#fdfaf8] py-28 border-b border-stone-100 text-black w-full">
                <section className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Geographic Reach" title="Regional Presence & Pan-India Scale" centered={true} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <Link
                            to="/locations/digital-marketing-agency-mumbai"
                            className="p-10 bg-white rounded-3xl border border-stone-200 hover:border-violet-600/40 hover:shadow-xl transition-all group block"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-stone-900 group-hover:text-violet-600 transition-colors">Mumbai Regional Hub</h3>
                                    <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Bandra • Andheri • BKC • South Mumbai • Thane</span>
                                </div>
                            </div>
                            <p className="text-stone-600 text-base leading-relaxed mb-6">
                                Localized SEO, high-impact branding, and tailored digital marketing for companies situated across Mumbai Metropolitan Region (MMR).
                            </p>
                            <span className="text-violet-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explore Mumbai Hub <ArrowRight size={14} />
                            </span>
                        </Link>

                        <Link
                            to="/locations/digital-marketing-company-india"
                            className="p-10 bg-white rounded-3xl border border-stone-200 hover:border-violet-600/40 hover:shadow-xl transition-all group block"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600">
                                    <Globe size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-stone-900 group-hover:text-violet-600 transition-colors">Pan-India Growth Hub</h3>
                                    <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Delhi NCR • Bengaluru • Hyderabad • Pune • Pan-India</span>
                                </div>
                            </div>
                            <p className="text-stone-600 text-base leading-relaxed mb-6">
                                Nationwide digital campaigns, national SEO rankings, and multi-channel paid ads engineered for India's leading enterprises.
                            </p>
                            <span className="text-violet-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explore India Hub <ArrowRight size={14} />
                            </span>
                        </Link>
                    </div>
                </section>
            </div>

            {/* 6. FAQS */}
            <FaqSection faqs={homeFaqs} title="Digital Marketing Agency FAQs" subtitle="Common Questions" />

            {/* 7. CTA */}
            <CtaBanner
                title="Ready to Scale Your Brand with Maximum ROI?"
                subtitle="Schedule a free strategy consultation with Mumbai & India's top growth engineers today."
                buttonText="Claim Free Strategy Consultation"
                buttonLink="/contact"
            />
        </div>
    );
}