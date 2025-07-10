"use client";

import Link from "next/link";
import { SlidersHorizontal, ChevronDown, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#4B0082] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-white text-[#4B0082] px-2 py-1 rounded-full font-bold">
              ●
            </span>{" "}
            Learning
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="flex  hover:text-yellow-400">
              Courses <ChevronDown size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Explore all
            </Link>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 items-center justify-center gap-x-2 mx-8 hidden md:flex">
          <input
            type="text"
            placeholder="Find your courses"
            className="w-full px-4   bg-[#5d2685] py-2 rounded-full text-sm text-gray-300 focus:outline-none"
          />
          <Search className="cursor-pointer" />
        </div>

        {/* Icons & Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-yellow-400 p-2 rounded-full text-[#4B0082] hover:bg-yellow-300">
            <SlidersHorizontal size={18} />
          </button>
          <Link
            href="/login"
            className="border border-yellow-400 text-yellow-400 px-4 py-1.5 rounded-full text-sm hover:bg-yellow-400 hover:text-[#4B0082] transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-yellow-400 text-[#4B0082] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
