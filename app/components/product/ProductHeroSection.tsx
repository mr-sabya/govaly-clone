"use client";
import React, { useState } from "react";
import {
    Share2, Star, Minus, Plus, ShoppingBag,
    ShoppingCart, Heart, RotateCcw, ArrowLeftRight,
    Truck, Banknote, Store
} from "lucide-react";

export default function ProductHeroSection() {
    // State for interactivity
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);

    return (
        <section className="w-full bg-white">
            <div className="container mx-auto py-10 px-4 font-sans text-[#191919]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT COLUMN - GALLERY & TABS */}
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            {/* Thumbnails */}
                            <div className="flex flex-col gap-2">
                                <div className="size-20 border-2 border-govaly-pink rounded-lg overflow-hidden cursor-pointer">
                                    <img
                                        src="https://d62ipmwrm4ymk.cloudfront.net/product/20251009/original-china-baby-girls-gainsboro-shoes-and-hair-band_1_oJQ8Zq1xkbw.jpg"
                                        alt="thumb"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Main Image */}
                            <div className="flex-1 aspect-square rounded-2xl overflow-hidden bg-[#f3f4f6]">
                                <img
                                    src="https://d62ipmwrm4ymk.cloudfront.net/product/20251009/original-china-baby-girls-gainsboro-shoes-and-hair-band_1_oJQ8Zq1xkbw.jpg"
                                    alt="Product"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="mt-4">
                            <div className="flex gap-8 border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab("description")}
                                    className={`pb-2 text-sm font-semibold transition-all cursor-pointer ${activeTab === "description" ? "border-b-2 border-black text-black" : "text-gray-400"
                                        }`}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab("reviews")}
                                    className={`pb-2 text-sm font-semibold flex items-center gap-1 transition-all cursor-pointer ${activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-400"
                                        }`}
                                >
                                    Product Reviews
                                    <span className="bg-govaly-light-pink text-govaly-pink text-[10px] px-1.5 py-0.5 rounded-full">1</span>
                                </button>
                            </div>

                            {/* Tab Content: Description Box */}
                            {activeTab === "description" && (
                                <div className="mt-6 p-5 border border-govaly-pink bg-govaly-light-pink rounded-xl animate-in fade-in duration-300">
                                    <p className="text-[15px] mb-2">Comfortable and Stylish Baby Shoes for <b>0-12 Month Baby.</b></p>
                                    <ul className="list-disc ml-5 space-y-1 text-[14px] text-gray-800">
                                        <li>Original China baby shoes are presented for your baby child.</li>
                                        <li>These shoes are very comfortable and stylish.</li>
                                        <li>You bought these shoes for any party & marriage program.</li>
                                        <li>So you can match these shoes with any dress.</li>
                                    </ul>
                                </div>
                            )}

                            {/* Tab Content: Reviews Placeholder */}
                            {activeTab === "reviews" && (
                                <div className="mt-6 p-5 border border-gray-200 rounded-xl animate-in fade-in duration-300">
                                    <p className="text-sm text-gray-500 text-center py-4">No specific reviews yet for this variation.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - PRODUCT INFO */}
                    <div className="flex flex-col">
                        <div className="flex justify-between items-start">
                            <h1 className="text-2xl font-bold leading-tight">Original China Baby Girls Gainsboro Shoes and Hair Band</h1>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer">
                                <Share2 size={22} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center gap-4 mt-3 text-[13px] font-medium text-gray-600">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#db146a" stroke="none" />
                                ))}
                            </div>
                            <span>1 Review</span> | <span>Sold 93</span> | <span>Stock 998</span>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center gap-3 mt-5">
                            <span className="text-4xl font-bold text-govaly-pink flex items-center">
                                <span className="text-2xl mr-1">৳</span>450
                            </span>
                            <span className="text-xl text-gray-400 line-through">৳650</span>
                            <span className="text-govaly-orange font-bold text-lg">({31}% OFF)</span>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-4 mt-8">
                            <span className="font-bold text-sm">Quantity</span>
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-2.5 hover:bg-gray-50 text-gray-400 border-r border-gray-200 transition cursor-pointer"
                                >
                                    <Minus size={16} />
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center font-bold text-sm outline-none"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-2.5 hover:bg-gray-50 text-gray-400 border-l border-gray-200 transition cursor-pointer"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Main Action Buttons */}
                        <div className="flex items-center gap-3 mt-8">
                            <button className="flex-1 bg-govaly-orange hover:brightness-110 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm cursor-pointer">
                                <ShoppingBag size={18} /> Buy Now
                            </button>
                            <button className="flex-1 bg-govaly-pink hover:brightness-110 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm cursor-pointer">
                                <ShoppingCart size={18} /> Add to Cart
                            </button>
                            <button className="p-3.5 bg-govaly-light-pink text-govaly-pink rounded-xl hover:bg-pink-100 transition shadow-sm cursor-pointer">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Service Details & Shop Card */}
                        <div className="relative flex flex-col md:flex-row md:items-start justify-between mt-8 gap-6">
                            <div className="space-y-2 text-[13px]">
                                <div className="flex items-center gap-2"><RotateCcw size={16} /> <b>Return :</b> 3 Days</div>
                                <div className="flex items-center gap-2"><ArrowLeftRight size={16} /> <b>Exchange :</b> 3 Days</div>
                                <div className="flex items-center gap-2"><Truck size={16} /> <b>Delivery Time :</b> 2 Days</div>
                                <div className="flex items-center gap-2"><Banknote size={16} /> <b>Payment :</b> COD Available</div>
                            </div>

                            {/* Shop Badge */}
                            <div className="border border-gray-100 shadow-sm rounded-xl p-3 flex flex-col gap-1 min-w-[160px] cursor-pointer hover:bg-gray-50 transition">
                                <div className="flex items-center gap-1.5 text-govaly-pink text-[11px] font-bold">
                                    <Store size={14} /> Shop
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="size-6 rounded-full bg-gray-200 overflow-hidden">
                                        <img src="https://d62ipmwrm4ymk.cloudfront.net/seller/ae93af7f-b5e3-487d-a84b-ad3199247ea6.png" alt="seller" />
                                    </div>
                                    <span className="text-sm font-bold">Anabia Fashion</span>
                                </div>
                            </div>
                        </div>

                        {/* RATING & REVIEWS SECTION */}
                        <div className="mt-12 flex flex-col md:flex-row gap-8 items-center border-t border-gray-100 pt-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-bold mb-2">Rating & Reviews</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-6xl font-black">5.0</span>
                                    <Star size={34} fill="#db146a" stroke="none" />
                                </div>
                                <p className="text-xs text-gray-500 font-medium mt-1">By Verified Buyers</p>
                            </div>

                            {/* Progress Bars */}
                            <div className="flex-1 w-full space-y-1.5 max-w-[300px]">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="flex items-center gap-3 text-[11px] font-bold">
                                        <div className="flex items-center gap-0.5 w-4">
                                            {star} <Star size={10} fill="#db146a" stroke="none" />
                                        </div>
                                        <div className="flex-1 h-2.5 bg-govaly-light-pink rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-govaly-pink rounded-full"
                                                style={{ width: star === 5 ? "100%" : "0%" }}
                                            />
                                        </div>
                                        <span className="w-3 text-right text-gray-400">{star === 5 ? "1" : "0"}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}