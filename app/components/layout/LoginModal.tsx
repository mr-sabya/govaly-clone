"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogIn, UserPlus, Eye, EyeOff, Smartphone } from "lucide-react";

// --- 1. CONTEXT SETUP ---
interface LoginContextType {
    openLogin: () => void;
    closeLogin: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

// --- 2. THE GLOBAL HOOK ---
// You will import this in your Navbar
export const useLoginModal = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginModal must be used within a LoginProvider");
    }
    return context;
};

// --- 3. THE PROVIDER ---
// You will wrap this in your layout.tsx
export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openLogin = () => setIsOpen(true);
    const closeLogin = () => setIsOpen(false);

    return (
        <LoginContext.Provider value={{ openLogin, closeLogin }}>
            {children}
            <LoginModalUI isOpen={isOpen} onClose={closeLogin} />
        </LoginContext.Provider>
    );
};

// --- 4. THE UI COMPONENT (Internal Only) ---
function LoginModalUI({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [activeTab, setActiveTab] = useState<"password" | "otp">("password");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-white w-full max-w-[420px] rounded-2xl relative z-10 overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-gray-400 hover:text-black hover:rotate-90 transition-all duration-300"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-6 md:p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Log In</h2>
                                <p className="text-gray-500 text-sm mt-1">Access your account & orders</p>
                            </div>

                            {/* TABS */}
                            <div className="flex bg-gray-100 p-1 rounded-full mb-8 relative">
                                <button
                                    onClick={() => setActiveTab("password")}
                                    className={`flex-1 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 relative z-10 ${activeTab === "password" ? "text-white" : "text-gray-500"
                                        }`}
                                >
                                    Via Password
                                </button>
                                <button
                                    onClick={() => setActiveTab("otp")}
                                    className={`flex-1 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 relative z-10 ${activeTab === "otp" ? "text-white" : "text-gray-500"
                                        }`}
                                >
                                    Via OTP
                                </button>
                                {/* Sliding Pill Background */}
                                <motion.div
                                    animate={{ x: activeTab === "password" ? "0%" : "100%" }}
                                    className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#E2136E] rounded-full shadow-md"
                                />
                            </div>

                            <div className="space-y-5">
                                {activeTab === "password" ? (
                                    <>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email / Phone</label>
                                            <input
                                                type="text"
                                                placeholder="example@gmail.com"
                                                className="w-full border-2 border-gray-100 rounded-xl p-3.5 mt-1 outline-none focus:border-[#E2136E] transition-all bg-gray-50"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center ml-1">
                                                <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
                                                <button className="text-[11px] text-[#E2136E] font-bold hover:underline">Forgot?</button>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    className="w-full border-2 border-gray-100 rounded-xl p-3.5 mt-1 outline-none focus:border-[#E2136E] transition-all bg-gray-50"
                                                />
                                                <button
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-bold border-r pr-2">+880</span>
                                            <input
                                                type="tel"
                                                placeholder="1XXXXXXXXX"
                                                className="w-full border-2 border-gray-100 rounded-xl p-3.5 pl-16 mt-1 outline-none focus:border-[#E2136E] transition-all bg-gray-50"
                                            />
                                        </div>
                                    </div>
                                )}

                                <button className="w-full bg-[#E2136E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#c4115f] transition-all shadow-lg shadow-pink-200 active:scale-[0.98]">
                                    {activeTab === "password" ? <LogIn size={20} /> : <Smartphone size={20} />}
                                    {activeTab === "password" ? "Sign In" : "Send OTP"}
                                </button>

                                <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-gray-100"></div>
                                    <span className="flex-shrink mx-4 text-gray-300 text-xs font-medium uppercase tracking-widest">or</span>
                                    <div className="flex-grow border-t border-gray-100"></div>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <button className="w-full border-2 border-gray-100 py-3 rounded-xl font-semibold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-[0.98]">
                                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                                        Google
                                    </button>

                                    <button className="w-full bg-[#FF7A00] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e66e00] transition-all shadow-lg shadow-orange-100 active:scale-[0.98]">
                                        <UserPlus size={20} /> Create New Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}