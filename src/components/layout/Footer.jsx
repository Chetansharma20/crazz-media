import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { LinkedInIcon } from '../common/Icons';
import { ASSETS_CONFIG } from '../../config/assets';

export function Footer() {
    return (
        <footer className="relative z-20 bg-stone-50 py-10 md:py-16 border-t border-primary/10 overflow-hidden w-full">
            <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
                {/* 1. Brand */}
                <div className="col-span-1 lg:col-span-2">
                    <Link to="/" className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-lg transition-all overflow-hidden cursor-pointer">
                            <img src={ASSETS_CONFIG.logo} className="w-full h-full object-cover" alt="Logo" />
                        </div>
                        <span className="font-light text-3xl md:text-4xl font-genty text-stone-900 leading-none cursor-pointer">
                            Crazz Media
                        </span>
                    </Link>
                    <p className="text-stone-800 text-sm md:text-base max-w-sm font-medium leading-relaxed italic mb-3">
                        "Engineering Authority Through Technical ROI Node Sync."
                    </p>
                    <p className="text-stone-600 text-sm max-w-md leading-relaxed">
                        Top 360° Digital Marketing Agency in Mumbai & India. Driving high-ROAS paid ad campaigns, #1 Google SEO rankings, and viral creative content.
                    </p>
                </div>

                {/* 2. Growth Suite */}
                <div>
                    <h5 className="font-bold mb-5 md:mb-6 text-xs uppercase tracking-[0.3em] text-stone-900 font-black">
                        Growth Suite
                    </h5>
                    <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm font-bold uppercase tracking-wider text-stone-700">
                        <li>
                            <Link to="/services/seo-agency-mumbai" className="hover:text-violet-600 transition-colors">
                                SEO Agency Mumbai
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/web-design-development-mumbai" className="hover:text-violet-600 transition-colors">
                                Web Design & Dev
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/social-media-marketing-agency" className="hover:text-violet-600 transition-colors">
                                Social Media Agency
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/performance-marketing-agency" className="hover:text-violet-600 transition-colors">
                                Performance Ads
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/branding-creative-agency" className="hover:text-violet-600 transition-colors">
                                Branding & Packaging
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. Sync Nodes */}
                <div>
                    <h5 className="font-bold mb-5 md:mb-6 text-xs uppercase tracking-[0.3em] text-stone-900 font-black">
                        Sync Nodes
                    </h5>
                    <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm font-bold uppercase tracking-wider text-stone-700">
                        <li>
                            <Link to="/locations/digital-marketing-agency-mumbai" className="hover:text-violet-600 transition-colors">
                                📍 Mumbai
                            </Link>
                        </li>
                        <li>
                            <Link to="/locations/digital-marketing-company-india" className="hover:text-violet-600 transition-colors">
                                🇮🇳 India
                            </Link>
                        </li>
                        <li>
                            <Link to="/sitemap" className="hover:text-violet-600 transition-colors">
                                HTML Sitemap
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 4. Architecture */}
                <div>
                    <h5 className="font-bold mb-5 md:mb-6 text-xs uppercase tracking-[0.3em] text-stone-900 font-black">
                        Architecture
                    </h5>
                    <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm font-bold uppercase tracking-wider text-stone-700">
                        <li>
                            <Link to="/about" className="hover:text-violet-600 transition-colors">
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/performance-marketing-agency" className="hover:text-violet-600 transition-colors">
                                Performance Ads
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-violet-600 transition-colors">
                                Get Started
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:text-violet-600 transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 5. Social & Connect */}
                <div className="text-left">
                    <h5 className="font-bold mb-5 md:mb-6 text-xs uppercase tracking-[0.3em] text-stone-900 font-black">
                        Sync with us
                    </h5>
                    <div className="flex gap-6 text-stone-600 mb-4">
                        <a href="https://www.instagram.com/crazzmedia?igsh=NzQ5d2hkMno3eDA1&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Instagram size={22} className="hover:text-violet-600 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.facebook.com/people/Crazz-Media/61574822651247" target="_blank" rel="noopener noreferrer">
                            <Facebook size={22} className="hover:text-violet-600 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/company/107023675/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon size={22} className="hover:text-violet-600 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://wa.me/919082287249" target="_blank" rel="noopener noreferrer">
                            <MessageCircle size={22} className="hover:text-violet-600 cursor-pointer transition-colors" />
                        </a>
                    </div>
                    <div className="text-xs font-black uppercase text-stone-500 tracking-[0.25em]">
                        Crazz Media © 2026
                    </div>
                </div>
            </div>
        </footer>
    );
}
