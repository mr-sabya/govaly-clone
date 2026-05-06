"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

interface FeaturedCategory {
    id: number;
    name: string;
    slug: string;
    feature_title: string | null;
    off_percentage: number | null;
    image: string;
}

export default function FeaturedCategories() {
    const [categories, setCategories] = useState<FeaturedCategory[]>([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [Autoplay({ delay: 4000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    // 1. Fetch Featured Categories from API
    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/categories?featured=1`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json();

                if (result.data) {
                    setCategories(result.data);
                }
            } catch (error) {
                console.error("Error loading featured categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeatured();
    }, []);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    // Loading State / Skeleton
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 flex gap-4 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-none w-[140px] md:w-[242px] aspect-[1/1.1] bg-gray-100 animate-pulse rounded-md" />
                ))}
            </div>
        );
    }

    if (categories.length === 0) return null;

    return (
        <section className="w-full container mx-auto px-4 py-8" aria-label="Featured Products">
            {/* SEO Structured Data - Dynamic */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": categories.map((item, index) => ({
                            "@type": "Product",
                            "position": index + 1,
                            "name": item.feature_title || item.name,
                            "image": item.image,
                            "offers": { "@type": "Offer", "discount": item.off_percentage, "priceCurrency": "BDT" }
                        }))
                    })
                }}
            />

            <div className="flex flex-col gap-6">
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex gap-4">
                        {categories.map((item) => (
                            <div key={item.id} className="embla__slide flex-none">
                                <Link href={`/category/${item.slug}`}>
                                    <div className="relative group overflow-hidden shadow-none transition-shadow duration-300 border-0 p-0 w-[140px] h-[150px] md:w-[242px] md:h-[253px] rounded-md cursor-pointer">

                                        {/* Image with Zoom Effect */}
                                        <img
                                            src={item.image}
                                            alt={item.feature_title || item.name}
                                            className="object-cover rounded-md w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />

                                        {/* The Info Bar Overlay */}
                                        <div className="absolute bottom-1 left-1 right-1 bg-white text-black flex items-center rounded-[4px] h-[38px] md:h-[65px] shadow-sm border-[0.5px] border-gray-100">
                                            <div className="flex items-center w-full h-full px-1.5 md:px-3">

                                                {/* Discount Part - Using off_percentage from API */}
                                                <div className="flex flex-col items-center justify-center h-full flex-shrink-0">
                                                    <div className="text-[12px] md:text-[20px] text-[#E2136E] font-bold leading-none">
                                                        {item.off_percentage || 0}%
                                                    </div>
                                                    <div className="text-[9px] md:text-[14px] font-semibold uppercase leading-none mt-0.5">
                                                        OFF
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className="w-px h-4 md:h-8 bg-gray-200 mx-2 md:mx-3 flex-shrink-0"></div>

                                                {/* Title Part - Using feature_title from API */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[9px] md:text-[15px] text-gray-800 leading-tight font-medium line-clamp-2">
                                                        {item.feature_title || item.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                    {categories.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-[#E2136E] w-6" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}