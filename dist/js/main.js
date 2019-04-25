//select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set inital State of menu
let showmenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  //   if (!showmenu) {
  //     menuBtn.classList.add("close");
  //     menu.classList.add("show");
  //     menuNav.classList.add("show");
  //     menuBranding.classList.add("show");
  //     navItems.forEach(item => item.classList.add("show"));
  //     showmenu = true;
  //   } else {
  //     menuBtn.classList.remove("close");
  //     menu.classList.remove("show");
  //     menuNav.classList.remove("show");
  //     menuBranding.classList.remove("show");
  //     navItems.forEach(item => item.classList.remove("show"));
  //     showmenu = false;
  //   }
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  menuBranding.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));
}
