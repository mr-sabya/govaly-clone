"use client";
import { useState } from "react";
import { Menu, Heart, ShoppingCart, User, Smartphone } from "lucide-react";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <nav className="bg-govaly-pink text-white">
            <div className="container-fluid mx-auto px-4 h-16 flex items-center justify-between">

                {/* Left Side: Hamburger & Logo */}
                <div className="flex items-center gap-4">
                    <Menu className="cursor-pointer w-7 h-7" onClick={() => setSidebarOpen(true)} />
                    <div className="flex items-center gap-1 cursor-pointer">
                        <div className="bg-white text-govaly-pink rounded-lg p-1 font-black text-xl italic">G</div>
                        <span className="text-2xl font-bold tracking-tight">Govaly</span>
                    </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center gap-12 md:gap-12 pr-10">
                    <div className="hidden sm:flex items-center gap-2 cursor-pointer border-r border-white/30 pr-4 mr-2">
                        <Smartphone className="w-8 h-8" />
                        <div className="text-[10px] leading-tight">
                            Download the <br /> <span className="font-bold text-sm text-white">Govaly App</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer group" onClick={() => setLoginOpen(true)}>
                        <User className="w-6 h-6 group-hover:scale-110 transition" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer group">
                        <Heart className="w-6 h-6 group-hover:scale-110 transition" />
                        <span className="text-[10px] font-medium">Wishlist</span>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer group relative">
                        <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition" />
                        <span className="text-[10px] font-medium">Cart</span>
                        <span className="absolute -top-1 right-0 bg-white text-govaly-pink text-[8px] font-bold px-1 rounded-full">0</span>
                    </div>
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        </nav>
    );
}