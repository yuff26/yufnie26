"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "6rem 1rem 4rem",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeIn 1s ease-in-out",
        backdropFilter: "brightness(0.8)",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
        }}
      >
        Contact Me
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          lineHeight: 1.7,
          color: "#e2e8f0",
        }}
      >
        Saya terbuka untuk kolaborasi, diskusi, atau proyek baru!  
        Kamu bisa menghubungi saya melalui email atau media sosial berikut.
      </p>

      <a
        href="mailto:yufsidiklg@gmail.com"
        style={{
          display: "inline-block",
          color: "#3b82f6",
          fontWeight: 600,
          fontSize: "1.1rem",
          textDecoration: "underline",
          marginBottom: "2rem",
          transition: "color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#60a5fa")}
        onMouseOut={(e) => (e.currentTarget.style.color = "#3b82f6")}
      >
        yufsidiklg@gmail.com
      </a>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        {[
          { icon: <FaGithub />, link: "https://github.com/yuff26" },
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaEnvelope />, link: "mailto:yufsidiklg@gmail.com" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "1.8rem",
              transition: "all 0.3s ease",
              textShadow: "0 0 6px rgba(255,255,255,0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.textShadow = "0 0 8px #3b82f6";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textShadow = "0 0 6px rgba(255,255,255,0)";
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
