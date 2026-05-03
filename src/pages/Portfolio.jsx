import React from "react";
import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-[#F4F1E8] text-[#0E0E0E]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Portfolio;
