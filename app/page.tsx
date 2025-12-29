"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Users,
  Globe,
  Zap,
  Star,
  Scroll,
  Sword,
  Sparkles,
  ShieldCheck,
  Crown,
  Trophy,
  Clock,
  Medal,
  User,
  TrendingUp,
  Award,
  Flame,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/components/sections/Home";
import Description from "@/components/sections/Description";
import Ranks from "@/components/sections/Ranks";
import Leaderboards from "@/components/sections/Leaderboards";
import Staff from "@/components/sections/Staff";
import Contact from "@/components/sections/Contact";

export default function TailwindOnlyMinecraft() {
  return (
    <div className="min-h-screen bg-[#020202] text-zinc-400 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* --- VIVID BACKGROUND DECOR --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[50%] bg-yellow-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] brightness-50" />
      </div>
      <Navbar />
      <HomeSection />
      <Description />
      <Ranks />
      <Leaderboards />
      <Staff />
      <Contact />
      <footer className="py-20 px-6 border-t border-white/5 text-center bg-[#010101]">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 italic">
          Voracity MC &copy; 2025.
        </p>
      </footer>
    </div>
  );
}
