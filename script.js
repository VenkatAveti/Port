// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (dark default)
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeIcon.textContent = isLight ? "☀" : "☾";
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

const openMenu = () => {
  mobileMenu.classList.add("show");
  mobileMenu.setAttribute("aria-hidden", "false");
};
const closeMenu = () => {
  mobileMenu.classList.remove("show");
  mobileMenu.setAttribute("aria-hidden", "true");
};

menuBtn?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
mobileMenu?.addEventListener("click", (e) => { if (e.target === mobileMenu) closeMenu(); });
document.querySelectorAll(".mm__link").forEach(a => a.addEventListener("click", closeMenu));
