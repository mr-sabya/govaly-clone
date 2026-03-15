"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Facebook, Instagram, Youtube, Phone } from "lucide-react";

// Links Data
const POLICIES = [
    { name: "Return & Refund Policy", href: "/return-refund-policy" },
    { name: "Exchange Policy", href: "/exchange-policy" },
    { name: "Shipping & Delivery Policy", href: "/shipping-delivery-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
];

const SELLER_LINKS = [
    { name: "Become A Seller", href: "/become-a-seller" },
    { name: "Seller Policy", href: "/seller-policy" },
    { name: "Product Policy", href: "/product-policy" },
    { name: "Pickup & Delivery Policy", href: "/pickup-delivery-policy" },
    { name: "Seller Exchange & Return Policy", href: "/seller-exchange-return-policy" },
];

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="bg-white border-t mt-10 text-[#191919]">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8">

                    {/* --- BRAND SECTION --- */}
                    <div className="flex flex-col gap-6 md:max-w-xs">
                        <div className="flex items-center gap-3">
                            <img
                                src="/assets/logo/govaly-new-short.png"
                                alt="Govaly Logo"
                                className="size-14 md:size-16 rounded-md object-contain"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-[20px] md:text-[28px] font-bold leading-none">Govaly</h2>
                                <p className="text-[10px] md:text-[12px] text-gray-600 mt-1">
                                    Bangladesh's Favorite Online Fashion Mall
                                </p>
                                <p className="text-[10px] md:text-[12px] mt-1">
                                    <span className="font-semibold">DBID</span> - 751626035
                                </p>
                            </div>
                        </div>

                        {/* App Downloads */}
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-[14px]">
                                Download <span className="text-[#E2136E]">Govaly</span> Mobile App
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    href="#"
                                    className="flex gap-2 items-center border-2 border-black rounded-md py-1.5 px-3 hover:bg-black hover:text-white transition-all"
                                >
                                    <PlayStoreIcon />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[8px]">GET IT ON</span>
                                        <span className="text-[13px] font-bold">Google Play</span>
                                    </div>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex gap-2 items-center border-2 border-black rounded-md py-1.5 px-3 hover:bg-black hover:text-white transition-all"
                                >
                                    <AppleIcon />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[8px]">Download on the</span>
                                        <span className="text-[13px] font-bold">App Store</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- POLICIES (Desktop: List, Mobile: Accordion) --- */}
                    <FooterSection
                        title="Govaly Policies"
                        links={POLICIES}
                        isOpen={openSection === "policies"}
                        onToggle={() => toggleSection("policies")}
                    />

                    {/* --- SELLER (Desktop: List, Mobile: Accordion) --- */}
                    <FooterSection
                        title="Govaly Seller"
                        links={SELLER_LINKS}
                        isOpen={openSection === "seller"}
                        onToggle={() => toggleSection("seller")}
                    />

                    {/* --- SOCIAL LINKS --- */}
                    <div className="px-3 md:px-0">
                        <h3 className="font-semibold mb-4 hidden md:block">Social Links</h3>
                        <button
                            onClick={() => toggleSection("social")}
                            className="flex md:hidden w-full justify-between items-center font-semibold py-2"
                        >
                            Social Links
                            <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "social" ? "rotate-180" : ""}`} />
                        </button>

                        <ul className={`space-y-3 mt-2 md:mt-0 ${openSection === "social" ? "block" : "hidden md:block"}`}>
                            <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Youtube size={18} />} label="YouTube" />
                            <SocialLink href="#" icon={<Phone size={18} />} label="WhatsApp" />
                        </ul>
                    </div>
                </div>

                {/* --- SSL COMMERZ LOGOS --- */}
                <div className="mt-10 border-t pt-6">
                    <img
                        src="/assets/logo/SSLCommerze_desktop.png"
                        alt="Payment Methods"
                        className="hidden md:block w-full object-contain h-auto"
                    />
                    <img
                        src="/assets/banner/ssl_commerz_mobile.jpg"
                        alt="Payment Methods Mobile"
                        className="md:hidden w-full h-auto"
                    />
                </div>
            </div>

            {/* --- COPYRIGHT --- */}
            <div className="border-t border-gray-100 pb-24 md:pb-4">
                <p className="text-center text-[12px] md:text-[14px] py-4 text-gray-500">
                    © {new Date().getFullYear()} Govaly Limited
                </p>
            </div>
        </footer>
    );
}

// Sub-component for lists (Accordion logic)
function FooterSection({ title, links, isOpen, onToggle }: any) {
    return (
        <div className="px-3 md:px-0">
            <h3 className="font-semibold mb-4 hidden md:block">{title}</h3>
            <button
                onClick={onToggle}
                className="flex md:hidden w-full justify-between items-center font-semibold py-2"
            >
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <ul className={`space-y-2 mt-2 md:mt-0 ${isOpen ? "block" : "hidden md:block"}`}>
                {links.map((link: any) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-gray-600 hover:text-[#E2136E] transition-colors text-sm">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SocialLink({ href, icon, label }: any) {
    return (
        <li>
            <Link href={href} className="flex items-center gap-3 text-gray-600 hover:text-[#E2136E] transition-colors text-sm">
                {icon}
                {label}
            </Link>
        </li>
    );
}

// SVG Icons for App Stores
const PlayStoreIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.81,16.28C19.46,16.66 19.46,17.34 18.81,17.72L15.11,19.84L14.4,12.71L16.81,15.12M4.6,2.65L14.4,12.45L15.11,5.27L18.81,7.4C19.46,7.78 19.46,8.46 18.81,8.84L16.81,10L4.6,2.65Z" /></svg>
);
const AppleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.63 14.21,1.45 14.07,0.25C13.05,0.29 11.8,0.93 11.07,1.79C10.41,2.55 9.83,3.76 9.99,4.92C11.13,5.01 12.26,4.38 13,3.5Z" /></svg>
);