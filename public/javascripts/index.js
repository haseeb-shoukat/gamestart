const previousBtn = document.querySelector(".left-icon");
const nextBtn = document.querySelector(".right-icon");
const images = [
  "hogwarts-legacy-banner",
  "mw-2-banner",
  "spider-man-banner",
  "uncharted-4-banner",
];

let state = [3, 0, 1];
let flag = true;

previousBtn.addEventListener("click", (e) => {
  if (flag === false) return;
  flag = false;
  state = decrement(state);
  slideRight();
  assignSources();
});

nextBtn.addEventListener("click", (e) => {
  if (flag === false) return;
  flag = false;
  state = increment(state);
  slideLeft();
  assignSources();
});

const slideLeft = function () {
  document.querySelector(".current-banner").classList.add("slide-left");
  document.querySelector(".next-banner").classList.add("slide-in");
};

const slideRight = function () {
  document.querySelector(".current-banner").classList.add("slide-right");
  document.querySelector(".previous-banner").classList.add("slide-in");
};

const decrement = function (state) {
  state = [state[0] - 1, state[1] - 1, state[2] - 1];
  state = state.map((item) => (item < 0 ? 3 : item));
  return state;
};

const increment = function (state) {
  state = [state[0] + 1, state[1] + 1, state[2] + 1];
  state = state.map((item) => (item > 3 ? 0 : item));
  return state;
};

const assignSources = async function () {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  flag = true;
  removeClasses();
  document.querySelector(".previous-banner").src = `/images/banners/${
    images[state[0]]
  }.jpeg`;
  document.querySelector(".current-banner").src = `/images/banners/${
    images[state[1]]
  }.jpeg`;
  document.querySelector(".next-banner").src = `/images/banners/${
    images[state[2]]
  }.jpeg`;
};

const removeClasses = function () {
  let slideRight = document.querySelector(".slide-right");
  let slideLeft = document.querySelector(".slide-left");
  let slideIn = document.querySelector(".slide-in");

  if (slideRight) {
    slideRight.classList.remove("slide-right");
  }
  if (slideLeft) {
    slideLeft.classList.remove("slide-left");
  }
  if (slideIn) {
    slideIn.classList.remove("slide-in");
  }
};
