export default function Home() {
  return (
    <main className="main">
      <div className="card">
        <img src="/profil.jpg" alt="Foto Profil" />

        <h1>Hi, I'm Yufsidi 👋</h1>
        <p>kalau kamu minta tolong dan aku bisa ya,,, aku tolongin 😄</p>

        <p>
          Passionate in technology, UI/UX, and education. Currently learning{" "}
          <strong>Next.js</strong> and building <strong>modern web apps</strong>.
        </p>

        <div className="skills">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
</div>

        <p style={{ marginTop: "1rem" }}>
          <a href="mailto:yufsidi@example.com">Email Me</a>
        </p>
      </div>
    </main>
  );
}
