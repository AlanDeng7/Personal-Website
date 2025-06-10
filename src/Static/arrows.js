const arrow = document.getElementById("scroll-down-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
});
