// show menu mobile
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav_toggle", "nav_menu");

// remove menu saat di klik
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// link menu aktif saat di scrol
// const areas = document.querySelectorAll("area[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   areas.forEach(current => {
//     const areaHeight = current.offsetHeight;
//     const areaTop = current.offsetTop - 50;
//     areaId = current.getAttribute("id");

//     if (scrollY > areaTop && scrollY <= areaTop + areaHeight) {
//       document
//         .querySelector(".nav-menu a[href*=" + areaId + "]").classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav-menu a[href*=" + areaId + "]").classList.remove("active-link");
//     }
//   });
// }

// window.addEventListener("scroll", scrollActive);

// change background header
function scrollHeader() {
  const nav = document.getElementById("f-header");

  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// dark theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// active theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(`.home-text, .home-img, 
            .about-content, .about-img, 
            .tool-cont, .skill-cont, 
            .work-cont, .work-img, 
            .message-cont, .footer-cont, 
            .footer-copy, .title`, {
    interval: 100,});
