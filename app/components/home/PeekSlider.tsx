"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";

const INITIAL_BANNERS = [
    { id: 1, image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/af859933-8132-4afc-91bd-07d35a28735f.jpg" },
    { id: 2, image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/9ba879d8-793f-4176-818c-148544b2f76c.jpg" },
    { id: 3, image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/31e5281d-274c-42a5-98af-8240a508c02a.jpg" },
    { id: 4, image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/af859933-8132-4afc-91bd-07d35a28735f.jpg" },
];

export default function PeekSlider() {
    const [items, setItems] = useState(INITIAL_BANNERS);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        if (isAnimating) return; // Prevent double clicks during animation

        setIsAnimating(true);

        // Wait for the CSS transition to finish (700ms matches the duration below)
        setTimeout(() => {
            setItems((prev) => {
                const [first, ...rest] = prev;
                return [...rest, first]; // Move the first item to the end
            });
            setIsAnimating(false);
        }, 700);
    }, [isAnimating]);

    // Autoplay
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-full pt-0 mt-0 px-4 md:px-0 container mx-auto mb-10 overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
                <div className="flex h-full gap-1 md:gap-2">
                    {items.map((banner, index) => {
                        /**
                         * LOGIC FOR INFINITY LOOP:
                         * 1. If item is index 0: It is ACTIVE (Width 80%)
                         *    BUT if animating, it shrinks to 0% to disappear.
                         * 2. If item is index 1: It is PEEKING (Width 20%)
                         *    BUT if animating, it grows to 80%.
                         * 3. If item is index 2: It is HIDDEN (Width 0%)
                         *    BUT if animating, it grows to 20% to become the next peek.
                         */

                        let widthClass = "w-0 opacity-0"; // Default: hidden

                        if (!isAnimating) {
                            if (index === 0) widthClass = "w-[80%] opacity-100";
                            if (index === 1) widthClass = "w-[20%] opacity-100";
                        } else {
                            if (index === 0) widthClass = "w-0 opacity-0"; // Shrinking
                            if (index === 1) widthClass = "w-[80%] opacity-100"; // Growing to active
                            if (index === 2) widthClass = "w-[20%] opacity-100"; // Growing to peek
                        }

                        return (
                            <div
                                key={banner.id}
                                onClick={index === 1 ? nextSlide : undefined}
                                className={`relative md:h-[450px] h-[175px] overflow-hidden cursor-pointer group rounded-[24px] flex-shrink-0 transition-all duration-700 ease-in-out border-gray-100 ${widthClass}`}
                            >
                                <img
                                    src={banner.image}
                                    alt="Govaly Home hero banner"
                                    className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
                                />

                                {/* Gradient for the Active Slide (Index 0 when not animating, Index 1 when animating) */}
                                {((!isAnimating && index === 0) || (isAnimating && index === 1)) && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]" />
                                )}

                                {/* Chevron icon for the Peek Slide (Index 1 when not animating, Index 2 when animating) */}
                                {((!isAnimating && index === 1) || (isAnimating && index === 2)) && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 rounded-full p-2 md:p-3 shadow-lg transform translate-x-0">
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