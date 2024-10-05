const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
  let paragraph = document.querySelector(".paragraph");
  paragraph.classList.toggle("hidden");
});
