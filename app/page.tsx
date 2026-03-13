"use client";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import HeroBanner from "./components/home/HeroBanner";
import LoginModal from "./components/layout/LoginModal";

export default function Home() {
    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <main className="min-h-screen">

            {/* Pass setLoginOpen to the banner so the "Log In" link works */}
            <HeroBanner onLoginClick={() => setLoginOpen(true)} />

            {/* REST OF YOUR CONTENT (Products, etc) */}
            <div className="container py-10">
                <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
                {/* Product Grid goes here */}
            </div>

            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        </main>
    );
}