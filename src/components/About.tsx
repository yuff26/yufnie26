"use client";

import Navbar from "../components/Navbar";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiVercel,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Navbar />

      {/* Kotak utama konten */}
      <div
        style={{
          marginTop: "150px",
          maxWidth: "750px",
          marginInline: "auto",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "2.5rem",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#00bcd4",
          }}
        >
          About Me 👨‍💻
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          Halo! Aku <strong>Yufsidi</strong> — seorang mahasiswa yang tertarik
          dengan dunia <strong>teknologi</strong>, <strong>UI/UX Design</strong>,
          dan <strong>pengembangan web modern</strong>.  
          Aku senang membuat hal-hal yang bermanfaat dan interaktif untuk orang
          lain. Saat ini aku sedang belajar <strong>Next.js</strong> dan mencoba
          membangun proyek pribadi seperti <strong>Snack AR</strong> dan website
          portfolio ini.
        </p>

        <p style={{ fontSize: "1.1rem", marginTop: "1.5rem", lineHeight: "1.8" }}>
          Selain ngoding, aku juga suka berbagi ilmu dan membantu teman-teman
          yang kesulitan. Prinsipku sederhana:{" "}
          <em>“Kalau aku bisa bantu, ya aku bantu.”</em> 😄  
          Tujuanku ke depan adalah menjadi seseorang yang bisa
          menggabungkan <strong>desain</strong> dan <strong>teknologi</strong>{" "}
          untuk menciptakan pengalaman digital yang keren dan berguna.
        </p>

        {/* Deretan icon skill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "3rem",
          }}
        >
          <SiHtml5 size={45} color="#E34F26" title="HTML5" />
          <SiNodedotjs size={45} color="#68A063" title="Node.js" />
          <SiNextdotjs size={45} color="#ffffff" title="Next.js" />
          <SiTailwindcss size={45} color="#38BDF8" title="Tailwind CSS" />
          <SiFigma size={45} color="#F24E1E" title="Figma" />
          <SiVercel size={45} color="#ffffff" title="Vercel" />
        </div>
      </div>
    </div>
  );
}
