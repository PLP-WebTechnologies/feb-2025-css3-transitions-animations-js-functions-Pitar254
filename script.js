// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
  });
  
  const themeToggleBtn = document.getElementById("themeToggle");
  
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
  });
  
  // Function to apply theme with animation
  function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  
    // Optional: trigger animation (can be more advanced)
    document.querySelector(".container").style.animation = "fadeIn 0.5s ease-in";
  }
  