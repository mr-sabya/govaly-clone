"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Banner {
    id: number;
    image: string;
    link: string;
    alt: string;
}

export default function DualBannerGrid() {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/home-banners?position=dual`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json();

                if (result.data) {
                    setBanners(result.data);
                }
            } catch (error) {
                console.error("Error loading dual banners:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    // 1. Loading Skeleton
    if (loading) {
        return (
            <section className="w-full container mx-auto px-4 py-4 md:py-6">
                <div className="grid grid-cols-2 gap-1 md:gap-2">
                    <div className="aspect-[16/9] bg-gray-100 animate-pulse rounded-lg" />
                    <div className="aspect-[16/9] bg-gray-100 animate-pulse rounded-lg" />
                </div>
            </section>
        );
    }

    // 2. Don't show if no banners are returned
    if (banners.length === 0) return null;

    return (
        <section className="w-full container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-2 gap-1 md:gap-2">
                {banners.map((banner) => (
                    <Link
                        key={banner.id}
                        href={banner.link || "#"}
                        className="aspect-[16/9] block relative group overflow-hidden rounded-lg border border-gray-100 shadow-sm"
                    >
                        <img
                            src={banner.image}
                            alt={banner.alt || "Promotion Banner"}
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