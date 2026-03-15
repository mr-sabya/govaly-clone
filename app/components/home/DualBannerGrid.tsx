"use client";
import Link from "next/link";

const BANNERS = [
    {
        id: 1,
        image: "https://d62ipmwrm4ymk.cloudfront.net/home_banner/27b1faf7-6e4b-4726-b44b-482f8b7bcb95.gif",
        link: "/category/women",
        alt: "Women Fashion Banner",
    },
    {
        id: 2,
        image: "https://d62ipmwrm4ymk.cloudfront.net/home_banner/9c368efd-dae6-4f8e-8da0-152546c86616.gif",
        link: "/category/men",
        alt: "Men Fashion Banner",
    },
];

export default function DualBannerGrid() {
    return (
        <section className="w-full container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-2 gap-1 md:gap-2">
                {BANNERS.map((banner) => (
                    <Link
                        key={banner.id}
                        href={banner.link}
                        className="aspect-[16/9] block relative group overflow-hidden rounded-lg border border-gray-100 shadow-sm"
                    >
                        <img
                            src={banner.image}
                            alt={banner.alt}
                            loading="lazy"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
                        />
                        {/* Subtle overlay on hover for a premium feel */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </Link>
                ))}
            </div>
        </section>
    );
}