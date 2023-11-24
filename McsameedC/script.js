const btn = document.querySelector(".btn-mobile-nav");
const nav = document.querySelector(".btn-mobile-nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const btnEl = document.querySelector(".submenubtn");
const navEl = document.querySelector(".nav-lists-secondary");

btnEl.addEventListener("click", function () {
  navEl.classList.toggle("submenu-open");
});

const sectionHeroEl = document.querySelector("section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// SWIPPER
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: "true",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
  },
});
