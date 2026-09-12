/* =========================================================
   WEBSITE FUNCTIONALITY
========================================================= */

const $ = (selector) => document.querySelector(selector);

const menuToggle = $("#menuToggle");
const navMenu = $("#navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});

/* Social links */
const socialLinks = $("#socialLinks");
const socialIcons = {
  linkedin: "fab fa-linkedin-in",
  github: "fab fa-github",
  scholar: "fas fa-graduation-cap",
  orcid: "fab fa-orcid"
};

Object.entries(portfolioData.social).forEach(([key, url]) => {
  if (!url || url === "#") return;
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", key);
  a.innerHTML = `<i class="${socialIcons[key]}"></i>`;
  socialLinks.appendChild(a);
});

/* Projects */
const projectsContainer = $("#projectsContainer");
const filters = $("#projectFilters");

function renderProjects(category = "All") {
  projectsContainer.innerHTML = "";

  portfolioData.projects
    .filter(project => category === "All" || project.category === category)
    .forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <a href="${project.link}" ${project.link !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy"
              onerror="this.parentElement.classList.add('image-missing')">
            <div class="map-fallback"><i class="fas fa-map"></i><span>Add project image</span></div>
          </div>
          <div class="project-body">
            <span class="project-category">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          </div>
        </a>`;
      projectsContainer.appendChild(card);
    });
}

const categories = ["All", ...new Set(portfolioData.projects.map(p => p.category))];
categories.forEach(category => {
  const button = document.createElement("button");
  button.className = `filter-btn ${category === "All" ? "active" : ""}`;
  button.textContent = category;
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderProjects(category);
  });
  filters.appendChild(button);
});
renderProjects();

/* Maps */
const mapsContainer = $("#mapsContainer");
portfolioData.maps.forEach(map => {
  const card = document.createElement("article");
  card.className = "map-card";
  card.innerHTML = `
    <div class="map-image">
      <img src="${map.image}" alt="${map.title}" loading="lazy"
        onerror="this.parentElement.classList.add('image-missing')">
      <div class="map-fallback"><i class="fas fa-map-marked-alt"></i><span>Add map image</span></div>
    </div>
    <div class="map-body"><h3>${map.title}</h3><p>${map.caption}</p></div>`;
  mapsContainer.appendChild(card);
});

/* Publications */
const publicationsContainer = $("#publicationsContainer");
portfolioData.publications.forEach((item, index) => {
  const article = document.createElement("article");
  article.className = "publication";
  article.innerHTML = `
    <span class="publication-number">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <span class="publication-type">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.link && item.link !== "#" ? `<a class="text-link" href="${item.link}" target="_blank" rel="noopener noreferrer">View publication <i class="fas fa-arrow-right"></i></a>` : ""}
    </div>`;
  publicationsContainer.appendChild(article);
});

/* Contact */
const contactLinks = $("#contactLinks");
const contacts = [
  ["fas fa-envelope", "Email", portfolioData.contact.email, `mailto:${portfolioData.contact.email}`],
  ["fab fa-linkedin", "LinkedIn", "Connect with me", portfolioData.contact.linkedin],
  ["fab fa-github", "GitHub", "View my repositories", portfolioData.contact.github],
  ["fas fa-graduation-cap", "Google Scholar", "View academic profile", portfolioData.contact.scholar]
];

contacts.forEach(([icon, label, text, href]) => {
  const a = document.createElement("a");
  a.href = href;
  if (!href.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  a.innerHTML = `<i class="${icon}"></i><div><span>${label}</span><strong>${text}</strong></div>`;
  contactLinks.appendChild(a);
});

/* Footer */
$("#year").textContent = new Date().getFullYear();

/* Navbar shadow */
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});