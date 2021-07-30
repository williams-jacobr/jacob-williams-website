"use strict";

// const nav = document.querySelector(".nav");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const allSections = document.querySelectorAll(".section");

// const renderCV = function () {
//   modal.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
//   document.body.classList.toggle("no__scroll");
// };

// nav.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains("nav__link")) {
//     const id = e.target.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }

//   if (e.target.classList.contains("nav__cv")) {
//     renderCV();
//   }
// });

// // To close modal and overlay
// overlay.addEventListener("click", renderCV);

//BUG Need to install properly with npm
// let map;

// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     const { latitude, longitude } = position.coords;
//     map = L.map("map").setView([latitude, longitude], 13);

//     console.log(map);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     L.marker([latitude, longitude])
//       .addTo(map)
//       .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//       .openPopup();
//   },
//   function () {
//     alert("Unable to find location");
//   }
// );

// Slider

// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const maxSlide = slides.length - 1;

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
//     );
//   };
//   goToSlide(0);

//   const looper = async function (nLoops, seconds = 5) {
//     const wait = function (seconds) {
//       return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//       });
//     };

//     for (let i = 0; i < nLoops; i++) {
//       for (let j = 0; j <= maxSlide; j++) {
//         goToSlide(j);
//         await wait(seconds);
//       }
//     }
//   };
//   looper(100);
// };
// slider();

// // allSections.style.transform("translateX(50vh)");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) return;

//   // entry.target.style.padding = "0 0 0 0";
//   observer.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.style.padding = "100vh 0 0 0";
// });
