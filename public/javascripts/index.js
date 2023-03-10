const gameButtons = document.querySelectorAll("[data-game-btn]");

gameButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.gameBtn === "next" ? 1 : -1;
    const games = btn.closest("[data-games]");
    const active = games.querySelector("[data-active]");
    let index = [...games.children].indexOf(active) + offset;
    if (index >= games.children.length) index = 0;
    if (index < 0) index = games.children.length - 1;

    const newActive = games.children[index];

    active.children[0].className = "game-info";
    newActive.children[0].className = "game-info";
    active.children[1].className = "game-img";
    newActive.children[1].className = "game-img";

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
