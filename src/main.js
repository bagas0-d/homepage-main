const item = document.querySelectorAll(".item");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const navContainer = document.getElementById("nav-container");
const mainBanner = document.getElementById("banner");


function addHidden() {
    navContainer.classList.add("hidden")
    closeMenu.classList.add("hidden")
}

function removeHidden() {
    navContainer.classList.remove("hidden")
    closeMenu.classList.remove("hidden")
}

item.forEach(i => 
    i.addEventListener("click", addHidden)
)

closeMenu.addEventListener("click", addHidden)
menu.addEventListener("click", removeHidden)


function updateBanner() {
  if (window.innerWidth >= 768) {
    mainBanner.src = "../assets/images/image-web-3-desktop.jpg";
  } else {
    mainBanner.src = "../assets/images/image-web-3-mobile.jpg";
  }
}

updateBanner(); // jalan pertama
window.addEventListener('resize', updateBanner);