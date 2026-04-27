"use client";
import React, { useState } from "react";
import { ChevronLeft, Trash2, Minus, Plus, Store, Check } from "lucide-react";
import Link from "next/link";

const MOCK_ITEM = {
    id: 1,
    shopName: "TreadVibe",
    title: "Trendy Lightweight Slide Slipper for Men - Black",
    size: "40",
    price: 649.00,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=200",
};

export default function CartPage() {
    const [quantity, setQuantity] = useState(1);
    const [isSelected, setIsSelected] = useState(true);

    return (
        <div className="min-h-screen bg-govaly-light-pink pb-20">
            {/* --- HEADER --- */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-govaly-pink transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                    <h1 className="text-xl font-bold">Cart</h1>
                </Link>
            </div>

            {/* --- STEPPER --- */}
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <div className="relative flex justify-between items-center max-w-4xl mx-auto">
                    {/* Background Line */}
                    <div className="absolute top-5 left-0 w-full h-1 bg-pink-200 z-0" />
                    <div className="absolute top-5 left-0 w-1/3 h-1 bg-govaly-pink z-0" />

                    {[
                        { step: 1, label: "Shopping" },
                        { step: 2, label: "Cart" },
                        { step: 3, label: "Checkout" },
                        { step: 4, label: "Payment" }
                    ].map((item) => (
                        <div key={item.step} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${item.step <= 2 ? "bg-govaly-pink" : "bg-pink-200"}`}>
                                {item.step}
                            </div>
                            <span className={`text-[10px] md:text-xs font-bold uppercase ${item.step <= 2 ? "text-gray-800" : "text-gray-400"}`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* LEFT SECTION: ITEMS */}
                    <div className="flex-1 space-y-4">

                        {/* Select All Card */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-50 flex items-center gap-3">
                            <CustomCheckbox checked={isSelected} onChange={() => setIsSelected(!isSelected)} />
                            <span className="font-bold text-gray-800 text-sm md:text-base">Select All</span>
                        </div>

                        {/* Store Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-pink-50 overflow-hidden">
                            {/* Store Header */}
                            <div className="p-4 border-b border-gray-50 flex items-center gap-3">
                                <CustomCheckbox checked={isSelected} onChange={() => setIsSelected(!isSelected)} />
                                <div className="flex items-center gap-2">
                                    <Store className="w-5 h-5 text-govaly-pink" />
                                    <span className="font-bold text-gray-800 text-sm md:text-base">{MOCK_ITEM.shopName}</span>
                                </div>
                            </div>

                            {/* Table Header (Desktop Only) */}
                            <div className="hidden md:grid grid-cols-12 p-4 text-sm font-bold text-gray-500 border-b border-gray-50">
                                <div className="col-span-7">Product</div>
                                <div className="col-span-3 text-center">Price</div>
                                <div className="col-span-2 text-right">Actions</div>
                            </div>

                            {/* Cart Item */}
                            <div className="p-4 md:grid md:grid-cols-12 items-center flex flex-col gap-4">
                                {/* Product Info */}
                                <div className="col-span-7 flex items-center gap-4 w-full">
                                    <div className="flex-shrink-0">
                                        <CustomCheckbox checked={isSelected} onChange={() => setIsSelected(!isSelected)} />
                                    </div>
                                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                                        <img src={MOCK_ITEM.image} alt={MOCK_ITEM.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm md:text-base font-bold text-gray-800 truncate">{MOCK_ITEM.title}</h3>
                                        <p className="mt-1">
                                            <span className="bg-gray-100 text-gray-600 text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold uppercase tracking-tight">Size: {MOCK_ITEM.size}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Price (Mobile: Inline / Desktop: Column) */}
                                <div className="col-span-3 text-center w-full md:w-auto flex md:block justify-between items-center px-10 md:px-0">
                                    <span className="md:hidden text-gray-400 text-xs font-bold uppercase">Price:</span>
                                    <span className="text-govaly-pink font-extrabold text-lg">৳{MOCK_ITEM.price.toFixed(2)}</span>
                                </div>

                                {/* Actions */}
                                <div className="col-span-2 flex items-center justify-end gap-4 w-full md:w-auto px-10 md:px-0">
                                    <button className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                    <div className="flex items-center border rounded-lg overflow-hidden bg-gray-50">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-1.5 hover:bg-gray-200 transition-colors cursor-pointer rounded-l"
                                        >
                                            <Minus className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-1.5 hover:bg-gray-200 transition-colors cursor-pointer rounded-r"
                                        >
                                            <Plus className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION: SUMMARY */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 sticky top-6">
                            <h2 className="text-lg font-extrabold text-gray-800 mb-4">Summary</h2>

                            <div className="flex justify-between items-center py-4 border-t border-b border-gray-50 mb-6">
                                <span className="font-bold text-gray-700">Total Product Price</span>
                                <span className="font-extrabold text-xl text-gray-900 flex items-center gap-0.5">
                                    ৳{(MOCK_ITEM.price * quantity).toFixed(0)}
                                </span>
                            </div>

                            <Link href="/checkout" className="w-full py-4 bg-govaly-pink text-white rounded-full font-black text-lg shadow-lg shadow-govaly-pink/20 hover:bg-govaly-pink-dark transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                                Checkout
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// --- CUSTOM PINK CHECKBOX ---
function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
    return (
        <button
            onClick={onChange}
            className={`w-5 h-5 rounded-md flex items-center justify-center transition-all border-2 cursor-pointer ${checked ? "bg-govaly-pink border-govaly-pink" : "border-gray-300 bg-white"
                }`}
        >
            {checked && <Check className="w-3.5 h-3.5 text-white stroke-[4px]" />}
        </button>
    );
}