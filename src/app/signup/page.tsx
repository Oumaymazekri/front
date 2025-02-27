"use client";
import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
    const [formData, setFormData] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Define the event type explicitly
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Check if passwords match
        if (formData.Password !== formData.ConfirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    FullName: formData.FullName,
                    Email: formData.Email,
                    Password: formData.Password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "An error occurred during registration.");
            } else {
                setSuccess("Registration successful! You can now log in.");
                setFormData({
                    FullName: "",
                    Email: "",
                    Password: "",
                    ConfirmPassword: "",
                });
            }
        } catch (error) {
            setError("Failed to connect to the server. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="mb-4">
                        <label htmlFor="FullName" className="block text-gray-600 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="FullName"
                            value={formData.FullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-600 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="Password" className="block text-gray-600 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4">
                        <label htmlFor="ConfirmPassword" className="block text-gray-600 font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="ConfirmPassword"
                            value={formData.ConfirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium rounded-md bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-pink-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;