import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function FaqSection({ faqs = [], title = "Frequently Asked Questions", subtitle = "Clarity & FAQs" }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-24 bg-[#fdfaf8] border-b border-stone-100 text-stone-900 w-full">
            <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                <SectionHeader subtitle={subtitle} title={title} centered={true} />
                
                <div className="mt-16 space-y-4 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? 'bg-white border-violet-600/30 shadow-lg'
                                        : 'bg-white/60 border-stone-200 hover:border-stone-300'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-bold text-stone-900 text-base md:text-lg flex items-center gap-3">
                                        <HelpCircle size={20} className="text-violet-600 shrink-0" />
                                        {faq.q}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-violet-600 transition-transform duration-300 shrink-0 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-6 pt-2 text-stone-600 text-sm md:text-base leading-relaxed border-t border-stone-100">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
