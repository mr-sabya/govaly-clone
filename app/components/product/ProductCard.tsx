"use client";
import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export interface Product {
    id: number | string;
    category?: string;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    image: string;
    slug: string;
    isStockOut?: boolean; // Added for the "Stock Out" badge
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Added to wishlist:", product.id);
    };

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group relative bg-white border border-gray-100 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col w-full cursor-pointer"
        >
            {/* --- IMAGE SECTION --- */}
            <div className="relative overflow-hidden w-full aspect-[4/5] bg-gray-50">
                <img
                    alt={product.title}
                    loading="lazy"
                    src={product.image}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 w-full h-full"
                />

                {/* --- STOCK OUT BADGE --- */}
                {product.isStockOut && (
                    <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Stock Out
                    </div>
                )}

                {/* --- WISHLIST BUTTON --- */}
                <div className="absolute bottom-2 right-2 z-10">
                    <button
                        type="button"
                        onClick={handleWishlist}
                        className="cursor-pointer p-1.5 rounded-full transition-all duration-200 bg-white/40 backdrop-blur-md hover:bg-govaly-pink hover:text-white text-govaly-pink shadow-sm"
                    >
                        <Heart className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    </button>
                </div>

                {/* --- IMAGE DOTS (Pagination) --- */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full z-10 backdrop-blur-md bg-white/30 border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-govaly-pink shadow-sm" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="p-2 md:p-3 flex flex-col gap-1 w-full min-w-0">
                <h3
                    className="text-left font-medium truncate text-[13px] md:text-[15px] w-full text-gray-800 leading-tight"
                    title={product.title}
                >
                    {product.title}
                </h3>

                <div className="flex items-center flex-wrap gap-1.5 text-left">
                    <p className="text-govaly-pink font-bold text-[14px] md:text-[17px]">
                        ৳{product.price}
                    </p>
                    {product.oldPrice && (
                        <p className="line-through font-normal text-[11px] md:text-[13px] text-gray-400">
                            ৳{product.oldPrice}
                        </p>
                    )}
                    {product.discount && (
                        <span className="text-govaly-orange flex-shrink-0 text-[10px] md:text-[12px] font-bold uppercase">
                            ({product.discount})
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}