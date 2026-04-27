"use client";
import React, { useState } from "react";
import { Menu, Heart, ShoppingCart, User, Smartphone, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import { useLoginModal } from "./LoginModal"; // Using the global context
import Link from "next/link";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { openLogin } = useLoginModal(); // Hook from previous step

    return (
        <>
            <nav className="bg-[#E2136E] text-white sticky top-0 z-[80] shadow-md">
                <div className="container-fluid mx-auto px-4 h-14 md:h-20 flex items-center justify-between gap-4">

                    {/* --- LEFT: HAMBURGER & LOGO --- */}
                    <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                        >
                            <Menu className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
                            <div className="flex items-center gap-1.5 cursor-pointer">
                                <div className="bg-white text-[#E2136E] rounded-lg w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-black text-xl md:text-2xl italic shadow-sm">
                                    G
                                </div>
                                <span className="text-xl md:text-2xl font-bold tracking-tighter hidden xs:block">
                                    Govaly
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* --- CENTER: SEARCH BAR (Hidden on small mobile) --- */}
                    <div className="flex-1 max-w-2xl hidden md:block">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search for products, brands and more..."
                                className="w-full bg-white text-gray-800 py-2.5 px-5 pr-12 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-300 transition-all placeholder:text-gray-400"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#E2136E] p-2 rounded-full hover:bg-[#c4115f] transition-colors">
                                <Search className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT: ACTIONS --- */}
                    <div className="flex items-center gap-3 md:gap-8 lg:gap-10 mr-4">

                        {/* App Download (Desktop Only) */}
                        <div className="hidden lg:flex items-center gap-2 cursor-pointer border-r border-white/20 pr-6 group">
                            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div className="text-[10px] leading-tight">
                                Download the <br />
                                <span className="font-bold text-xs uppercase tracking-wide">Govaly App</span>
                            </div>
                        </div>

                        {/* Profile */}
                        <Link
                            href="/profile"
                            className="flex flex-col items-center gap-0.5 cursor-pointer group"
                        >
                            <User className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-semibold uppercase tracking-tighter">Profile</span>
                        </Link>

                        {/* Wishlist Link */}
                        <Link
                            href="/profile/wishlist"
                            className="flex flex-col items-center gap-0.5 cursor-pointer group"
                        >
                            <Heart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-semibold uppercase tracking-tighter">Wishlist</span>
                        </Link>

                        {/* Cart Link */}
                        <Link
                            href="/cart"
                            className="flex flex-col items-center gap-0.5 cursor-pointer group relative"
                        >
                            <div className="relative">
                                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                                {/* Updated Badge: Added govaly-pink background and white text for better contrast */}
                                <span className="absolute -top-1.5 -right-1.5 bg-govaly-pink text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm border border-white">
                                    0
                                </span>
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-tighter">Cart</span>
                        </Link>
                    </div>
                </div>

                {/* --- MOBILE SEARCH (Visible only on mobile below the main bar) --- */}
                <div className="md:hidden px-4 pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-white text-gray-800 py-2 px-4 rounded-lg text-sm outline-none"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </nav>

            {/* --- SIDEBAR --- */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
}