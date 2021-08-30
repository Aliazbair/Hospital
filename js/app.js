let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

//  onClick toggle the menu
menu.onclick = () => {
  // toggle fa time icon
  menu.classList.toggle("fa-times");
  // add active class to navbar
  navbar.classList.toggle("active");
};

// onscroll remove the fa times icon and active class
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
