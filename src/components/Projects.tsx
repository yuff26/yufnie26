"use client";

import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "4rem 1rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>My Projects</h2>
      <p
        style={{
          maxWidth: "600px",
          margin: "1rem auto",
          fontSize: "1.1rem",
          opacity: 0.9,
        }}
      >
        Beberapa project yang pernah saya buat akan ditampilkan di sini.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#1f2937",
            borderRadius: "12px",
            padding: "1.5rem",
            width: "280px",
            boxShadow: "0 0 10px rgba(255,255,255,0.1)",
          }}
        >
          <h3>To-Do List App</h3>
          <p>A simple yet powerful task management web app.</p>
        </div>

        <div
          style={{
            backgroundColor: "#1f2937",
            borderRadius: "12px",
            padding: "1.5rem",
            width: "280px",
            boxShadow: "0 0 10px rgba(255,255,255,0.1)",
          }}
        >
          <h3>Portfolio Web</h3>
          <p>My personal portfolio built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
