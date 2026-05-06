"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useLoginModal } from "../layout/LoginModal";

// 1. Define the interface to match your Laravel HeroBannerResource
interface HeroBannerData {
    id: number;
    title: {
        upper: string;
        main: string;
    };
    search_placeholder: string;
    tags: string[];
    image: string | null;
}

export default function HeroBanner() {
    const { openLogin } = useLoginModal();

    // 2. Assign the type to useState
    const [banner, setBanner] = useState<HeroBannerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                // Use the variables from .env
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/hero-banners`, {
                    headers: {
                        'Accept': 'application/json',
                        // Pass the tenant ID from .env here
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json();
                console.log(result);

                if (result.data && result.data.length > 0) {
                    setBanner(result.data[0]);
                }
            } catch (error) {
                console.error("Error loading hero banner:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);

    if (loading) {
        return <div className="w-full h-[350px] md:h-[480px] bg-gray-200 animate-pulse" />;
    }

    // 3. Fallback logic (The optional chaining ?. will now work without errors)
    const content = {
        upper: banner?.title?.upper || "Bangladesh’s Favorite Online",
        main: banner?.title?.main || "Fashion Mall",
        placeholder: banner?.search_placeholder || "Search for clothes...",
        tags: banner?.tags || [],
        bgImage: banner?.image || "/images/hero-fallback.jpg"
    };

    return (
        <section className="relative w-full h-[350px] md:h-[480px] bg-[#E2136E] flex flex-col items-center justify-center text-white overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-multiply"
                style={{ backgroundImage: `url("${content.bgImage}")` }}
            />

            {/* --- MAIN TEXT CONTENT --- */}
            <div className="text-center z-10 px-4">
                <h2 className="text-lg md:text-3xl font-medium mb-2">
                    {content.upper}
                </h2>

                <h1 className="text-4xl md:text-[80px] font-black uppercase">
                    {content.main}
                </h1>
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="absolute bottom-12 w-full max-w-[700px] z-10 px-4">
                <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl">
                    <div className="pl-4 pr-2 text-gray-400">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder={content.placeholder}
                        className="w-full bg-transparent border-none outline-none text-gray-800 py-3 placeholder:text-gray-400"
                    />
                    <button className="bg-[#E2136E] text-white px-8 py-3 rounded-full font-bold">
                        Search
                    </button>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                    {content.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}