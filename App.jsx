import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSend,
  FiSun,
  FiX,
  FiFileText,
} from "react-icons/fi";

const projects = [
  {
    title: "Hunter Fitness Gym",
    eyebrow: "Client Project",
    description:
      "A production fitness website for Hunter Fitness Gym, presenting membership plans, training programs, trainers, testimonials and contact information in a polished responsive experience.",
    tags: ["Client Website", "Responsive UI", "Production"],
    link: "https://hunterfitnessgym.com/",
    featured: true,
  },
  {
    title: "AI-HUB",
    eyebrow: "Full-Stack AI Project",
    description:
      "A full-stack AI Hub application providing access to multiple AI-powered tools through a responsive and user-friendly interface.",
    tags: ["React", "Node.js", "Express.js", "AI Tools"],
    link: "https://free-ai-hub-theta.vercel.app/",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    eyebrow: "Full-Stack Project",
    description:
      "A full-stack e-commerce concept focused on a modern shopping experience, product discovery and a scalable application structure.",
    tags: ["React", "Node.js", "Full-Stack"],
    link: "#",
    featured: true,
  },
  {
    title: "MERN Auth App",
    eyebrow: "Authentication Project",
    description:
      "An authentication-focused application built around an Express server for user authentication and backend API workflows.",
    tags: ["Node.js", "Express", "Authentication"],
    link: "https://github.com/Imshiku/mern-auth-backend",
    featured: true,
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "EJS",
  "JWT",
  "Passport.js",
  "Git & GitHub",
  "Linux",
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function AppLink({ to, children, className = "", onClick }) {
  const handleClick = (event) => {
    if (to.startsWith("http")) return;
    event.preventDefault();
    navigateTo(to);
    onClick?.();
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project, dark, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${
        dark
          ? "border-slate-800 bg-slate-900/70 hover:border-slate-700"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div className="relative flex h-52 items-end overflow-hidden bg-slate-950 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.32),transparent_45%),linear-gradient(135deg,#0f172a,#111827)]" />
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-2 text-blue-300">
            <FiGlobe />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              {project.eyebrow}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        {project.featured && (
          <span className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <p
          className={`min-h-[96px] text-sm leading-7 ${dark ? "text-slate-400" : "text-slate-600"}`}
        >
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                dark
                  ? "bg-slate-800 text-slate-300"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex items-center gap-5">
          {project.link !== "#" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-blue-400"
            >
              View Project <FiExternalLink />
            </a>
          ) : (
            <span
              className={`text-sm font-medium ${dark ? "text-slate-500" : "text-slate-400"}`}
            >
              Project details available on request
            </span>
          )}
          {(project.title === "MERN Auth App" ||
            project.title === "AI-HUB") && (
            <a
              href={
                project.title === "AI-HUB"
                  ? "https://github.com/Imshiku/free-ai-hub"
                  : "https://github.com/Imshiku/mern-auth-backend"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${
                dark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname || "/");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("portfolio-theme") !== "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [path]);

  const dark = isDarkMode;
  const pageClass = dark
    ? "bg-[#080d18] text-slate-200"
    : "bg-[#f8fafc] text-slate-800";
  const surfaceClass = dark ? "bg-[#0d1422]" : "bg-white";
  const borderClass = dark ? "border-slate-800" : "border-slate-200";
  const mutedClass = dark ? "text-slate-400" : "text-slate-600";
  const headingClass = dark ? "text-white" : "text-slate-950";

  const currentPage = useMemo(() => {
    if (path === "/") return "home";
    if (path === "/about") return "about";
    if (path === "/projects") return "projects";
    if (path === "/contact") return "contact";
    return "not-found";
  }, [path]);

  const goToContact = (event) => {
    event.preventDefault();
    navigateTo("/contact");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageClass}`}>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${dark ? "border-slate-800/80 bg-[#080d18]/85" : "border-slate-200/80 bg-white/85"}`}
      >
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          <AppLink to="/" className="group flex items-center gap-3">
            <span
              className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-bold transition ${dark ? "border-slate-700 bg-slate-900 text-white group-hover:border-blue-500" : "border-slate-200 bg-slate-50 text-slate-950 group-hover:border-blue-400"}`}
            >
              SA
            </span>
            <span
              className={`hidden text-sm font-semibold sm:block ${headingClass}`}
            >
              Shaquib Ahmad
            </span>
          </AppLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <AppLink
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  path === item.path
                    ? "bg-blue-500/10 text-blue-500"
                    : `${mutedClass} hover:bg-slate-500/5 hover:text-blue-500`
                }`}
              >
                {item.label}
              </AppLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* CV Button */}
            <a
              href="/Md_Shaquib_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${
                dark
                  ? "border-blue-500/50 bg-blue-500/10 text-blue-400 hover:border-blue-400 hover:bg-blue-500/20"
                  : "border-blue-300 bg-blue-50 text-blue-600 hover:border-blue-400 hover:bg-blue-100"
              }`}
            >
              <FiFileText />
              View CV
            </a>

            {/* Theme Button */}
            <button
              type="button"
              onClick={() => setIsDarkMode((value) => !value)}
              aria-label="Toggle theme"
              className={`grid h-10 w-10 place-items-center rounded-xl border transition ${borderClass} ${mutedClass} hover:text-blue-500`}
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className={`grid h-10 w-10 place-items-center rounded-xl border md:hidden ${borderClass} ${mutedClass}`}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`border-t px-5 py-4 md:hidden ${borderClass} ${dark ? "bg-[#080d18]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl space-y-1">
              {navItems.map((item) => (
                <AppLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                    path === item.path
                      ? "bg-blue-500/10 text-blue-500"
                      : mutedClass
                  }`}
                >
                  {item.label}
                </AppLink>
              ))}

              {/* Mobile CV Button */}
              <a
                href="/Md_Shaquib_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-blue-500 hover:bg-blue-500/10"
              >
                <FiFileText />
                View CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-[76px]">
        {currentPage === "home" && (
          <HomePage
            dark={dark}
            headingClass={headingClass}
            mutedClass={mutedClass}
            surfaceClass={surfaceClass}
            borderClass={borderClass}
            goToContact={goToContact}
          />
        )}
        {currentPage === "about" && (
          <AboutPage
            dark={dark}
            headingClass={headingClass}
            mutedClass={mutedClass}
            surfaceClass={surfaceClass}
            borderClass={borderClass}
          />
        )}
        {currentPage === "projects" && (
          <ProjectsPage
            dark={dark}
            headingClass={headingClass}
            mutedClass={mutedClass}
          />
        )}
        {currentPage === "contact" && (
          <ContactPage
            dark={dark}
            headingClass={headingClass}
            mutedClass={mutedClass}
            surfaceClass={surfaceClass}
            borderClass={borderClass}
          />
        )}
        {currentPage === "not-found" && (
          <NotFoundPage
            dark={dark}
            headingClass={headingClass}
            mutedClass={mutedClass}
          />
        )}
      </main>

      <Footer dark={dark} mutedClass={mutedClass} borderClass={borderClass} />
    </div>
  );
}

function HomePage({
  dark,
  headingClass,
  mutedClass,
  surfaceClass,
  borderClass,
  goToContact,
}) {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.10),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available
              for opportunities
            </div>
            <p
              className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${mutedClass}`}
            >
              Hello, I'm
            </p>
            <h1
              className={`max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl ${headingClass}`}
            >
              Shaquib <span className="text-blue-500">Ahmad.</span>
            </h1>
            <h2
              className={`mt-6 text-2xl font-semibold sm:text-3xl ${dark ? "text-slate-200" : "text-slate-800"}`}
            >
              Full-Stack Web Developer
            </h2>
            <p
              className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${mutedClass}`}
            >
              I build responsive, practical and user-focused web applications
              with modern frontend and backend technologies — from polished
              interfaces to secure server-side workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AppLink
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-500"
              >
                Explore My Work <FiArrowRight />
              </AppLink>
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shaquibahmad21@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-50 inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition ${borderClass} ${headingClass} hover:border-blue-500 hover:text-blue-500`}
>
  <FiMail /> Let's Connect
</a>
            </div>
            <div
              className={`mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm ${mutedClass}`}
            >
              <span className="inline-flex items-center gap-2">
                <FiCode className="text-blue-500" /> Web Development
              </span>
              <span className="inline-flex items-center gap-2">
                <FiBriefcase className="text-blue-500" /> Client Projects
              </span>
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="text-blue-500" /> Bihar, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
              <div
                className={`relative overflow-hidden rounded-[2rem] border p-2 shadow-2xl ${borderClass} ${surfaceClass}`}
              >
                <img
                  src="/profile.png"
                  alt="Shaquib Ahmad"
                  className="h-[360px] w-[300px] object-cover object-center sm:h-[470px] sm:w-[380px]"
                />
                <div
                  className={`absolute bottom-6 left-6 right-6 rounded-2xl border px-4 py-3 backdrop-blur-xl ${dark ? "border-white/10 bg-slate-950/70" : "border-slate-200/80 bg-white/85"}`}
                >
                  <p className={`text-sm font-semibold ${headingClass}`}>
                    Shaquib Ahmad
                  </p>
                  <p className={`mt-0.5 text-xs ${mutedClass}`}>
                    Web Developer · Full-Stack Focus
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className={`border-y px-5 py-16 sm:px-8 lg:px-10 ${dark ? "border-slate-800 bg-[#0b111d]" : "border-slate-200 bg-white"}`}
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [
              FiBriefcase,
              "Client Work",
              "Real-world website and product development experience.",
            ],
            [
              FiLayers,
              "Full-Stack Thinking",
              "Frontend interfaces backed by APIs, authentication and databases.",
            ],
            [
              FiCheckCircle,
              "Clean Delivery",
              "Responsive layouts with a focus on usability and maintainability.",
            ],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className={`rounded-2xl border p-6 ${borderClass}`}
            >
              <Icon className="text-xl text-blue-500" />
              <h3 className={`mt-4 font-semibold ${headingClass}`}>{title}</h3>
              <p className={`mt-2 text-sm leading-6 ${mutedClass}`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            dark={dark}
            eyebrow="Selected Work"
            title="Projects that show how I build."
            description="A few projects that represent my approach to frontend design, full-stack development and real client work."
          />
          <div className="grid gap-7 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                dark={dark}
                index={index}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <AppLink
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400"
            >
              View all project details <FiArrowRight />
            </AppLink>
          </div>
        </div>
      </section>

      <section className={`px-5 pb-24 sm:px-8 lg:px-10`}>
        <div
          className={`mx-auto max-w-7xl rounded-3xl border p-8 sm:p-12 ${borderClass} ${dark ? "bg-gradient-to-br from-slate-900 to-slate-950" : "bg-gradient-to-br from-white to-slate-50"}`}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Let's work together
              </p>
              <h2 className={`mt-3 text-3xl font-bold ${headingClass}`}>
                Have a project or opportunity in mind?
              </h2>
              <p className={`mt-3 max-w-2xl leading-7 ${mutedClass}`}>
                I'm open to web development opportunities, freelance projects
                and collaborations.
              </p>
            </div>
            <button
              onClick={goToContact}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Me <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage({
  dark,
  headingClass,
  mutedClass,
  surfaceClass,
  borderClass,
}) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          dark={dark}
          eyebrow="About Me"
          title="A developer focused on building useful products."
          description="My work sits at the intersection of clean interfaces, backend logic and practical problem solving."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`rounded-3xl border p-7 sm:p-9 ${borderClass} ${surfaceClass}`}
          >
            <img
              src="/profile.png"
              alt="Shaquib Ahmad"
              className="mx-auto h-72 w-full max-w-sm rounded-2xl object-cover object-center"
            />
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className={`rounded-xl border p-4 ${borderClass}`}>
                <FiCode className="text-blue-500" />
                <p className={`mt-2 text-sm font-semibold ${headingClass}`}>
                  Web Developer
                </p>
              </div>
              <div className={`rounded-xl border p-4 ${borderClass}`}>
                <FiLayers className="text-blue-500" />
                <p className={`mt-2 text-sm font-semibold ${headingClass}`}>
                  Full-Stack
                </p>
              </div>
            </div>
          </div>
          <div
            className={`rounded-3xl border p-7 sm:p-9 ${borderClass} ${surfaceClass}`}
          >
            <p className={`text-lg leading-8 ${mutedClass}`}>
              I'm{" "}
              <span className={`font-semibold ${headingClass}`}>
                Shaquib Ahmad
              </span>
              , a web developer interested in creating secure, responsive and
              user-focused web applications. I work across frontend and backend
              development, with experience in JavaScript-based web technologies,
              APIs, authentication and database-driven applications.
            </p>
            <p className={`mt-6 text-lg leading-8 ${mutedClass}`}>
              I enjoy taking an idea from a rough requirement to a working
              interface — structuring the UI, connecting the backend, handling
              application logic and making sure the final experience works well
              across screen sizes.
            </p>
            <p className={`mt-6 text-lg leading-8 ${mutedClass}`}>
              Alongside personal development work, I have also worked on a real
              fitness business website, giving me practical exposure to building
              a production-facing website rather than only demo projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.slice(0, 9).map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${dark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            dark={dark}
            eyebrow="Technical Skills"
            title="Tools I work with"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`flex items-center gap-3 rounded-xl border p-4 ${borderClass} ${surfaceClass}`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/10 text-blue-500">
                  <FiCheckCircle />
                </span>
                <span className={`text-sm font-medium ${headingClass}`}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ dark, headingClass, mutedClass }) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          dark={dark}
          eyebrow="Portfolio"
          title="Selected projects"
          description="A focused collection of client and development work. Each project is presented with the role and technology context available for it."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              dark={dark}
              index={index}
            />
          ))}
        </div>
        <div
          className={`mt-12 rounded-2xl border p-7 ${dark ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white"}`}
        >
          <h3 className={`text-xl font-semibold ${headingClass}`}>
            Want to see more?
          </h3>
          <p className={`mt-2 leading-7 ${mutedClass}`}>
            More work can be shared along with source code, live links and
            project-specific details when requested.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactPage({
  dark,
  headingClass,
  mutedClass,
  surfaceClass,
  borderClass,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (sent) setSent(false);
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setSent(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        err.message || "Unable to send your message. Please try again later.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          dark={dark}
          eyebrow="Contact"
          title="Let's build something useful."
          description="For freelance work, job opportunities or collaborations, send a message or reach out directly."
        />

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div
            className={`rounded-3xl border p-7 sm:p-9 ${borderClass} ${surfaceClass}`}
          >
            <h3 className={`text-xl font-semibold ${headingClass}`}>
              Contact details
            </h3>

            <div className="mt-7 space-y-5">
              <a href="mailto:shaquibahmad21@gmail.com" className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                  <FiMail />
                </span>
                <span>
                  <span
                    className={`block text-xs uppercase tracking-wider ${mutedClass}`}
                  >
                    Email
                  </span>
                  <span
                    className={`mt-1 block text-sm font-medium ${headingClass}`}
                  >
                    shaquibahmad21@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                  <FiMapPin />
                </span>
                <span>
                  <span
                    className={`block text-xs uppercase tracking-wider ${mutedClass}`}
                  >
                    Location
                  </span>
                  <span
                    className={`mt-1 block text-sm font-medium ${headingClass}`}
                  >
                    Patna, Bihar
                  </span>
                </span>
              </div>

              <a
                href="https://github.com/Imshiku"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                  <FiGithub />
                </span>
                <span>
                  <span
                    className={`block text-xs uppercase tracking-wider ${mutedClass}`}
                  >
                    GitHub
                  </span>
                  <span
                    className={`mt-1 block text-sm font-medium ${headingClass}`}
                  >
                    github.com/Imshiku
                  </span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/shaquib-ahmad-53a7a2269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                  <FiLinkedin />
                </span>
                <span>
                  <span
                    className={`block text-xs uppercase tracking-wider ${mutedClass}`}
                  >
                    LinkedIn
                  </span>
                  <span
                    className={`mt-1 block text-sm font-medium ${headingClass}`}
                  >
                    Shaquib Ahmad
                  </span>
                </span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl border p-7 sm:p-9 ${borderClass} ${surfaceClass}`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span
                  className={`mb-2 block text-sm font-medium ${headingClass}`}
                >
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${borderClass} ${
                    dark
                      ? "bg-slate-950 text-white placeholder:text-slate-600"
                      : "bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </label>

              <label className="block">
                <span
                  className={`mb-2 block text-sm font-medium ${headingClass}`}
                >
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${borderClass} ${
                    dark
                      ? "bg-slate-950 text-white placeholder:text-slate-600"
                      : "bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span
                className={`mb-2 block text-sm font-medium ${headingClass}`}
              >
                Subject
              </span>
              <input
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project / job opportunity"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${borderClass} ${
                  dark
                    ? "bg-slate-950 text-white placeholder:text-slate-600"
                    : "bg-slate-50 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </label>

            <label className="mt-5 block">
              <span
                className={`mb-2 block text-sm font-medium ${headingClass}`}
              >
                Message
              </span>
              <textarea
                required
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your requirement..."
                className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${borderClass} ${
                  dark
                    ? "bg-slate-950 text-white placeholder:text-slate-600"
                    : "bg-slate-50 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiSend />
              {sending ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="mt-4 text-center text-sm text-emerald-500">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {error && (
              <p className="mt-4 text-center text-sm text-red-500">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage({ dark, headingClass, mutedClass }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          404
        </p>
        <h1 className={`mt-3 text-4xl font-bold ${headingClass}`}>
          Page not found
        </h1>
        <p className={`mt-3 ${mutedClass}`}>
          The page you're looking for doesn't exist.
        </p>
        <AppLink
          to="/"
          className="mt-7 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
        >
          Back Home
        </AppLink>
      </div>
    </section>
  );
}

function Footer({ dark, mutedClass, borderClass }) {
  return (
    <footer className={`border-t px-5 py-10 sm:px-8 lg:px-10 ${borderClass}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p
            className={`font-semibold ${dark ? "text-white" : "text-slate-950"}`}
          >
            Shaquib Ahmad
          </p>
          <p className={`mt-1 text-sm ${mutedClass}`}>
            Full-Stack Web Developer
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Imshiku"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`grid h-10 w-10 place-items-center rounded-xl border ${borderClass} ${mutedClass} transition hover:text-blue-500`}
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shaquib-ahmad-53a7a2269"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`grid h-10 w-10 place-items-center rounded-xl border ${borderClass} ${mutedClass} transition hover:text-blue-500`}
          >
            <FiLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shaquibahmad21@gmail.com"
            aria-label="Email"
            className={`grid h-10 w-10 place-items-center rounded-xl border ${borderClass} ${mutedClass} transition hover:text-blue-500`}
          >
            <FiMail />
          </a>
        </div>
      </div>
      <div
        className={`mx-auto mt-8 max-w-7xl border-t pt-6 text-xs ${borderClass} ${mutedClass}`}
      >
        © {new Date().getFullYear()} Shaquib Ahmad. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
