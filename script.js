const themeToggle = document.getElementById("theme-toggle");
const themeToggleLabel = document.getElementById("theme-toggle-label");
const greeting = document.getElementById("greeting");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
let manualThemeChoice = false;

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggleLabel.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";
  themeColorMeta.content = isDark ? "#111721" : "#f8f7f4";
}

function updateByTime() {
  const hour = new Date().getHours();
  const nextGreeting = getGreeting(hour);

  if (greeting.textContent !== nextGreeting) {
    greeting.textContent = nextGreeting;
  }

  if (!manualThemeChoice) {
    setTheme(hour >= 18 || hour < 6);
  }
}

updateByTime();
setInterval(updateByTime, 60_000);

themeToggle.addEventListener("click", () => {
  manualThemeChoice = true;
  setTheme(!document.body.classList.contains("dark-mode"));
});
