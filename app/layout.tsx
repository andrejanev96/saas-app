import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Your App Name",
    description: "Your app description",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
        <Navbar />
        {children}
        </body>
        </html>
    );
}