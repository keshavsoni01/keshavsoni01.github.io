const portfolio = {
  name: "Keshav Soni",
  handle: "keshavsoni01",
  role: "MS Information Technology Student | Java Backend Developer",
  location: "Tempe, AZ - willing to relocate",
  target: "Software Engineering / Backend Internship 2026",
  email: "ksoni13@asu.edu",
  phone: "+1 (623) 433-6537",
  github: "https://github.com/keshavsoni01",
  linkedin: "https://linkedin.com/in/keshavsoni01",
  resume: "Keshav_Soni_Resume.pdf",
  about: [
    "I am Keshav Soni, an MS Information Technology student at Arizona State University with a 4.0 GPA.",
    "I have professional Java backend experience building Spring Boot REST APIs, secure role-based systems, and AWS-backed notification workflows.",
    "I enjoy backend engineering, cloud architecture, databases, and practical product development that turns complex workflows into reliable software."
  ],
  skills: [
    {
      name: "Languages",
      tags: ["Java", "Python", "JavaScript", "SQL"],
      summary: "Java is my primary language, with additional experience in Python, JavaScript, and SQL."
    },
    {
      name: "Backend",
      tags: ["Spring Boot", "Spring MVC", "REST APIs", "Hibernate", "JPA", "JDBC", "Microservices", "JWT", "Spring Security"],
      summary: "Backend services, secure APIs, role-based access control, OOP, SOLID principles, and layered architecture."
    },
    {
      name: "Databases",
      tags: ["PostgreSQL", "JSONB", "MySQL", "Spring Data JPA"],
      summary: "Relational database design, indexed queries, PostgreSQL JSONB usage, and CRUD-heavy application data flows."
    },
    {
      name: "Cloud and DevOps",
      tags: ["AWS Lambda", "AWS Cognito", "SNS", "SQS", "API Gateway", "S3", "CloudWatch", "Docker", "Git", "ELK", "Postman"],
      summary: "AWS services, deployment-aware backend work, monitoring, API testing, and team tooling."
    },
    {
      name: "Frontend",
      tags: ["React", "HTML", "CSS", "Bootstrap"],
      summary: "Frontend fundamentals for building and integrating web clients with backend APIs."
    },
    {
      name: "ML and AI",
      tags: ["TensorFlow", "CNN", "Computer Vision", "OpenCV"],
      summary: "Academic and project experience with computer vision, CNN models, and real-time video processing."
    }
  ],
  projects: [
    {
      name: "Travart",
      type: "Travel and Workforce Management Platform",
      tags: ["backend", "java", "spring", "aws", "postgresql", "fullstack"],
      tech: "Java | Spring Boot | PostgreSQL JSONB | AWS SNS | Spring Security",
      summary: "Developed 25+ Java REST API endpoints for workforce scheduling, leave tracking, itinerary planning, booking, and notifications consumed by Android and web clients."
    },
    {
      name: "Data Management System",
      type: "Secure REST API",
      tags: ["backend", "java", "spring", "mysql", "security"],
      tech: "Java 8 | Spring Boot | Spring Security | JWT | MySQL | Hibernate",
      summary: "Built a secure CRUD API for sensitive entities with 10,000+ records, JWT authentication, role-based access, servlet filters, and Postman documentation."
    },
    {
      name: "Accident Detection System",
      type: "Academic Major Project",
      tags: ["python", "flask", "ml", "ai", "computer-vision"],
      tech: "Python | Flask | TensorFlow | OpenCV | Twilio",
      summary: "Created a Flask app that detects road accidents from CCTV footage, live streams, and images using a CNN model with 91%+ accuracy and SMS alerts within 5 seconds."
    }
  ],
  education: [
    {
      title: "Master of Science in Information Technology",
      place: "Arizona State University, Tempe, AZ",
      time: "2025 to 2027",
      summary: "GPA: 4.0/4.0. Coursework includes Advanced Information Systems Security, Advanced Database Management Systems, Information Systems Development, and Cloud Architecture for IT."
    },
    {
      title: "Bachelor of Technology in Information Technology",
      place: "Medi-Caps University, Indore, India",
      time: "2019 to 2023",
      summary: "GPA: 3.58/4.0. Coursework included Data Structures and Algorithms, DBMS, Operating Systems, and Computer Networks."
    }
  ],
  experience: [
    {
      title: "Java Developer",
      place: "A Plus Tree Systems Pvt Ltd, Indore, India",
      time: "June 2023 to July 2025",
      summary: "Owned backend development for Travart, a production travel and workforce platform serving 150+ users, reducing operational overhead by 30% through automated shift scheduling and leave workflows."
    },
    {
      title: "Backend Domain Ownership",
      place: "Travart Platform",
      time: "2023 to 2025",
      summary: "Defined service boundaries across Shift, Leave, Itinerary, Booking, and Notification domains while implementing secure Spring Boot APIs, PostgreSQL JSONB workflows, AWS Cognito auth, and AWS SNS notifications."
    }
  ],
  publications: [
    {
      title: "Video Surveillance System with Unattended Objects Detection",
      venue: "IEEE Xplore",
      year: "2023",
      authors: "Kukade, Jyoti et al."
    },
    {
      title: "Real-Time Emotion Detection System: A Hybrid Approach of Computer Vision and Machine Learning Techniques",
      venue: "Springer Nature Singapore",
      year: "2024",
      authors: "Soni, Keshav et al."
    }
  ]
};

const output = document.getElementById("terminal-output");
const screen = document.getElementById("terminal-screen");
const form = document.getElementById("command-form");
const input = document.getElementById("command-input");
const promptLabel = document.getElementById("prompt-label");
const statusPath = document.getElementById("status-path");
const statusCount = document.getElementById("status-count");
const windowTitle = document.getElementById("window-title");
const clock = document.getElementById("clock");
const modeGate = document.getElementById("mode-gate");
const terminalView = document.getElementById("terminal-view");
const guiView = document.getElementById("gui-view");
const guiName = document.getElementById("gui-name");
const guiRole = document.getElementById("gui-role");
const guiAboutLead = document.getElementById("gui-about-lead");
const guiFacts = document.getElementById("gui-facts");
const guiSkillsGrid = document.getElementById("gui-skills-grid");
const guiProjectsGrid = document.getElementById("gui-projects-grid");
const guiExperienceGrid = document.getElementById("gui-experience-grid");
const guiEducationGrid = document.getElementById("gui-education-grid");
const guiPublicationsGrid = document.getElementById("gui-publications-grid");
const guiContactCopy = document.getElementById("gui-contact-copy");
const guiContactLinks = document.getElementById("gui-contact-links");
const guiResumeLink = document.getElementById("gui-resume-link");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const appearanceMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

const APPEARANCE_KEY = "keshav-appearance";
const APPEARANCE_OPTIONS = ["system", "light", "dark"];

const state = {
  cwd: [],
  history: [],
  historyIndex: 0,
  commandCount: 0,
  theme: "matrix",
  appearancePreference: "system",
  appearance: "dark"
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function link(url, label = url) {
  const safeUrl = escapeHtml(url);
  return `<a href="${safeUrl}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
}

function mailLink(email) {
  return `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`;
}

function chips(items) {
  return `<div class="chips">${items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function guiTags(items) {
  return `<div class="gui-tags">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true"
      }
    });
  }
}

function list(items) {
  return `<ul class="list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function block(html) {
  return `<section class="entry block">${html}</section>`;
}

function message(title, lines = []) {
  return block(`
    <p class="title">${escapeHtml(title)}</p>
    ${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
  `);
}

function commandEcho(command) {
  return `
    <div class="entry line">
      <span class="prompt-text">${escapeHtml(promptText())}</span>
      <span class="typed">${escapeHtml(command)}</span>
    </div>
  `;
}

function append(html) {
  output.insertAdjacentHTML("beforeend", html);
  scrollTerminalToPrompt();
}

function scrollTerminalToPrompt() {
  requestAnimationFrame(() => {
    screen.scrollTop = screen.scrollHeight;
  });
}

function updateInputWidth() {
  const visibleLength = Math.min(Math.max(input.value.length + 1, 1), 72);
  input.style.setProperty("--input-ch", String(visibleLength));
  scrollTerminalToPrompt();
}

function promptPath() {
  return state.cwd.length ? `~/${state.cwd.join("/")}` : "~";
}

function promptText() {
  return `visitor@keshav:${promptPath()}$`;
}

function updateShellChrome() {
  promptLabel.textContent = promptText();
  statusPath.textContent = `${promptPath()}/`;
  statusCount.textContent = String(state.commandCount);
  windowTitle.textContent = `visitor@keshav:${promptPath()}`;
}

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function normalizeAppearancePreference(value) {
  return APPEARANCE_OPTIONS.includes(value) ? value : "system";
}

function getSystemAppearance() {
  return appearanceMedia && appearanceMedia.matches ? "dark" : "light";
}

function resolveAppearance(preference) {
  return preference === "system" ? getSystemAppearance() : preference;
}

function updateAppearanceControls(preference = state.appearancePreference) {
  document.querySelectorAll("[data-appearance-choice]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.appearanceChoice === preference));
  });
}

function saveAppearancePreference(preference) {
  try {
    if (preference === "system") {
      localStorage.removeItem(APPEARANCE_KEY);
    } else {
      localStorage.setItem(APPEARANCE_KEY, preference);
    }
  } catch (_error) {
    return;
  }
}

function setAppearance(preference, options = {}) {
  const { persist = true } = options;
  const nextPreference = normalizeAppearancePreference(preference);
  const nextAppearance = resolveAppearance(nextPreference);

  state.appearancePreference = nextPreference;
  state.appearance = nextAppearance;
  document.documentElement.dataset.appearance = nextAppearance;
  document.documentElement.dataset.appearancePreference = nextPreference;

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", nextAppearance === "dark" ? "#060707" : "#f5f7fb");
  }

  updateAppearanceControls(nextPreference);

  if (persist) {
    saveAppearancePreference(nextPreference);
  }
}

function loadAppearancePreference() {
  try {
    return normalizeAppearancePreference(localStorage.getItem(APPEARANCE_KEY));
  } catch (_error) {
    return "system";
  }
}

function setTheme(theme) {
  const next = ["matrix", "amber", "cyan"].includes(theme) ? theme : "matrix";
  state.theme = next;

  if (next === "matrix") {
    document.documentElement.removeAttribute("data-terminal-theme");
  } else {
    document.documentElement.setAttribute("data-terminal-theme", next);
  }

  try {
    localStorage.setItem("keshav-terminal-theme", next);
  } catch (_error) {
    return;
  }
}

function loadTheme() {
  try {
    return localStorage.getItem("keshav-terminal-theme") || "matrix";
  } catch (_error) {
    return "matrix";
  }
}

function setViewState(element, isVisible) {
  if (!element) {
    return;
  }

  element.hidden = !isVisible;
  element.setAttribute("aria-hidden", String(!isVisible));
}

function setActiveMode(mode) {
  const activeMode = ["choice", "terminal", "gui"].includes(mode) ? mode : "choice";

  document.body.dataset.mode = activeMode;
  setViewState(modeGate, activeMode === "choice");
  setViewState(terminalView, activeMode === "terminal");
  setViewState(guiView, activeMode === "gui");

  if (activeMode === "terminal") {
    document.title = `${portfolio.name} | Terminal Portfolio`;
    input.focus();
  }

  if (activeMode === "gui") {
    document.title = `${portfolio.name} | Portfolio`;
    if (typeof guiView.scrollTo === "function") {
      guiView.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  renderIcons();
}

function updateHashForMode(mode) {
  if (mode === "choice") {
    history.replaceState(null, "", window.location.pathname);
    return;
  }

  history.replaceState(null, "", `#${mode}`);
}

function chooseMode(mode) {
  setActiveMode(mode);
  updateHashForMode(mode);
}

const fileSystem = {
  type: "dir",
  children: {
    "about.txt": {
      type: "file",
      read: () => aboutCommand()
    },
    "skills.txt": {
      type: "file",
      read: () => skillsCommand([])
    },
    "contact.txt": {
      type: "file",
      read: () => contactCommand()
    },
    "publications.txt": {
      type: "file",
      read: () => publicationsCommand()
    },
    "resume.txt": {
      type: "file",
      read: () => resumeCommand()
    },
    projects: {
      type: "dir",
      children: {}
    },
    education: {
      type: "dir",
      children: {
        "timeline.txt": {
          type: "file",
          read: () => educationCommand()
        }
      }
    }
  }
};

portfolio.projects.forEach((project, index) => {
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  fileSystem.children.projects.children[`${index + 1}-${slug}.md`] = {
    type: "file",
    read: () => projectCommand([String(index + 1)])
  };
});

function pathParts(rawPath = ".") {
  const cleanPath = rawPath.trim() || ".";
  const startsAtRoot = cleanPath.startsWith("/") || cleanPath.startsWith("~");
  const base = startsAtRoot ? [] : [...state.cwd];
  const stripped = cleanPath.replace(/^~\/?/, "").replace(/^\//, "");
  const parts = stripped.split("/").filter(Boolean);

  parts.forEach((part) => {
    if (part === ".") {
      return;
    }

    if (part === "..") {
      base.pop();
      return;
    }

    base.push(part);
  });

  return base;
}

function getNode(parts) {
  let node = fileSystem;

  for (const part of parts) {
    if (node.type !== "dir" || !node.children[part]) {
      return null;
    }

    node = node.children[part];
  }

  return node;
}

function allCommandNames() {
  return [...new Set([...Object.keys(commands), ...Object.keys(aliases)])].sort();
}

function tokenize(inputValue) {
  const matches = inputValue.match(/"[^"]*"|'[^']*'|\S+/g) || [];
  return matches.map((item) => {
    if ((item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))) {
      return item.slice(1, -1);
    }

    return item;
  });
}

function aboutCommand() {
  return block(`
    <p class="kicker">about</p>
    <p class="title">${escapeHtml(portfolio.name)} - ${escapeHtml(portfolio.role)}</p>
    ${portfolio.about.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
  `);
}

function skillsCommand(args) {
  const filter = (args[0] || "all").toLowerCase();
  const skills = filter === "all"
    ? portfolio.skills
    : portfolio.skills.filter((skill) => skill.name.toLowerCase().includes(filter) || skill.tags.some((tag) => tag.toLowerCase().includes(filter)));

  if (skills.length === 0) {
    return message("skills", [`No skill group matched "${filter}". Try: skills all`]);
  }

  return block(`
    <p class="kicker">skills ${escapeHtml(filter)}</p>
    <div class="grid">
      ${skills.map((skill) => `
        <article class="item">
          <div class="item-name">${escapeHtml(skill.name)}</div>
          <div class="item-copy">${escapeHtml(skill.summary)}</div>
          ${chips(skill.tags)}
        </article>
      `).join("")}
    </div>
  `);
}

function projectsCommand(args) {
  const filter = (args[0] || "all").toLowerCase();
  const projects = filter === "all"
    ? portfolio.projects
    : portfolio.projects.filter((project) => project.tags.includes(filter));

  if (projects.length === 0) {
    return message("projects", [`No projects matched "${filter}". Try: projects backend, projects java, projects aws, or projects all.`]);
  }

  return block(`
    <p class="kicker">projects ${escapeHtml(filter)}</p>
    <p class="muted">Use "project 1" or "cd projects" then "ls" to browse project files.</p>
    <div class="grid">
      ${projects.map((project) => {
        const index = portfolio.projects.indexOf(project) + 1;
        return `
          <article class="item">
            <div class="item-name">[${index}] ${escapeHtml(project.name)}</div>
            <div class="item-copy">${escapeHtml(project.type)} | ${escapeHtml(project.tech)}</div>
            <p>${escapeHtml(project.summary)}</p>
            ${chips(project.tags)}
          </article>
        `;
      }).join("")}
    </div>
  `);
}

function projectCommand(args) {
  const index = Number(args[0]);

  if (!Number.isInteger(index) || index < 1 || index > portfolio.projects.length) {
    return message("usage", [`project <1-${portfolio.projects.length}>`, "Example: project 2"]);
  }

  const project = portfolio.projects[index - 1];
  return block(`
    <p class="kicker">project.${index}</p>
    <p class="title">${escapeHtml(project.name)}</p>
    <p>${escapeHtml(project.summary)}</p>
    <p><span class="muted">Type:</span> ${escapeHtml(project.type)}</p>
    <p><span class="muted">Tech:</span> ${escapeHtml(project.tech)}</p>
    ${chips(project.tags)}
  `);
}

function educationCommand() {
  return block(`
    <p class="kicker">education</p>
    <div class="grid">
      ${portfolio.education.map((item) => `
        <article class="item">
          <div class="item-name">${escapeHtml(item.title)}</div>
          <div class="item-copy">${escapeHtml(item.time)} | ${escapeHtml(item.place)}</div>
          <p>${escapeHtml(item.summary)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

function experienceCommand() {
  return block(`
    <p class="kicker">experience</p>
    <div class="grid">
      ${portfolio.experience.map((item) => `
        <article class="item">
          <div class="item-name">${escapeHtml(item.title)}</div>
          <div class="item-copy">${escapeHtml(item.time)} | ${escapeHtml(item.place)}</div>
          <p>${escapeHtml(item.summary)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

function contactCommand() {
  return block(`
    <p class="kicker">contact</p>
    <p>Email: ${mailLink(portfolio.email)}</p>
    <p>Phone: ${escapeHtml(portfolio.phone)}</p>
    <p>GitHub: ${link(portfolio.github)}</p>
    <p>LinkedIn: ${link(portfolio.linkedin)}</p>
    <p class="muted">Try: open github, open linkedin, open email, copy email, copy phone</p>
  `);
}

function resumeCommand() {
  if (!portfolio.resume) {
    return message("resume", [
      "No resume is connected yet.",
      "Add a PDF to this folder and set portfolio.resume in script.js."
    ]);
  }

  return block(`
    <p class="kicker">resume</p>
    <p>${link(portfolio.resume, "Open resume")}</p>
  `);
}

function neofetchCommand() {
  return block(`
    <pre class="ascii"> _  __          _                    ____
| |/ /___  ___ | |__   __ ___   __ / ___|  ___  _ __  (_) 
| ' // _ \\/ __|| '_ \\ / _\` \\ \\ / / \\___ \\ / _ \\| '_ \\ | |
| . \\  __/\\__ \\| | | | (_| |\\ V /   ___) | (_) | | | || |
|_|\\_\\___||___/|_| |_|\\__,_| \\_/   |____/ \\___/|_| |_||_|</pre>
    <p><span class="muted">Name:</span> ${escapeHtml(portfolio.name)}</p>
    <p><span class="muted">Role:</span> ${escapeHtml(portfolio.role)}</p>
    <p><span class="muted">Location:</span> ${escapeHtml(portfolio.location)}</p>
    <p><span class="muted">Target:</span> ${escapeHtml(portfolio.target)}</p>
    <p><span class="muted">Shell:</span> vanilla-js-terminal</p>
  `);
}

function publicationsCommand() {
  return block(`
    <p class="kicker">publications</p>
    <div class="grid">
      ${portfolio.publications.map((paper) => `
        <article class="item">
          <div class="item-name">${escapeHtml(paper.title)}</div>
          <div class="item-copy">${escapeHtml(paper.venue)} | ${escapeHtml(paper.year)}</div>
          <p>${escapeHtml(paper.authors)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

function renderGuiPortfolio() {
  guiName.textContent = portfolio.name;
  guiRole.textContent = portfolio.role;
  guiAboutLead.textContent = portfolio.about.join(" ");
  guiResumeLink.href = portfolio.resume;

  guiFacts.innerHTML = [
    ["Location", portfolio.location],
    ["Open To", portfolio.target],
    ["Email", portfolio.email],
    ["Phone", portfolio.phone]
  ].map(([label, value]) => `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join("");

  guiSkillsGrid.innerHTML = portfolio.skills.map((skill) => `
    <article class="gui-card">
      <h3>${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.summary)}</p>
      ${guiTags(skill.tags)}
    </article>
  `).join("");

  guiProjectsGrid.innerHTML = portfolio.projects.map((project) => `
    <article class="gui-card project-gui-card">
      <p class="card-kicker">${escapeHtml(project.type)}</p>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <p class="card-meta">${escapeHtml(project.tech)}</p>
      ${guiTags(project.tags)}
    </article>
  `).join("");

  guiExperienceGrid.innerHTML = portfolio.experience.map((item) => `
    <article class="timeline-card">
      <p class="card-kicker">${escapeHtml(item.time)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="card-meta">${escapeHtml(item.place)}</p>
      <p>${escapeHtml(item.summary)}</p>
    </article>
  `).join("");

  guiEducationGrid.innerHTML = portfolio.education.map((item) => `
    <article class="timeline-card">
      <p class="card-kicker">${escapeHtml(item.time)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="card-meta">${escapeHtml(item.place)}</p>
      <p>${escapeHtml(item.summary)}</p>
    </article>
  `).join("");

  guiPublicationsGrid.innerHTML = portfolio.publications.map((paper) => `
    <article class="gui-card">
      <p class="card-kicker">${escapeHtml(paper.year)}</p>
      <h3>${escapeHtml(paper.title)}</h3>
      <p>${escapeHtml(paper.authors)}</p>
      <p class="card-meta">${escapeHtml(paper.venue)}</p>
    </article>
  `).join("");

  guiContactCopy.textContent = `${portfolio.name} is based in ${portfolio.location} and is ${portfolio.target.toLowerCase()}.`;
  guiContactLinks.innerHTML = `
    <a href="mailto:${escapeHtml(portfolio.email)}"><i data-lucide="mail"></i><span>Email</span></a>
    <a href="${escapeHtml(portfolio.github)}" target="_blank" rel="noreferrer"><i data-lucide="github"></i><span>GitHub</span></a>
    <a href="${escapeHtml(portfolio.linkedin)}" target="_blank" rel="noreferrer"><i data-lucide="linkedin"></i><span>LinkedIn</span></a>
    <a href="${escapeHtml(portfolio.resume)}" target="_blank" rel="noreferrer"><i data-lucide="file-text"></i><span>Resume</span></a>
  `;

  renderIcons();
}

function helpCommand(args) {
  const requested = (args[0] || "").toLowerCase();

  if (requested && commands[requested]) {
    const command = commands[requested];
    return message(`help ${requested}`, [command.description, `Usage: ${command.usage}`]);
  }

  return block(`
    <p class="kicker">help</p>
    <p class="muted">Run commands by typing below. Tab completes commands and paths.</p>
    <div class="grid">
      ${Object.entries(commands).map(([name, command]) => `
        <article class="item">
          <div class="item-name">${escapeHtml(name)}</div>
          <div class="item-copy">${escapeHtml(command.description)}</div>
        </article>
      `).join("")}
    </div>
  `);
}

function historyCommand() {
  if (state.history.length === 0) {
    return message("history", ["No commands yet."]);
  }

  return block(`
    <p class="kicker">history</p>
    ${list(state.history.map((command, index) => `${index + 1}  ${command}`))}
  `);
}

function pwdCommand() {
  return message("pwd", [`/home/visitor/${promptPath().replace("~", "keshav")}`]);
}

function lsCommand(args) {
  const parts = pathParts(args[0] || ".");
  const node = getNode(parts);

  if (!node) {
    return message("ls", [`${args[0]}: No such file or directory`]);
  }

  if (node.type === "file") {
    return message("ls", [parts[parts.length - 1] || "~"]);
  }

  const names = Object.entries(node.children).map(([name, child]) => child.type === "dir" ? `${name}/` : name);
  return block(`
    <p class="kicker">ls ${escapeHtml(args[0] || promptPath())}</p>
    ${list(names)}
  `);
}

function cdCommand(args) {
  const target = args[0] || "~";
  const parts = pathParts(target);
  const node = getNode(parts);

  if (!node) {
    return message("cd", [`${target}: No such directory`]);
  }

  if (node.type !== "dir") {
    return message("cd", [`${target}: Not a directory`]);
  }

  state.cwd = parts;
  updateShellChrome();
  return message("cd", [`Moved to ${promptPath()}`]);
}

function catCommand(args) {
  const target = args[0];

  if (!target) {
    return message("usage", ["cat <file>", "Example: cat about.txt"]);
  }

  const parts = pathParts(target);
  const node = getNode(parts);

  if (!node) {
    return message("cat", [`${target}: No such file`]);
  }

  if (node.type !== "file") {
    return message("cat", [`${target}: Is a directory`]);
  }

  return node.read();
}

function openCommand(args) {
  const target = (args[0] || "").toLowerCase();
  const targets = {
    github: portfolio.github,
    linkedin: portfolio.linkedin,
    email: `mailto:${portfolio.email}`,
    resume: portfolio.resume
  };

  if (!target || !(target in targets)) {
    return message("open", ["Targets: github, linkedin, email, resume"]);
  }

  if (!targets[target]) {
    return message("open", [`${target} is not connected yet.`]);
  }

  window.open(targets[target], target === "email" ? "_self" : "_blank", "noreferrer");
  return message("open", [`Opening ${target}.`]);
}

async function copyCommand(args) {
  const target = (args[0] || "").toLowerCase();
  const values = {
    email: portfolio.email,
    phone: portfolio.phone,
    github: portfolio.github,
    linkedin: portfolio.linkedin
  };

  if (!target || !(target in values)) {
    return message("copy", ["Usage: copy email|phone|github|linkedin"]);
  }

  try {
    await navigator.clipboard.writeText(values[target]);
    return message("copy", [`Copied ${target}.`]);
  } catch (_error) {
    return message("copy", [`Copy unavailable. Value: ${values[target]}`]);
  }
}

function themeCommand(args) {
  const next = (args[0] || "").toLowerCase();

  if (!["matrix", "amber", "cyan"].includes(next)) {
    return message("theme", ["Available themes: matrix, amber, cyan", "Example: theme amber"]);
  }

  setTheme(next);
  return message("theme", [`Theme set to ${next}.`]);
}

function appearanceCommand(args) {
  const next = (args[0] || "").toLowerCase();

  if (!APPEARANCE_OPTIONS.includes(next)) {
    return message("appearance", ["Available appearances: system, light, dark", "Example: appearance light"]);
  }

  setAppearance(next);
  return message("appearance", [`Appearance set to ${next} (${state.appearance}).`]);
}

function echoCommand(args) {
  return block(`<p>${escapeHtml(args.join(" "))}</p>`);
}

const commands = {
  help: {
    description: "List every command, or show help for one command.",
    usage: "help [command]",
    run: helpCommand
  },
  about: {
    description: "Show who Keshav is.",
    usage: "about",
    run: aboutCommand
  },
  skills: {
    description: "Show skills. Optional filters: frontend, ui, backend, all.",
    usage: "skills [filter]",
    run: skillsCommand
  },
  projects: {
    description: "List projects. Optional filters: backend, java, spring, aws, ml, fullstack.",
    usage: "projects [tag]",
    run: projectsCommand
  },
  project: {
    description: "Show a single project by number.",
    usage: "project <number>",
    run: projectCommand
  },
  education: {
    description: "Show education timeline.",
    usage: "education",
    run: educationCommand
  },
  experience: {
    description: "Show practical learning and work timeline.",
    usage: "experience",
    run: experienceCommand
  },
  contact: {
    description: "Show contact links.",
    usage: "contact",
    run: contactCommand
  },
  resume: {
    description: "Show resume link status.",
    usage: "resume",
    run: resumeCommand
  },
  publications: {
    description: "Show research publications.",
    usage: "publications",
    run: publicationsCommand
  },
  neofetch: {
    description: "Print a profile system summary.",
    usage: "neofetch",
    run: neofetchCommand
  },
  ls: {
    description: "List virtual files and directories.",
    usage: "ls [path]",
    run: lsCommand
  },
  cd: {
    description: "Change virtual directory.",
    usage: "cd [path]",
    run: cdCommand
  },
  cat: {
    description: "Read a virtual portfolio file.",
    usage: "cat <file>",
    run: catCommand
  },
  pwd: {
    description: "Print current virtual path.",
    usage: "pwd",
    run: pwdCommand
  },
  open: {
    description: "Open a profile link.",
    usage: "open github|linkedin|email|resume",
    run: openCommand
  },
  copy: {
    description: "Copy contact info.",
    usage: "copy email|phone|github|linkedin",
    run: copyCommand
  },
  theme: {
    description: "Switch terminal theme.",
    usage: "theme matrix|amber|cyan",
    run: themeCommand
  },
  appearance: {
    description: "Switch color mode preference.",
    usage: "appearance system|light|dark",
    run: appearanceCommand
  },
  history: {
    description: "Show command history.",
    usage: "history",
    run: historyCommand
  },
  clear: {
    description: "Clear the terminal.",
    usage: "clear",
    run: () => ({ clear: true })
  },
  date: {
    description: "Show local date and time.",
    usage: "date",
    run: () => message("date", [new Date().toLocaleString()])
  },
  whoami: {
    description: "Print the current visitor user.",
    usage: "whoami",
    run: () => message("whoami", ["visitor"])
  },
  echo: {
    description: "Print text back to the terminal.",
    usage: "echo <text>",
    run: echoCommand
  },
  sudo: {
    description: "Request elevated access.",
    usage: "sudo <anything>",
    run: () => message("sudo", ["Permission denied. Visitor mode is enough to explore this portfolio."])
  },
  reboot: {
    description: "Restart the terminal session.",
    usage: "reboot",
    run: () => ({ reboot: true })
  }
};

const aliases = {
  "?": "help",
  commands: "help",
  cls: "clear",
  dir: "ls",
  type: "cat",
  edu: "education",
  journey: "experience",
  work: "experience",
  socials: "contact",
  links: "contact",
  papers: "publications",
  research: "publications",
  github: "open github",
  linkedin: "open linkedin",
  email: "open email",
  hire: "contact"
};

function resolveAlias(commandName, args) {
  const alias = aliases[commandName];

  if (!alias) {
    return { commandName, args };
  }

  const aliasParts = tokenize(alias);
  return {
    commandName: aliasParts[0],
    args: [...aliasParts.slice(1), ...args]
  };
}

async function runCommand(rawValue) {
  const raw = rawValue.trim();

  if (!raw) {
    return;
  }

  append(commandEcho(raw));
  state.history.push(raw);
  state.historyIndex = state.history.length;
  state.commandCount += 1;
  updateShellChrome();

  const tokens = tokenize(raw);
  const originalName = (tokens[0] || "").toLowerCase();
  const resolved = resolveAlias(originalName, tokens.slice(1));
  const command = commands[resolved.commandName];

  if (!command) {
    append(message("command not found", [`${originalName}: try "help"`]));
    return;
  }

  const result = await command.run(resolved.args);

  if (result && result.clear) {
    output.innerHTML = "";
    boot();
    return;
  }

  if (result && result.reboot) {
    state.cwd = [];
    output.innerHTML = "";
    updateShellChrome();
    boot();
    return;
  }

  append(result);
}

function boot() {
  append(block(`
    <p class="kicker">boot</p>
    <p class="title">Keshav Soni terminal portfolio</p>
    <p>Type a command and press Enter.</p>
    <p class="muted">Start with "help", "about", "projects", or "neofetch".</p>
  `));
}

function completePath(prefix) {
  const slashIndex = prefix.lastIndexOf("/");
  const basePath = slashIndex >= 0 ? prefix.slice(0, slashIndex + 1) : "";
  const partial = slashIndex >= 0 ? prefix.slice(slashIndex + 1) : prefix;
  const parentParts = pathParts(basePath || ".");
  const parent = getNode(parentParts);

  if (!parent || parent.type !== "dir") {
    return [];
  }

  return Object.entries(parent.children)
    .filter(([name]) => name.startsWith(partial))
    .map(([name, node]) => `${basePath}${name}${node.type === "dir" ? "/" : ""}`);
}

function showMatches(matches) {
  append(message("matches", [matches.join("  ")]));
}

function autocomplete() {
  const value = input.value;
  const tokens = tokenize(value);

  if (tokens.length <= 1 && !value.endsWith(" ")) {
    const current = (tokens[0] || "").toLowerCase();
    const matches = allCommandNames().filter((name) => name.startsWith(current));

    if (matches.length === 1) {
      input.value = `${matches[0]} `;
      updateInputWidth();
    } else if (matches.length > 1) {
      showMatches(matches);
    }

    return;
  }

  const commandName = (tokens[0] || "").toLowerCase();
  const currentArg = value.endsWith(" ") ? "" : tokens[tokens.length - 1] || "";

  if (["cat", "cd", "ls"].includes(commandName)) {
    const matches = completePath(currentArg);

    if (matches.length === 1) {
      input.value = `${commandName} ${matches[0]}${matches[0].endsWith("/") ? "" : " "}`;
      updateInputWidth();
    } else if (matches.length > 1) {
      showMatches(matches);
    }
  }

  if (commandName === "theme") {
    const matches = ["matrix", "amber", "cyan"].filter((theme) => theme.startsWith(currentArg));

    if (matches.length === 1) {
      input.value = `theme ${matches[0]} `;
      updateInputWidth();
    } else if (matches.length > 1) {
      showMatches(matches);
    }
  }

  if (commandName === "appearance") {
    const matches = APPEARANCE_OPTIONS.filter((appearance) => appearance.startsWith(currentArg));

    if (matches.length === 1) {
      input.value = `appearance ${matches[0]} `;
      updateInputWidth();
    } else if (matches.length > 1) {
      showMatches(matches);
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  updateInputWidth();
  runCommand(value);
});

input.addEventListener("input", updateInputWidth);

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();

    if (state.history.length === 0) {
      return;
    }

    state.historyIndex = Math.max(0, state.historyIndex - 1);
    input.value = state.history[state.historyIndex] || "";
    updateInputWidth();
    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();

    if (state.history.length === 0) {
      return;
    }

    state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
    input.value = state.history[state.historyIndex] || "";
    updateInputWidth();
    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
  }

  if (event.key === "Tab") {
    event.preventDefault();
    autocomplete();
  }

  if (event.ctrlKey && event.key.toLowerCase() === "l") {
    event.preventDefault();
    output.innerHTML = "";
    boot();
  }

  if (event.ctrlKey && event.key.toLowerCase() === "c") {
    event.preventDefault();
    append(commandEcho(`${input.value} ^C`));
    input.value = "";
    updateInputWidth();
  }
});

document.querySelectorAll("[data-run]").forEach((button) => {
  button.addEventListener("click", () => {
    runCommand(button.dataset.run || "");
    chooseMode("terminal");
    input.focus();
  });
});

document.querySelectorAll("[data-mode-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseMode(button.dataset.modeChoice || "choice");
  });
});

document.querySelectorAll("[data-mode-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseMode(button.dataset.modeSwitch || "choice");
  });
});

document.querySelectorAll("[data-appearance-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setAppearance(button.dataset.appearanceChoice || "system");
  });
});

if (appearanceMedia) {
  const updateSystemAppearance = () => {
    if (state.appearancePreference === "system") {
      setAppearance("system", { persist: false });
    }
  };

  if (typeof appearanceMedia.addEventListener === "function") {
    appearanceMedia.addEventListener("change", updateSystemAppearance);
  } else if (typeof appearanceMedia.addListener === "function") {
    appearanceMedia.addListener(updateSystemAppearance);
  }
}

screen.addEventListener("click", () => {
  input.focus();
});

const initialMode = window.location.hash === "#terminal"
  ? "terminal"
  : window.location.hash === "#gui"
    ? "gui"
    : "choice";

renderGuiPortfolio();
setAppearance(loadAppearancePreference(), { persist: false });
setTheme(loadTheme());
updateShellChrome();
updateClock();
updateInputWidth();
setInterval(updateClock, 1000);
boot();
setActiveMode(initialMode);
window.addEventListener("load", renderIcons);
