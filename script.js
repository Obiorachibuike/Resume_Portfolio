


  // Theme Toggle
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

toggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  toggle.textContent = next === "light" ? "🌞" : "🌙";
});

// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("show");
});

// Skills
const skills = [
  { name: 'React Native', icon: '📱' },
  { name: 'Expo', icon: '🌐' },
  { name: 'Node.js', icon: '☁️' },
  { name: 'Express.js', icon: '📊' },
  { name: 'MongoDB', icon: '📁' },
  { name: 'TensorFlow Lite', icon: '🤖' },
  { name: 'Figma', icon: '✏️' },
  { name: 'Git', icon: '📃' },
  { name: 'VS Code', icon: '⌘' },
  { name: 'JavaScript', icon: '💻' },
  { name: 'TypeScript', icon: '🖊️' }
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <span class="skill-icon">${skill.icon}</span>
    <h2 class="skill-title">${skill.name}</h2>

  `;
  skillsGrid?.appendChild(card);
});

// Projects
const projects = [
  {
    title: "Contacts Dashboard",
    description: "A mobile app for managing contacts with features like adding, editing, and deleting contacts.",
    github: "https://github.com/yourprofile/contacts-dashboard",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF01vH4BM0..."
  },
  {
    title: "Groova Music Player",
    description: "A music player app with a sleek UI, allowing users to browse and play their favorite songs.",
    github: "https://github.com/yourprofile/groova-music-player",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXLmPipZ0..."
  },
  {
    title: "Convo AI Chat App",
    description: "A chat application integrated with AI for intelligent conversations and enhanced user experience.",
    github: "https://github.com/yourprofile/convo-ai-chat-app",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbPaR5h7Xir..."
  }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-info">
      <div>
        <p class="project-title">${project.title}</p>
        <p class="project-description">${project.description}</p>
      </div>
      <a href="${project.github}" target="_blank" class="project-btn">
        <span>View on GitHub</span>
      </a>
    </div>
    <div class="project-img" style="background-image: url('${project.image}')"></div>
  `;
  projectsContainer?.appendChild(card);
});

// Education & Certifications
const educationData = [
  { title: "B.Sc. Chemistry, University of Lagos", subtitle: "2016 - 2020" },
  { title: "Certified Web Programmer, Tech Academy", subtitle: "2021" }
];

const certificationsData = [
  { title: "Web Development Bootcamp, CodeCamp", subtitle: "2022" },
  { title: "JavaScript Algorithms & Data Structures, CodeCamp", subtitle: "2023" }
];

function renderInfoList(containerId, dataList) {
  const container = document.getElementById(containerId);
  dataList.forEach(item => {
    const div = document.createElement("div");
    div.className = "info-card";
    div.innerHTML = `
      <div class="info-details">
        <p class="info-title">${item.title}</p>
        <p class="info-subtitle">${item.subtitle}</p>
      </div>
    `;
    container?.appendChild(div);
  });
}

renderInfoList("educationContainer", educationData);
renderInfoList("certificationContainer", certificationsData);

// Gallery
  const galleryPhotos = [
    { title: "Photo 1", url: "./image/image_1.jpeg" },
    { title: "Photo 2", url: "./image/image_2.jpeg" },
    { title: "Photo 3", url: "./image/image_3.jpeg" },
    { title: "Photo 4", url: "./image/image_4.jpeg" },
 ];

const galleryContainer = document.getElementById("galleryContainer");

galleryPhotos.forEach(({ title, url }) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
    <div class="gallery-image" style="background-image: url('${url}')"></div>
    <p class="gallery-title">${title}</p>
  `;
  galleryContainer?.appendChild(item);
});

// Contact Form Validation
const form = document.getElementById("contactForm");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const messageError = messageInput.nextElementSibling;

  // Reset
  [nameInput, emailInput, messageInput].forEach(input => {
    input.classList.remove("error");
    input.nextElementSibling.classList.add("hidden");
  });

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    nameError.classList.remove("hidden");
    isValid = false;
  }

  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("error");
    emailError.classList.remove("hidden");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.add("error");
    messageError.classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    form.reset();
  }
});
