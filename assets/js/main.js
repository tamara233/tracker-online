///////////////////////////////////////
// Scrolling events

const section1 = document.getElementById("image-over1");
const section2 = document.getElementById("users");

const sectionToZoom = document.getElementById("banner");
const sectionCoords = sectionToZoom.getBoundingClientRect();
const sectionTop = Math.ceil(sectionCoords.top + window.pageYOffset);

// On scroll add overlay
document.addEventListener("scroll", () => {
  if (
    window.scrollY > sectionTop &&
    window.scrollY < (sectionTop + sectionCoords.height) / 2
  ) {
    section1.classList.remove("hidden");
  }
});

///////////////////////////////////////
// Sticky navigation
const nav = document.getElementById("sticky--nav");
const navContainer = document.querySelector("#navigation");
const navHeight = nav.getBoundingClientRect().height;

window.onscroll = function () {
  myFunction();
};

let sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("stick");
  } else {
    nav.classList.remove("stick");
  }
}

///////////////////////////////////////
// Reveal sections
// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
