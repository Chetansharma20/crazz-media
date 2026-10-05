import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SectionHeader } from '../components/common/SectionHeader';
import {
    Zap, Rocket, Target, Stars, Share2, Globe, CheckCircle2,
    ArrowRight, MessageSquare, Layout, PieChart, TrendingUp, Search
} from 'lucide-react';
import { ASSETS_CONFIG } from '../config/assets';
import { MediaNode } from '../components/common/MediaNode';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FaqSection } from '../components/common/FaqSection';
import { CtaBanner } from '../components/common/CtaBanner';

export function ServicesView() {
    const navigate = useNavigate();

    const services = [
        {
            title: "Search Engine Optimization (SEO)",
            desc: "Technical audits, keyword research, on-page optimization, and high-authority link building to dominate Google's first page.",
            points: [
                "Technical SEO & Core Web Vitals Fixes",
                "High-Intent Commercial Keyword Strategy",
                "Local Google Map Pack Rankings in Mumbai & India",
                "High-Authority Digital PR & Backlinks",
                "Weekly Ranking & Organic Conversion Analytics"
            ],
            link: "/services/seo-agency-mumbai",
            platforms: "Google Search, Bing, Google Maps",
            extra: "Consistently ranked #1 for competitive search queries.",
            icon: <Search className="text-violet-600" size={24} />
        },
        {
            title: "Web Design and Development",
            desc: "Ultra-fast, mobile-first websites and conversion-focused eCommerce stores built by expert web developers.",
            points: [
                "Custom UI/UX & Responsive Web Design",
                "React, Next.js & Modern Web Technologies",
                "Shopify & WooCommerce eCommerce Architecture",
                "95+ Google PageSpeed Core Web Vitals Score",
                "Conversion Rate Optimization (CRO)"
            ],
            link: "/services/web-design-development-mumbai",
            platforms: "React, Next.js, Shopify, WordPress",
            extra: "Engineered to turn 3X more traffic into paying customers.",
            icon: <Globe className="text-violet-600" size={24} />
        },
        {
            title: "Social Media Marketing & Reels",
            desc: "We build viral brand presence that converts audience attention into loyal customer action.",
            points: [
                "Strategic Content Calendars & Viral Ideation",
                "High-Definition Reels & Short-Form Video",
                "Meme Marketing & Trend Jacking",
                "Proactive 24/7 Community Management",
                "Follower Growth & Engagement Optimization"
            ],
            link: "/services/social-media-marketing-agency",
            platforms: "Instagram, YouTube, LinkedIn, X, Facebook",
            extra: "Over 15M+ organic reel views generated.",
            icon: <Share2 className="text-violet-600" size={24} />
        },
        {
            title: "Performance Marketing (Paid Advertising)",
            desc: "High-ROAS conversion campaigns built for rapid, profitable scalability.",
            points: [
                "Meta Ads (Instagram and Facebook)",
                "Google Search & Performance Max (PMax)",
                "Lead Generation & High-Ticket B2B Funnels",
                "Server-Side Conversions API (CAPI) Tracking",
                "Multivariate Creative & Copy Testing"
            ],
            link: "/services/performance-marketing-agency",
            platforms: "Meta Ads, Google Ads, LinkedIn Ads",
            extra: "Our performance campaigns are optimized to deliver up to 10X ROAS.",
            icon: <TrendingUp className="text-violet-600" size={24} />
        },
        {
            title: "Branding and Visual Identity",
            desc: "Unforgettable brand positioning, logos, and packaging design that creates deep consumer trust.",
            points: [
                "Brand Strategy & Archetype Positioning",
                "Logo & Complete Design Systems",
                "FMCG & D2C Packaging Design",
                "Comprehensive Brand Guidelines Manual",
                "Marketing Decks & Corporate Collateral"
            ],
            link: "/services/branding-creative-agency",
            platforms: "Digital, Print, FMCG Packaging, Retail",
            extra: "Built to establish category dominance.",
            icon: <Stars className="text-violet-600" size={24} />
        },
        {
            title: "Influencer and Collaboration Marketing",
            desc: "Authentic creator partnerships that drive massive brand credibility and direct conversions.",
            points: [
                "Influencer Identification & Deep Vetting",
                "Campaign Creative Direction & Scripting",
                "Contract Negotiations & Deliverable Management",
                "UTM Tracking & Conversion Attribution",
                "Nano, Micro & Macro Creator Networks"
            ],
            link: "/services/social-media-marketing-agency",
            platforms: "Instagram Creators, YouTube Influencers",
            extra: "500+ successful influencer campaigns executed.",
            icon: <MessageSquare className="text-violet-600" size={24} />
        }
    ];

    const servicesFaqs = [
        {
            q: "Can I hire Crazz Media for an integrated 360° digital marketing package?",
            a: "Yes! While you can engage us for standalone services (like SEO or Web Development), our clients experience the highest compounding ROI when combining SEO, Performance Paid Ads, Social Media, and Custom Web Design into a single synchronized growth engine."
        },
        {
            q: "How do you customize your digital marketing strategies for different industries?",
            a: "We conduct deep customer journey mapping, competitor research, and historical data analysis for every client. Whether you're in B2B tech, Real Estate, D2C eCommerce, Healthcare, or Professional Services, your campaign architecture is tailored exclusively to your business objectives."
        },
        {
            q: "What is your typical onboarding timeline?",
            a: "Once we finalize your custom growth plan, our technical audits and strategy blueprint commence immediately in Week 1, with initial ad campaigns and on-page SEO rollouts launching by Week 2."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" }
    ];

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="360° Digital Marketing Services in Mumbai & India | Crazz Media"
                description="Explore Crazz Media's full suite of digital marketing services: SEO, web design & development, performance marketing, social media management, and branding."
                keywords="digital marketing services, seo services in mumbai, web development services in mumbai, social media marketing agency, performance marketing agency mumbai, branding agency mumbai, digital marketing company in india"
                canonicalPath="/services"
                faqs={servicesFaqs}
                breadcrumbs={breadcrumbs}
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden bg-stone-900 text-white w-full">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-40 grayscale brightness-75"
                    >
                        <source src={ASSETS_CONFIG.homeVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-[#fdfaf8]" />
                </div>

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 backdrop-blur-md mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        <span className="text-[10px] font-black tracking-widest text-violet-300 uppercase">
                            Full-Stack Growth Engine
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight max-w-5xl mx-auto">
                        Our 360° <span className="text-violet-500">Digital Marketing Services.</span>
                    </h1>

                    <p className="max-w-4xl mx-auto text-white/80 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
                        End-to-end digital growth solutions engineered to scale ambitious brands in Mumbai, across India, and globally.
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3 mx-auto cursor-pointer"
                        >
                            <span>Schedule Strategy Consultation</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* SERVICES GRID */}
            <section className="py-24 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1500px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-10 rounded-[36px] border border-stone-200 shadow-sm hover:border-violet-600/30 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h2 className="font-black text-xl text-stone-900 mb-3 tracking-tight group-hover:text-violet-600 transition-colors">{s.title}</h2>
                            <p className="text-stone-600 text-sm font-medium mb-6 leading-relaxed">{s.desc}</p>

                            <ul className="space-y-3 mb-6">
                                {s.points.map((p, pi) => (
                                    <li key={pi} className="flex gap-2.5 text-xs font-semibold text-stone-700 leading-snug">
                                        <CheckCircle2 size={15} className="text-violet-600 shrink-0 mt-0.5" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>

                            {s.extra && (
                                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 mb-6">
                                    <p className="text-xs font-bold text-violet-700 flex items-center gap-2">
                                        <Zap size={14} className="text-violet-600 shrink-0" />
                                        <span>{s.extra}</span>
                                    </p>
                                </div>
                            )}

                            <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                                <Link
                                    to={s.link}
                                    className="text-violet-600 font-black text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all"
                                >
                                    <span>Learn More Details</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY OUR SERVICES WORK */}
            <section className="bg-white py-24 border-y border-stone-100 w-full">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeader subtitle="The Strategy" title="Why Our Services Deliver Outsized Returns" centered={false} />
                        <div className="space-y-6 mt-8">
                            <p className="text-stone-600 text-lg leading-relaxed">
                                Because we don't treat marketing channels as isolated silos. We engineer synchronized growth protocols where technical SEO, high-energy viral content, and precision paid ad campaigns feed into each other.
                            </p>
                            <p className="text-stone-600 text-lg leading-relaxed">
                                By optimizing every step of your funnel — from initial impression to final checkout — we eliminate marketing waste and compound your return on investment.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-6 bg-[#fdfaf8] rounded-2xl border border-stone-200">
                                    <h3 className="font-black text-2xl text-violet-600 mb-1">Up to 10X</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Paid Ad ROAS</p>
                                </div>
                                <div className="p-6 bg-[#fdfaf8] rounded-2xl border border-stone-200">
                                    <h3 className="font-black text-2xl text-violet-600 mb-1">#1 Rank</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-stone-500">High-Intent Keywords</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl border border-stone-200 aspect-square w-full">
                            <MediaNode src={ASSETS_CONFIG.process} label="Growth Protocol" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={servicesFaqs} title="Services & Engagements FAQ" subtitle="Clear Guidance" />

            {/* CTA BANNER */}
            <CtaBanner
                title="Ready to Build Campaigns That Drive Attention & Real Revenue?"
                subtitle="Work with Crazz Media to accelerate your growth with full-stack digital marketing."
                buttonText="Connect with Crazz Media"
                buttonLink="/contact"
            />
        </div>
    );
}
