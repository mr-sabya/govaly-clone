"use client";
import Link from "next/link";
import React from "react";

const CATEGORIES = [
    { id: 1, name: "Women Fashion", image: "/images/categories/category_1.jpg", slug: "women-fashion-wear" },
    { id: 2, name: "Women Bottom", image: "/images/cat2.png", slug: "women-bottom" },
    { id: 3, name: "Men Topwear", image: "/images/cat3.png", slug: "men-topwear" },
    { id: 4, name: "Women Footwear", image: "/images/cat4.png", slug: "women-footwear" },
    { id: 5, name: "Men Bottomwear", image: "/images/cat5.png", slug: "men-bottomwear" },
    { id: 6, name: "Men Fashion Acce...", image: "/images/cat6.png", slug: "men-fashion-accessories" },
    { id: 7, name: "Men Footwear", image: "/images/cat7.png", slug: "men-footwear" },
    { id: 8, name: "Women Accessories", image: "/images/cat8.png", slug: "women-accessories" },
    { id: 9, name: "Health & Beauty", image: "/images/cat9.png", slug: "health-beauty" },
    { id: 10, name: "Kids Kurti", image: "/images/cat10.png", slug: "kids-kurti" },
    { id: 11, name: "Kids Girls Clothing", image: "/images/cat11.png", slug: "kids-girls-clothing" },
    { id: 12, name: "Kids Boys Clothing", image: "/images/cat12.png", slug: "kids-boys-clothing" },
    { id: 13, name: "Kids Accessories", image: "/images/cat13.png", slug: "kids-accessories" },
    { id: 14, name: "Kids Footwear", image: "/images/cat14.png", slug: "kids-footwear" },
    { id: 15, name: "Baby Clothing Set", image: "/images/cat15.png", slug: "baby-clothing-set" },
    { id: 16, name: "Baby Shoes", image: "/images/cat16.png", slug: "baby-shoes" },
    { id: 17, name: "Baby Accessories", image: "/images/cat17.png", slug: "baby-accessories" },
    { id: 18, name: "Baby Winter Wear", image: "/images/cat18.png", slug: "baby-winter-wear" },
];

export default function CategoryGrid() {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                {/* Header (Optional, common in Govaly style) */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Shop by Category</h2>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 md:gap-4">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Image Container with Govaly Gradient */}
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#E3F2FD] to-white border border-gray-50 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-govaly-pink/30">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-2"
                                />
                            </div>

                            {/* Category Title - Added group-hover:text-govaly-pink */}
                            <p className="mt-2 text-[11px] md:text-[13px] font-medium text-gray-700 text-center leading-tight truncate w-full px-1 transition-colors duration-200 group-hover:text-govaly-pink">
                                {category.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}