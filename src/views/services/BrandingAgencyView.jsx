import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles, Palette, Eye, Award, Box, Layers,
    CheckCircle2, ArrowRight, Compass, ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function BrandingAgencyView() {
    const navigate = useNavigate();

    const brandingFaqs = [
        {
            q: "What makes Crazz Media the top branding agency in Mumbai?",
            a: "We go beyond just designing pretty logos. As a premier branding agency in Mumbai, we define your core brand positioning, verbal voice, visual design system, packaging architecture, and emotional connection to turn your company into an unforgettable category leader."
        },
        {
            q: "Do you design packaging for Mumbai & Indian consumer brands?",
            a: "Yes! We are among the top packaging design agencies in Mumbai. We design retail-ready and eCommerce packaging, unboxing experiences, label guidelines, and 3D mockups that stand out on physical shelves and digital marketplaces."
        },
        {
            q: "What is included in a complete Brand Identity Kit?",
            a: "Our brand identity package includes logo design, color palettes, typography hierarchy, brand voice and messaging rules, brand guidelines manual, social media kits, stationery, and packaging design assets."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" },
        { name: "Branding & Creative Agency", path: "/services/branding-creative-agency" }
    ];

    const serviceSchema = {
        "name": "Branding and Creative Design Agency",
        "serviceType": "Brand Strategy & Packaging Design",
        "description": "Leading branding agency in Mumbai offering logo design, brand identity systems, packaging design, and visual storytelling.",
        "areaServed": [
            { "@type": "City", "name": "Mumbai" },
            { "@type": "Country", "name": "India" }
        ]
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Top Branding Agency Mumbai | Creative Packaging & Brand Design | Crazz Media"
                description="Elevate your brand identity with Crazz Media — a premier branding agency in Mumbai and top creative agency delivering unforgettable logos, packaging design, and visual storytelling."
                keywords="branding agency mumbai, creative agencies in mumbai, branding companies in mumbai, branding firms in mumbai, mumbai branding agency, packaging design agencies in mumbai, top creative agencies in mumbai, creative ad agencies in mumbai"
                canonicalPath="/services/branding-creative-agency"
                faqs={brandingFaqs}
                breadcrumbs={breadcrumbs}
                serviceSchema={serviceSchema}
            />

            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-stone-900 text-white overflow-hidden w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-[#fdfaf8]/10" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                        <Sparkles size={14} className="text-violet-400" />
                        <span>Iconic Brand Architecture</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Top Branding Agency in Mumbai <br />
                        <span className="text-violet-500">& Creative Design Studio</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        We build brands that command attention and drive premium value. As a leading <strong className="text-white font-bold">mumbai branding agency</strong>, we combine strategic positioning with provocative design to turn businesses into iconic market leaders.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Build Your Brand</span>
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

            {/* VALUE METRICS */}
            <section className="py-16 bg-white border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "50+", label: "Brands Created & Re-Imagined" },
                        { num: "100%", label: "Custom Trademarkable Design" },
                        { num: "3.8X", label: "Brand Equity Increase" },
                        { num: "360°", label: "Complete Identity Ecosystem" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BRANDING SERVICES */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Creative Capabilities" title="Comprehensive Branding Solutions" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Brand Strategy & Positioning",
                                desc: "Defining mission, vision, brand archetype, competitor differentiation, and market positioning strategy.",
                                icon: <Compass className="text-violet-600" size={28} />
                            },
                            {
                                title: "Logo & Visual Identity",
                                desc: "Crafting memorable logos, custom typography, color palettes, and visual systems that express your brand personality.",
                                icon: <Palette className="text-violet-600" size={28} />
                            },
                            {
                                title: "Packaging & Label Design",
                                desc: "Top-tier packaging design agencies in Mumbai services for FMCG, beauty, fashion, luxury, and consumer packaged goods.",
                                icon: <Box className="text-violet-600" size={28} />
                            },
                            {
                                title: "Brand Guidelines (Brand Book)",
                                desc: "Comprehensive brand books specifying digital and print usage rules, typography, imagery style, and iconography.",
                                icon: <Layers className="text-violet-600" size={28} />
                            },
                            {
                                title: "Marketing Collateral & Stationery",
                                desc: "Business cards, brochures, corporate decks, event booths, and social media launch assets crafted with surgical detail.",
                                icon: <Award className="text-violet-600" size={28} />
                            },
                            {
                                title: "Rebranding & Modernization",
                                desc: "Revitalizing legacy companies to appeal to modern digital-first consumers while preserving established equity.",
                                icon: <Eye className="text-violet-600" size={28} />
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
            <FaqSection faqs={brandingFaqs} title="Branding & Creative Design FAQ" subtitle="Insights from Creative Directors" />

            {/* CTA */}
            <CtaBanner
                title="Ready to Build an Iconic Brand Identity?"
                subtitle="Collaborate with Mumbai's most daring creative and branding minds."
                buttonText="Start Your Brand Journey"
                buttonLink="/contact"
            />
        </div>
    );
}
