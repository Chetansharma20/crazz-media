import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Search, TrendingUp, Target, BarChart, CheckCircle2, ShieldCheck,
    Globe2, Award, Zap, ArrowRight, Layers, FileText, Cpu, MapPin
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function SeoMumbaiView() {
    const navigate = useNavigate();

    const seoFaqs = [
        {
            q: "Why is Crazz Media the best SEO agency in Mumbai?",
            a: "Crazz Media blends deep technical SEO, semantic keyword research, high-authority digital PR, and conversion rate optimization (CRO). Unlike traditional SEO providers in Mumbai that rely on outdated link spam, we focus on revenue-generating organic traffic and sustainable first-page rankings."
        },
        {
            q: "How long does it take for a Mumbai SEO company to deliver #1 Google rankings?",
            a: "Typically, noticeable improvements in keyword visibility and organic traffic occur within 60 to 90 days. Competitive industry keywords in Mumbai (such as real estate, finance, B2B, and eCommerce) achieve authoritative top 3 rankings within 4 to 6 months of consistent technical and on-page optimization."
        },
        {
            q: "What is included in your search engine optimization services in Mumbai?",
            a: "Our end-to-end SEO services company in Mumbai provides technical website audits, Core Web Vitals fixes, on-page optimization, content cluster creation, local SEO (Google Business Profile & Mumbai local citations), high-authority backlink acquisition, and weekly analytics reporting."
        },
        {
            q: "Do you offer localized SEO services for Mumbai suburbs (Bandra, Andheri, BKC, Thane, Navi Mumbai)?",
            a: "Yes! Our local SEO experts in Mumbai optimize your digital presence for hyper-local 'near me' search queries, multi-location schema, Google Map pack rankings, and hyper-targeted regional landing pages across Mumbai Suburban and MMR."
        },
        {
            q: "How does SEO compare to paid Google Ads for Mumbai businesses?",
            a: "While Google Ads provide immediate visibility for as long as you pay, organic search engine optimization in Mumbai delivers compounding ROI. Once your pages rank on Google's first page, you receive continuous, highly targeted customer inquiries at zero cost-per-click."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" },
        { name: "SEO Agency Mumbai", path: "/services/seo-agency-mumbai" }
    ];

    const serviceSchema = {
        "name": "Search Engine Optimization Services in Mumbai",
        "serviceType": "Search Engine Optimization (SEO)",
        "description": "Premium SEO services in Mumbai offering technical SEO, local SEO, enterprise search engine optimization, content strategy, and high-ROI keyword rankings.",
        "areaServed": {
            "@type": "City",
            "name": "Mumbai"
        }
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Best SEO Agency in Mumbai | Top SEO Company & Services | Crazz Media"
                description="Looking for the best SEO company in Mumbai? Crazz Media is a premier Mumbai SEO agency delivering #1 Google rankings, technical search engine optimization, and measurable organic revenue."
                keywords="seo agency mumbai, seo company in mumbai, best seo company in mumbai, mumbai seo agency, mumbai seo company, search engine optimization companies in mumbai, search engine optimization company mumbai, seo companies in mumbai india, seo firm in mumbai, seo providers in mumbai, seo services in mumbai, seo mumbai, best seo agency in mumbai, top seo companies in mumbai, seo expert in mumbai, best seo services in mumbai, mumbai seo services, search engine optimization in mumbai, search engine optimization services in mumbai, seo experts in mumbai, seo marketing mumbai, seo services company in mumbai"
                canonicalPath="/services/seo-agency-mumbai"
                faqs={seoFaqs}
                breadcrumbs={breadcrumbs}
                serviceSchema={serviceSchema}
            />

            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-stone-900 text-white overflow-hidden w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-900/90 to-[#fdfaf8]/10" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} className="text-violet-400" />
                        <span>#1 Rated Mumbai SEO Agency</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Top SEO Company in Mumbai <br />
                        <span className="text-violet-500">Engineered for #1 Google Rankings</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Dominate competitive search results with Crazz Media — the trusted <strong className="text-white font-bold">SEO agency in Mumbai</strong>. We combine technical SEO architecture, high-intent content strategy, and authority link acquisition to turn organic search into your most profitable revenue channel.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Claim Free SEO Audit</span>
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
                        { num: "94%+", label: "Keywords on Page #1" },
                        { num: "4.8X", label: "Average Organic Growth" },
                        { num: "250K+", label: "Monthly Search Clicks Driven" },
                        { num: "100%", label: "White-Hat Ethical SEO" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DETAILED CONTENT SECTION: WHY CHOOSE A MUMBAI SEO FIRM */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <SectionHeader subtitle="Search Authority" title="Why Businesses Need a Specialist Mumbai SEO Firm" centered={false} />
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Mumbai is India's financial and commercial capital, with thousands of businesses competing for the exact same customers. Standard, template-based SEO tactics no longer work in today's AI-driven search ecosystem. As a top <strong>search engine optimization company in Mumbai</strong>, Crazz Media develops tailored strategies that give you an unbeatable competitive moat.
                        </p>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Whether you operate a local business in Andheri, Bandra, or Lower Parel, an eCommerce storefront shipping across India, or a B2B enterprise in BKC, our <strong>SEO experts in Mumbai</strong> build holistic campaigns that rank for bottom-of-funnel keywords that convert into high-paying clients.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Technical Code Audits & Speed Optimization",
                                "Entity-Based Keyword Strategy",
                                "Google Business Profile Local Map Pack",
                                "Authoritative Industry Backlinks",
                                "Zero-Search-Spam Ethical Tactics",
                                "Transparent Real-Time KPI Dashboards"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-violet-600 shrink-0" />
                                    <span className="text-sm font-bold text-stone-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-xl space-y-6">
                        <h3 className="text-2xl font-black text-stone-900 uppercase">
                            What Makes Our Mumbai SEO Services Different?
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
                                <h4 className="font-bold text-violet-900 text-base">Full-Stack Technical SEO</h4>
                                <p className="text-stone-600 text-sm mt-1">We fix schema markup, canonical conflicts, server response times, and Core Web Vitals to guarantee search bots index every valuable page.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
                                <h4 className="font-bold text-violet-900 text-base">High-Intent Keyword Mapping</h4>
                                <p className="text-stone-600 text-sm mt-1">We don't chase vanity volume. We target high-intent transactional search queries that deliver qualified phone calls, bookings, and sales.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
                                <h4 className="font-bold text-violet-900 text-base">Local & Multi-Location Dominance</h4>
                                <p className="text-stone-600 text-sm mt-1">Dominate the Google 3-Pack across Mumbai, Thane, Navi Mumbai, and surrounding business hubs with optimized citations and hyper-local signals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6-PILLAR SEO PROCESS */}
            <section className="py-24 bg-white border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="SEO Methodology" title="Our 6-Phase Search Engine Optimization Process" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                step: "01",
                                title: "Technical SEO Audit",
                                desc: "In-depth crawling of website architecture, indexability, crawl budget, robots.txt, sitemaps, redirect chains, and mobile responsiveness.",
                                icon: <Cpu className="text-violet-600" size={28} />
                            },
                            {
                                step: "02",
                                title: "Keyword & Competitor Gap Analysis",
                                desc: "Identifying high-volume commercial keywords and competitor ranking gaps across Mumbai and Pan-India search markets.",
                                icon: <Search className="text-violet-600" size={28} />
                            },
                            {
                                step: "03",
                                title: "On-Page Optimization",
                                desc: "Crafting optimized H1-H3 tag structures, compelling title tags, meta descriptions, internal link silos, and Schema.org JSON-LD markup.",
                                icon: <Layers className="text-violet-600" size={28} />
                            },
                            {
                                step: "04",
                                title: "Content Clusters & Authority Copy",
                                desc: "Publishing human-written, value-dense pillar pages and supporting blog articles that answer user intent and capture featured snippets.",
                                icon: <FileText className="text-violet-600" size={28} />
                            },
                            {
                                step: "05",
                                title: "Digital PR & Backlink Acquisition",
                                desc: "Earning authentic editorial backlinks from high-authority media publications, industry directories, and authoritative domains.",
                                icon: <Award className="text-violet-600" size={28} />
                            },
                            {
                                step: "06",
                                title: "Monitoring, Reporting & CRO",
                                desc: "Weekly tracking of search engine rankings, organic traffic, conversion rate optimization (CRO), and continuous algorithmic refinements.",
                                icon: <BarChart className="text-violet-600" size={28} />
                            }
                        ].map((p, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-violet-600/30 transition-all hover:shadow-lg">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                        {p.icon}
                                    </div>
                                    <span className="text-3xl font-black text-stone-300">{p.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{p.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCAL SEO MUMBAI COVERAGE */}
            <section className="py-20 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
                    <SectionHeader subtitle="Locations Covered" title="Hyper-Local SEO Coverage Across Mumbai Metropolitan Region" centered={true} />
                    <p className="max-w-3xl mx-auto text-stone-600 text-base mt-4 mb-12">
                        Our specialized local SEO providers in Mumbai optimize search presence for businesses situated across all key commercial corridors:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {[
                            "South Mumbai (Colaba, Nariman Point, Fort)",
                            "Bandra Kurla Complex (BKC)",
                            "Bandra West & Khar",
                            "Andheri East & West",
                            "Lower Parel & Worli",
                            "Goregaon & Malad",
                            "Powai & Kanjurmarg",
                            "Navi Mumbai (Vashi, CBD Belapur)",
                            "Thane West & Ghodbunder Road",
                            "Borivali & Kandivali"
                        ].map((loc, i) => (
                            <span key={i} className="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 text-xs md:text-sm font-bold shadow-sm">
                                📍 {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={seoFaqs} title="Mumbai SEO Services FAQ" subtitle="Answers from SEO Experts" />

            {/* CTA */}
            <CtaBanner
                title="Ready for #1 Google Rankings with the Best SEO Company in Mumbai?"
                subtitle="Request a complimentary 25-point SEO audit. Let our search engine optimization specialists uncover your biggest organic growth opportunities."
                buttonText="Book Free SEO Audit"
                buttonLink="/contact"
            />
        </div>
    );
}
