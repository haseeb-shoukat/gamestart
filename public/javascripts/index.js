const gameButtons = document.querySelectorAll("[data-game-btn]");
const categorySwitcher = document.querySelector("[data-radio-box]");
const recentItems = document.querySelectorAll(".item-cards > item-card");

gameButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.gameBtn === "next" ? 1 : -1; // Offset when user presses next or prev buttons
    const games = btn.closest("[data-games]");
    const active = games.querySelector("[data-active]");
    let index = [...games.children].indexOf(active) + offset;

    // Reset index if exceeds total length
    if (index >= games.children.length) index = 0;
    if (index < 0) index = games.children.length - 1;

    const newActive = games.children[index];

    // Remove unwanted classNames
    active.children[0].className = "game-info";
    newActive.children[0].className = "game-info";
    active.children[1].className = "game-img";
    newActive.children[1].className = "game-img";

    // Add animation for prev and next actions
    if (offset === -1) {
      active.children[0].classList.add("rotateOutLeft");
      active.children[1].classList.add("rotateOutRight");
    } else {
      active.children[0].classList.add("rotateOutLeft");
      active.children[1].classList.add("rotateOutRight");
    }

    setTimeout(() => {
      delete active.dataset.active;
      newActive.dataset.active = true;
      if (offset === -1) {
        newActive.children[0].classList.add("rotateInLeft");
        newActive.children[1].classList.add("rotateInRight");
      } else {
        newActive.children[0].classList.add("rotateInLeft");
        newActive.children[1].classList.add("rotateInRight");
      }
    }, 1000);
  });
});

// Handle when user wants to switch view in Recently Added section
categorySwitcher.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className === "selected") return;

    // Change highlighted category
    categorySwitcher.querySelector(".selected").className = "";
    button.className = "selected";

    // Hide items not in selected category
    recentItems.forEach((item) => {
      if (item.dataset.collectionName != button.textContent.toLowerCase()) {
        item.display = flex;
      } else {
        item.display = none;
      }
    });
  });
});
