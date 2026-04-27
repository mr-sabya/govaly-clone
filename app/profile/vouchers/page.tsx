"use client";
import React, { useState } from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { Ticket, Copy, Check, Info } from "lucide-react";

type VoucherStatus = "Available" | "Used" | "Expired";

const MOCK_VOUCHERS = [
    { id: 1, code: "GOVALYNEW20", discount: "20% OFF", description: "Minimum spend ৳1000", expiry: "31 Oct 2024", status: "Available" },
    { id: 2, code: "SAVE500", discount: "৳500 OFF", description: "Minimum spend ৳5000", expiry: "15 Nov 2024", status: "Available" },
    { id: 3, code: "FESTIVE10", discount: "10% OFF", description: "No minimum spend", expiry: "01 Jan 2025", status: "Available" },
    { id: 4, code: "OLDUSER5", discount: "5% OFF", description: "Minimum spend ৳2000", expiry: "01 Sep 2024", status: "Expired" },
];

export default function VouchersPage() {
    const [activeTab, setActiveTab] = useState<VoucherStatus>("Available");

    const filteredVouchers = MOCK_VOUCHERS.filter(v => v.status === activeTab);

    return (
        <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

                    <ProfileSidebar />

                    <div className="flex-1">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm border border-pink-100">
                                    <Ticket className="w-6 h-6 text-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Vouchers</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        Collect and use vouchers to save more
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar">
                            {(["Available", "Used", "Expired"] as VoucherStatus[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all border cursor-pointer ${activeTab === tab
                                            ? "bg-govaly-pink text-white border-govaly-pink shadow-md"
                                            : "bg-white text-gray-500 border-gray-100 hover:border-govaly-pink/30"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Voucher Grid */}
                        {filteredVouchers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredVouchers.map((voucher) => (
                                    <VoucherCard key={voucher.id} voucher={voucher} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-16 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    <Ticket className="w-10 h-10 text-gray-300" />
                                </div>
                                <p className="text-gray-500 font-medium">No {activeTab.toLowerCase()} vouchers found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Voucher Card Component ---
function VoucherCard({ voucher }: { voucher: any }) {
    const [copied, setCopied] = useState(false);
    const isExpired = voucher.status === "Expired";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(voucher.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative flex bg-white rounded-xl overflow-hidden border shadow-sm transition-all ${isExpired ? "opacity-60 grayscale" : "hover:shadow-md border-pink-50"}`}>

            {/* Left Decoration (The "Stub") */}
            <div className={`w-24 md:w-32 flex flex-col items-center justify-center p-4 border-r-2 border-dashed border-gray-100 ${isExpired ? "bg-gray-100" : "bg-govaly-pink text-white"}`}>
                <span className="text-xs font-bold uppercase opacity-80">Discount</span>
                <span className="text-lg md:text-xl font-black text-center leading-tight">{voucher.discount}</span>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-extrabold text-gray-800 text-sm md:text-base mb-1">{voucher.code}</h3>
                        {!isExpired && (
                            <button
                                onClick={copyToClipboard}
                                className="text-govaly-pink hover:bg-govaly-light-pink p-1.5 rounded-lg transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        )}
                    </div>
                    <p className="text-[11px] md:text-xs text-gray-500 font-medium">{voucher.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-2">
                    <div className="flex items-center gap-1 text-[10px] md:text-[11px] text-gray-400">
                        <Info className="w-3 h-3" />
                        <span>Exp: {voucher.expiry}</span>
                    </div>
                    {!isExpired && (
                        <span className="text-[10px] font-bold text-govaly-orange uppercase">Active</span>
                    )}
                </div>
            </div>

            {/* Circular "Ticket Cutouts" */}
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-govaly-light-pink rounded-full border border-pink-50" />
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-govaly-light-pink rounded-full border border-pink-50" />
        </div>
    );
}