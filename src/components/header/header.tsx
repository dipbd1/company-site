"use client"

import { useState} from "react";
import Link from "next/link";
import data from "@/config/site-data.en";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-background">
            <div className="flex items-center mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-black">
                    {data.company.name}
                </Link>
            </div>
            <div className="md:hidden">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                    Menu
                </button>
            </div>
            <nav className={`flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ${isDropdownOpen ? 'flex' : 'hidden'} md:flex text-black`}>
                <Link
                    href="/"
                    className="text-sm font-medium text-muted-foreground hover:text-primary">
                    About
                </Link>
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                    Services
                </Link>
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                    Products
                </Link>
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                    Blog
                </Link>
                <button className="text-sm font-medium text-muted-foreground hover:text-primary">
                    Contact
                </button>
            </nav>
        </header>
    );
}