"use client";
import { useState } from "react";
import HeroBanner from "./components/home/HeroBanner";
import CategoryGrid from "./components/home/CategoryGrid";
import PeekSlider from "./components/home/PeekSlider";
import FeatureBar from "./components/home/FeatureBar";
import DualBannerGrid from "./components/home/DualBannerGrid";
import FeaturedCategories from "./components/home/FeaturedCategories";
import WideBanner from "./components/home/WideBanner";
import BrandCarousel from "./components/home/BrandCarousel";
import AffordableSection from "./components/home/AffordableSection";
import TabbedProducts from "./components/home/TabbedProducts";

export default function Home() {

    return (
        <main className="min-h-screen">

            {/* Pass setLoginOpen to the banner so the "Log In" link works */}
            <HeroBanner/>

            <CategoryGrid />
            <PeekSlider />
            <FeatureBar />
            <DualBannerGrid />
            <FeaturedCategories />
            <WideBanner />
            <BrandCarousel />
            <AffordableSection />

            <TabbedProducts />

        </main>
    );
}