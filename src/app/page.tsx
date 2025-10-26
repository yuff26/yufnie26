"use client";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Navbar selalu tampil di atas */}
      <Navbar />

      {/* Konten utama */}
      <div style={{ marginTop: "180px" }}>
        <img
          src="/profil.jpg"
          alt="profile"
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            border: "3px solid white",
            marginBottom: "1rem",
            objectFit: "cover",
          }}
        />

        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Hi, I'm Yufsidi 👋
        </h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          Kalau kamu minta tolong dan aku bisa, ya aku bantu 😄
          <br />
          Passionate in <strong>technology</strong>, <strong>UI/UX</strong>, and{" "}
          <strong>education</strong>.
          <br />
          Currently learning <strong>Next.js</strong> and building{" "}
          <strong>modern web apps</strong>.
        </p>

        <a
          href="mailto:yufsidi@example.com"
          style={{
            display: "inline-block",
            background: "#007bff",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "5px",
            textDecoration: "none",
            marginTop: "1rem",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#0056b3")
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = "#007bff")}
        >
          Email Me
        </a>
      </div>
    </div>
  );
}
