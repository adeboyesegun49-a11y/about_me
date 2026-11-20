const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const darkModeOn = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = darkModeOn ? "Use light mode" : "Use dark mode";
});