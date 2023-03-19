const navItems = document.querySelectorAll(".nav-item");
const filterItems = document.querySelectorAll(".filter-item");
const gameItems = document.querySelectorAll(".item-card");

const consoleFilters = document.querySelector(
  "[data-filter-name='console']"
).children;
const genreFilters = document.querySelector(
  "[data-filter-name='genre']"
).children;

// Highlight Consoles nav-link
navItems.forEach((item) => {
  if (!item.classList.contains("yellow") && item.textContent === "Games") {
    item.classList.replace("nav-item", "yellow");
  } else {
    item.classList.remove("yellow");
  }
});

filterItems.forEach((filterItem) => {
  filterItem.addEventListener("click", () => {
    const checkBox = filterItem.querySelector("input[type='checkbox']");

    // Enable/disable checkbox when item is clicked
    if (checkBox.checked) {
      checkBox.checked = false;
    } else {
      checkBox.checked = true;
    }

    updateItems();
  });
});

const updateItems = function () {
  // Get console names from selected filters
  const consoles = [...consoleFilters]
    .filter(
      (console) => console.querySelector("input[type='checkbox']").checked
    )
    .map((item) => item.textContent.trim());

  // Get genre names from selected filters
  const genres = [...genreFilters]
    .filter((genre) => genre.querySelector("input[type='checkbox']").checked)
    .map((item) => item.textContent.trim());

  gameItems.forEach((item) => {
    if (
      // Display item if respective console/genre is selected
      (consoles.includes(item.dataset.console) || consoles.length < 1) &&
      (JSON.parse(item.dataset.genre).some((genre) => genres.includes(genre)) ||
        genres.length < 1)
    ) {
      item.parentElement.style.display = "inline";
    } else {
      item.parentElement.style.display = "none";
    }
  });
};
