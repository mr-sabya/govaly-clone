"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const BRANDS = [
    { id: 1, name: "DOUR", logo: "https://d62ipmwrm4ymk.cloudfront.net/brand/12b2b955-a7ac-49e3-97a0-93718b799301.png", link: "/brand/dour" },
    { id: 2, name: "Zuqo", logo: "https://d62ipmwrm4ymk.cloudfront.net/brand/24d74c81-ca61-4d91-b2fe-418f13f0b122.jpg", link: "/brand/zuqo" },
    { id: 3, name: "Diagram", logo: "https://d62ipmwrm4ymk.cloudfront.net/top_brand/3e2e80e3-f836-4ee2-92e9-f48921808ebb.png", link: "/brand/diagram" },
    { id: 4, name: "Head Gear", logo: "https://d62ipmwrm4ymk.cloudfront.net/top_brand/b808a89a-a2ed-4350-9311-749a81e7cad3.jpg", link: "/brand/head-gear" },
    { id: 5, name: "Bosphorus", logo: "https://d62ipmwrm4ymk.cloudfront.net/top_brand/b3c73ece-00a9-41cc-a960-ce8685490ee9.jpg", link: "/brand/bosphorus" },
    { id: 6, name: "WishCare", logo: "https://d62ipmwrm4ymk.cloudfront.net/brand/9ae23535-1dda-49b4-a6a3-57bffc9377a6.jpg", link: "/brand/wishcare" },
    { id: 7, name: "Bowling Footwear", logo: "https://d62ipmwrm4ymk.cloudfront.net/brand/bd47dc94-a840-40f4-9792-a2151930bee7.jpg", link: "/brand/bowling-footwear" },
];

export default function BrandCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [Autoplay({ delay: 3000 })]
    );

    return (
        <section className="w-full flex flex-col gap-6 py-8">
            {/* SECTION HEADING */}
            <div className="leading-3 text-left md:text-center items-center justify-center w-[min-content] mx-auto flex flex-col gap-1">
                <h2 className="text-[16px] md:text-[32px] font-medium text-gray-900 text-nowrap">
                    Top Brands
                </h2>
                <div className="bg-govaly-pink w-[80%] mx-auto mt-3 w-full h-1 rounded-full"></div>
            </div>

            {/* EMBLA CAROUSEL */}
            <div className="embla overflow-hidden container mx-auto px-4" ref={emblaRef}>
                <div className="embla__container flex gap-0">
                    {BRANDS.map((brand) => (
                        <div
                            key={brand.id}
                            className="embla__slide flex-none !px-1 md:px-2 mb-2.5 md:mb-4"
                        >
                            <Link href={brand.link}>
                                <div className="relative group overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300 border-0 shadow-sm p-0 size-[115px] md:size-[200px] rounded-md bg-white">

                                    {/* Brand Logo Container */}
                                    <div className="relative flex items-center justify-center rounded-md overflow-hidden size-[115px] md:size-[200px] mx-auto">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            loading="lazy"
                                            className="object-fill w-full h-full"
                                        />
                                    </div>

                                    {/* Brand Name (Appears on Hover) */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700 pointer-events-none">
                                        <h3 className="text-gray-800 font-bold bg-white/80 px-2 py-0.5 rounded text-[10px] md:text-[18px] leading-tight text-center shadow-sm">
                                            {brand.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}