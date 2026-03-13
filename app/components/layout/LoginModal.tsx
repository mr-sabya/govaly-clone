"use client";
import { X, LogIn, UserPlus, Eye } from "lucide-react";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-[450px] rounded-xl relative overflow-hidden">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-black"><X /></button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

                    {/* Tabs */}
                    <div className="flex bg-govaly-light-pink p-1 rounded-full mb-6">
                        <button className="flex-1 bg-white text-govaly-pink py-2 rounded-full font-semibold shadow-sm text-sm">Via Password</button>
                        <button className="flex-1 text-gray-600 py-2 rounded-full text-sm">Via OTP</button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Email / Phone Number</label>
                            <input type="text" placeholder="Enter your email or phone number" className="w-full border rounded-lg p-3 mt-1 outline-none focus:border-govaly-pink" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <div className="relative">
                                <input type="password" placeholder="Enter your password" className="w-full border rounded-lg p-3 mt-1 outline-none focus:border-govaly-pink" />
                                <Eye className="absolute right-3 top-4 text-gray-400 w-5 h-5 cursor-pointer" />
                            </div>
                        </div>

                        <button className="w-full bg-govaly-pink text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90">
                            <LogIn className="w-5 h-5" /> Log In
                        </button>

                        <p className="text-center text-govaly-pink font-semibold cursor-pointer text-sm">Forgot Password?</p>

                        <div className="flex items-center gap-2 text-gray-300 py-2">
                            <hr className="flex-1" /> <span className="text-gray-400 text-xs">or</span> <hr className="flex-1" />
                        </div>

                        <button className="w-full bg-govaly-orange text-white py-3 rounded-full font-bold flex items-center justify-center gap-2">
                            <UserPlus className="w-5 h-5" /> Create New Account
                        </button>

                        <button className="w-full border border-gray-200 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}