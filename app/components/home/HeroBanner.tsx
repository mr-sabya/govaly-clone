"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useLoginModal } from "../layout/LoginModal";

// Define the interface to match your Laravel HeroBannerResource
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

    const [banner, setBanner] = useState<HeroBannerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/hero-banners`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json();

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

    // Fallback logic
    const content = {
        upper: banner?.title?.upper || "Bangladesh’s Favorite Online",
        main: banner?.title?.main || "Fashion Mall",
        placeholder: banner?.search_placeholder || "Search for clothes...",
        tags: banner?.tags || [],
        bgImage: banner?.image || "/images/hero-fallback.jpg"
    };

    return (
        <section className="relative w-full h-[350px] md:h-[480px] bg-[#E2136E] flex flex-col items-center justify-center text-white overflow-hidden">

            {/* --- BACKGROUND IMAGE --- */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: `url("${content.bgImage}")` }}
            />

            {/* --- TOP RIGHT AUTH LINKS (RESTORED) --- */}
            <div className="absolute top-6 right-6 md:right-12 flex items-center gap-2 text-[13px] md:text-[15px] font-semibold z-20">
                <button
                    onClick={openLogin}
                    className="hover:text-pink-200 transition-colors cursor-pointer"
                >
                    Log In
                </button>
                <span className="opacity-50 font-light">|</span>
                <button
                    onClick={openLogin}
                    className="bg-white cursor-pointer text-[#E2136E] px-4 py-1.5 rounded-full hover:bg-pink-50 transition-all shadow-md font-bold"
                >
                    Sign Up
                </button>
            </div>

            {/* --- MAIN TEXT CONTENT --- */}
            <div className="text-center z-10 px-4 -mt-4 md:-mt-10 select-none">
                <h2 className="text-lg md:text-3xl font-medium tracking-wide mb-2 opacity-90">
                    {content.upper}
                </h2>

                <h1 className="text-4xl md:text-[80px] font-black uppercase leading-[0.85] tracking-tighter drop-shadow-2xl">
                    {content.main}
                </h1>
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="absolute bottom-12 w-full max-w-[92%] md:max-w-[700px] z-10">
                <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl transform transition-transform hover:scale-[1.01]">
                    <div className="pl-4 pr-2 text-gray-400">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder={content.placeholder}
                        className="w-full bg-transparent border-none outline-none text-gray-800 py-2.5 md:py-3.5 text-sm md:text-lg placeholder:text-gray-400 font-medium"
                    />
                    <button className="bg-[#E2136E] text-white px-8 md:px-12 py-2.5 md:py-3.5 rounded-full text-sm md:text-base font-bold hover:bg-[#c4115f] transition-all active:scale-95 shadow-lg cursor-pointer">
                        Search
                    </button>
                </div>

                {/* Quick Tags From API */}
                <div className="flex justify-center gap-4 mt-4 overflow-x-auto no-scrollbar whitespace-nowrap">
                    {content.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-[11px] md:text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full cursor-pointer transition-colors backdrop-blur-sm border border-white/10"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}