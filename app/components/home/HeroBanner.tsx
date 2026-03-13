"use client";
import { Search } from "lucide-react";

export default function HeroBanner({ onLoginClick }: { onLoginClick: () => void }) {
    return (
        <section className="relative w-full h-[320px] md:h-[420px] bg-govaly-pink-dark flex flex-col items-center justify-center text-white overflow-hidden">

            {/* Cityscape Pattern Overlay */}
            <div className="absolute inset-0 hero-bg-overlay opacity-10 pointer-events-none" />

            {/* Top Right Auth Links - Reduced size */}
            <div className="absolute top-4 right-4 md:right-8 flex items-center gap-1.5 text-[13px] font-medium z-10">
                <button onClick={onLoginClick} className="hover:underline cursor-pointer">Log In</button>
                <span className="opacity-80 text-xs">or</span>
                <button
                    onClick={onLoginClick}
                    className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
                >
                    Sign Up
                </button>
            </div>

            {/* Main Text Content - Reduced spacing and size */}
            <div className="text-center z-10 px-4 -mt-8 md:-mt-12">
                <h2 className="text-lg md:text-5xl font-normal tracking-tight leading-none mb-4">
                    Bangladesh’s Favorite Online
                </h2>
                <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                    Fashion Mall
                </h1>
            </div>

            {/* Search Bar - Thinner and more compact */}
            <div className="absolute bottom-15 w-full max-w-[90%] md:max-w-[600px] z-10">
                <div className="relative flex items-center bg-white rounded-full p-1 shadow-lg">
                    <div className="pl-4 pr-1 text-gray-400">
                        <Search className="w-4 h-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-transparent border-none outline-none text-gray-800 py-2 md:py-2.5 text-sm md:text-base placeholder:text-gray-400"
                    />
                    <button className="bg-govaly-pink text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}