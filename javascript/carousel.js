const lgnext = document.getElementById("lgnext");
const lgprev = document.getElementById("lgprev");
const lgimages = document.querySelectorAll(".images_projet").item(0).querySelectorAll(".image_container");
const lgmarker = document.querySelectorAll(".scrollbar").item(0).querySelectorAll(".marker");

const psnext = document.getElementById("psnext");
const psprev = document.getElementById("psprev");
const psimages = document.querySelectorAll(".images_projet").item(1).querySelectorAll(".image_container");
const psmarker = document.querySelectorAll(".scrollbar").item(1).querySelectorAll(".marker");

let lgindex = 0;
let psindex = 0;

const classes = ((image, marker, index, images, scrollbar) => {
  image.classList.remove("active");
  marker.classList.remove("active_marker");
  let current = images.item(index);
  let currentmarker = scrollbar.item(index);
  current.classList.add("active");
  currentmarker.classList.add("active_marker");
  lgindex = index;
  psindex = index;
})

const condition = ((number, index, images, scrollbar) => {
  let image = document.querySelectorAll(".active").item(number);
  let marker = document.querySelectorAll(".active_marker").item(number);
  if (index >= images.length) {
    index = 0;
    let image = images.item(5);
    let marker = scrollbar.item(5);
  } if (index < 0) {
    index = images.length - 1;
    let image = images.item(0);
    let marker = scrollbar.item(0);
  }
  classes(image, marker, index, images, scrollbar);
});

lgnext.addEventListener("click", () => {
  lgindex += 1;
  condition(0, lgindex, lgimages, lgmarker);
});

lgprev.addEventListener("click", () => {
  lgindex -= 1;
  condition(0, lgindex, lgimages, lgmarker);
});

psnext.addEventListener("click", () => {
  psindex += 1;
  condition(1, psindex, psimages, psmarker);
});

psprev.addEventListener("click", () => {
  psindex -= 1;
  condition(1, psindex, psimages, psmarker);
});

lgmarker.forEach((points) => {
  points.addEventListener("click", () => {
    index = Array.from(lgmarker).indexOf(points);
    condition(0, index, lgimages, lgmarker);
  });
});

psmarker.forEach((points) => {
  points.addEventListener("click", () => {
    index = Array.from(psmarker).indexOf(points);
    condition(1, index, psimages, psmarker);
  });
});
