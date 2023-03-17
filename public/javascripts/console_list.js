const navItems = document.querySelectorAll(".nav-item");

// Highlight Consoles nav-link
navItems.forEach((item) => {
  if (!item.classList.contains("yellow") && item.textContent === "Consoles") {
    item.classList.replace("nav-item", "yellow");
  } else {
    item.classList.remove("yellow");
  }
});
