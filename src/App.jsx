import React, { useEffect, useState } from "react";
import shikuImg from "./assets/shiku1.jpg";

// Placeholder image component since we can't import the actual image
const PlaceholderImage = () => (
  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300">
    <span className="text-white text-6xl font-bold">SA</span>
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme classes
  const themeClasses = {
    bg: isDarkMode ? "bg-slate-900" : "bg-white",
    text: isDarkMode ? "text-gray-300" : "text-gray-700",
    textPrimary: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    navBg: isDarkMode ? "bg-slate-900/95" : "bg-white/95",
    navBorder: isDarkMode ? "border-slate-700" : "border-gray-200",
    cardBg: isDarkMode ? "bg-slate-800" : "bg-gray-50",
    cardBgAlt: isDarkMode ? "bg-slate-900" : "bg-white",
    cardHover: isDarkMode ? "hover:bg-slate-700" : "hover:bg-gray-100",
    inputBg: isDarkMode ? "bg-slate-700" : "bg-white",
    inputBorder: isDarkMode ? "border-slate-600" : "border-gray-300",
    footerBg: isDarkMode ? "bg-slate-900" : "bg-gray-100",
    footerBorder: isDarkMode ? "border-slate-700" : "border-gray-200",
  };

  return (
    <div
      className={`${themeClasses.text} font-sans ${themeClasses.bg} min-h-screen transition-colors duration-300`}
    >
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full ${themeClasses.navBg} backdrop-blur-md z-50 border-b ${themeClasses.navBorder} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
               SHIKU
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                {["Home", "Skills", "About", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`${themeClasses.text} hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group`}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )
                )}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`${themeClasses.text} hover:text-blue-400 p-2 rounded-md transition-colors duration-200 hover:bg-opacity-10 hover:bg-blue-400`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`${themeClasses.text} hover:text-blue-400 p-2 rounded-md transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <button
                id="nav-toggle"
                className={`${themeClasses.text} hover:text-blue-400 p-2 rounded-md transition-colors`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="nav-mobile"
          className={`md:hidden hidden ${themeClasses.navBg} backdrop-blur-md border-t ${themeClasses.navBorder} transition-colors duration-300`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Skills", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${themeClasses.text} hover:text-blue-400 ${themeClasses.cardHover} block px-3 py-2 text-base font-medium rounded-md transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${themeClasses.textPrimary} leading-tight mb-6`}
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Shaquib Ahmad
                </span>
              </h1>
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-medium ${themeClasses.text} mb-6`}
              >
                A Passionate Web Developer
              </h2>
              <p
                className={`text-lg ${themeClasses.textSecondary} mb-8 max-w-2xl`}
              >
                Crafting beautiful and performant web experiences using modern
                technologies like React, Three.js, and Tailwind CSS.
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
              <div className="relative" id="hero-image">
                <img
                  id="hero-image"
                  src={shikuImg}
                  alt="Shaquib Ahmad"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300"
                />

                {/* <PlaceholderImage /> */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${themeClasses.cardBg} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
            >
              My Skills
            </h2>
            <p
              className={`${themeClasses.textSecondary} text-lg max-w-2xl mx-auto`}
            >
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
                title: "Nodejs",
                color: "from-blue-400 to-cyan-500",
                desc: "Server side Integration",
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
              {
                title: "Express js",
                color: "from-yellow-400 to-orange-500",
                desc: "Node js Framework for building modern apps",
              },
              {
                title: "MongoDb",
                color: "from-green-400 to-teal-500",
                desc: "Document based database",
              },
              {
                title: "EJS",
                color: "from-purple-400 to-pink-500",
                desc: "Embedded JavaScript templating",
              },
              {
                title: "Git Bash",
                color: "from-gray-700 to-gray-900",
                desc: "Command line interface for Git",
              },
              {
                title: "HTML",
                color: "from-orange-400 to-red-500",
                desc: "Markup language for creating web pages",
              },
              {
                title: "CSS",
                color: "from-blue-400 to-indigo-500",
                desc: "Style sheet language for designing web pages",
              },
              {
                title: "Bootstrap",
                color: "from-purple-500 to-blue-500",
                desc: "Front-end framework for responsive design",
              },
              {
                title: "Linux",
                color: "from-yellow-500 to-amber-600",
                desc: "Open-source Unix-based operating system",
              },
              {
                title: "JWT",
                color: "from-red-400 to-yellow-500",
                desc: "JSON Web Token for secure authentication",
              },
              {
                title: "Passport.js",
                color: "from-sky-500 to-blue-600",
                desc: "Middleware for authentication in Node.js",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className={`${themeClasses.cardBgAlt} rounded-xl p-6 ${themeClasses.cardHover} transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-lg">
                    {skill.title[0]}
                  </span>
                </div>
                <h3
                  className={`text-xl font-semibold ${themeClasses.textPrimary} mb-2`}
                >
                  {skill.title}
                </h3>
                <p className={`${themeClasses.textSecondary} text-sm`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
            >
              About Me
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-6`}
              >
                I'm{" "}
                <span className="text-blue-400 font-semibold">
                  Shaquib Ahmad
                </span>
               , a passionate full-stack web developer with a
                focus on building secure, scalable, and user-centric web
                applications. My skill set bridges both frontend and backend
                development — from crafting responsive interfaces to
                implementing robust authentication systems.
              </p>
              <p
                className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-6`}
              >
                I specialize in HTML, CSS, Bootstrap, EJS, and modern frontend
                practices, while also working extensively with MongoDB, JWT,
                Passport.js, and bcrypt to deliver secure backend solutions. My
                proficiency with tools like Git Bash and Linux ensures smooth,
                terminal-based development workflows and effective version
                control using GitHub.
              </p>
              <p
                className={`${themeClasses.textSecondary} text-lg leading-relaxed`}
              >
                When I'm not coding, I explore emerging web technologies,
                contribute to open-source projects, and stay updated on the
                latest trends in full-stack development.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className={`${themeClasses.cardBg} rounded-xl p-8 ${themeClasses.cardHover} transition-colors`}
              >
                <h3
                  className={`text-xl font-semibold ${themeClasses.textPrimary} mb-4`}
                >
                  Quick Facts
                </h3>
                <ul className={`space-y-2 ${themeClasses.textSecondary}`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Web Developer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                   Mern stack dev
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    3D Graphics Enthusiast
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Open Source Contributor ,  <span className="font-semibold">Github</span>
                  </li>
                   <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                   Restfull APIs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                   CURD App
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${themeClasses.cardBg} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
            >
              My Projects
            </h2>
            <p
              className={`${themeClasses.textSecondary} text-lg max-w-2xl mx-auto`}
            >
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
              {
                title: "Mern Auth App",
                tech: " Node.js",
                desc: "Using Express server for to authenticate the users",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((project) => (
              <div
                key={project.title}
                className={`${themeClasses.cardBgAlt} rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {project.tech}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold ${themeClasses.textPrimary} mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p className={`${themeClasses.textSecondary} mb-4`}>
                    {project.desc}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      href="https://github.com/Imshiku/mern-auth-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${themeClasses.textSecondary} hover:text-blue-400 font-medium transition-colors`}
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
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
            >
              Get In Touch
            </h2>
            <p className={`${themeClasses.textSecondary} text-lg`}>
              Ready to start your next project? Let's work together!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3
                className={`text-xl font-semibold ${themeClasses.textPrimary} mb-6`}
              >
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className={`${themeClasses.textPrimary} font-medium`}>
                      Email
                    </p>
                    <p className={themeClasses.textSecondary}>
                      shaquibahmad21@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className={`${themeClasses.textPrimary} font-medium`}>
                      Location
                    </p>
                    <p className={themeClasses.textSecondary}>Patna, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${themeClasses.cardBg} rounded-xl p-8 transition-colors duration-300`}
            >
              <div className="space-y-6">
                <div>
                  <label
                    className={`block ${themeClasses.textPrimary} font-medium mb-2`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className={`block ${themeClasses.textPrimary} font-medium mb-2`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    className={`block ${themeClasses.textPrimary} font-medium mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => alert("Message sent! (In a demo environment)")}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${themeClasses.footerBg} py-12 px-4 sm:px-6 lg:px-8 border-t ${themeClasses.footerBorder} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Shaquib Ahmad
              </h3>
              <p className={themeClasses.textSecondary}>
                Passionate web developer creating beautiful digital experiences.
              </p>
            </div>
            <div>
              <h4 className={`${themeClasses.textPrimary} font-semibold mb-4`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Home", "Skills", "About", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`${themeClasses.textSecondary} hover:text-blue-400 transition-colors`}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className={`${themeClasses.textPrimary} font-semibold mb-4`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.github.com/Imshiku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeClasses.textSecondary} hover:text-blue-400 transition-colors`}
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Linkedin  */}

                <a
                  href="https://www.linkedin.com/in/shaquib-ahmad-53a7a2269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeClasses.textSecondary} hover:text-blue-400 transition-colors`}
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`border-t ${themeClasses.footerBorder} mt-8 pt-8 text-center transition-colors duration-300`}
          >
            <p className={themeClasses.textSecondary}>
              © 2025 Shaquib Ahmad. All rights reserved. Built with ❤️ using
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
