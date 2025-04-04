const container = document.querySelector("#modal-container");
const imgs = document.querySelectorAll(".modal-img");
const activationImgs = document.querySelectorAll(".modal-activation-img");
const closeBtn = document.querySelector("#close-button");
const caption = document.querySelector("#modal-caption");
const navBar = document.querySelector("nav");
const scrollToContents = document.querySelector(".more-content");

let activeImg = false;

function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - 50;
    window.scrollTo({top: scrollTop, behavior: "smooth"});
}

activationImgs.forEach((activationImg, index) => {  // Corrected 'forEach'
    const img = imgs[index];
    const scrollToContent = scrollToContents[index];

    activationImg.addEventListener("click", () => {
        if (!activeImg) {
            activeImg = activationImg;
            container.style.display = "block";
            img.style.display = "block";
            caption.innerHTML = img.alt;
            navBar.style.opacity = "0"
        }
    });

    closeBtn.addEventListener("click", () => {
        activeImg = false;
        container.style.display = "none";
        img.style.display = "none";
        caption.innerHTML = "";
        navBar.style.opacity = "";
        scrollToElement(scrollToContent);
    });
});
