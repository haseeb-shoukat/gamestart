const readMore = document.querySelector(".read-more");
const fader = document.querySelector(".fader");
const textDescription = document.querySelector(".description-text");

let flag = false;

readMore.addEventListener("click", () => {
  if (flag === false) {
    readMore.textContent = "Read Less";
    fader.style.display = "none";
    textDescription.style.maxHeight = "none";
  } else {
    readMore.textContent = "Read More";
    fader.style.display = "block";
    textDescription.style.maxHeight = "100px";
  }
  flag = !flag;
});
