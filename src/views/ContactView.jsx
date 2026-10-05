import React, { useState } from 'react';
import { Instagram, Mail, MessageCircle, ArrowRight, Zap, Target, TrendingUp, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from '../components/common/Icons';
import { ASSETS_CONFIG } from '../config/assets';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FaqSection } from '../components/common/FaqSection';

export function ContactView() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'SEO & Organic Growth',
        message: ''
    });

    const handles = [
        { n: 'WHATSAPP DIRECT', i: <MessageCircle size={28} />, v: '+91 90822 87249', color: 'bg-green-500', link: 'https://wa.me/919082287249' },
        { n: 'EMAIL HQ', i: <Mail size={28} />, v: 'info.crazzmedia@gmail.com', color: 'bg-stone-700', link: 'mailto:info.crazzmedia@gmail.com' },
        { n: 'INSTAGRAM', i: <Instagram size={28} />, v: '@crazzmedia', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: 'https://www.instagram.com/crazzmedia?igsh=NzQ5d2hkMno3eDA1&utm_source=qr' },
        { n: 'LINKEDIN', i: <LinkedInIcon size={28} />, v: 'Crazz Media', color: 'bg-[#0077b5]', link: 'https://www.linkedin.com/company/107023675/' }
    ];

    const contactFaqs = [
        {
            q: "How fast will Crazz Media respond to my inquiry?",
            a: "We respond to all direct inquiries, website submissions, and WhatsApp messages within 2 to 4 business hours."
        },
        {
            q: "Can we schedule an in-person meeting in Mumbai?",
            a: "Yes! Our leadership team regularly meets with clients across Mumbai (Bandra, BKC, Andheri, Lower Parel, South Mumbai). We also host virtual video discovery sessions for brands nationwide."
        },
        {
            q: "Do you offer free initial audits for SEO or Ad accounts?",
            a: "Yes! Every new inquiry includes a complimentary growth and technical audit to identify your highest-leverage opportunities."
        }
    ];

    const breadcrumbs = [
        { name: "Contact Us", path: "/contact" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link with inquiry details
        const subject = encodeURIComponent(`Growth Inquiry: ${formData.service} - ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\n\nProject Details:\n${formData.message}`);
        window.location.href = `mailto:info.crazzmedia@gmail.com?subject=${subject}&body=${body}`;
        setFormSubmitted(true);
    };

    return (
        <div className="relative bg-[#fdfaf8] text-stone-900">
            <SEOHead
                title="Contact Crazz Media | Best Digital Marketing Agency Mumbai & India"
                description="Get in touch with Crazz Media for SEO, web design, performance marketing, and branding services in Mumbai & India. Schedule your free strategy consultation today."
                keywords="contact crazz media, digital marketing agency mumbai contact, seo company in mumbai contact, hire web designer mumbai, performance marketing agency near me"
                canonicalPath="/contact"
                faqs={contactFaqs}
                breadcrumbs={breadcrumbs}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden bg-stone-900 text-white w-full">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-50 grayscale brightness-90"
                    >
                        <source src={ASSETS_CONFIG.contactVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-[#fdfaf8]" />
                </div>

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 backdrop-blur-md mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        <span className="text-[10px] font-black tracking-widest text-violet-300 uppercase">
                            Fast Response Protocol
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight max-w-5xl mx-auto">
                        Let's Talk <span className="text-violet-500">Growth & ROI.</span>
                    </h1>

                    <p className="max-w-4xl mx-auto text-white/80 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
                        Ready to scale your brand with proven technical authority? Connect with our growth strategists today.
                    </p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbs} />

            {/* 2. CONTACT NODES */}
            <section className="bg-white py-20 border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <SectionHeader subtitle="Communication Channels" title="Direct Contact Nodes." centered={true} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {handles.map((h, i) => (
                            <a
                                key={i}
                                href={h.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 rounded-[36px] bg-[#fdfaf8] border border-stone-200 flex flex-col items-center text-center group transition-all hover:scale-105 hover:border-violet-600/30 hover:shadow-xl shadow-sm cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${h.color} flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-all shadow-lg`}>
                                    {h.i}
                                </div>
                                <h4 className="text-[11px] font-black uppercase text-violet-600 mb-2 tracking-widest">{h.n}</h4>
                                <p className="text-sm md:text-base font-bold text-stone-900 tracking-tight">{h.v}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INQUIRY FORM & LOCATION DETAILS */}
            <section className="py-24 bg-[#fdfaf8] border-b border-stone-100">
                <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[40px] border border-stone-200 shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-black text-stone-900 uppercase tracking-tight mb-2">
                            Request Free Strategy Session
                        </h2>
                        <p className="text-stone-500 text-sm mb-8">
                            Fill out the details below and our team will analyze your brand and respond within 4 hours.
                        </p>

                        {formSubmitted ? (
                            <div className="p-8 rounded-2xl bg-violet-50 border border-violet-200 text-center space-y-4">
                                <CheckCircle2 size={48} className="text-violet-600 mx-auto" />
                                <h3 className="text-xl font-bold text-stone-900">Thank you for your submission!</h3>
                                <p className="text-stone-600 text-sm">
                                    Your email client has opened with your inquiry details. We will reach out to you immediately.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Rahul Sharma"
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-violet-600 focus:outline-none text-sm font-medium"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@company.com"
                                            className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-violet-600 focus:outline-none text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
                                            Phone / WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-violet-600 focus:outline-none text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
                                        Primary Service Needed *
                                    </label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-violet-600 focus:outline-none text-sm font-medium"
                                    >
                                        <option value="SEO & Organic Growth">Search Engine Optimization (SEO)</option>
                                        <option value="Website Design & Development">Website Design & Development</option>
                                        <option value="Performance Marketing (Paid Ads)">Performance Marketing (Paid Ads)</option>
                                        <option value="Social Media & Content Creation">Social Media & Reels Creation</option>
                                        <option value="Branding & Packaging Design">Branding & Packaging Design</option>
                                        <option value="Complete 360 Digital Marketing">Complete 360° Digital Marketing Suite</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
                                        Brief Project Description / Goals
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your brand, current challenges, target audience, and goals..."
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-violet-600 focus:outline-none text-sm font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-violet-600 hover:bg-violet-500 text-white font-black py-5 rounded-xl text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer active:scale-95"
                                >
                                    <span>Send Project Inquiry</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Details & Local Trust */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div>
                            <SectionHeader subtitle="Location & Hub" title="Headquartered in Mumbai, Serving Pan-India." centered={false} />
                            <p className="text-stone-600 text-base leading-relaxed mt-4">
                                Crazz Media serves fast-growth businesses across Mumbai Metropolitan Region as well as clients in Delhi NCR, Bengaluru, Hyderabad, Pune, and overseas.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-base">Office Hub</h4>
                                    <p className="text-stone-600 text-sm mt-1">Mumbai Suburban, Maharashtra 400050, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-base">Direct Phone & WhatsApp</h4>
                                    <p className="text-stone-600 text-sm mt-1">+91 90822 87249 (Mon-Sat, 9am - 8pm IST)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-base">Official Email</h4>
                                    <p className="text-stone-600 text-sm mt-1">info.crazzmedia@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <FaqSection faqs={contactFaqs} title="Inquiry & Process FAQ" subtitle="Got Questions?" />
        </div>
    );
}
