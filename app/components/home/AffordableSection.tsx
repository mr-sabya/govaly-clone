"use client";
import React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const DATA = [
    { id: 1, title: "Reflect Brighter", price: "1599", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/aaae856d-464e-431f-bc67-2c5f56949e8b.jpeg" },
    { id: 2, title: "Bigger Frame Style", price: "1155", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/1cee9bf9-709e-47bf-b753-7913dc674408.jpeg" },
    { id: 3, title: "Endless Charm", price: "2500", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/4dd3dd3e-0cb2-4544-b5fa-d5e06770022d.jpeg" },
    { id: 4, title: "Ready Carry", price: "1599", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/0b5229ec-025b-497d-94f3-957ed57cb113.jpeg" },
    { id: 5, title: "Little Royalty", price: "1599", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/77f64856-33e5-4e02-921d-8ef1d21016be.jpeg" },
    { id: 6, title: "Festive Grace", price: "2500", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/a615feac-4816-42b0-abc5-1b7c4a1003e0.jpeg" },
    { id: 7, title: "Style Perfect", price: "1499", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/187de903-7a4b-4f03-863e-0b2056151cf9.jpeg" },
    { id: 8, title: "Traditional Handy", price: "2500", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/85411461-4933-4e97-9dd5-56fad0180d88.jpeg" },
    { id: 9, title: "Classic Time", price: "950", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/1fbec536-2a5c-44c4-a079-82bcbe7903d4.jpeg" },
    { id: 10, title: "Street Comfort", price: "1990", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/e3104af8-7545-439f-9643-c1de1763ea28.jpeg" },
    { id: 11, title: "Extra Sparkle", price: "2000", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/1442c8ee-a94b-4a90-860d-2b841cf5e10e.jpeg" },
    { id: 12, title: "Cap On", price: "1000", img: "https://d62ipmwrm4ymk.cloudfront.net/thumbnail/affordable_suggestion/90ba2b51-ec01-47b9-9594-7285db69dcde.jpeg" },
];

// Reusable Card Component
const AffordableCard = ({ item }: { item: any }) => (
    <Link
        href={`/products/search?search=${item.title}&max_price=${item.price}`}
        className="block w-full aspect-[6.84/9] min-w-[95px] relative rounded-lg overflow-hidden border border-[#FFD2E6] group"
    >
        <img
            alt={item.title}
            src={item.img}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-md"
        />
        {/* The Milky Pink Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 p-2 lg:p-4 flex flex-col justify-end bg-gradient-to-t from-[#FFF2F8]/95 via-[#FFF2F8]/80 to-transparent">
            <span className="text-[9px] md:text-[12px] lg:text-[14px] text-[#191919] leading-snug">
                Shop Under
            </span>
            <div className="flex flex-col">
                <span className="text-[14px] md:text-[18px] lg:text-[22px] text-[#E2136E] font-bold leading-tight">
                    ৳{item.price}
                </span>
                <span className="text-[10px] md:text-[13px] lg:text-[16px] text-[#181818] font-medium leading-tight truncate">
                    {item.title}
                </span>
            </div>
        </div>
    </Link>
);

export default function AffordableSection() {
    const [emblaRef] = useEmblaCarousel({ align: "start", slidesToScroll: 1 });

    // Group items into pairs for the stacked layout
    const pairedItems = [];
    for (let i = 0; i < DATA.length; i += 2) {
        pairedItems.push(DATA.slice(i, i + 2));
    }

    return (
        <section className="container mx-auto px-4 flex flex-col gap-6 py-8">
            {/* Heading Section */}
            <div className="flex flex-col items-center mx-auto w-fit gap-1">
                <h2 className="text-[18px] md:text-[32px] font-medium text-gray-900 text-center">
                    Affordable and worth it
                </h2>
                <div className="w-4/5 h-1 bg-govaly-pink rounded-full"></div>
            </div>

            {/* DESKTOP GRID (Stacked 2 items per column) */}
            <div className="hidden lg:grid grid-cols-6 gap-3 w-full">
                {pairedItems.map((pair, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        {pair.map((item) => <AffordableCard key={item.id} item={item} />)}
                    </div>
                ))}
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="lg:hidden embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex gap-2">
                    {pairedItems.map((pair, idx) => (
                        <div key={idx} className="flex-none w-[45%] md:w-[25%] flex flex-col gap-2">
                            {pair.map((item) => <AffordableCard key={item.id} item={item} />)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}