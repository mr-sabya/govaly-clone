"use client";
import React from "react";
import {
    ShoppingBag, Heart, Ticket, MapPin, User, Settings,
    PhoneCall, LogOut, Bell, ShieldCheck, Star, PackageOpen, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
    { label: "My Orders", icon: ShoppingBag, href: "/profile/orders" },
    { label: "My Wishlist", icon: Heart, href: "/profile/wishlist" },
    { label: "Vouchers", icon: Ticket, href: "/profile/vouchers" },
    { label: "My Addresses", icon: MapPin, href: "/profile/addresses" },
    { label: "Account Information", icon: User, href: "/profile/info" },
    { label: "Settings", icon: Settings, href: "/profile/settings" },
    { label: "Govaly Helpline", icon: PhoneCall, href: "/profile/help" },
];

export default function ProfileSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden sticky top-24">

                {/* User Info Section */}
                <div className="p-6 bg-white border-b border-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-govaly-light-pink flex items-center justify-center border border-govaly-pink/10">
                                <User className="w-7 h-7 text-govaly-pink" />
                            </div>
                            <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-white">
                                <ShieldCheck className="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-bold text-gray-800 text-sm md:text-base flex items-center gap-1">
                                Name not set
                                <ShieldCheck className="w-4 h-4 text-blue-500" />
                            </h2>
                            <div className="mt-1 flex items-center gap-1 bg-govaly-light-pink text-govaly-pink text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">
                                <Star className="w-3 h-3 fill-govaly-pink" />
                                10 Points
                            </div>
                        </div>
                        <button className="p-2 text-govaly-pink hover:bg-govaly-light-pink rounded-full transition-colors relative cursor-pointer">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>

                    <button className="w-full py-2.5 bg-govaly-pink text-white rounded-xl font-bold text-sm shadow-md shadow-govaly-pink/20 hover:bg-govaly-pink-dark transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <PackageOpen className="w-4 h-4" /> Entry
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="p-3">
                    {MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || (item.href === "/profile/orders" && pathname === "/profile");

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${isActive
                                        ? "bg-govaly-light-pink text-govaly-pink border-l-4 border-govaly-pink"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-govaly-pink"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-5 h-5 ${isActive ? "text-govaly-pink" : "text-gray-400 group-hover:text-govaly-pink"}`} />
                                    {item.label}
                                </div>
                                {isActive && <ChevronRight className="w-4 h-4" />}
                            </Link>
                        );
                    })}

                    <div className="mt-4 pt-4 border-t border-gray-50 px-4 pb-2">
                        <button className="w-full flex items-center gap-3 text-sm font-bold text-red-500 hover:translate-x-1 transition-transform cursor-pointer">
                            <LogOut className="w-5 h-5" />
                            Log Out
                        </button>
                    </div>
                </nav>
            </div>
        </aside>
    );
}