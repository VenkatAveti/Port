// Smooth scroll + reveal
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

// Theme toggle
const btn = document.getElementById("themeToggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});
