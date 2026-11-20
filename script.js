const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const darkModeOn = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = darkModeOn ? "Use light mode" : "Use dark mode";
});

const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();


if (hour < 12) {
 greeting.textContent = "Good morning, I'm Adeboye Oluwasegun Joseph";
 } else if (hour < 18) {
 greeting.textContent = "Good afternoon, I'm Adeboye Oluwasegun Joseph";
} else {
  greeting.textContent = "Good evening, I'm Adeboye Oluwasegun Joseph";
}


