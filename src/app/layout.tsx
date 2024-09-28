import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500`}
        >
        <Header/>
        {children}
        </body>
        </html>
    );
}
