const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => {
    const id = link.getAttribute("href").slice(1);
    const anchor = document.getElementById(id);
    return { id, anchor };
  })
  .filter((item) => item.anchor);

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const setActiveLink = () => {
  const current = sections
    .filter((section) => section.anchor.getBoundingClientRect().top <= 120)
    .pop();

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", Boolean(current && link.getAttribute("href") === `#${current.id}`));
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);
