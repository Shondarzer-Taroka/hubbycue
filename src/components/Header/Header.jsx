

// // final code


'use client';
import React, { useState } from 'react';
import {
    FaSearch,
    FaBookmark,
    FaBell,
    FaShoppingCart,
    FaBars,
} from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
    const [mobileHobbiesOpen, setMobileHobbiesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between h-[70px] px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 border-2 border-purple-500 rounded">
                        <span className="text-cyan-500 font-bold text-xl">h</span>
                    </div>
                    <div className="ml-2">
                        <h1 className="text-lg md:text-xl font-semibold text-purple-600">hobbycue</h1>
                        <p className="text-sm text-gray-500 hidden sm:block">Your Hobby, Your Community</p>
                    </div>
                </div>

                {/* Search Bar for Larger Screens */}
                <div className="hidden md:flex items-center space-x-6 w-1/3">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                        />
                        <button className="absolute top-2 right-2 text-purple-600">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Navigation for Larger Screens */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Explore Dropdown */}
                    <div className="relative group">
                        <button className="text-gray-600 py-5 hover:text-purple-600 font-medium flex items-center">
                            <span className="mr-2">Explore</span>
                            <span className="text-lg">&#9662;</span>
                        </button>
                        <div className="absolute left-0 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">People - Community</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Places - Venues</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Programs - Events</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Products - Store</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Blogs</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hobbies Dropdown */}
                    <div className="relative group">
                        <button className="text-gray-600 py-5 hover:text-purple-600 font-medium flex items-center">
                            <span className="mr-2">Hobbies</span>
                            <span className="text-lg">&#9662;</span>
                        </button>
                        <div className="absolute left-0 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Photography</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Writing</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Travel</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Gaming</li>
                                <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Music</li>
                            </ul>
                        </div>
                    </div>

                    <FaBookmark className="text-gray-600 hover:text-purple-600 cursor-pointer" />
                    <FaBell className="text-gray-600 hover:text-purple-600 cursor-pointer" />
                    <FaShoppingCart className="text-gray-600 hover:text-purple-600 cursor-pointer" />

                    <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white">
                        Sign In
                    </button>
                </div>

                {/* Icons for Mobile and Tablet */}
                <div className="md:hidden flex items-center space-x-4">
                    <FaSearch className="text-purple-600 text-lg cursor-pointer" />
                    <FaBell className="text-purple-600 text-lg cursor-pointer" />
                    <FaBars
                        className="text-purple-600 text-lg cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg py-4">
                    <ul className="space-y-4 px-4">
                        <li>
                            <button
                                onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                                className="w-full text-left text-gray-600 hover:text-purple-600 cursor-pointer"
                            >
                                Explore
                            </button>
                            {mobileExploreOpen && (
                                <ul className="ml-4 space-y-2">
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">People - Community</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Places - Venues</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Programs - Events</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Products - Store</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Blogs</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => setMobileHobbiesOpen(!mobileHobbiesOpen)}
                                className="w-full text-left text-gray-600 hover:text-purple-600 cursor-pointer"
                            >
                                Hobbies
                            </button>
                            {mobileHobbiesOpen && (
                                <ul className="ml-4 space-y-2">
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Photography</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Writing</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Travel</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Gaming</li>
                                    <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Music</li>
                                </ul>
                            )}
                        </li>
                        <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Bookmarks</li>
                        <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Notifications</li>
                        <li className="text-gray-600 hover:text-purple-600 cursor-pointer">Cart</li>
                        <li>
                            <button className="w-full px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white">
                                Sign In
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
