"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import ProductCard, { Product } from "../../components/product/ProductCard";

const CATEGORIES = ["For You", "Men", "Women", "Kids", "Baby", "Health & Beauty"];

// Simulated Data
const ALL_PRODUCTS: Product[] = [
    {
        id: 1,
        category: "Women",
        title: "Vacuum Electroplated Light Luxury Four-leaf Clover Bracelet",
        price: 1050,
        oldPrice: 1290,
        discount: "19% OFF",
        image: "https://d62ipmwrm4ymk.cloudfront.net/medium/product/20251009/vacuum-electroplated-light-luxury-four-leaf-clover-love-unisex-bracelet-1-pcs_1_S3Ery-FKwXI.jpg",
        slug: "clover-bracelet"
    },
    {
        id: 2,
        category: "Men",
        title: "Classic Vintage Black Driving Shade Sunglass",
        price: 1190,
        oldPrice: 1690,
        discount: "30% OFF",
        image: "https://d62ipmwrm4ymk.cloudfront.net/medium/product/20251009/classic-vintage-black-driving-travelling-shade-sunglass-for-men_1_zz29DsmfBXw.jpg",
        slug: "vintage-sunglass"
    },
    // Add more items here...
];

export default function TabbedProducts() {
    const [activeTab, setActiveTab] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    // Sorting logic based on activeTab
    const filteredProducts = useMemo(() => {
        const selectedCat = CATEGORIES[activeTab];
        if (selectedCat === "For You") return ALL_PRODUCTS;
        return ALL_PRODUCTS.filter(p => p.category === selectedCat);
    }, [activeTab]);

    useEffect(() => {
        const el = tabsRef.current[activeTab];
        if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }, [activeTab]);

    return (
        <section className="w-full py-8">
            <div className="container mx-auto px-4">

                {/* TAB BAR */}
                <div className="sticky top-20 z-40 mb-10 flex justify-center">
                    <div className="relative flex items-center bg-white/90 backdrop-blur-md border border-gray-100 rounded-full p-1.5 shadow-xl overflow-x-auto no-scrollbar">
                        <div
                            className="absolute h-[75%] bg-[#E2136E] rounded-full transition-all duration-300 z-0"
                            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                        />
                        {CATEGORIES.map((cat, idx) => (
                            <button
                                key={cat}
                                ref={(el) => { tabsRef.current[idx] = el; }}
                                onClick={() => setActiveTab(idx)}
                                className={`relative z-10 px-6 py-2 md:px-10 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-500 ${activeTab === idx ? "text-white" : "text-[#E2136E]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* GRID OF PRODUCT CARDS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}