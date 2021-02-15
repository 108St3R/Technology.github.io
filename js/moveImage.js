const el = document.querySelector(".course-slide");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX * 1.8 + + "px";
  el.style.backgroundPositionY = -e.offsetY + 80 + "px";
});