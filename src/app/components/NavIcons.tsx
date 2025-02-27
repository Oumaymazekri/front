"use client"
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            {/* Icône de profil */}
            <div className="relative">
                <svg
                    className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900"
                    onClick={handleProfile}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                {isProfileOpen && (
                    <div className="absolute top-10 right-0 p-4 rounded-md text-sm shadow-lg bg-white z-20 min-w-[120px]">
                        <Link href="/profile" className="block py-2 hover:text-gray-600">
                            Profile
                        </Link>
                        <div className="mt-2 cursor-pointer py-2 hover:text-gray-600">
                            Logout
                        </div>
                    </div>
                )}
            </div>

            {/* Icône de notification */}
            <div className="cursor-pointer">
                <svg
                    className="w-6 h-6 text-gray-700 hover:text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            </div>

            {/* Icône du panier */}
            <div className="relative cursor-pointer" onClick={handleCartClick}>
                <svg
                    className="w-6 h-6 text-gray-700 hover:text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                {/* Badge de quantité dans le panier */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#F35C7A] rounded-full text-white text-xs flex items-center justify-center">
                    2
                </div>
            </div>

            {/* Modal du panier */}
            {isCartOpen && (
                <div className="absolute top-10 right-0 z-20">
                    <CartModal />
                </div>
            )}
        </div>
    );
};

export default NavIcons;