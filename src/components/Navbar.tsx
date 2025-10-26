"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "1rem",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        backdropFilter: "blur(6px)",
      }}
    >
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          style={{
            background: "#222",
            color: "white",
            padding: "0.5rem 1.2rem",
            borderRadius: "0.3rem",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#00bcd4")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#222")}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
