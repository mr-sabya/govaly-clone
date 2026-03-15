"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const FEATURED_DATA = [
    { id: 1, name: "Authentic Wellness & Hygiene", discount: "15", image: "https://d62ipmwrm4ymk.cloudfront.net/featured_category/d08d1ccb-4f85-4579-9f70-022e4d9a4b6d.jpg", link: "/category/wellness-hygiene" },
    { id: 2, name: "Trendy Women Flat & Sandals", discount: "15", image: "https://d62ipmwrm4ymk.cloudfront.net/carousal_category/3c4cdbbf-9388-44dc-9d46-c03425b9423b.webp", link: "/category/women-flat-sandals" },
    { id: 3, name: "Trendy Men Caps & Hats", discount: "30", image: "https://d62ipmwrm4ymk.cloudfront.net/featured_category/32731635-3b0c-48d6-901a-7f19a725739c.jpg", link: "/category/men-caps-hats" },
    { id: 4, name: "Fashionable Kids Girls Clothing", discount: "30", image: "https://d62ipmwrm4ymk.cloudfront.net/category/318e669d-0950-4d1b-8be8-375c0e63bd36.webp", link: "/category/kids-girls-clothing" },
    { id: 5, name: "Branded Men Casual Shoes", discount: "20", image: "https://d62ipmwrm4ymk.cloudfront.net/carousal_category/5da319cf-a3cf-4ba4-820f-dda1520f442a.webp", link: "/category/men-casual-shoes" },
    { id: 6, name: "Authentic Skincare, Bath & Body", discount: "15", image: "https://d62ipmwrm4ymk.cloudfront.net/category/48a1a6e8-ef84-4e8d-8d11-5d3aa11ea6dc.webp", link: "/category/skincare-bath-body" },
];

export default function FeaturedCategories() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [Autoplay({ delay: 4000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="w-full container mx-auto px-4 py-8" aria-label="Featured Products">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": FEATURED_DATA.map((item, index) => ({
                            "@type": "Product",
                            "position": index + 1,
                            "name": item.name,
                            "image": item.image,
                            "offers": { "@type": "Offer", "discount": item.discount, "priceCurrency": "BDT" }
                        }))
                    })
                }}
            />

            <div className="flex flex-col gap-6">
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex gap-4">
                        {FEATURED_DATA.map((item) => (
                            <div key={item.id} className="embla__slide flex-none">
                                <Link href={item.link}>
                                    <div className="relative group overflow-hidden shadow-none transition-shadow duration-300 border-0 p-0 w-[140px] h-[150px] md:w-[242px] md:h-[253px] rounded-md cursor-pointer">

                                        {/* Image with Zoom Effect */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover rounded-md w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />

                                        {/* The Info Bar Overlay */}
                                        <div className="absolute bottom-1 left-1 right-1 bg-white text-black flex items-center rounded-[4px] h-[38px] md:h-[65px] shadow-sm border-[0.5px] border-gray-100">
                                            <div className="flex items-center w-full h-full px-1.5 md:px-3">

                                                {/* Discount Part */}
                                                <div className="flex flex-col items-center justify-center h-full flex-shrink-0">
                                                    <div className="text-[12px] md:text-[20px] text-govaly-pink-dark font-bold leading-none">
                                                        {item.discount}%
                                                    </div>
                                                    <div className="text-[9px] md:text-[14px] font-semibold uppercase leading-none mt-0.5">
                                                        OFF
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className="w-px h-4 md:h-8 bg-gray-200 mx-2 md:mx-3 flex-shrink-0"></div>

                                                {/* Title Part */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[9px] md:text-[15px] text-gray-800 leading-tight font-medium line-clamp-2">
                                                        {item.name}
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
                    {FEATURED_DATA.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-govaly-pink-dark w-6" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}