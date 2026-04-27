"use client";
import React, { useState } from "react";
import {
    ChevronLeft, ChevronDown, Home, Building2,
    Store, Minus, Plus, Check
} from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    const [addressLabel, setAddressLabel] = useState("Home");
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="min-h-screen bg-govaly-light-pink pb-20">
            {/* --- HEADER --- */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
                <Link href="/cart" className="text-gray-800 hover:text-govaly-pink transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-xl font-bold text-gray-800">Checkout</h1>
            </div>

            {/* --- PROGRESS STEPPER (Active Step 3) --- */}
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <div className="relative flex justify-between items-center max-w-5xl mx-auto">
                    <div className="absolute top-5 left-0 w-full h-1 bg-pink-200 z-0" />
                    <div className="absolute top-5 left-0 w-2/3 h-1 bg-govaly-pink z-0" />

                    {[
                        { step: 1, label: "Shopping" },
                        { step: 2, label: "Cart" },
                        { step: 3, label: "Checkout" },
                        { step: 4, label: "Payment" }
                    ].map((item) => (
                        <div key={item.step} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-colors ${item.step <= 3 ? "bg-govaly-pink" : "bg-pink-200"}`}>
                                {item.step}
                            </div>
                            <span className={`text-[10px] md:text-xs font-bold uppercase ${item.step <= 3 ? "text-gray-800" : "text-gray-400"}`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                    {/* LEFT COLUMN: FORM & PRODUCTS */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* 1. Address Form Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none text-sm transition-all" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="tel" defaultValue="01929190241" className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none text-sm transition-all" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-700">Address <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Building / House No / Floor / Street" className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none text-sm transition-all" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-700">Additional Instruction</label>
                                        <input type="text" placeholder="Enter additional instruction for the address (optional)" className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none text-sm transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1 relative">
                                        <label className="text-xs font-bold text-gray-700">Division</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 appearance-none outline-none text-sm text-gray-500">
                                            <option>-- Please choose your division --</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 bottom-3 w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="space-y-1 relative">
                                        <label className="text-xs font-bold text-gray-700">City / District <span className="text-red-500">*</span></label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 appearance-none outline-none text-sm text-gray-500">
                                            <option>-- Please choose your district --</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 bottom-3 w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="space-y-1 relative">
                                        <label className="text-xs font-bold text-gray-700">Police Station / Upazila</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 appearance-none outline-none text-sm text-gray-500">
                                            <option>-- Please choose your area --</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 bottom-3 w-4 h-4 text-gray-400" />
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-gray-700">Select a label for effective delivery:</p>
                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setAddressLabel("Home")}
                                                className={`flex items-center gap-2 px-6 py-2 rounded-lg border font-bold text-sm transition-all cursor-pointer ${addressLabel === "Home" ? "bg-white text-govaly-pink border-govaly-pink" : "text-gray-400 border-gray-200"}`}
                                            >
                                                <Home className="w-4 h-4" /> Home
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setAddressLabel("Office")}
                                                className={`flex items-center gap-2 px-6 py-2 rounded-lg border font-bold text-sm transition-all cursor-pointer ${addressLabel === "Office" ? "bg-white text-govaly-pink border-govaly-pink" : "text-gray-400 border-gray-200"}`}
                                            >
                                                <Building2 className="w-4 h-4" /> Office
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <input type="checkbox" id="def" className="w-4 h-4 accent-govaly-orange" />
                                        <label htmlFor="def" className="text-sm font-bold text-govaly-orange bg-govaly-orange/5 px-3 py-1 rounded-lg">Make it default address</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* 2. Product Summary List */}
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-50 flex items-center gap-3">
                                <div className="w-5 h-5 rounded-md bg-govaly-pink flex items-center justify-center"><Check className="w-3.5 h-3.5 text-white stroke-[4px]" /></div>
                                <span className="font-bold text-gray-800 text-sm">Select All</span>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-pink-50 overflow-hidden">
                                <div className="p-4 border-b border-gray-50 flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-md bg-govaly-pink flex items-center justify-center"><Check className="w-3.5 h-3.5 text-white stroke-[4px]" /></div>
                                    <div className="flex items-center gap-2">
                                        <Store className="w-5 h-5 text-govaly-pink" />
                                        <span className="font-bold text-gray-800">TreadVibe</span>
                                    </div>
                                </div>

                                <div className="hidden md:grid grid-cols-12 p-4 text-xs font-bold text-gray-400 border-b border-gray-50 uppercase">
                                    <div className="col-span-8">Product</div>
                                    <div className="col-span-2 text-center">Price</div>
                                    <div className="col-span-2 text-right">Actions</div>
                                </div>

                                <div className="p-4 md:grid md:grid-cols-12 items-center flex flex-col gap-4">
                                    <div className="col-span-8 flex items-center gap-4 w-full">
                                        <div className="w-5 h-5 rounded-md bg-govaly-pink flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 text-white stroke-[4px]" /></div>
                                        <img src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=200" className="w-16 h-16 rounded-lg object-cover" alt="product" />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-bold text-gray-800 truncate">Trendy Lightweight Slide Slipper for Men - Black</h3>
                                            <p className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit mt-1">Size: 40</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className="text-govaly-pink font-extrabold">৳649.00</span>
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                        <div className="flex items-center border rounded-lg bg-gray-50">
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:bg-gray-200 cursor-pointer"><Minus className="w-3 h-3" /></button>
                                            <span className="px-2 text-xs font-bold">{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:bg-gray-200 cursor-pointer"><Plus className="w-3 h-3" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SUMMARY */}
                    <div className="space-y-4 sticky top-6">
                        {/* Coupon Box */}
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <input type="text" placeholder="Coupon:" className="w-full px-4 py-3 rounded-xl border border-govaly-pink/30 focus:border-govaly-pink outline-none text-sm" />
                            </div>
                            <button className="px-6 py-3 bg-govaly-pink/40 text-white rounded-xl font-bold text-sm cursor-pointer">Apply</button>
                        </div>

                        {/* Order Summary Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-50">
                                <h2 className="font-extrabold text-gray-800">Summary</h2>
                            </div>

                            <div className="p-4 space-y-3 text-sm">
                                <div className="flex justify-between items-center font-medium">
                                    <span className="text-gray-600">Product Price</span>
                                    <span className="text-gray-900 font-bold">৳649.00</span>
                                </div>
                                <div className="flex justify-between items-start font-medium">
                                    <div>
                                        <p className="text-gray-600">Standard Delivery</p>
                                        <p className="text-[10px] text-gray-400">TreadVibe</p>
                                    </div>
                                    <span className="text-gray-900 font-bold">৳100.00</span>
                                </div>
                                <div className="flex justify-between items-center font-medium">
                                    <span className="text-gray-600">Discount</span>
                                    <span className="text-gray-900 font-bold">৳0.00</span>
                                </div>

                                <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Total Payable</span>
                                    <span className="text-xl font-black text-gray-900">৳749.00</span>
                                </div>
                            </div>

                            <Link href="/payment" className="w-full py-4 bg-govaly-pink text-white font-bold text-lg hover:bg-govaly-pink-dark transition-all cursor-pointer flex items-center justify-center gap-2">
                                Place Order
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}