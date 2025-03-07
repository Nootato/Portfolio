const menuOpen = document.querySelector(".menu-toggle"); // gets the button that opens(toggles) the menu
const menuClose = document.querySelector(".menu-close"); // gets the button that closes the menu
const menuMobile = document.querySelector(".menu-mobile"); // gets the menu itself
const overlay = document.querySelector(".overlay"); // gets the overlay (shaded area outside of the menu)

function openMenu() { // function to be called when pressing the menu open button
    menuMobile.classList.add("active"); // the menu is shown
    overlay.style.display = "block"; // the overlay is shown
}

function closeMenu() {
    menuMobile.classList.remove("active");
    overlay.style.display = "none";
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu)
overlay.addEventListener("click", closeMenu)