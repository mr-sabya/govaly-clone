"use client";

import Image from "next/image";

const FEATURES = [
    {
        id: 1,
        title: "Cash On Delivery",
        highlight: "",
        icon: "/images/delivery/image-1.svg",
    },
    {
        id: 2,
        title: "Instant Return",
        highlight: "",
        icon: "/images/delivery/image-2.svg",
    },
    {
        id: 3,
        title: "Delivery Within",
        highlight: "48hrs",
        icon: "/images/delivery/image-3.svg",
    },
    {
        id: 4,
        title: "Best Price Deal",
        highlight: "",
        icon: "/images/delivery/image-4.svg",
    },
];

export default function FeatureBar() {
    return (
        <section className="w-full container mx-auto px-4 py-4">
            {/* DESKTOP VIEW: Grid with 4 columns */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {FEATURES.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-6 rounded-sm py-6 shadow-sm shadow-govaly-pink-dark/10 flex-1 h-[66px] hover:shadow-lg transition-all duration-200 bg-white border border-gray-100 items-center justify-center cursor-default"
                    >
                        <div className="px-6 h-full flex justify-center items-center gap-2 w-full">
                            <div className="shrink-0">
                                <img
                                    alt={item.title}
                                    src={item.icon}
                                    width={43}
                                    height={42}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-gray-800 font-medium text-[16.6px] whitespace-nowrap">
                                {item.title}{" "}
                                {item.highlight && (
                                    <span className="text-govaly-pink-dark">{item.highlight}</span>
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MOBILE VIEW: Compact flex row */}
            <div className="md:hidden flex gap-1">
                {FEATURES.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-6 shadow-sm shadow-govaly-pink-dark/10 flex-1 h-[50px] hover:shadow-lg border-none rounded p-0.5 bg-white items-center justify-center"
                    >
                        <div className="p-1 h-full flex flex-col items-center justify-center">
                            <img
                                alt={item.title}
                                src={item.icon}
                                width={25}
                                height={26}
                                className="w-[25px] h-[26px] object-contain"
                            />
                            <span className="text-gray-800 font-medium text-[8px] leading-tight text-center whitespace-nowrap mt-0.5">
                                {item.title.split(" ").slice(0, 2).join(" ")}
                                {item.highlight && (
                                    <span className="text-govaly-pink-dark block"> {item.highlight}</span>
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}