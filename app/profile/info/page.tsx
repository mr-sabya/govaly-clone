"use client";
import React, { useState } from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { User, Camera, Mail, Phone, Calendar, Save, CheckCircle2 } from "lucide-react";

export default function AccountInfoPage() {
    const [gender, setGender] = useState("Female");
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

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
                                    <User className="w-6 h-6 text-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Account Information</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        Update your personal details and profile
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT CARD */}
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                            <form onSubmit={handleSave} className="p-6 md:p-10">

                                {/* Profile Picture Upload Section */}
                                <div className="flex flex-col items-center mb-10">
                                    <div className="relative group">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-govaly-light-pink border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                                            {/* Placeholder icon or User Image */}
                                            <User className="w-12 h-12 md:w-16 md:h-16 text-govaly-pink/30" />
                                        </div>
                                        <label className="absolute bottom-1 right-1 bg-govaly-pink p-2 rounded-full text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                            <Camera className="w-4 h-4 md:w-5 md:h-5" />
                                            <input type="file" className="hidden" accept="image/*" />
                                        </label>
                                    </div>
                                    <p className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Change Profile Photo</p>
                                </div>

                                {/* Form Fields Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Full Name */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input type="text" placeholder="Enter your full name" defaultValue="Junaed Ahmed" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                            <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Phone Number - Usually read-only for security */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                        <div className="relative opacity-70">
                                            <input type="tel" readOnly defaultValue="01929190241" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-100 outline-none text-sm cursor-not-allowed" />
                                            <Phone className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input type="email" placeholder="example@mail.com" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                            <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                        <div className="relative">
                                            <input type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm text-gray-600" />
                                            <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Gender Selection - Toggle Style */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-sm font-bold text-gray-700">Gender</label>
                                        <div className="flex gap-4">
                                            {["Male", "Female", "Other"].map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => setGender(item)}
                                                    className={`px-8 py-2.5 rounded-xl border font-bold text-sm transition-all cursor-pointer ${gender === item
                                                            ? "bg-govaly-pink text-white border-govaly-pink shadow-md"
                                                            : "bg-white text-govaly-pink border-govaly-pink/20 hover:border-govaly-pink"
                                                        }`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Save Button Section */}
                                <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col items-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-64 py-3.5 bg-govaly-pink text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-govaly-pink/20 hover:bg-govaly-pink-dark transition-all active:scale-95 cursor-pointer"
                                    >
                                        <Save className="w-5 h-5" />
                                        Update Information
                                    </button>

                                    {isSaved && (
                                        <div className="mt-4 flex items-center gap-2 text-green-600 font-bold text-sm animate-in fade-in zoom-in duration-300">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Profile updated successfully!
                                        </div>
                                    )}
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}