"use client";
import React, { useState } from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { MapPin, Home, Building2, Plus, ChevronDown, Trash2, Edit2 } from "lucide-react";

export default function AddressesPage() {
    const [showForm, setShowForm] = useState(false);
    const [addressLabel, setAddressLabel] = useState("Home");

    return (
        <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

                    <ProfileSidebar />

                    <div className="flex-1">
                        {/* Header */}
                        <div className="mb-6 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm border border-pink-100">
                                    <MapPin className="w-6 h-6 text-govaly-pink" />
                                </div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">My Addresses</h1>
                                    <p className="text-[12px] md:text-sm text-govaly-pink font-medium opacity-70">
                                        Manage your shipping addresses
                                    </p>
                                </div>
                            </div>

                            {!showForm && (
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="flex items-center gap-2 px-4 py-2 bg-govaly-pink text-white rounded-xl font-bold text-sm shadow-md hover:bg-govaly-pink-dark transition-all cursor-pointer"
                                >
                                    <Plus className="w-4 h-4" /> Add New
                                </button>
                            )}
                        </div>

                        {/* ADDRESS FORM SECTION */}
                        {showForm ? (
                            <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                                    {/* Left Column */}
                                    <div className="space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                            <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input type="tel" defaultValue="01929190241" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700">Address <span className="text-red-500">*</span></label>
                                            <input type="text" placeholder="Building / House No / Floor / Street" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700">Additional Instruction</label>
                                            <input type="text" placeholder="Enter additional instruction (optional)" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-govaly-pink outline-none transition-all text-sm" />
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-5">
                                        <div className="space-y-1.5 relative">
                                            <label className="text-sm font-bold text-gray-700">Division</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 appearance-none focus:border-govaly-pink outline-none text-sm text-gray-500">
                                                <option>-- Please choose your division --</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 bottom-3.5 w-4 h-4 text-gray-400" />
                                        </div>

                                        <div className="space-y-1.5 relative">
                                            <label className="text-sm font-bold text-gray-700">City / District <span className="text-red-500">*</span></label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 appearance-none focus:border-govaly-pink outline-none text-sm text-gray-500">
                                                <option>-- Please choose your district --</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 bottom-3.5 w-4 h-4 text-gray-400" />
                                        </div>

                                        <div className="space-y-1.5 relative">
                                            <label className="text-sm font-bold text-gray-700">Police Station / Upazila</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 appearance-none focus:border-govaly-pink outline-none text-sm text-gray-500">
                                                <option>-- Please choose your area --</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 bottom-3.5 w-4 h-4 text-gray-400" />
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm font-bold text-gray-700">Select a label for effective delivery:</p>
                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setAddressLabel("Home")}
                                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border font-bold transition-all cursor-pointer ${addressLabel === "Home" ? "bg-govaly-pink text-white border-govaly-pink" : "border-govaly-pink text-govaly-pink bg-white"}`}
                                                >
                                                    <Home className="w-4 h-4" /> Home
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setAddressLabel("Office")}
                                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border font-bold transition-all cursor-pointer ${addressLabel === "Office" ? "bg-govaly-pink text-white border-govaly-pink" : "border-govaly-pink text-govaly-pink bg-white"}`}
                                                >
                                                    <Building2 className="w-4 h-4" /> Office
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 pt-2">
                                            <input type="checkbox" id="default" className="w-5 h-5 accent-govaly-orange cursor-pointer" />
                                            <label htmlFor="default" className="text-sm font-bold text-govaly-orange cursor-pointer bg-govaly-orange/5 px-3 py-1 rounded-lg">
                                                Make it default address
                                            </label>
                                        </div>
                                    </div>

                                    {/* Form Buttons */}
                                    <div className="md:col-span-2 grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-gray-50">
                                        <button className="py-3 bg-govaly-pink text-white rounded-xl font-bold hover:bg-govaly-pink-dark transition-all cursor-pointer">
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="py-3 bg-white border border-govaly-pink text-govaly-pink rounded-xl font-bold hover:bg-govaly-light-pink transition-all cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            /* ADDRESS LIST (Default State) */
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SavedAddressCard isDefault={true} label="Home" name="Junaed Ahmed" phone="01929190241" address="House 24, Block C, Banani, Dhaka" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Internal Component for Saved Addresses
function SavedAddressCard({ isDefault, label, name, phone, address }: any) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm relative group">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase bg-govaly-pink text-white px-2 py-0.5 rounded">
                        {label}
                    </span>
                    {isDefault && (
                        <span className="text-[10px] font-bold uppercase bg-govaly-orange text-white px-2 py-0.5 rounded">
                            Default
                        </span>
                    )}
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-govaly-pink transition-colors cursor-pointer"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                </div>
            </div>
            <h3 className="font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mt-1">{phone}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{address}</p>
        </div>
    );
}