import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainNavbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon Room",
  description: "Freedom to choose your own room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainNavbar />
          <main className="flex flex-col gap-5 justify-center m-7 md:mx-[100px]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
