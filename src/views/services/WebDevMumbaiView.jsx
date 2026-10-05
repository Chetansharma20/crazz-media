import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Code, Layout, Smartphone, ShoppingCart, Zap, CheckCircle2,
    Shield, Server, Sparkles, ArrowRight, Gauge, Layers, Globe
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/FaqSection';
import { CtaBanner } from '../../components/common/CtaBanner';

export function WebDevMumbaiView() {
    const navigate = useNavigate();

    const webDevFaqs = [
        {
            q: "What makes Crazz Media the best web designing company in Mumbai?",
            a: "Unlike typical web development agencies that rely on slow, cookie-cutter templates, Crazz Media builds custom, ultra-fast, mobile-first websites optimized for high conversion rates and top search engine rankings. We combine world-class UI/UX design with clean, scalable code."
        },
        {
            q: "How much does website development in Mumbai cost?",
            a: "Website design and development costs depend on project scope, interactive functionality, custom animations, CMS integration, and eCommerce capabilities. Contact us for a free technical consultation and customized quotation tailored to your business goals."
        },
        {
            q: "Do you develop custom eCommerce websites for Mumbai brands?",
            a: "Yes! We are a leading eCommerce website development company in Mumbai. We build scalable online stores with seamless payment gateway integrations (Razorpay, Stripe, UPI), automated inventory sync, mobile-first checkout funnels, and high-speed loading."
        },
        {
            q: "Will my website be mobile responsive and SEO-friendly?",
            a: "100%. Every website created by our web developers in Mumbai is built with responsive fluid layouts, semantic HTML5, fast Core Web Vitals scores (90+ Google PageSpeed), structured Schema.org markup, and on-page SEO best practices."
        },
        {
            q: "What technologies do your website developers in Mumbai use?",
            a: "We specialize in modern frontend and backend tech stacks including React.js, Next.js, Node.js, Tailwind CSS, WordPress custom themes, Shopify, WooCommerce, Headless CMS, and high-security cloud hosting architectures."
        }
    ];

    const breadcrumbs = [
        { name: "Services", path: "/services" },
        { name: "Web Design & Development Mumbai", path: "/services/web-design-development-mumbai" }
    ];

    const serviceSchema = {
        "name": "Web Design and Development Services in Mumbai",
        "serviceType": "Website Design and Development",
        "description": "Leading web designing company in Mumbai offering custom website development, eCommerce web design, UI/UX, and high-performance web applications.",
        "areaServed": {
            "@type": "City",
            "name": "Mumbai"
        }
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Best Web Designing Company in Mumbai | Website Development Company Mumbai | Crazz Media"
                description="Looking for the best web development company in Mumbai? Crazz Media is a premier website design and development company in Mumbai creating fast, responsive, conversion-focused websites and eCommerce solutions."
                keywords="web designing company in mumbai, website making company in mumbai, website development company mumbai, website developer mumbai, website designer mumbai, website design company mumbai, web development company mumbai, website development in mumbai, website design in mumbai, web developers in mumbai, best web development company in mumbai, website development agency in mumbai, web development agency in mumbai, best web design company in mumbai, ecommerce website development company in mumbai, web development in mumbai, best website design company in mumbai, best web design company mumbai, best web development company mumbai, best website design company mumbai, ecommerce website development company mumbai, mumbai web development, top web design companies in mumbai, top website design company in mumbai, web design and development company in mumbai, web design and development in mumbai, web design services in mumbai, web development services in mumbai, web development services mumbai, website design and development company in mumbai, website design and development in mumbai, website design development company mumbai, website development services in mumbai"
                canonicalPath="/services/web-design-development-mumbai"
                faqs={webDevFaqs}
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
                        <span>Premier Web Design Company in Mumbai</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Best Web Designing & <br />
                        <span className="text-violet-500">Website Development Company in Mumbai</span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal max-w-4xl mx-auto leading-relaxed">
                        Transform your digital identity with Crazz Media. As a top <strong className="text-white font-bold">website development agency in Mumbai</strong>, we build high-speed, conversion-engineered websites that captivate users, drive sales, and dominate search rankings.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.3)] text-base uppercase tracking-wider flex items-center gap-3 cursor-pointer"
                        >
                            <span>Start Your Web Project</span>
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-5 border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-all text-base uppercase tracking-wider cursor-pointer"
                        >
                            View Portfolio & Capabilities
                        </button>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* VALUE PROPOSITION GRID */}
            <section className="py-16 bg-white border-b border-stone-100 w-full">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "95+", label: "Google PageSpeed Score" },
                        { num: "100%", label: "Mobile Responsive Design" },
                        { num: "3.5X", label: "Average Conversion Rate Boost" },
                        { num: "24/7", label: "Technical Support & Security" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                            <div className="text-3xl sm:text-4xl font-black text-violet-600">{stat.num}</div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES OFFERED BY OUR WEB DESIGN COMPANY */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100 w-full">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Technical Capabilities" title="Full-Suite Web Design & Development Services in Mumbai" centered={true} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Custom Website Design",
                                desc: "Bespoke, brand-aligned visual design crafted by expert website designers in Mumbai. Seamless UI/UX tailored to convert visitors into loyal customers.",
                                icon: <Layout className="text-violet-600" size={28} />
                            },
                            {
                                title: "eCommerce Web Development",
                                desc: "Robust eCommerce website development company Mumbai solutions with fast product cataloging, secure payment gateways, and frictionless checkouts.",
                                icon: <ShoppingCart className="text-violet-600" size={28} />
                            },
                            {
                                title: "Mobile-First Responsive Design",
                                desc: "Pixel-perfect browsing across smartphones, tablets, and desktops ensuring maximum accessibility and mobile usability compliance.",
                                icon: <Smartphone className="text-violet-600" size={28} />
                            },
                            {
                                title: "Web Application & React Dev",
                                desc: "Custom web development services using modern JavaScript frameworks (React, Next.js, Node) for high-performance interactive web apps.",
                                icon: <Code className="text-violet-600" size={28} />
                            },
                            {
                                title: "SEO-Optimized Code Architecture",
                                desc: "Built-in technical SEO, semantic structured schemas, clean URL architecture, and lightning-fast loading speeds to rank #1 on Google.",
                                icon: <Gauge className="text-violet-600" size={28} />
                            },
                            {
                                title: "Website Maintenance & Security",
                                desc: "Continuous uptime monitoring, automated cloud backups, SSL certification, malware scanning, and regular framework updates.",
                                icon: <Shield className="text-violet-600" size={28} />
                            }
                        ].map((s, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-violet-600/30 transition-all hover:shadow-xl">
                                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-6">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{s.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PARTNER WITH CRAZZ MEDIA */}
            <section className="py-24 bg-white border-b border-stone-100 w-full">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <SectionHeader subtitle="Engineering Authority" title="Why We Are Rated Among Top Web Design Companies in Mumbai" centered={false} />
                        <p className="text-stone-600 text-lg leading-relaxed">
                            A website is your 24/7 digital storefront. If it's slow, confusing, or poorly designed, potential clients will immediately bounce to your competitors. As a trusted <strong>website design and development company in Mumbai</strong>, we build digital experiences that establish trust within the first 3 seconds.
                        </p>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Our team of experienced <strong>web developers in Mumbai</strong> works with high-growth startups, established corporations, luxury brands, and eCommerce leaders across Mumbai, Thane, Navi Mumbai, and Pan-India.
                        </p>
                        <div className="space-y-3 pt-2">
                            {[
                                "Bespoke design tailored to your specific brand DNA",
                                "Engineered for maximum lead generation & sales conversions",
                                "Zero bloated code — optimized for Core Web Vitals & Google PageSpeed",
                                "Full ownership of source code, assets, and hosting accounts"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-violet-600 shrink-0" />
                                    <span className="text-sm font-bold text-stone-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 rounded-full blur-3xl" />
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                            Technology Stack We Excel In
                        </h3>
                        <p className="text-white/70 text-sm">
                            We select modern, enterprise-grade technologies that ensure your web infrastructure remains fast, scalable, and secure for years to come.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                            {[
                                "React.js & Next.js",
                                "Tailwind CSS",
                                "Node.js & Express",
                                "Shopify & Liquid",
                                "WordPress / WooCommerce",
                                "PostgreSQL & MongoDB",
                                "Vite & Modern JS",
                                "AWS & Cloudflare",
                                "Headless CMS"
                            ].map((tech, i) => (
                                <div key={i} className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold text-center text-violet-200">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={webDevFaqs} title="Web Design & Development FAQ" subtitle="Clear Answers to Common Questions" />

            {/* CTA */}
            <CtaBanner
                title="Ready to Build a High-Performance Website with Mumbai's Best Web Developers?"
                subtitle="Schedule a free technical discovery call. We'll map out your website wireframes, tech stack, and timeline."
                buttonText="Discuss Your Web Project"
                buttonLink="/contact"
            />
        </div>
    );
}
