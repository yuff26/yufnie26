"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiVercel,
  SiGithub,
  SiCanva,
} from "react-icons/si";
import Navbar from "../../components/Navbar";

export default function About() {
  const skills = [
    { icon: <SiHtml5 color="#e34c26" />, title: "HTML5" },
    { icon: <SiCss3 color="#264de4" />, title: "CSS3" },
    { icon: <SiJavascript color="#f7df1e" />, title: "JavaScript" },
    { icon: <SiReact color="#61dafb" />, title: "React" },
    { icon: <SiNodedotjs color="#68a063" />, title: "Node.js" },
    { icon: <SiNextdotjs color="white" />, title: "Next.js" },
    { icon: <SiTailwindcss color="#38bdf8" />, title: "TailwindCSS" },
    { icon: <SiFigma color="#a259ff" />, title: "Figma" },
    { icon: <SiCanva color="#00c4cc" />, title: "Canva" },
    { icon: <SiGithub color="#ffffff" />, title: "GitHub" },
    { icon: <SiVercel color="white" />, title: "Vercel" },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <Navbar />

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "15px",
          padding: "2rem",
          width: "80%",
          margin: "100px auto 0 auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h1>
        <p style={{ marginBottom: "2rem" }}>
          I'm Yufsidi, a passionate web developer who loves turning creative ideas into
          beautiful, functional, and high-performing websites. I specialize in crafting
          smooth digital experiences with Next.js and React.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1.5rem",
            justifyItems: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1)",
                padding: "1rem",
                borderRadius: "10px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
              }
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {skill.icon}
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
