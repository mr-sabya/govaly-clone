"use client";
import React, { useState } from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { Settings, Lock, Eye, EyeOff, Bell, ShieldCheck, Save, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
    const [showPassword, setShowPassword] = useState({ old: false, new: false, confirm: false });
    const [isSaved, setIsSaved] = useState(false);

    const toggleVisibility = (field: "old" | "new" | "confirm") => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handlePasswordReset = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    
                    <ProfileSidebar />

                    <div className="flex-1 space-y-6">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm border border-pink-100">
                                    <Settings className="w-6 h-6 text-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Settings</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        Manage your security and notification preferences
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* --- PASSWORD RESET SECTION --- */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                            <div className="p-5 border-b border-gray-50 bg-gray-50/30 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-govaly-pink" />
                                <h2 className="font-bold text-gray-800">Security & Password</h2>
                            </div>
                            
                            <form onSubmit={handlePasswordReset} className="p-6 md:p-8 space-y-6">
                                <div className="max-w-md space-y-5">
                                    {/* Old Password */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Current Password</label>
                                        <div className="relative">
                                            <input 
                                                type={showPassword.old ? "text" : "password"} 
                                                placeholder="••••••••" 
                                                className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" 
                                            />
                                            <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                            <button type="button" onClick={() => toggleVisibility('old')} className="absolute right-4 top-3.5 text-gray-400 hover:text-govaly-pink transition-colors cursor-pointer">
                                                {showPassword.old ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* New Password */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">New Password</label>
                                        <div className="relative">
                                            <input 
                                                type={showPassword.new ? "text" : "password"} 
                                                placeholder="••••••••" 
                                                className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" 
                                            />
                                            <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                            <button type="button" onClick={() => toggleVisibility('new')} className="absolute right-4 top-3.5 text-gray-400 hover:text-govaly-pink transition-colors cursor-pointer">
                                                {showPassword.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Confirm New Password</label>
                                        <div className="relative">
                                            <input 
                                                type={showPassword.confirm ? "text" : "password"} 
                                                placeholder="••••••••" 
                                                className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" 
                                            />
                                            <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                            <button type="button" onClick={() => toggleVisibility('confirm')} className="absolute right-4 top-3.5 text-gray-400 hover:text-govaly-pink transition-colors cursor-pointer">
                                                {showPassword.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <button className="px-8 py-3 bg-govaly-pink text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-govaly-pink/20 hover:bg-govaly-pink-dark transition-all active:scale-95 cursor-pointer">
                                            Update Password
                                        </button>
                                        {isSaved && (
                                            <div className="mt-3 flex items-center gap-2 text-green-600 font-bold text-sm animate-bounce">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Password reset successfully!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* --- NOTIFICATION SETTINGS --- */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                             <div className="p-5 border-b border-gray-50 bg-gray-50/30 flex items-center gap-2">
                                <Bell className="w-5 h-5 text-govaly-pink" />
                                <h2 className="font-bold text-gray-800">Notifications</h2>
                            </div>
                            <div className="p-6 space-y-6">
                                <NotificationToggle 
                                    title="Email Notifications" 
                                    desc="Receive updates about your orders and promotional offers via email."
                                    defaultChecked={true}
                                />
                                <NotificationToggle 
                                    title="SMS Notifications" 
                                    desc="Get instant SMS alerts for delivery updates."
                                    defaultChecked={false}
                                />
                                <NotificationToggle 
                                    title="Order Updates" 
                                    desc="Be notified when your order is packed, shipped, or delivered."
                                    defaultChecked={true}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Internal Component for Toggles ---
function NotificationToggle({ title, desc, defaultChecked }: { title: string, desc: string, defaultChecked: boolean }) {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-50 bg-gray-50/20">
            <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800">{title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
            </div>
            <button 
                onClick={() => setChecked(!checked)}
                className={`w-12 h-6 rounded-full transition-all relative cursor-pointer ${checked ? "bg-govaly-pink" : "bg-gray-200"}`}
            >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${checked ? "left-7" : "left-1"}`} />
            </button>
        </div>
    );
}