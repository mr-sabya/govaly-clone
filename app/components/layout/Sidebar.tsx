"use client";
import { useState } from "react";
import { X, ChevronDown, Headset, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

// 1. Define strict interfaces to fix the TypeScript error
interface SubCategory {
    name: string;
    items?: string[]; // The '?' means this property is optional
}

interface Category {
    name: string;
    subcategories?: SubCategory[];
}

// 2. Apply the 'Category[]' type to your data
const MENU_DATA: Category[] = [
    {
        name: "For You",
        subcategories: [
            { name: "Baby Bath" },
            { name: "Baby Accessories" },
            { name: "Baby Clothing Set" },
            { name: "Baby Cream" },
            { name: "Baby Diapers" },
            { name: "Baby Lotion" },
            { name: "Baby Oil" },
            { name: "Baby Powder" },
            { name: "Baby Shoes" },
        ],
    },
    {
        name: "Men",
        subcategories: [
            {
                name: "Men Fashion Accessories",
                items: [
                    "Men Bags", "Men Belts", "Men Caps & Hats", "Men Jewellery", "Men Sunglasses", "Men Wallet", "Men Watch",
                ],
            },
            { name: "Men Bottomwear", items: [] },
            { name: "Men Footwear", items: [] },
            { name: "Men Topwear", items: [] },
        ],
    },
    {
        name: "Women",
        subcategories: [
            { name: "Women Footwear", items: ["Sandals", "Heels", "Sneakers"] },
            { name: "Women Clothing", items: ["Kurti", "Saree", "Tops"] },
        ]
    },
    { name: "Kids", subcategories: [] },
    { name: "Baby", subcategories: [] },
    { name: "Health & Beauty", subcategories: [] },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

    const toggleMenu = (name: string) => {
        setExpandedMenus((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full w-[310px] bg-white z-[70] transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col shadow-2xl`}>

                {/* Header */}
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-govaly-pink text-xl font-bold tracking-tight">Categories</h2>
                    <X className="cursor-pointer text-gray-500 w-5 h-5" onClick={onClose} />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {MENU_DATA.map((cat) => (
                        <div key={cat.name} className="border-b border-gray-50">
                            <div
                                className="flex justify-between items-center px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => cat.subcategories && cat.subcategories.length > 0 && toggleMenu(cat.name)}
                            >
                                <span className="font-bold text-[15px] text-gray-900">{cat.name}</span>
                                {cat.subcategories && cat.subcategories.length > 0 && (
                                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedMenus.includes(cat.name) ? "rotate-180" : ""}`} />
                                )}
                            </div>

                            {expandedMenus.includes(cat.name) && cat.subcategories && (
                                <div className="bg-white">
                                    {cat.subcategories.map((sub) => (
                                        <div key={sub.name} className="border-t border-gray-50/50">
                                            {/* Logic updated to check if items exists safely */}
                                            <div
                                                className={`flex justify-between items-center px-8 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors ${sub.items && sub.items.length > 0 ? 'font-bold text-gray-900' : 'text-gray-600 font-normal'}`}
                                                onClick={() => sub.items && sub.items.length > 0 && toggleMenu(sub.name)}
                                            >
                                                <span className="text-[14px]">{sub.name}</span>
                                                {/* Optional chaining used here: sub.items?.length */}
                                                {sub.items && sub.items.length > 0 && (
                                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedMenus.includes(sub.name) ? "rotate-180" : ""}`} />
                                                )}
                                            </div>

                                            {expandedMenus.includes(sub.name) && sub.items && sub.items.length > 0 && (
                                                <div className="bg-gray-50/50 pb-2">
                                                    <div className="px-12 py-2 text-govaly-pink italic text-[13px] font-bold cursor-pointer hover:underline">
                                                        See All
                                                    </div>
                                                    {sub.items.map((item) => (
                                                        <div key={item} className="px-12 py-1.5 text-gray-600 text-[13.5px] cursor-pointer hover:text-govaly-pink">
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Fixed Footer */}
                <div className="p-3 bg-white border-t space-y-2">
                    <ContactButton icon={<Headset className="w-[18px] h-[18px] text-govaly-pink" />} label="Govaly Helpline" />
                    <ContactButton icon={<Mail className="w-[18px] h-[18px] text-govaly-pink" />} label="support@govaly.com.bd" />
                    <ContactButton icon={<Phone className="w-[18px] h-[18px] text-govaly-pink" />} label="01969901212" />
                    <ContactButton icon={<MessageCircle className="w-[18px] h-[18px] text-govaly-pink" />} label="01907104920" />
                </div>
            </div>
        </>
    );
}

function ContactButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex items-center justify-between p-2.5 bg-white border border-pink-50 rounded-xl text-[13px] font-medium text-gray-700 cursor-pointer hover:bg-govaly-light-pink transition-all group">
            <div className="flex items-center gap-3">
                {icon}
                <span className="truncate">{label}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-govaly-pink" />
        </div>
    );
}