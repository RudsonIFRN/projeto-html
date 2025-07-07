const carousel = document.querySelector(".news-carousel");
const totalItems = carousel.children.length;
let index = 0;

setInterval(() => {
  index = (index + 1) % totalItems;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 5000);