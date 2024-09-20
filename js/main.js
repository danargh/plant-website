// let $ = require("jquery");
// import * as $ from "jquery";
// let L = require("leaflet");
// module jquery

// NAVIGATION
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("item__text--active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("item__text--active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// SEARCH BAR
let searchBar = document.querySelector(".nav__search-bar-label");
searchBar.addEventListener("click", function () {
  document
    .querySelector(".nav__search-bar-input")
    .classList.toggle("nav__search-bar-input--show");
});

// UBAH BACKGROUND HEADER SAAT SCROLL
function scrollHeader() {
  let header = document.getElementById("header");
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ACCORDION
const accordionItems = document.querySelectorAll(".accord__items");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accord__button");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accord__content--open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".accord__text");

  if (item.classList.contains("accord__content--open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accord__content--open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accord__content--open");
  }
};

// // DROPDOWN-USER
// let toggleUser = document.querySelector(".nav__user-toggle");
// toggleUser.addEventListener("click", function () {
//    document
//       .querySelector(".nav__user-dropdown")
//       .classList.toggle("nav__user-dropdown--show");
// });

// MAPS
let map = L.map("contact-us__maps").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yV54Ll0lWZg3f0S6ceFN",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// SCROLL REVEAL ANIMATION
// animasi agar saat buka website, terdapat animasi yang memunculkan konten
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__header, .faqs`);
sr.reveal(`.home__bg`, {
  delay: 500,
});
sr.reveal(`.home__social`, {
  delay: 600,
});
sr.reveal(`.about-us__img, .contact-us__content`, {
  origin: "left",
});
sr.reveal(`.about-us__header, .contact-us__header`, {
  origin: "right",
});
sr.reveal(`.product__card, .footer, .category__container`, {
  interval: 100,
});
