"use client";
import React from "react";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import { 
  PhoneCall, 
  MessageSquare, 
  Users, 
  Ticket, 
  HelpCircle, 
  ChevronRight, 
  Headphones 
} from "lucide-react";

export default function HelplinePage() {
  return (
    <div className="min-h-screen bg-govaly-light-pink pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          <ProfileSidebar />

          <div className="flex-1">
            {/* --- HEADER --- */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-govaly-pink rounded-lg">
                    <Headphones className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Govaly Helpline</h1>
              </div>
              <p className="text-sm md:text-base text-govaly-pink font-medium opacity-90">
                Get assistance with your orders, account, and more
              </p>
            </div>

            {/* --- SUPPORT LIST --- */}
            <div className="space-y-4">
              
              {/* WhatsApp Support */}
              <SupportItem 
                icon={<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WA" />}
                title="Chat in Whatsapp"
                iconBg="bg-green-50"
                action={<ChevronRight className="w-5 h-5 text-gray-300" />}
              />

              {/* Direct Support */}
              <SupportItem 
                icon={<PhoneCall className="w-5 h-5 text-govaly-pink" />}
                title="Direct Support"
                iconBg="bg-pink-50"
                action={<span className="font-bold text-gray-900 text-sm md:text-base">Hotline: 8801969901212</span>}
              />

              {/* Ticket Support */}
              <SupportItem 
                icon={<Ticket className="w-5 h-5 text-blue-500" />}
                title="Ticket Support"
                iconBg="bg-blue-50"
                action={<ChevronRight className="w-5 h-5 text-gray-300" />}
              />

              {/* FAQ */}
              <SupportItem 
                icon={<HelpCircle className="w-5 h-5 text-orange-500" />}
                title="FAQ"
                iconBg="bg-orange-50"
                action={<ChevronRight className="w-5 h-5 text-gray-300" />}
              />

              {/* Community */}
              <SupportItem 
                icon={<Users className="w-5 h-5 text-govaly-pink" />}
                title="Community"
                iconBg="bg-pink-50"
                action={
                    <button className="px-6 py-2 border border-govaly-pink text-govaly-pink rounded-full text-sm font-bold hover:bg-govaly-pink hover:text-white transition-all">
                        Visit Community Group
                    </button>
                }
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- Internal Support Item Component ---
interface SupportItemProps {
    icon: React.ReactNode;
    title: string;
    iconBg: string;
    action: React.ReactNode;
}

function SupportItem({ icon, title, iconBg, action }: SupportItemProps) {
    return (
        <div className="bg-white p-4 md:p-5 rounded-2xl border border-pink-50 shadow-sm flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
                    {icon}
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base group-hover:text-govaly-pink transition-colors">
                    {title}
                </span>
            </div>
            
            <div className="flex items-center">
                {action}
            </div>
        </div>
    );
}