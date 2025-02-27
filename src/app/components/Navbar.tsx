"use client"
import { useState } from 'react';
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Menu as MenuIcon, ShoppingBag } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="h-20 w-full relative bg-white shadow-sm">
            {/* Mobile view */}
            <div className="h-full flex items-center justify-between md:hidden px-4">
                {/* Left content: Logo and Title */}
                <Link href="/" className="flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-[#F35C7A]" />
                    <span className="text-2xl tracking-wide">T&O</span>
                </Link>

                {/* Right content: Menu icon for mobile */}
                <div className="flex items-center gap-4">
                    <button onClick={toggleMenu} className="p-1">
                        <MenuIcon className="w-6 h-6 text-gray-700 hover:text-gray-900" />
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-white w-full flex flex-col items-center gap-4 py-4 shadow-lg z-50 md:hidden">
                    <Link href="/" className="hover:text-[#F35C7A] transition-colors">Homepage</Link>
                    <Link href="/shop" className="hover:text-[#F35C7A] transition-colors">Shop</Link>
                    <Link href="/about" className="hover:text-[#F35C7A] transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-[#F35C7A] transition-colors">Contact</Link>
                </div>
            )}

            {/* Desktop view */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full px-8 lg:px-16 xl:px-24">
                {/* Left content: Logo and Links */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <ShoppingBag className="w-8 h-8 text-[#F35C7A]" />
                        <span className="text-2xl tracking-wide">T&O</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden xl:flex gap-6">
                        <Link href="/" className="hover:text-[#F35C7A] transition-colors">Homepage</Link>
                        <Link href="/shop" className="hover:text-[#F35C7A] transition-colors">Shop</Link>
                        <Link href="/about" className="hover:text-[#F35C7A] transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-[#F35C7A] transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Center content: SearchBar and NavIcons */}
                <div className="flex items-center justify-end gap-8 flex-1">
                    <SearchBar />
                    <NavIcons />
                </div>

                {/* Right content: Login/Signup Buttons */}
                <div className="flex gap-4">
                    <Link href="/login">
                        <button className="px-4 py-2 text-white font-medium rounded-md bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 transition-all duration-300">
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-4 py-2 text-white font-medium rounded-md bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 transition-all duration-300">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;