"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import MobileNav from "./components/MobileNav";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mayank&apos;s Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "projects",
                "skills",
                "experience",
                "blog",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() =>
                    section === "blog"
                      ? (window.location.href = "/blog")
                      : scrollToSection(section)
                  }
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? "text-blue-400" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <MobileNav
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Mayank</h1>
              <p className="text-xl mb-8">
                A passionate developer with a love for creating amazing mobile
                applications.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/mayank0304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="http://linkedin.com/in/mayank-sharma-62b47a24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <FaLinkedin /> LinkedIN
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] w-[400px] mx-auto"
            >
              <Image
                src="/mayank.jpeg"
                alt="Profile Picture"
                fill
                className="rounded-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-xl text-gray-400">
              Check out some of my recent work
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative h-[400px]">
              <Image
                src="/project1.png"
                alt="Spoco Project"
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Spoco</h3>
              <p className="text-lg">
                The SPOCO app was designed to provide users with a convenient
                platform to search for, book, and manage their sports ground
                reservations.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Project Features</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>User-friendly interface for easy navigation</li>
                  <li>Real-time booking and management system</li>
                  <li>Search functionality for finding available grounds</li>
                  <li>Chat with different Players</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h4>
                <p>Flutter, Firebase</p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.auribises.spoco&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              >
                View on Play Store
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center mt-10"
          >
           
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">SkillStack AI</h3>
              <p className="text-lg">
                SkillStack AI is an intelligent education platform that provides
                personalized learning experiences through AI-generated study
                materials, adaptive quizzes, and real-time performance tracking.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Project Features</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>AI-generated dynamic quizzes and study content</li>
                  <li>Infinite scroll quiz system for continuous learning</li>
                  <li>Real-time performance tracking and analysis</li>
                  {/* <li>Teacher dashboard with student monitoring tools</li> */}
                  {/* <li>Personalized learning recommendations</li> */}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h4>
                <p>React Native, Expo, Zustand, Nativewind</p>
              </div>
              <a
                href="https://github.com/mayank0304/skillstack-ai-apk/releases/tag/v1.0.0-Skillstack-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              >
                Download APK
              </a>
            </div>
             <div className="relative h-[400px]">
              <Image
                src="/1.png"
                alt="SkillStack AI Project"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-gray-400">Technologies I work with</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Programming Languages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> Dart
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> Java
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> JavaScript
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> TypeScript
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Frameworks
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> Flutter
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> React
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> React Native
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> Spring-Boot
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Databases
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> MySQL
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> PostgreSQL
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> MongoDB
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-blue-400 text-xl">•</span> Firebase
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <p className="text-gray-400 mb-4">
                Auribises Technologies Private Limited • Jan 2025 – Present •
                Ludhiana, Punjab
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Developed and maintained Flutter applications, implementing
                  user-friendly interfaces and seamless navigation.
                </li>
                <li>
                  Worked with Firebase services, including Firestore, Storage,
                  and Authentication, to enhance app functionality and
                  scalability.
                </li>
                <li>
                  Integrated a backend service into a Flutter application to
                  manage data and business logic efficiently.
                </li>
                <li>
                  Collaborated with a team to optimize app performance, fix
                  bugs, and ensure smooth deployment.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Senior Executive</h3>
              <p className="text-gray-400 mb-4">
                Causmic Club, GNDEC • September 2023 – Present • Ludhiana,
                Punjab
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Served as Overall Coordinator for APEX (an inter-school
                  competition) and ACME (an inter-college technical event),
                  managing event planning, execution, and team coordination.
                </li>
                <li>
                  Conceptualized and organized an Augmented Reality-based
                  treasure hunt, driving engagement and innovation in club
                  events.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-xl text-gray-400">Get in touch with me</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
