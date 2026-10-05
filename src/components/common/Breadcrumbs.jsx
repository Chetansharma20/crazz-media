import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items = [] }) {
    if (!items || items.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-8 max-w-7xl mx-auto w-full">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-semibold text-stone-500">
                <li>
                    <Link to="/" className="flex items-center gap-1 hover:text-violet-600 transition-colors">
                        <Home size={14} />
                        <span>Home</span>
                    </Link>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center gap-2">
                            <ChevronRight size={12} className="text-stone-400" />
                            {isLast ? (
                                <span className="text-violet-600 font-bold" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link to={item.path} className="hover:text-violet-600 transition-colors">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
