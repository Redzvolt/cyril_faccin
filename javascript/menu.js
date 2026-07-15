const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".croix");

openMenu.addEventListener("click", () => {
  document.querySelector(".menu_links").style.display = "flex";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  document.querySelector(".menu_links").style.display = "none";
  openMenu.style.display = "flex";
});
