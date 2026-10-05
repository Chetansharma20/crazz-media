import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function PrivacyView() {
    const breadcrumbs = [
        { name: "Privacy Policy", path: "/privacy" }
    ];

    const policySections = [
        {
            title: "1. Information We Collect",
            items: [
                {
                    title: "Personal Information",
                    content: [
                        { label: "Contact Details:", text: "Name, email address, phone number, and physical office location when provided via contact forms." },
                        { label: "Business Information:", text: "Brand name, industry, social media handles, and website URLs." },
                        { label: "Payment Data:", text: "For billing purposes, we collect necessary financial details via secure third-party payment processors." }
                    ]
                },
                {
                    title: "Usage & Technical Data",
                    content: [
                        "Information about your device and internet connection (IP address, browser type).",
                        "Log data regarding how you use our website (pages visited, time spent, referral sources).",
                        "Cookies and tracking technologies to optimize user experience."
                    ]
                }
            ]
        },
        {
            title: "2. How We Use Your Information",
            items: [
                {
                    title: "Service Delivery",
                    content: [
                        "To provide strategic marketing, content creation, and ad management services.",
                        "To manage client accounts and handle billing.",
                        "To personalize marketing campaigns based on brand requirements."
                    ]
                },
                {
                    title: "Agency Communication",
                    content: [
                        "Responding to inquiries, proposals, and support requests.",
                        "Sending newsletters or marketing insights (with the option to opt-out).",
                        "Updating you on campaign performance and strategic milestones."
                    ]
                }
            ]
        },
        {
            title: "3. Data Security",
            items: [
                {
                    title: "Protection Measures",
                    content: [
                        "We use industry-standard encryption and secure server protocols.",
                        "Access to your data is restricted to authorized Crazz Media personnel.",
                        "Regular security audits are conducted on our internal digital systems."
                    ]
                }
            ]
        },
        {
            title: "4. Information Sharing",
            items: [
                {
                    title: "Third-Party Partners",
                    content: [
                        "We do not sell your personal data to third parties.",
                        "Data may be shared with trusted subcontractors or technology platforms (e.g., ad networks, CRM tools) solely to fulfill our services.",
                        "Legal compliance: We may disclose data if required by law or to protect our legal rights."
                    ]
                }
            ]
        },
        {
            title: "5. Cookies & Tracking",
            items: [
                {
                    title: "Website Optimization",
                    content: [
                        "We use cookies to analyze web traffic and remember user preferences.",
                        "You can choose to disable cookies through your browser settings, though some website features may be limited."
                    ]
                }
            ]
        },
        {
            title: "6. Your Data Rights",
            items: [
                {
                    title: "Access & Control",
                    content: [
                        "You have the right to request access to the data we hold about you.",
                        "You may request correction of inaccurate data or deletion of your information (subject to legal/contractual requirements).",
                        "You can opt-out of marketing communications at any time."
                    ]
                }
            ]
        }
    ];

    return (
        <div className="bg-[#121212] pt-32 pb-20 px-6 sm:px-12 min-h-screen">
            <SEOHead
                title="Privacy Policy | Crazz Media"
                description="Read Crazz Media's privacy policy regarding data protection, cookies, client data security, and communication protocols."
                keywords="privacy policy, data security, crazz media privacy"
                canonicalPath="/privacy"
                breadcrumbs={breadcrumbs}
            />
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center bg-gradient-to-b from-white to-violet-500 bg-clip-text text-transparent">
                    Privacy Policy
                </h1>

                <div className="p-8 md:p-12 mb-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-violet-600"></div>

                    <p className="mb-8 text-gray-400 italic text-lg opacity-80 border-b border-white/10 pb-6">
                        Effective Date: January 1, 2024
                    </p>

                    <p className="mb-12 text-gray-200 leading-relaxed text-lg">
                        Crazz Media is committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and safeguard information when you engage with our agency or use our digital platforms.
                    </p>

                    <div className="space-y-12">
                        {policySections.map((section, index) => (
                            <div key={index} className="mb-12">
                                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6 pl-4 border-l-4 border-violet-500">
                                    {section.title}
                                </h2>
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="mb-6">
                                        <h3 className="text-violet-400 font-bold text-lg mb-3 uppercase tracking-wider">
                                            {item.title}
                                        </h3>
                                        <ul className="text-gray-300 space-y-2 list-disc ml-8">
                                            {item.content.map((point, pointIdx) => (
                                                <li key={pointIdx}>
                                                    {typeof point === 'string' ? point : (
                                                        <>
                                                            <strong className="text-white">{point.label}</strong> {point.text}
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-12 border-t border-white/10">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6 pl-4 border-l-4 border-violet-500">
                            10. Contact Us
                        </h2>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
                        </p>
                        <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10 max-w-sm">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-2">Crazz Media HQ</p>
                            <p className="text-gray-300 mb-1">Email: info.crazzmedia@gmail.com</p>
                            <p className="text-gray-300">Subject: Data Privacy Query</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
