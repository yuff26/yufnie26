"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xrbobpzd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "20px",
          padding: "2rem 3rem",
          maxWidth: "650px",
          width: "90%",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            background: "linear-gradient(to right, #00ffff, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </h1>
        <p style={{ marginBottom: "1.5rem", color: "#ddd" }}>
          Feel free to reach out for collaborations, freelance work, or just a
          friendly chat 😊
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "8px",
                border: "none",
                marginTop: "5px",
                background: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "8px",
                border: "none",
                marginTop: "5px",
                background: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              rows={4}
              required
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "8px",
                border: "none",
                marginTop: "5px",
                background: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            ></textarea>
          </label>
          <button
            type="submit"
            style={{
              background: "linear-gradient(to right, #007bff, #00d4ff)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.8rem",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p
            style={{
              marginTop: "1rem",
              color: "#00ff99",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ✅ Message sent successfully! Thank you for reaching out.
          </p>
        )}
        {status === "error" && (
          <p
            style={{
              marginTop: "1rem",
              color: "#ff5555",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            alignItems: "center",
          }}
        >
          <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaPhoneAlt color="#00ff99" /> +62 819-9899-6690
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaLinkedin color="#0A66C2" />{" "}
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              style={{ color: "#0A66C2", textDecoration: "underline" }}
            >
              LinkedIn Profile
            </a>
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGithub color="#fff" />{" "}
            <a
              href="https://github.com/username"
              target="_blank"
              style={{ color: "#ccc", textDecoration: "underline" }}
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
