"use client";
import React from "react";
import ProductCard, { Product } from "../../components/product/ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const MOCK_DATA: Product[] = [
    { id: 1, title: "Pakistani Lavish Heavy W...", price: 8490, oldPrice: 9450, discount: "10% OFF", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03", slug: "p1" },
    { id: 2, title: "Imported Chest Bow & Th...", price: 950, image: "https://images.unsplash.com/photo-1621330396173-e41b18712ca2", slug: "p2" },
    { id: 3, title: "Imported Chest Bow & Th...", price: 950, image: "https://images.unsplash.com/photo-1598559069352-3d8437b0d427", slug: "p3" },
    { id: 4, title: "Imported Lingerie Front B...", price: 1270, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446", slug: "p4" },
    { id: 5, title: "White Floral Printed Arts B...", price: 2000, oldPrice: 2250, discount: "11% OFF", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03", slug: "p5" },
    { id: 6, title: "Imported Romantic Babyd...", price: 1070, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", slug: "p6" },
    { id: 7, title: "Pakistani Sorrel by Gulljee...", price: 3350, oldPrice: 3990, discount: "16% OFF", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956", slug: "p7" },
    { id: 8, title: "Imported Floral Embroider...", price: 949, oldPrice: 1299, discount: "27% OFF", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c", slug: "p8" },
];

export default function CategoryDetailPage() {
    return (
        <div className="min-h-screen bg-govaly-light-pink pb-10">
            {/* HERO BANNER SECTION */}
            <section className="relative w-full h-[200px] md:h-[450px]">
                <img
                    src="/images/category-back.jpg"
                    alt="Women Fashion Wear"
                    className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 left-0 right-0 px-4 md:px-10">
                    <div className="max-w-screen-2xl mx-auto bg-white shadow-md rounded-lg py-3 px-6 border-b-4 border-govaly-pink">
                        <h1 className="text-govaly-pink text-lg md:text-2xl font-bold uppercase tracking-wide">
                            Women Fashion Wear
                        </h1>
                    </div>
                </div>
            </section>

            <div className="max-w-screen-2xl mx-auto px-4 mt-16 space-y-12">
                
                {/* --- SLIDER 1: TOP RATED --- */}
                <section className="relative group">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-gray-900 font-bold text-lg md:text-xl">Top Rated</h2>
                        <div className="flex gap-2">
                            <button className="swiper-prev-rated p-2 rounded-full bg-white shadow-md text-govaly-pink border border-gray-100 hover:bg-govaly-pink hover:text-white transition-all cursor-pointer">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="swiper-next-rated p-2 rounded-full bg-white shadow-md text-govaly-pink border border-gray-100 hover:bg-govaly-pink hover:text-white transition-all cursor-pointer">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={2}
                        navigation={{
                            prevEl: '.swiper-prev-rated',
                            nextEl: '.swiper-next-rated',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 6 },
                        }}
                        className="pb-4"
                    >
                        {MOCK_DATA.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* --- SLIDER 2: TOP SOLD --- */}
                <section className="relative group">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-gray-900 font-bold text-lg md:text-xl">Top Sold</h2>
                        <div className="flex gap-2">
                            <button className="swiper-prev-sold p-2 rounded-full bg-white shadow-md text-govaly-pink border border-gray-100 hover:bg-govaly-pink hover:text-white transition-all cursor-pointer">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="swiper-next-sold p-2 rounded-full bg-white shadow-md text-govaly-pink border border-gray-100 hover:bg-govaly-pink hover:text-white transition-all cursor-pointer">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={2}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-prev-sold',
                            nextEl: '.swiper-next-sold',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 6 },
                        }}
                        className="pb-4"
                    >
                        {MOCK_DATA.slice().reverse().map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* GRID SECTION: FOR YOU */}
                <section>
                    <h2 className="text-gray-900 font-bold text-lg md:text-xl mb-6">For You</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {[...MOCK_DATA, ...MOCK_DATA].map((product, idx) => (
                            <ProductCard key={`${product.id}-${idx}`} product={product} />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button className="px-10 py-2.5 bg-white border-2 border-govaly-pink text-govaly-pink font-bold rounded-full hover:bg-govaly-pink hover:text-white transition-all shadow-sm cursor-pointer">
                            View More
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}