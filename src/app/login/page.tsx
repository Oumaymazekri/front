"use client"; // Marque le composant comme un composant côté client

import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Email: formData.Email,
                    Password: formData.Password, // Le modèle exige "Password"
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Invalid email or password.");
            } else {
                const data = await response.json();
                setSuccess("Login successful!");
                console.log("User data:", data); // Utilisez cette ligne pour gérer le rôle ou le jeton utilisateur
                setFormData({
                    Email: "",
                    Password: "",
                });
            }
        } catch (error) {
            setError("Failed to connect to the server. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end mb-4">
                        <Link href="/Password" className="text-sm text-pink-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium rounded-md bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-pink-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;