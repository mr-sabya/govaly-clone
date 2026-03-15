"use client";
import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

// Define the interface for the product object
export interface Product {
    id: number | string;
    category: string;
    title: string;
    price: number;
    oldPrice: number;
    discount: string;
    image: string;
    slug: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Function to handle wishlist click without triggering the Link
    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevents navigation
        e.stopPropagation(); // Prevents bubbling to parent
        console.log("Added to wishlist:", product.id);
    };

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group relative bg-white md:rounded-lg shadow-md shadow-primary/10 hover:shadow-lg transition-transform duration-300 overflow-hidden flex flex-col w-full block cursor-pointer"
        >
            {/* --- IMAGE SECTION --- */}
            <div className="relative overflow-hidden w-full aspect-square">
                <img
                    alt={product.title}
                    loading="lazy"
                    src={product.image}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 w-full h-full"
                />

                {/* --- WISHLIST BUTTON --- */}
                <div className="absolute bottom-2.5 right-1 z-10 w-fit">
                    <button
                        type="button"
                        onClick={handleWishlist}
                        className="cursor-pointer p-1.5 rounded-full transition-all duration-200 hover:backdrop-blur-xl hover:bg-white/40"
                    >
                        <Heart className="w-6 h-6 md:w-7 md:h-7 text-[#E2136E] transition-colors duration-200" />
                    </button>
                </div>

                {/* --- IMAGE DOTS (Pagination Mock) --- */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-1 py-0.5 rounded-full z-10 backdrop-blur-xl bg-white/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2136E]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C3C3C3]/70" />
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="px-2 mt-2 mb-2 flex flex-col justify-between w-full min-w-0">
                <div className="flex-shrink-0 mb-0.5 w-full min-w-0">
                    <h3
                        className="text-left font-medium truncate text-[12px] md:text-[17px] w-full text-gray-800"
                        title={product.title}
                    >
                        {product.title}
                    </h3>
                </div>

                <div className="flex items-center flex-wrap space-x-1 text-left">
                    <p className="text-[#E2136E] font-semibold text-[12px] md:text-[17px]">
                        ৳{product.price}
                    </p>
                    <p className="line-through font-normal text-[12px] md:text-[14px] text-gray-500">
                        ৳{product.oldPrice}
                    </p>
                    <span className="text-[#00B852] flex-shrink-0 text-[12px] md:text-[14px] font-medium">
                        ({product.discount})
                    </span>
                </div>
            </div>
        </Link>
    );
}