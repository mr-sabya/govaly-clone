"use client";
import Link from "next/link";

export default function WideBanner() {
    return (
        <section className="w-full container mx-auto px-4 py-4 md:py-6">
            <Link
                href="/category/health-beauty"
                className="block relative aspect-[11/3] overflow-hidden rounded-[12px] group"
            >
                <img
                    src="https://d62ipmwrm4ymk.cloudfront.net/home_banner/fc2c7ef6-789d-464c-bcd9-19752f9b226f.jpg"
                    alt="Govaly Home banner"
                    loading="lazy"
                    className="object-cover object-center w-full h-full rounded-[12px] transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Optional: Subtle overlay to make the image look more premium on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none rounded-[12px]" />
            </Link>
        </section>
    );
}