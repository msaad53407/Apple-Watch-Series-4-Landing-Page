// Importing DOM elements
const contactForm = document.querySelector(".contact__form"),
  subscriptionNotificationModal = document.querySelector(
    ".subscription__notification"
  ),
  scrollButton = document.querySelector(".scroll__button"),
  headerMenuHamburger = Array.from(
    document.querySelectorAll(".header__menu-mobile__hamburger")
  ),
  headerMenuMobile = document.querySelector(".header__menu-mobile__items");

// AOS setup
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  duration: 1000,
  offset: 100,
});

// Notification Modal code
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  contactForm.reset();

  subscriptionNotificationModal.classList.add(
    "subscription__notification-active"
  );
  setTimeout(() => {
    subscriptionNotificationModal.classList.remove(
      "subscription__notification-active"
    );
  }, 2000);
});

// Scroll to top button code
scrollButton.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (e.currentTarget.scrollY > 1000) {
    scrollButton.classList.add("scroll__button-active");
  }
  if (e.currentTarget.scrollY < 1000) {
    scrollButton.classList.remove("scroll__button-active");
  }
});

// Header Menu Mobile Toggle code
headerMenuHamburger.forEach((icon) => {
  icon.addEventListener("click", function () {
    headerMenuMobile.classList.toggle("header__menu-mobile-active");
    console.log(headerMenuMobile.getBoundingClientRect());
  });
});
