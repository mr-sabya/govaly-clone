"use client";
import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, ShieldCheck, HelpCircle, FileText, ArrowLeft } from "lucide-react";

// 1. Define your content data mapping the slugs from your footer
const PAGE_CONTENT: Record<string, { title: string; category: string; content: React.ReactNode }> = {
    "return-refund-policy": {
        category: "Customer Care",
        title: "Return & Refund Policy",
        content: (
            <div className="space-y-6">
                <p>We want you to be fully satisfied with your purchase. If you are not happy, you can return items within 7 days.</p>
                <h2 className="text-xl font-bold text-gray-900">Conditions for Return</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Items must be in original packaging with tags.</li>
                    <li>Items must be unworn and unwashed.</li>
                </ul>
            </div>
        )
    },
    "exchange-policy": {
        category: "Customer Care",
        title: "Exchange Policy",
        content: <p>Exchanges are available for size issues within 3 days of delivery...</p>
    },
    "become-a-seller": {
        category: "Sellers",
        title: "Become A Seller",
        content: <p>Join the Govaly marketplace and grow your business with us...</p>
    },
    // Add all your other slugs here...
};

export default function DynamicInfoPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Get the content for the current slug
    const data = PAGE_CONTENT[slug];

    // If the slug doesn't exist in our data, show 404
    if (!data) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-govaly-light-pink pb-20">
            {/* --- HERO HEADER --- */}
            <div className="bg-white border-b border-pink-100">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
                    <div className="flex justify-center items-center gap-2 text-govaly-pink font-bold text-xs uppercase tracking-widest mb-4">
                        <Link href="/" className="hover:underline">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-400">{data.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        {data.title}
                    </h1>
                </div>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="max-w-4xl mx-auto px-4 -mt-10">
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-govaly-pink/5 border border-pink-50 overflow-hidden">

                    {/* Top Accent Bar */}
                    <div className="h-2 bg-govaly-pink w-full" />

                    <div className="p-8 md:p-16">
                        {/* Content Rendered Here */}
                        <article className="prose prose-pink max-w-none text-gray-700 leading-relaxed md:text-lg">
                            {data.content}
                        </article>

                        {/* Common Footer Actions */}
                        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <HelpCircle className="w-5 h-5 text-govaly-pink" />
                                <span>Still have questions? <Link href="/help" className="text-govaly-pink font-bold underline">Visit Helpline</Link></span>
                            </div>

                            <Link href="/" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-govaly-pink transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Shopping
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white">
                        <ShieldCheck className="w-8 h-8 text-govaly-pink" />
                        <span className="text-xs font-bold text-gray-700 uppercase">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white">
                        <FileText className="w-8 h-8 text-govaly-pink" />
                        <span className="text-xs font-bold text-gray-700 uppercase">Verified Policies</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white">
                        <HelpCircle className="w-8 h-8 text-govaly-pink" />
                        <span className="text-xs font-bold text-gray-700 uppercase">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    );
}