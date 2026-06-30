const scroll = document.getElementById("scrollup");

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
