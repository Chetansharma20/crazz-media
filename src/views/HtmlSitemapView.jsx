import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Layers, FileText, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';

export function HtmlSitemapView() {
    const sitemapLinks = [
        {
            category: "Core Pages",
            icon: <Globe className="text-violet-600" size={24} />,
            links: [
                { title: "Home — Best Digital Marketing Agency in Mumbai & India", path: "/" },
                { title: "All Services Overview — 360° Digital Marketing Suite", path: "/services" },
                { title: "About Crazz Media — Protocol, Vision & Leadership", path: "/about" },
                { title: "Contact Us — Inquire & Strategy Sessions", path: "/contact" },
                { title: "Privacy Policy", path: "/privacy" },
            ]
        },
        {
            category: "Specialized Services (Mumbai & India)",
            icon: <Layers className="text-violet-600" size={24} />,
            links: [
                { title: "SEO Agency Mumbai — Best SEO Company & Services", path: "/services/seo-agency-mumbai" },
                { title: "Web Design & Development Company Mumbai", path: "/services/web-design-development-mumbai" },
                { title: "Social Media Marketing Agency Mumbai & India", path: "/services/social-media-marketing-agency" },
                { title: "Performance Marketing & Advertising Agency", path: "/services/performance-marketing-agency" },
                { title: "Branding & Creative Packaging Design Agency", path: "/services/branding-creative-agency" },
            ]
        },
        {
            category: "Regional Location Hubs",
            icon: <MapPin className="text-violet-600" size={24} />,
            links: [
                { title: "Best Digital Marketing Agency in Mumbai (Regional Hub)", path: "/locations/digital-marketing-agency-mumbai" },
                { title: "Best Digital Marketing Company in India (Pan-India)", path: "/locations/digital-marketing-company-india" },
            ]
        }
    ];

    const breadcrumbs = [
        { name: "HTML Sitemap", path: "/sitemap" }
    ];

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900 min-h-screen">
            <SEOHead
                title="HTML Sitemap | Crazz Media"
                description="Explore all pages, service offerings, and location hubs on the Crazz Media website."
                keywords="sitemap, crazz media sitemap, digital marketing services, seo agency mumbai"
                canonicalPath="/sitemap"
                breadcrumbs={breadcrumbs}
            />

            <section className="pt-32 pb-16 px-4 bg-stone-900 text-white text-center">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                    Website <span className="text-violet-500">Sitemap</span>
                </h1>
                <p className="text-white/70 text-base md:text-lg mt-4 max-w-xl mx-auto">
                    Quick navigation index for all pages, specialized services, and location hubs.
                </p>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sitemapLinks.map((section, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <h2 className="text-lg font-bold text-stone-900">{section.category}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link
                                            to={link.path}
                                            className="text-stone-600 hover:text-violet-600 font-medium text-sm flex items-start gap-2 group transition-colors"
                                        >
                                            <ChevronRight size={16} className="text-stone-400 group-hover:text-violet-600 shrink-0 mt-0.5" />
                                            <span>{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
