"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(3px)",
            zIndex: 0,
          }}
        ></div>

        <div style={{ zIndex: 1, maxWidth: "650px", padding: "1rem" }}>
          <img
            src="/profil.jpg"
            alt="Foto Profil"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(255,255,255,0.6)",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              marginBottom: "1rem",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />

          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Hi, I'm Yufsidi 👋
          </h1>

          <p
            style={{
              fontSize: "1rem",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Kalau kamu minta tolong dan aku bisa, ya aku bantu 😋 <br />
            Passionate in <strong>technology</strong>, <strong>UI/UX</strong>, and{" "}
            <strong>education</strong>. <br />
            Currently learning <strong>Next.js</strong> and building{" "}
            <strong>modern web apps</strong>.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="mailto:yufsidi@example.com"
              style={{
                display: "inline-block",
                padding: "0.6rem 1.4rem",
                color: "white",
                backgroundColor: "#3b82f6",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
            >
              Email Me
            </a>

            {/* Tombol ke halaman Projects */}
            <Link
              href="/projects"
              style={{
                display: "inline-block",
                padding: "0.6rem 1.4rem",
                color: "white",
                backgroundColor: "#10b981",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
            >
              Open Projects
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Contact />
    </main>
  );
}
