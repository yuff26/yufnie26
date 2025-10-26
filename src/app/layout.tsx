import "./globals.css";
import Navbar from "../components/Navbar";
import AnimatedLayout from "../components/AnimatedLayout";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Yufsidi Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen text-white animate-fadeIn bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        {/* Overlay untuk gelap lembut */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        {/* Overlay gradasi tambahan */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-0" />

        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <div className="relative z-10 pt-24 pb-16">
          <AnimatedLayout>{children}</AnimatedLayout>
        </div>
      </body>
    </html>
  );
}
