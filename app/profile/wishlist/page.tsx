"use client";
import React, { useState } from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { Heart, ShoppingCart, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

// Mock Wishlist Data
const INITIAL_WISHLIST = [
    { id: 1, title: "Embroidered Cotton Kurti", price: 1250, oldPrice: 1850, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03", slug: "p1" },
    { id: 2, title: "Premium Silk Saree", price: 4500, oldPrice: 6000, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c", slug: "p2" },
    { id: 3, title: "Western Floral Dress", price: 2200, oldPrice: 2800, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446", slug: "p3" },
];

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);

    const removeItem = (id: number) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

                    {/* Reusable Sidebar */}
                    <ProfileSidebar />

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="mb-6 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm border border-pink-100">
                                    <Heart className="w-6 h-6 text-govaly-pink fill-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">My Wishlist</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        {wishlist.length} Items saved for later
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Wishlist Content */}
                        {wishlist.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                                {wishlist.map((product) => (
                                    <WishlistCard
                                        key={product.id}
                                        product={product}
                                        onRemove={() => removeItem(product.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-12 md:p-20 flex flex-col items-center justify-center text-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-govaly-light-pink rounded-full flex items-center justify-center mb-6">
                                    <Heart className="w-12 h-12 md:w-16 md:h-16 text-govaly-pink/20" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
                                <p className="text-sm text-gray-500 max-w-xs mb-8">
                                    Looks like you haven't added anything to your wishlist yet.
                                </p>
                                <Link href="/" className="px-10 py-3 bg-govaly-pink text-white rounded-full font-bold text-sm hover:bg-govaly-pink-dark transition-all shadow-lg shadow-govaly-pink/20">
                                    Discover Products
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

// --- Internal Wishlist Card Component ---
function WishlistCard({ product, onRemove }: { product: any, onRemove: () => void }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-50 hover:shadow-md transition-all flex flex-col relative">
            {/* Remove Button */}
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all"
            >
                <Trash2 className="w-4 h-4" />
            </button>

            {/* Image Link */}
            <Link href={`/product/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            {/* Product Details */}
            <div className="p-3 md:p-4 space-y-2">
                <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm md:text-base font-bold text-gray-800 truncate group-hover:text-govaly-pink transition-colors">
                        {product.title}
                    </h3>
                </Link>

                <div className="flex items-center gap-2">
                    <span className="text-govaly-pink font-extrabold text-base md:text-lg">
                        ৳{product.price}
                    </span>
                    <span className="text-gray-400 line-through text-xs md:text-sm">
                        ৳{product.oldPrice}
                    </span>
                </div>

                <button className="w-full mt-2 flex items-center justify-center gap-2 py-2 bg-govaly-light-pink text-govaly-pink rounded-xl text-[12px] md:text-sm font-bold hover:bg-govaly-pink hover:text-white transition-all active:scale-95">
                    <ShoppingCart className="w-4 h-4" />
                    Move to Cart
                </button>
            </div>
        </div>
    );
}