// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (starts light like julius.fm vibe)
const btn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");

if (saved === "dark") document.body.classList.add("dark");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Active nav link (simple)
const links = document.querySelectorAll(".nav__link");
const sections = ["about","work","more"].map(id => document.getElementById(id));

const onScroll = () => {
  const y = window.scrollY + 110;
  let current = "about";
  for (const s of sections) {
    if (s && s.offsetTop <= y) current = s.id;
  }
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};

window.addEventListener("scroll", onScroll);
onScroll();
