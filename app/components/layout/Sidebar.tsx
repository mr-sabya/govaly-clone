"use client";
import { useState } from "react";
import { X, ChevronDown, Headset, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

interface SubCategory {
    name: string;
    items?: string[];
}

interface Category {
    name: string;
    subcategories?: SubCategory[];
}

const MENU_DATA: Category[] = [
    {
        name: "For You",
        subcategories: [
            { name: "Baby Bath" }, { name: "Baby Accessories" }, { name: "Baby Clothing Set" },
            { name: "Baby Cream" }, { name: "Baby Diapers" }, { name: "Baby Lotion" },
            { name: "Baby Oil" }, { name: "Baby Powder" }, { name: "Baby Shoes" },
        ],
    },
    {
        name: "Men",
        subcategories: [
            {
                name: "Men Fashion Accessories",
                items: ["Men Bags", "Men Belts", "Men Caps & Hats", "Men Jewellery", "Men Sunglasses", "Men Wallet", "Men Watch"],
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
            {/* Overlay - Increased z-index to 90 */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Drawer - Increased z-index to 100 */}
            <div className={`fixed top-0 left-0 h-full w-[300px] md:w-[350px] bg-white z-[100] transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.1)]`}>

                {/* Header */}
                <div className="p-5 flex justify-between items-center border-b bg-gray-50/50">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#E2136E] text-white rounded p-1 font-bold text-sm italic">G</div>
                        <h2 className="text-[#E2136E] text-lg font-bold tracking-tight uppercase">Categories</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X className="text-gray-500 w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {MENU_DATA.map((cat) => (
                        <div key={cat.name} className="border-b border-gray-100">
                            <div
                                className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-pink-50/30 transition-colors"
                                onClick={() => cat.subcategories && cat.subcategories.length > 0 && toggleMenu(cat.name)}
                            >
                                <span className={`text-[15px] transition-colors ${expandedMenus.includes(cat.name) ? "text-[#E2136E] font-bold" : "text-gray-800 font-semibold"}`}>
                                    {cat.name}
                                </span>
                                {cat.subcategories && cat.subcategories.length > 0 && (
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedMenus.includes(cat.name) ? "rotate-180 text-[#E2136E]" : ""}`} />
                                )}
                            </div>

                            {expandedMenus.includes(cat.name) && cat.subcategories && (
                                <div className="bg-gray-50/30 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {cat.subcategories.map((sub) => (
                                        <div key={sub.name} className="border-t border-gray-100">
                                            <div
                                                className={`flex justify-between items-center px-8 py-3 cursor-pointer hover:bg-white transition-colors`}
                                                onClick={() => sub.items && sub.items.length > 0 && toggleMenu(sub.name)}
                                            >
                                                <span className={`text-[14px] ${sub.items && sub.items.length > 0 ? 'font-bold text-gray-700' : 'text-gray-600 font-normal'}`}>
                                                    {sub.name}
                                                </span>
                                                {sub.items && sub.items.length > 0 && (
                                                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${expandedMenus.includes(sub.name) ? "rotate-180" : ""}`} />
                                                )}
                                            </div>

                                            {expandedMenus.includes(sub.name) && sub.items && sub.items.length > 0 && (
                                                <div className="bg-white border-l-4 border-[#E2136E] ml-8 mb-2">
                                                    {sub.items.map((item) => (
                                                        <div key={item} className="px-6 py-2 text-gray-500 text-[13px] cursor-pointer hover:text-[#E2136E] hover:bg-gray-50 transition-all">
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
                <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.03)] space-y-2">
                    <ContactButton icon={<Headset className="w-4 h-4 text-[#E2136E]" />} label="Govaly Helpline" />
                    <ContactButton icon={<Phone className="w-4 h-4 text-[#E2136E]" />} label="01969901212" />
                    <ContactButton icon={<MessageCircle className="w-4 h-4 text-[#E2136E]" />} label="WhatsApp Support" />
                </div>
            </div>
        </>
    );
}

function ContactButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-[12px] font-semibold text-gray-600 cursor-pointer hover:bg-pink-50 hover:text-[#E2136E] transition-all group border border-transparent hover:border-pink-100">
            <div className="flex items-center gap-3">
                {icon}
                <span className="truncate">{label}</span>
            </div>
            <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-[#E2136E]" />
        </div>
    );
}