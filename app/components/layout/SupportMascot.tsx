"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function SupportMascot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-50 hidden lg:flex flex-col items-end gap-4">

            {/* --- CHAT MENU (Opens when mascot is clicked) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 w-64 mb-2 overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <span className="font-bold text-gray-800">Support Center</span>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/yournumber"
                                target="_blank"
                                className="flex items-center gap-3 p-3 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                            >
                                <div className="bg-green-500 p-2 rounded-lg text-white"><Phone size={18} /></div>
                                <div className="flex flex-col"><span className="text-sm font-bold">WhatsApp</span><span className="text-[10px]">Instant reply</span></div>
                            </a>

                            <a
                                href="https://m.me/yourpage"
                                target="_blank"
                                className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                            >
                                <div className="bg-blue-500 p-2 rounded-lg text-white"><MessageCircle size={18} /></div>
                                <div className="flex flex-col"><span className="text-sm font-bold">Messenger</span><span className="text-[10px]">24/7 Support</span></div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- THE MASCOT BUTTON --- */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center p-2 bg-white rounded-full shadow-xl border-2 border-[#E2136E]/10 hover:border-[#E2136E] transition-all duration-300 cursor-pointer"
            >
                {/* Pulse Effect Animation */}
                <span className="absolute inset-0 rounded-full bg-[#E2136E]/20 animate-ping group-hover:hidden"></span>

                <div className="relative mascot-wrapper">
                    <img
                        className="size-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        src="/images/mascot_face_happy.png" // Replace with your actual path or a URL
                        alt="Support Mascot"
                        onError={(e) => {
                            // Fallback if image is missing
                            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/4712/4712035.png";
                        }}
                    />
                </div>

                {/* Floating Tooltip */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 bg-gray-900 text-white text-[11px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Need help? Chat with us!
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
                    </div>
                )}
            </button>
        </div>
    );
}