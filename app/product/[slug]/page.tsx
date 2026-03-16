"use client";
import SimilarProducts from "@/app/components/product/SimilarProducts";
import ProductHeroSection from "@/app/components/product/ProductHeroSection";

const ProductDetail = () => {
    return (
        <div>
            <ProductHeroSection />

            <SimilarProducts />
        </div>

    );
};

export default ProductDetail;