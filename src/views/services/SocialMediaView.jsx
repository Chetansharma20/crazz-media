import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Share2, Users2, Sparkles, Video, TrendingUp, MessageSquare,
    CheckCircle2, ArrowRight, HeartHandshake, Instagram, Youtube, Award
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function SocialMediaView() {
    const navigate = useNavigate();

    const smmFaqs = [
        {
            q: "Why is Crazz Media the top social media marketing agency in Mumbai?",
            a: "We don't post generic stock images. As a leading social media marketing company in Mumbai, we create viral, crazy content — engaging short-form video reels, high-converting carousel decks, meme marketing, and authentic influencer collaborations that build massive brand loyalty and drive conversions."
        },
        {
            q: "Which social media platforms do you manage?",
            a: "We provide end-to-end management across Instagram, YouTube, LinkedIn, Facebook, and X (Twitter), tailored to your industry whether B2B or B2C."
        },
        {
            q: "How does your influencer marketing agency in Mumbai work?",
            a: "We identify, vet, negotiate with, and manage top nano, micro, and macro creators in Mumbai and across India. We ensure brand alignment, strict deliverables, and conversion tracking for measurable ROAS."
        },
        {
            q: "Do you offer community management and caption writing?",
            a: "Yes! Our team handles creative copywriting, hashtag strategies, active comment engagement, DM customer support responses, and community building 7 days a week."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" },
        { name: "Social Media Marketing Agency", path: "/services/social-media-marketing-agency" }
    ];

    const serviceSchema = {
        "name": "Social Media Marketing & Influencer Agency",
        "serviceType": "Social Media Marketing",
        "description": "Top-tier social media marketing agency in Mumbai & India specializing in viral content creation, Instagram growth, YouTube production, and influencer marketing.",
        "areaServed": [
            { "@type": "City", "name": "Mumbai" },
            { "@type": "Country", "name": "India" }
        ]
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Top Social Media Marketing Agency Mumbai | Best SMM Company in India | Crazz Media"
                description="Elevate your brand with the top social media marketing agency in Mumbai. Crazz Media creates viral reels, organic community growth, and influencer campaigns that scale brands across India."
                keywords="social media marketing agency mumbai, social media agency mumbai, social media marketing company mumbai, social media marketing mumbai, social media companies in mumbai, social media marketing agency near me, social media marketing company near me, social media marketing companies in india, social media marketing agencies in india, influencer marketing agency mumbai, influencer marketing agency in mumbai"
                canonicalPath="/services/social-media-marketing-agency"
                faqs={smmFaqs}
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
                        <span>Viral Content & Brand Culture</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Top Social Media Marketing <br />
                        <span className="text-violet-500">Agency in Mumbai & India</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Stop posting boring content that gets scrolled past. As a premier <strong className="text-white font-bold">social media marketing company in Mumbai</strong>, we engineer scroll-stopping reels, interactive social campaigns, and influencer partnerships that turn casual followers into raving brand advocates.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Launch Social Campaign</span>
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
                        { num: "15M+", label: "Organic Reel Views" },
                        { num: "6.2%", label: "Average Engagement Rate" },
                        { num: "500+", label: "Influencer Partnerships" },
                        { num: "10X", label: "Brand Community Growth" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SMM CAPABILITIES */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Social Growth Suite" title="Complete Social Media Solutions for Modern Brands" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Content Strategy & Calendars",
                                desc: "Customized monthly content plans aligned with consumer trends, seasonal spikes, and business KPIs.",
                                icon: <Share2 className="text-violet-600" size={28} />
                            },
                            {
                                title: "Reels & Short-Form Video",
                                desc: "Scriptwriting, creative directing, high-definition shooting, and dynamic editing optimized for Instagram Reels and YouTube Shorts algorithms.",
                                icon: <Video className="text-violet-600" size={28} />
                            },
                            {
                                title: "Influencer Marketing",
                                desc: "Strategic creator collaborations negotiated and managed by our premier influencer marketing agency in Mumbai to amplify reach.",
                                icon: <HeartHandshake className="text-violet-600" size={28} />
                            },
                            {
                                title: "Community Management",
                                desc: "Proactive follower engagement, lightning-fast response times to comments/DMs, and brand reputation management.",
                                icon: <Users2 className="text-violet-600" size={28} />
                            },
                            {
                                title: "Meme & Viral Marketing",
                                desc: "Capitalizing on trending pop culture formats to inject personality and relatable humor into your brand.",
                                icon: <Sparkles className="text-violet-600" size={28} />
                            },
                            {
                                title: "Analytics & Growth Optimization",
                                desc: "Data-driven performance reports detailing impressions, saves, shares, profile visits, and website referral traffic.",
                                icon: <TrendingUp className="text-violet-600" size={28} />
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
            <FaqSection faqs={smmFaqs} title="Social Media Marketing FAQ" subtitle="Insights from SMM Strategists" />

            {/* CTA */}
            <CtaBanner
                title="Ready to Build an Unstoppable Social Media Presence?"
                subtitle="Get a tailored social media content strategy for your brand today."
                buttonText="Connect with Our Social Team"
                buttonLink="/contact"
            />
        </div>
    );
}
