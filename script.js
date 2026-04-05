const track = document.querySelector(".project-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const cardWidth = track.querySelector(".project-card").offsetWidth + 20; // gap 포함

next.addEventListener("click", () => {
  track.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  track.scrollBy({ left: -cardWidth, behavior: "smooth" });
});
