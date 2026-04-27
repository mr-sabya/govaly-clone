"use client";
import React, { useState } from "react";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import { ShoppingBag } from "lucide-react";

type OrderStatus = "All" | "Pending" | "Shipping" | "Delivered" | "To Review" | "Returned" | "Exchanged" | "Refunded" | "Cancelled";

const STATUS_TABS: OrderStatus[] = ["All", "Pending", "Shipping", "Delivered", "To Review", "Returned", "Exchanged", "Refunded", "Cancelled"];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<OrderStatus>("All");

    return (
        <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

                    {/* Reusable Sidebar */}
                    <ProfileSidebar />

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm border border-pink-100">
                                    <ShoppingBag className="w-6 h-6 text-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">My Orders</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        Manage and track your orders easily
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Orders Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                            {/* Horizontal Tabs */}
                            <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-white px-2">
                                {STATUS_TABS.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-5 py-4 text-xs md:text-sm font-bold whitespace-nowrap transition-all relative cursor-pointer ${activeTab === tab ? "text-govaly-pink" : "text-gray-500 hover:text-gray-800"
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-govaly-pink rounded-t-full shadow-[0_-2px_8px_rgba(219,20,106,0.4)]" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Order List Content */}
                            <div className="p-10 md:p-20 flex flex-col items-center justify-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-govaly-light-pink rounded-full flex items-center justify-center animate-pulse">
                                        <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-govaly-pink/20" />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">No data is available</h3>
                                <p className="text-sm text-gray-500 max-w-xs mb-8">
                                    We couldn't find any orders in the <span className="font-bold text-govaly-pink">"{activeTab}"</span> status.
                                </p>
                                <button className="px-10 py-3 bg-govaly-pink text-white rounded-full font-bold text-sm hover:bg-govaly-pink-dark transition-all shadow-lg shadow-govaly-pink/20 active:scale-95">
                                    Start Shopping
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}