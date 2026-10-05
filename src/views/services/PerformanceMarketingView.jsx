import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BarChart, Target, DollarSign, TrendingUp, ShieldCheck,
    CheckCircle2, ArrowRight, Zap, PieChart, Layers, Globe
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function PerformanceMarketingView() {
    const navigate = useNavigate();

    const perfFaqs = [
        {
            q: "Why is Crazz Media the top performance marketing agency in Mumbai & India?",
            a: "We manage paid ad spend with mathematical precision. By combining high-converting creative ad hooks with laser-targeted bidding strategies on Meta (Facebook & Instagram) and Google Ads, our campaigns consistently deliver up to 4X to 10X ROAS."
        },
        {
            q: "What ad channels do you manage?",
            a: "We specialize in Google Search & Performance Max (PMax), Meta Ads (Instagram & Facebook), YouTube Video Ads, LinkedIn B2B Lead Gen, and Programmatic Retargeting."
        },
        {
            q: "How do you optimize Cost Per Acquisition (CPA)?",
            a: "We use continuous multivariate creative testing, custom landing page funnels, dynamic audience exclusion, and server-side tracking (CAPI) to drive maximum qualified conversions at the lowest cost."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" },
        { name: "Performance Marketing Agency", path: "/services/performance-marketing-agency" }
    ];

    const serviceSchema = {
        "name": "Performance Marketing & Paid Advertising",
        "serviceType": "Performance Marketing",
        "description": "Leading performance marketing agency in Mumbai & India providing Meta Ads, Google Ads, lead generation funnels, and high-ROAS eCommerce campaigns.",
        "areaServed": [
            { "@type": "City", "name": "Mumbai" },
            { "@type": "Country", "name": "India" }
        ]
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Best Performance Marketing Agency Mumbai | Top Advertising Agency in India | Crazz Media"
                description="Scale your ROAS with Crazz Media — the top performance marketing agency in Mumbai and premier advertising agency in India. Meta Ads, Google Ads, and high-converting lead funnels."
                keywords="performance marketing agency mumbai, performance marketing agency in mumbai, best advertising agencies in mumbai, best ad agency in mumbai, creative ad agencies in mumbai, creative advertising agencies in mumbai, best advertising agency in india, top advertising agency in india, india's top ad agencies, popular advertising agency in india, top marketing companies in india, best marketing companies in india, top marketing firms in india, best marketing firms in india"
                canonicalPath="/services/performance-marketing-agency"
                faqs={perfFaqs}
                breadcrumbs={breadcrumbs}
                serviceSchema={serviceSchema}
            />

            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-stone-900 text-white overflow-hidden w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-[#fdfaf8]/10" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                        <TrendingUp size={14} className="text-violet-400" />
                        <span>Up to 10X ROAS Generated</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Best Performance Marketing <br />
                        <span className="text-violet-500">Agency in Mumbai & Top Ad Agency in India</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Eliminate wasted ad spend. As a premier <strong className="text-white font-bold">performance marketing agency in Mumbai</strong> and top advertising agency in India, we engineer high-converting paid ad campaigns on Meta, Google, and LinkedIn that scale revenue predictably.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Scale Paid Ads Now</span>
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-5 border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-all text-base uppercase tracking-wider cursor-pointer"
                        >
                            Explore All Services
                        </button>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* PERFORMANCE METRICS */}
            <section className="py-16 bg-white border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "₹10Cr+", label: "Ad Spend Managed" },
                        { num: "4.5X", label: "Average Campaign ROAS" },
                        { num: "-38%", label: "Reduction in Cost Per Lead" },
                        { num: "100%", label: "Data-Driven Transparency" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Paid Acquisition" title="Comprehensive Paid Advertising Capabilities" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Meta Ads (Instagram & FB)",
                                desc: "Dynamic creative testing, lookalike audiences, catalog sales ads, and retargeting funnels designed to scale direct-to-consumer (D2C) brands.",
                                icon: <Target className="text-violet-600" size={28} />
                            },
                            {
                                title: "Google Ads & PMax",
                                desc: "High-intent search ads, Performance Max campaigns, Google Shopping feed management, and competitive bidding.",
                                icon: <DollarSign className="text-violet-600" size={28} />
                            },
                            {
                                title: "High-Converting Ad Creatives",
                                desc: "Video hooks, visual statics, and psychological copywriting designed specifically to beat ad fatigue and lower acquisition costs.",
                                icon: <Zap className="text-violet-600" size={28} />
                            },
                            {
                                title: "Funnel & CRO Optimization",
                                desc: "Custom landing page design, A/B testing, heatmaps, and frictionless checkout optimization to maximize conversion rates.",
                                icon: <Layers className="text-violet-600" size={28} />
                            },
                            {
                                title: "B2B LinkedIn Campaigns",
                                desc: "Account-Based Marketing (ABM), decision-maker targeting, and high-ticket B2B lead generation across India & global markets.",
                                icon: <Globe className="text-violet-600" size={28} />
                            },
                            {
                                title: "Server-Side Tracking (CAPI)",
                                desc: "Accurate conversion tracking setup with Meta Conversions API and Google Tag Manager Server-Side to eliminate iOS tracking loss.",
                                icon: <ShieldCheck className="text-violet-600" size={28} />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-violet-600/30 transition-all hover:shadow-xl">
                                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={perfFaqs} title="Performance Marketing FAQ" subtitle="ROAS & Strategy Insights" />

            {/* CTA */}
            <CtaBanner
                title="Ready for Maximum ROI on Your Paid Ad Budget?"
                subtitle="Book a free ad account audit. We'll identify wasted ad spend and uncover immediate scale opportunities."
                buttonText="Claim Free Ad Audit"
                buttonLink="/contact"
            />
        </div>
    );
}
