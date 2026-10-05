import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { ASSETS_CONFIG } from '../../config/assets';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setServicesDropdown(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';
    const scrolledBg = 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-4 shadow-sm';
    const defaultBg = 'bg-transparent py-8 md:py-12';

    const serviceLinks = [
        { name: "SEO Agency Mumbai", path: "/services/seo-agency-mumbai", desc: "#1 Google Search Rankings" },
        { name: "Web Design & Dev", path: "/services/web-design-development-mumbai", desc: "Custom Websites & eCommerce" },
        { name: "Social Media Agency", path: "/services/social-media-marketing-agency", desc: "Viral Reels & Growth" },
        { name: "Performance Marketing", path: "/services/performance-marketing-agency", desc: "Meta & Google Paid Ads" },
        { name: "Branding & Packaging", path: "/services/branding-creative-agency", desc: "Visual Identity & Packaging" },
        { name: "All Services Overview", path: "/services", desc: "Complete 360° Growth Matrix" }
    ];

    const locationLinks = [
        { name: "Mumbai Regional Hub", path: "/locations/digital-marketing-agency-mumbai", desc: "MMR & Local Suburbs" },
        { name: "Pan-India Growth Hub", path: "/locations/digital-marketing-company-india", desc: "National Scale Across India" }
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? scrolledBg : defaultBg}`}>
                <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 md:px-16 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:rotate-6 overflow-hidden shadow-lg">
                            <img src={ASSETS_CONFIG.logo} className="w-full h-full object-cover" alt="Logo" />
                        </div>
                        <span className={`font-light text-3xl md:text-4xl font-genty transition-colors ${(scrolled || !isHome) ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
                            Crazz Media
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10 lg:gap-12">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-xs md:text-sm font-black uppercase tracking-widest transition-all cursor-pointer ${isActive ? 'text-violet-600' :
                                    (scrolled || !isHome) ? 'text-stone-900 opacity-90 hover:opacity-100' : 'text-white/90 hover:text-white'
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesDropdown(true)}
                            onMouseLeave={() => setServicesDropdown(false)}
                        >
                            <Link
                                to="/services"
                                className={`text-xs md:text-sm font-black uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer ${
                                    location.pathname.startsWith('/services') ? 'text-violet-600' :
                                    (scrolled || !isHome) ? 'text-stone-900 opacity-90 hover:opacity-100' : 'text-white/90 hover:text-white'
                                }`}
                            >
                                <span>Services</span>
                                <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                            </Link>

                            {servicesDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-3xl shadow-2xl border border-stone-100 p-4 grid gap-2 z-50">
                                    <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-600 border-b border-stone-100">
                                        Specialized Services
                                    </div>
                                    {serviceLinks.map((s, idx) => (
                                        <Link
                                            key={idx}
                                            to={s.path}
                                            className="p-3 rounded-xl hover:bg-stone-50 transition-colors group block text-left"
                                        >
                                            <div className="text-sm font-bold text-stone-900 group-hover:text-violet-600 transition-colors">
                                                {s.name}
                                            </div>
                                            <div className="text-xs text-stone-500 font-medium mt-0.5">
                                                {s.desc}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Locations Dropdown */}
                        <div className="relative group">
                            <button
                                className={`text-xs md:text-sm font-black uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer ${
                                    location.pathname.startsWith('/locations') ? 'text-violet-600' :
                                    (scrolled || !isHome) ? 'text-stone-900 opacity-90 hover:opacity-100' : 'text-white/90 hover:text-white'
                                }`}
                            >
                                <span>Locations</span>
                                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-76 bg-white rounded-3xl shadow-2xl border border-stone-100 p-3 hidden group-hover:grid gap-1 z-50">
                                <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-600 border-b border-stone-100">
                                    Target Regions
                                </div>
                                {locationLinks.map((l, idx) => (
                                    <Link
                                        key={idx}
                                        to={l.path}
                                        className="p-3 rounded-xl hover:bg-stone-50 transition-colors group block text-left"
                                    >
                                        <div className="text-sm font-bold text-stone-900 group-hover:text-violet-600 transition-colors flex items-center gap-1.5">
                                            <MapPin size={14} className="text-violet-600" />
                                            <span>{l.name}</span>
                                        </div>
                                        <div className="text-xs text-stone-500 font-medium ml-4 mt-0.5">
                                            {l.desc}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-xs md:text-sm font-black uppercase tracking-widest transition-all cursor-pointer ${isActive ? 'text-violet-600' :
                                    (scrolled || !isHome) ? 'text-stone-900 opacity-90 hover:opacity-100' : 'text-white/90 hover:text-white'
                                }`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-xs md:text-sm font-black uppercase tracking-widest transition-all cursor-pointer ${isActive ? 'text-violet-600' :
                                    (scrolled || !isHome) ? 'text-stone-900 opacity-90 hover:opacity-100' : 'text-white/90 hover:text-white'
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                        <Link
                            to="/contact"
                            className={`px-8 py-3.5 text-xs md:text-sm font-black uppercase tracking-widest rounded-full transition-all cursor-pointer active:scale-95 shadow-md ${scrolled || !isHome ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-white text-stone-900 hover:bg-stone-50'}`}
                        >
                            Inquire
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden p-2 transition-colors cursor-pointer ${(scrolled || mobileMenuOpen || !isHome) ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer & Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            <div className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-white transition-all duration-500 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-20 px-8 gap-4 overflow-y-auto">
                    <NavLink
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-xl font-black uppercase tracking-widest text-right transition-all py-3 border-b border-stone-100 ${isActive ? 'text-violet-600' : 'text-stone-700 hover:text-violet-600'}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-xl font-black uppercase tracking-widest text-right transition-all py-3 border-b border-stone-100 ${isActive ? 'text-violet-600' : 'text-stone-700 hover:text-violet-600'}`
                        }
                    >
                        Services
                    </NavLink>

                    <div className="space-y-3 text-right">
                        <div className="text-xs font-black uppercase tracking-widest text-violet-600">Specialized</div>
                        {serviceLinks.slice(0, 5).map((s, idx) => (
                            <Link
                                key={idx}
                                to={s.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm font-bold text-stone-600 hover:text-violet-600"
                            >
                                {s.name}
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-3 text-right">
                        <div className="text-xs font-black uppercase tracking-widest text-violet-600">Locations</div>
                        {locationLinks.map((l, idx) => (
                            <Link
                                key={idx}
                                to={l.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm font-bold text-stone-600 hover:text-violet-600"
                            >
                                📍 {l.name}
                            </Link>
                        ))}
                    </div>

                    <NavLink
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-xl font-black uppercase tracking-widest text-right transition-all py-3 border-b border-stone-100 ${isActive ? 'text-violet-600' : 'text-stone-700 hover:text-violet-600'}`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-xl font-black uppercase tracking-widest text-right transition-all py-3 border-b border-stone-100 ${isActive ? 'text-violet-600' : 'text-stone-700 hover:text-violet-600'}`
                        }
                    >
                        Contact
                    </NavLink>

                    <div className="mt-auto pb-8 pt-4 space-y-4">
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full bg-violet-600 text-white font-black py-4 rounded-xl text-sm flex items-center justify-center uppercase tracking-widest shadow-lg cursor-pointer hover:bg-violet-700 active:scale-95 transition-all"
                        >
                            Start Project
                        </Link>
                        <p className="text-xs text-stone-400 font-bold uppercase tracking-[0.3em] text-center italic">© 2026 CRAZZ MEDIA</p>
                    </div>
                </div>
            </div>
        </>
    );
}
