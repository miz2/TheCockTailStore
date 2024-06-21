import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <>
    <Navbar
    Home="Home"
    About="About"/>
    <section className="section about-section">
      <h1 className="section-title">About Me</h1>
      <div className="about-content">
        <p>
          My name is Mizaan ur Rehman, and I am currently in my 4th year at DIT
          University, pursuing a B.Tech in Computer Science and Engineering with
          a specialization in Full Stack and DevOps.
        </p>
        <p>
          I am passionate about technology, particularly in web development and
          cloud computing. During my studies, I have gained knowledge in both
          front-end and back-end development and managing databases.
        </p>
        <p>
          I actively engage in learning new technologies and improving my skills
          through practical projects and challenges. I enjoy solving complex
          problems.
        </p>
      </div>
    </section>
    </>
  );
}
