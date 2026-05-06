"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react"; // Remove 'Link' from here
import Link from "next/link"; // Import Next.js Link here

interface Banner {
    id: number;
    image: string;
    link?: string;
    alt?: string;
}

export default function PeekSlider() {
    const [items, setItems] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/home-banners?position=slider`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json();

                if (result.data && result.data.length > 0) {
                    setItems(result.data);
                }
            } catch (error) {
                console.error("Error loading slider banners:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    const nextSlide = useCallback(() => {
        if (isAnimating || items.length < 2) return;
        setIsAnimating(true);
        setTimeout(() => {
            setItems((prev) => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
            setIsAnimating(false);
        }, 700);
    }, [isAnimating, items.length]);

    useEffect(() => {
        if (items.length < 2) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide, items.length]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 md:px-0 mb-10">
                <div className="w-full h-[175px] md:h-[450px] bg-gray-100 animate-pulse rounded-[24px]" />
            </div>
        );
    }

    if (items.length === 0) return null;

    return (
        <div className="relative w-full h-full pt-0 mt-0 px-4 md:px-0 container mx-auto mb-10 overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
                <div className="flex h-full gap-1 md:gap-2">
                    {items.map((banner, index) => {
                        let widthClass = "w-0 opacity-0";

                        if (!isAnimating) {
                            if (index === 0) widthClass = "w-[80%] opacity-100";
                            if (index === 1 && items.length > 1) widthClass = "w-[20%] opacity-100";
                        } else {
                            if (index === 0) widthClass = "w-0 opacity-0";
                            if (index === 1) widthClass = "w-[80%] opacity-100";
                            if (index === 2) widthClass = "w-[20%] opacity-100";
                        }

                        return (
                            <div
                                key={banner.id}
                                // Click triggers nextSlide ONLY if it's the peeking slide (index 1)
                                onClick={index === 1 ? nextSlide : undefined}
                                className={`relative md:h-[450px] h-[175px] overflow-hidden cursor-pointer group rounded-[24px] flex-shrink-0 transition-all duration-700 ease-in-out border-gray-100 ${widthClass}`}
                            >
                                <img
                                    src={banner.image}
                                    alt={banner.alt || "Home hero banner"}
                                    className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
                                />

                                {/* 
                                    LINK OVERLAY: 
                                    If it's the active slide (index 0), not animating, and has a link, 
                                    render a Next.js Link covering the whole slide area.
                                */}
                                {banner.link && index === 0 && !isAnimating && (
                                    <Link
                                        href={banner.link}
                                        className="absolute inset-0 z-20 cursor-pointer"
                                        aria-label={banner.alt}
                                    />
                                )}

                                {/* Gradient for Active Slide */}
                                {((!isAnimating && index === 0) || (isAnimating && index === 1)) && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px] pointer-events-none" />
                                )}

                                {/* Chevron for Peeking Slide */}
                                {((!isAnimating && index === 1) || (isAnimating && index === 2)) && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="bg-white/90 rounded-full p-2 md:p-3 shadow-lg">
                                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}