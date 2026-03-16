"use client";
import React from "react";
import ProductCard, { Product } from "./ProductCard"; // Adjust path as needed

// Mock Data matching your Product interface
const SIMILAR_PRODUCTS: Product[] = [
    {
        id: 1,
        category: "Baby",
        title: "Imported Soft Sole Baby Shoes",
        price: 590,
        oldPrice: 750,
        discount: "21% OFF",
        image: "https://d62ipmwrm4ymk.cloudfront.net/product/20251009/original-china-baby-girls-gainsboro-shoes-and-hair-band_1_oJQ8Zq1xkbw.jpg",
        slug: "soft-sole-baby-shoes-1",
    },
    {
        id: 2,
        category: "Baby",
        title: "Imported Soft Sole Breathable",
        price: 550,
        oldPrice: 690,
        discount: "20% OFF",
        image: "https://ae01.alicdn.com/kf/S8f0e68e4a9e4468f9b9f7a7a7a7a7a7aJ.jpg",
        slug: "soft-sole-baby-shoes-2",
    },
    {
        id: 3,
        category: "Baby",
        title: "Imported Soft Sole Baby Shoes",
        price: 590,
        oldPrice: 750,
        discount: "21% OFF",
        image: "https://d62ipmwrm4ymk.cloudfront.net/product/20251009/original-china-baby-girls-gainsboro-shoes-and-hair-band_1_oJQ8Zq1xkbw.jpg",
        slug: "soft-sole-baby-shoes-1",
    },
    {
        id: 4,
        category: "Baby",
        title: "Imported Soft Sole Breathable",
        price: 550,
        oldPrice: 690,
        discount: "20% OFF",
        image: "https://ae01.alicdn.com/kf/S8f0e68e4a9e4468f9b9f7a7a7a7a7a7aJ.jpg",
        slug: "soft-sole-baby-shoes-2",
    },
    {
        id: 5,
        category: "Baby",
        title: "Imported Soft Sole Breathable",
        price: 550,
        oldPrice: 690,
        discount: "20% OFF",
        image: "https://ae01.alicdn.com/kf/S8f0e68e4a9e4468f9b9f7a7a7a7a7a7aJ.jpg",
        slug: "soft-sole-baby-shoes-2",
    },
    // ... add more items to fill the grid
];

export default function SimilarProducts() {
    return (
        <section className="w-full mt-12 mb-10">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-[18px] md:text-[22px] font-bold text-[#191919] mb-6">
                    Similar Products
                </h2>

                {/* Responsive Grid: 2 on mobile, 4 on tablet, 6 on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
                    {SIMILAR_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}