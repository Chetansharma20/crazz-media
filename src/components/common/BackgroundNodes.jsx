import React, { useMemo } from 'react';

export function BackgroundNodes() {
    const nodes = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
        id: i, left: Math.random() * 90, top: Math.random() * 90,
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.03]">
            {nodes.map(item => (
                <div
                    key={item.id}
                    className="absolute w-1 h-1 bg-violet-600 rounded-full"
                    style={{ left: `${item.left}%`, top: `${item.top}%` }}
                />
            ))}
        </div>
    );
}
