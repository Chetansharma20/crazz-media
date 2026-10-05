import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    MapPin, Trophy, Target, TrendingUp, CheckCircle2, ArrowRight,
    Search, Layout, Share2, BarChart, Sparkles, Building, Phone, Mail
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function MumbaiLocationView() {
    const navigate = useNavigate();

    const mumbaiFaqs = [
        {
            q: "Why is Crazz Media ranked among the top 10 digital marketing agencies in Mumbai?",
            a: "Crazz Media stands out among digital marketing agencies in Mumbai through our proprietary blend of high-energy creative storytelling and rigorous performance engineering. We deliver measurable business outcomes: up to 10X ROAS, #1 Google search rankings, and viral social presence."
        },
        {
            q: "Which areas in Mumbai do you serve?",
            a: "We cater to clients across South Mumbai (Colaba, Nariman Point, Lower Parel), Western Suburbs (Bandra, Khar, Andheri, Malad, Borivali), BKC, Powai, as well as Navi Mumbai and Thane."
        },
        {
            q: "What digital marketing services do you offer in Mumbai?",
            a: "Our full-service agency provides Search Engine Optimization (SEO), Custom Web Design & Development, Performance Marketing (Meta & Google Ads), Social Media Growth, Influencer Marketing, and Strategic Branding."
        }
    ];

    const breadcrumbs = [
        { name: "Locations", path: "/locations/digital-marketing-agency-mumbai" },
        { name: "Mumbai Digital Marketing Agency", path: "/locations/digital-marketing-agency-mumbai" }
    ];

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Best Digital Marketing Agency in Mumbai | Top 10 Marketing Agencies | Crazz Media"
                description="Looking for the best digital marketing agency in Mumbai? Crazz Media is a top-ranked Mumbai digital marketing company providing SEO, web design, social media, performance marketing, and branding."
                keywords="best digital marketing agency in mumbai, top 10 digital marketing agencies in mumbai, digital marketing agency mumbai, seo agency mumbai, web designing company in mumbai, social media marketing agency mumbai, branding agency mumbai, performance marketing agency mumbai, creative agencies in mumbai"
                canonicalPath="/locations/digital-marketing-agency-mumbai"
                faqs={mumbaiFaqs}
                breadcrumbs={breadcrumbs}
            />

            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-stone-900 text-white overflow-hidden w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-[#fdfaf8]/10" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                        <Trophy size={14} className="text-violet-400" />
                        <span>Ranked Top Digital Marketing Agency in Mumbai</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Best Digital Marketing <br />
                        <span className="text-violet-500">Agency in Mumbai</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Accelerate your brand's growth in India's most competitive market. Crazz Media is a full-service, 360° <strong className="text-white font-bold">digital marketing agency in Mumbai</strong> that combines bold creativity with performance engineering to drive verified revenue.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Schedule Mumbai Consultation</span>
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-5 border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-all text-base uppercase tracking-wider cursor-pointer"
                        >
                            Explore Our Capabilities
                        </button>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* MUMBAI SERVICE PILLARS */}
            <section className="py-24 bg-white border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Core Offerings" title="Integrated Digital Growth Solutions in Mumbai" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "SEO Agency Mumbai",
                                desc: "Dominate Google search results with technical SEO audits, high-intent keyword mapping, and local Google Map pack rankings.",
                                link: "/services/seo-agency-mumbai",
                                icon: <Search className="text-violet-600" size={28} />
                            },
                            {
                                title: "Web Design & Development",
                                desc: "Custom, ultra-fast websites built by premier website developers in Mumbai to turn visitors into buyers.",
                                link: "/services/web-design-development-mumbai",
                                icon: <Layout className="text-violet-600" size={28} />
                            },
                            {
                                title: "Social Media Marketing",
                                desc: "Viral reels, scroll-stopping creative campaigns, and influencer marketing that builds true audience loyalty.",
                                link: "/services/social-media-marketing-agency",
                                icon: <Share2 className="text-violet-600" size={28} />
                            },
                            {
                                title: "Performance Marketing",
                                desc: "Conversion-optimized Meta Ads and Google Ads engineered to deliver up to 10X ROAS.",
                                link: "/services/performance-marketing-agency",
                                icon: <BarChart className="text-violet-600" size={28} />
                            },
                            {
                                title: "Branding & Packaging Design",
                                desc: "Iconic brand identities, packaging design, and visual positioning from Mumbai's top creative agency.",
                                link: "/services/branding-creative-agency",
                                icon: <Sparkles className="text-violet-600" size={28} />
                            },
                            {
                                title: "All Services Overview",
                                desc: "Explore our full suite of 360° digital growth solutions tailored to ambitious enterprises.",
                                link: "/services",
                                icon: <Target className="text-violet-600" size={28} />
                            }
                        ].map((s, idx) => (
                            <Link key={idx} to={s.link} className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-violet-600/40 transition-all hover:shadow-xl group block">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-violet-600 transition-colors">{s.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-violet-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCAL MUMBAI PRESENCE */}
            <section className="py-20 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <SectionHeader subtitle="Local Presence" title="Serving Mumbai's Most Ambitious Brands" centered={false} />
                        <p className="text-stone-600 text-lg leading-relaxed">
                            From fast-scaling direct-to-consumer (D2C) brands in Bandra to corporate leaders in BKC and innovative tech startups in Powai, Crazz Media provides the strategic agility and high-speed execution needed to win in Mumbai.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-stone-800 font-semibold">
                                <MapPin size={20} className="text-violet-600" />
                                <span>Mumbai Headquarters & Regional Hub</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-800 font-semibold">
                                <Phone size={20} className="text-violet-600" />
                                <span>+91 90822 87249 (Direct WhatsApp & Call)</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-800 font-semibold">
                                <Mail size={20} className="text-violet-600" />
                                <span>info.crazzmedia@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl space-y-4">
                        <h4 className="text-xl font-black uppercase text-stone-900">Key Suburbs & Business Hubs We Cover:</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-stone-700">
                            <div>📍 Bandra & Khar</div>
                            <div>📍 Andheri East & West</div>
                            <div>📍 BKC (Bandra Kurla Complex)</div>
                            <div>📍 Lower Parel & Worli</div>
                            <div>📍 Powai & Kanjurmarg</div>
                            <div>📍 Navi Mumbai (Vashi, Belapur)</div>
                            <div>📍 Thane & Ghodbunder</div>
                            <div>📍 Borivali & Malad</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={mumbaiFaqs} title="Mumbai Digital Marketing Agency FAQ" subtitle="Everything You Need to Know" />

            {/* CTA */}
            <CtaBanner
                title="Ready to Partner with Mumbai's Top Digital Marketing Agency?"
                subtitle="Book your private strategy consultation and let's craft a custom growth roadmap."
                buttonText="Claim Free Strategy Session"
                buttonLink="/contact"
            />
        </div>
    );
}
