"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
    const router = useRouter();
    const [isFocused, setIsFocused] = useState(false);

    // Handle form submission
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        // Navigate to a specific page based on the entered name
        if (name) {
            // Map search terms to pages
            const searchRoutes: { [key: string]: string } = {
                "phone cases": "/phone_cases",
                "wireless chargers": "/wireless_chargers",
                "wireless headphones": "/wireless_headphones",
                "screen protectors": "/screen_protectors",
                "clear phone cases": "/clear_phone_cases",
                "fast chargers": "/fast_chargers",
            };

            // Check if the entered name matches any route
            const route = searchRoutes[name.toLowerCase()];
            if (route) {
                router.push(route);
            } else {
                // Redirect to a generic search page if no match is found
                router.push(`/list?name=${encodeURIComponent(name)}`);
            }
        }
    }

    return (
        <form
            className={`flex items-center gap-3 bg-white rounded-full px-4 py-2 w-full max-w-md transition-all duration-200 border-2 ${
                isFocused ? "border-[#F35C7A] shadow-md" : "border-gray-200"
            }`}
            onSubmit={handleSearch}
        >
            <Search 
                className={`w-5 h-5 transition-colors duration-200 ${
                    isFocused ? "text-[#F35C7A]" : "text-gray-400"
                }`}
            />
            <input
                type="text"
                name="name"
                placeholder="Search for accessories..."
                className="flex-1 bg-transparent outline-none text-sm"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <button
                type="submit"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isFocused
                        ? "bg-[#F35C7A] text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;