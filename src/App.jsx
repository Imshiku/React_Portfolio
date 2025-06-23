
import React, { useEffect } from "react";
import shikuImg from "./assets/shiku1.jpg"

function App() {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navMobile = document.getElementById("nav-mobile");

    const toggleMenu = () => {
      navMobile?.classList.toggle("hidden");
    };

    const closeMenu = () => {
      navMobile?.classList.add("hidden");
    };

    navToggle?.addEventListener("click", toggleMenu);
    navMobile?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Simple fade-in animation for hero image
    const heroImage = document.getElementById("hero-image");
    if (heroImage) {
      heroImage.style.opacity = "0";
      heroImage.style.transform = "scale(0.8)";
      setTimeout(() => {
        heroImage.style.transition = "all 1s ease-out";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "scale(1)";
      }, 200);
    }

    return () => {
      navToggle?.removeEventListener("click", toggleMenu);
      navMobile?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (
    <div className="text-gray-300 font-sans bg-slate-900 min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                MyPortfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Skills", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                id="nav-toggle"
                className="text-gray-300 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-md transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="nav-mobile" className="md:hidden hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Skills", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 hover:bg-slate-800 block px-3 py-2 text-base font-medium rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Shaquib Ahmad
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-6">
                A Passionate Web Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                Crafting beautiful and performant web experiences using modern technologies like React, Three.js, and Tailwind CSS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  id="hero-image"
                  src={shikuImg}
                  alt="Shaquib Ahmad"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "JavaScript",
                color: "from-yellow-400 to-orange-500",
                desc: "ES6+, DOM manipulation, and async programming",
              },
              {
                title: "React",
                color: "from-blue-400 to-cyan-500",
                desc: "Building dynamic UI components and SPAs",
              },
              {
                title: "Three.js",
                color: "from-purple-400 to-pink-500",
                desc: "Interactive 3D graphics and animations",
              },
              {
                title: "Tailwind CSS",
                color: "from-green-400 to-teal-500",
                desc: "Utility-first CSS framework for rapid development",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-lg">{skill.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm <span className="text-blue-400 font-semibold">Shaquib Ahmad</span>, a passionate web developer with a knack for building immersive digital experiences. My expertise lies in front-end development, creating responsive and engaging interfaces with modern tools and frameworks.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I specialize in React, Three.js, and modern CSS frameworks to create websites that not only look great but also provide exceptional user experiences.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest web development trends.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Web Developer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    React Specialist
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    3D Graphics Enthusiast
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Open Source Contributor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative endeavors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Task Management App",
                tech: "React • Tailwind",
                desc: "A modern task management application with real-time updates and intuitive design.",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                title: "3D Portfolio",
                tech: "Three.js • WebGL",
                desc: "Interactive 3D portfolio showcasing creative web development skills.",
                gradient: "from-green-500 to-teal-600",
              },
              {
                title: "E-commerce Platform",
                tech: "React • Node.js",
                desc: "Full-stack e-commerce solution with payment integration and admin dashboard.",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {project.tech}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-300 font-medium transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Ready to start your next project? Let's work together!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">shaquibahmad21@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Patna, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => alert('Message sent! (This is a demo)')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Shaquib Ahmad</h3>
              <p className="text-gray-400">
                Passionate web developer creating beautiful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Skills", "About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Shaquib Ahmad. All rights reserved. Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;