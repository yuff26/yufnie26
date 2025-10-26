"use client";

import { useState } from "react";
import { Trash2, Edit2, Check, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const [projects, setProjects] = useState([
    { id: 1, title: "🖥️ Todo List App", desc: "Simple and clean app built with Next.js + Tailwind." },
    { id: 2, title: "📸 Portfolio Website", desc: "Modern personal website with animations." },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  // Tambah Project
  const addProject = () => {
    if (newTitle.trim() && newDesc.trim()) {
      const newProj = {
        id: Date.now(),
        title: newTitle,
        desc: newDesc,
      };
      setProjects([...projects, newProj]);
      setNewTitle("");
      setNewDesc("");
    }
  };

  // Hapus Project
  const deleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // Edit Project
  const startEdit = (proj: any) => {
    setEditingId(proj.id);
    setEditTitle(proj.title);
    setEditDesc(proj.desc);
  };

  const saveEdit = (id: number) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, title: editTitle, desc: editDesc } : p
      )
    );
    setEditingId(null);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        paddingTop: "5rem",
        overflowY: "auto",
      }}
    >
      {/* Overlay gelap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Tombol Back */}
      <button
        onClick={() => router.push("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "rgba(255,255,255,0.15)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "0.4rem 0.8rem",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      <div style={{ zIndex: 2, width: "100%", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>📂 My Projects</h1>

        {/* Form Tambah */}
        <div
          style={{
            marginTop: "2rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ marginBottom: "1rem", fontWeight: "600" }}>Add New Project</h2>
          <input
            type="text"
            placeholder="Project title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              width: "80%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "none",
              marginBottom: "0.5rem",
            }}
          />
          <br />
          <textarea
            placeholder="Project description..."
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            style={{
              width: "80%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "none",
              resize: "none",
              height: "60px",
            }}
          ></textarea>
          <br />
          <button
            onClick={addProject}
            style={{
              marginTop: "0.8rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add Project
          </button>
        </div>

        {/* Daftar Project */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "1rem 2rem",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "400px",
                position: "relative",
              }}
            >
              {editingId === proj.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.4rem",
                      borderRadius: "5px",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.4rem",
                      borderRadius: "5px",
                      height: "60px",
                    }}
                  />
                  <button
                    onClick={() => saveEdit(proj.id)}
                    style={{
                      marginTop: "0.5rem",
                      padding: "0.4rem 0.8rem",
                      backgroundColor: "#10b981",
                      border: "none",
                      borderRadius: "6px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <Check size={16} /> Save
                  </button>
                </>
              ) : (
                <>
                  <h2>{proj.title}</h2>
                  <p>{proj.desc}</p>
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      onClick={() => startEdit(proj)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Edit2 color="yellow" size={18} />
                    </button>
                    <button
                      onClick={() => deleteProject(proj.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 color="red" size={18} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
