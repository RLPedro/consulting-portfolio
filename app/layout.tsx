/* ===================================================================
app/layout.tsx
=================================================================== */


import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Bruma Consultancy",
description: "Digital consultancy portfolio website",
};


export default function RootLayout({
  children,
  }: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#0e0f11] text-gray-200 antialiased`}>{children}</body>
    </html>
  );
}