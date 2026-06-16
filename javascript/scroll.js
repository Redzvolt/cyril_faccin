const scrollup = document.getElementById("scrollup");

scrollup.addEventListener("click", (event) => {
  event.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
