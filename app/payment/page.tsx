"use client";
import React, { useState } from "react";
import { ChevronLeft, Banknote, CreditCard, Check } from "lucide-react";
import Link from "next/link";

export default function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' or 'online'

    return (
        <div className="min-h-screen bg-govaly-light-pink pb-20">
            {/* --- HEADER --- */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
                <Link href="/checkout" className="text-gray-800 hover:text-govaly-pink transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-xl font-bold text-gray-800">Payment</h1>
            </div>

            {/* --- PROGRESS STEPPER (Step 4 Active) --- */}
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <div className="relative flex justify-between items-center max-w-5xl mx-auto">
                    {/* Background Line */}
                    <div className="absolute top-5 left-0 w-full h-1 bg-govaly-pink z-0" />

                    {[
                        { step: 1, label: "Shopping" },
                        { step: 2, label: "Cart" },
                        { step: 3, label: "Checkout" },
                        { step: 4, label: "Payment" }
                    ].map((item) => (
                        <div key={item.step} className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md bg-govaly-pink transition-colors">
                                {item.step}
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase text-gray-800">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* LEFT SECTION: PAYMENT METHODS */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-lg font-bold text-gray-900">Choose Payment Method</h2>
                        
                        <div className="space-y-3">
                            {/* Cash on Delivery Option */}
                            <label 
                                onClick={() => setPaymentMethod("cod")}
                                className={`relative flex items-center justify-between p-4 bg-white rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === "cod" ? "border-govaly-pink shadow-sm" : "border-white"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "cod" ? "border-govaly-pink" : "border-gray-300"}`}>
                                        {paymentMethod === "cod" && <div className="w-2.5 h-2.5 rounded-full bg-govaly-pink" />}
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm md:text-base">Cash on Delivery</span>
                                </div>
                                <Banknote className="w-6 h-6 text-gray-800" />
                            </label>

                            {/* Online Payment Option */}
                            <label 
                                onClick={() => setPaymentMethod("online")}
                                className={`relative flex items-center justify-between p-4 bg-white rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === "online" ? "border-govaly-pink shadow-sm" : "border-white"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "online" ? "border-govaly-pink" : "border-gray-300"}`}>
                                        {paymentMethod === "online" && <div className="w-2.5 h-2.5 rounded-full bg-govaly-pink" />}
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm md:text-base">Online Payment</span>
                                </div>
                                
                                {/* Payment Logos Mockup */}
                                <div className="flex items-center gap-2">
                                    <img src="https://admin.govaly.com.bd/storage/payment_icon/bkash.png" alt="bkash" className="h-4 md:h-5" />
                                    <img src="https://admin.govaly.com.bd/storage/payment_icon/nagad.png" alt="nagad" className="h-4 md:h-5" />
                                    <img src="https://admin.govaly.com.bd/storage/payment_icon/visa.png" alt="visa" className="h-4 md:h-5" />
                                    <img src="https://admin.govaly.com.bd/storage/payment_icon/mastercard.png" alt="mastercard" className="h-4 md:h-5" />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* RIGHT SECTION: SUMMARY */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden sticky top-6">
                            <div className="p-4 border-b border-gray-50">
                                <h2 className="font-extrabold text-gray-800">Summary</h2>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Sub Total</p>
                                        <p className="text-[11px] text-gray-400 font-medium">1 item+ Shipping Fee</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">৳749.00</span>
                                </div>

                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Total Amount</span>
                                    <span className="text-lg font-black text-gray-900">৳749.00</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-govaly-pink text-white font-black text-lg shadow-lg shadow-govaly-pink/20 hover:bg-govaly-pink-dark transition-all active:scale-[0.98] cursor-pointer">
                                Confirm Order
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}