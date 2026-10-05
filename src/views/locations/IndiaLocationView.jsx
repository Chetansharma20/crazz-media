import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Globe, Trophy, Target, TrendingUp, CheckCircle2, ArrowRight,
    Search, Layout, Share2, BarChart, Sparkles, MapPin, Award
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function IndiaLocationView() {
    const navigate = useNavigate();

    const indiaFaqs = [
        {
            q: "Why is Crazz Media recognized as India's best digital marketing company?",
            a: "Crazz Media is widely recognized as one of the top digital marketing companies in India because we bridge the gap between creative storytelling and hard numbers. Whether you're searching for the 'best digital marketing agency near me' or looking for a nationwide growth partner, our team delivers up to 10X ROAS, high-ranking SEO authority, and scalable performance campaigns."
        },
        {
            q: "How does your nationwide digital marketing agency work with remote clients across India?",
            a: "We manage digital campaigns seamlessly for clients in Delhi NCR, Bengaluru, Hyderabad, Pune, Mumbai, Ahmedabad, Chennai, and Kolkata using real-time reporting dashboards, weekly video strategy calls, dedicated account managers, and transparent Slack/WhatsApp communication channels."
        },
        {
            q: "What makes your digital marketing services near me different from local freelancers?",
            a: "Unlike single freelancers, we are a full-stack digital marketing firm in India with specialized strategists for technical SEO, paid ads (Meta & Google), copywriters, video editors, and full-stack web developers working in sync."
        }
    ];

    const breadcrumbs = [
        { name: "Locations", path: "/locations/digital-marketing-company-india" },
        { name: "Digital Marketing Company India", path: "/locations/digital-marketing-company-india" }
    ];

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Best Digital Marketing Company in India | Top Digital Marketing Agency Near Me | Crazz Media"
                description="Looking for India's best digital marketing company or a top marketing agency near me? Crazz Media delivers 360° SEO, performance marketing, web design, and social media growth across India."
                keywords="digital marketing agency near me, near me digital marketing agency, best digital marketing agency in india, marketing agency near me, digital marketing near me, digital marketing companies near me, digital marketing services near me, seo agency near me, best digital marketing company in india, digital marketing company in india, top digital marketing companies in india, social media marketing agency near me, social media marketing company near me, top 10 digital marketing company in india, top marketing companies in india, best marketing companies in india, top digital marketing agency in india, social media marketing companies in india, best marketing agency in india, best digital marketing agency near me, top 10 digital marketing agencies in india, digital marketing service near me, best advertising agency in india, social media marketing agencies in india, india's best digital marketing company, india's top digital marketing company, top advertising agency in india, india's best marketing company, best marketing firms in india, india's top ad agencies, popular advertising agency in india, top marketing firms in india"
                canonicalPath="/locations/digital-marketing-company-india"
                faqs={indiaFaqs}
                breadcrumbs={breadcrumbs}
            />

            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-stone-900 text-white overflow-hidden w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-[#fdfaf8]/10" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                        <Globe size={14} className="text-violet-400" />
                        <span>Pan-India Growth Partner</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Best Digital Marketing <br />
                        <span className="text-violet-500">Company in India & Agency Near Me</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        If you are searching for the <strong className="text-white font-bold">best digital marketing company in India</strong> or a premier <strong className="text-white font-bold">digital marketing agency near me</strong>, Crazz Media delivers full-funnel digital marketing services that scale brands nationwide with up to 10X ROAS.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Get Pan-India Proposal</span>
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-5 border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-all text-base uppercase tracking-wider cursor-pointer"
                        >
                            Explore Growth Suite
                        </button>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* NATIONAL REACH METRICS */}
            <section className="py-16 bg-white border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "28+", label: "States & Territories Reached" },
                        { num: "10X", label: "Maximum Campaign ROAS" },
                        { num: "₹10Cr+", label: "Ad Spend Engineered" },
                        { num: "100%", label: "Client Satisfaction" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPREHENSIVE DIGITAL SERVICES ACROSS INDIA */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="National Capabilities" title="India's Top Digital Marketing Services" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "SEO Agency Near Me",
                                desc: "Achieve national & local first-page search engine visibility on Google with technical SEO and high-volume commercial keywords.",
                                link: "/services/seo-agency-mumbai",
                                icon: <Search className="text-violet-600" size={28} />
                            },
                            {
                                title: "Performance Marketing Agency",
                                desc: "High-ROAS Meta Ads and Google Search/PMax advertising engineered by India's top advertising agency.",
                                link: "/services/performance-marketing-agency",
                                icon: <BarChart className="text-violet-600" size={28} />
                            },
                            {
                                title: "Web Design & Development",
                                desc: "Lightning-fast, mobile-first websites and custom eCommerce platforms crafted by leading web developers.",
                                link: "/services/web-design-development-mumbai",
                                icon: <Layout className="text-violet-600" size={28} />
                            },
                            {
                                title: "Social Media Marketing Agency",
                                desc: "Viral reels, meme marketing, and influencer partnerships managed by India's best social media marketing company.",
                                link: "/services/social-media-marketing-agency",
                                icon: <Share2 className="text-violet-600" size={28} />
                            },
                            {
                                title: "Branding & Visual Design",
                                desc: "Iconic brand positioning, brand guideline books, and packaging design from India's top creative agency.",
                                link: "/services/branding-creative-agency",
                                icon: <Sparkles className="text-violet-600" size={28} />
                            },
                            {
                                title: "Mumbai Regional Hub",
                                desc: "Explore our dedicated Mumbai headquarters and hyper-local MMR growth solutions.",
                                link: "/locations/digital-marketing-agency-mumbai",
                                icon: <MapPin className="text-violet-600" size={28} />
                            }
                        ].map((s, idx) => (
                            <Link key={idx} to={s.link} className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-violet-600/40 transition-all hover:shadow-xl group block">
                                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-violet-600 transition-colors">{s.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-violet-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Service Details <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY CITIES SERVED */}
            <section className="py-20 bg-white border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                    <SectionHeader subtitle="Pan-India Network" title="Empowering Brands Across All Major Indian Metros" centered={true} />
                    <p className="max-w-3xl mx-auto text-stone-600 text-base mt-4 mb-12">
                        Whether you are a D2C startup, B2B enterprise, or multi-chain retailer, Crazz Media delivers localized and nationwide digital marketing campaigns across:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {[
                            "Mumbai & MMR",
                            "Delhi NCR (Gurgaon, Noida, Delhi)",
                            "Bengaluru (Bangalore)",
                            "Hyderabad",
                            "Pune",
                            "Ahmedabad & Surat",
                            "Chennai",
                            "Kolkata",
                            "Jaipur",
                            "Chandigarh",
                            "Indore",
                            "Kochi"
                        ].map((city, i) => (
                            <span key={i} className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-stone-800 text-xs md:text-sm font-bold shadow-sm">
                                🇮🇳 {city}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={indiaFaqs} title="Digital Marketing Agency India FAQ" subtitle="National Growth Questions" />

            {/* CTA */}
            <CtaBanner
                title="Ready to Work with India's Best Digital Marketing Company?"
                subtitle="Partner with Crazz Media to accelerate your traffic, customer acquisition, and brand equity nationwide."
                buttonText="Start Your Growth Consultation"
                buttonLink="/contact"
            />
        </div>
    );
}
