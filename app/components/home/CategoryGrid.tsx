"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export default function CategoryGrid() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

                const response = await fetch(`${apiUrl}/categories`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Tenant-ID': tenantId || ''
                    }
                });
                const result = await response.json(); 
                console.log(result);

                setCategories(result.data || []);
            } catch (error) {
                console.error("Error loading categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        // Simple loading skeleton
        return (
            <div className="container mx-auto px-4 py-8 grid grid-cols-3 md:grid-cols-9 gap-4">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-100 animate-pulse rounded-xl"></div>
                ))}
            </div>
        );
    }

    return (
        <section className="py-8 w-full container mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Shop by Category</h2>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 md:gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#E3F2FD] to-white border border-gray-50 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-pink-500/30">
                                <img
                                    src={category.image || '/images/placeholder.png'}
                                    alt={category.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-2"
                                />
                            </div>

                            <p className="mt-2 text-[11px] md:text-[13px] font-medium text-gray-700 text-center leading-tight truncate w-full px-1 transition-colors duration-200 group-hover:text-pink-600">
                                {category.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}