const dropdowns = document.querySelectorAll(".spooky-item");
const dropdownContents = document.querySelectorAll(".spooky-item-content");

let firstDropdown = document.querySelector("#first-spooky-item");
let activeDropdown = firstDropdown;
firstDropdown.style.backgroundColor = "#e950ff";

const showMoreContents = document.querySelectorAll(".show-more-content");
const hideMoreContents = document.querySelectorAll(".hide-more-content");
const moreContents = document.querySelectorAll(".more-content");



function scrollToElement(element) {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY + rect.top - 42;
  window.scrollTo({top: scrollTop, behavior: "smooth"});
}

function showMoreContent(i) {
  showMoreContents[i].style.display = "none";
  hideMoreContents[i].style.display = "inline-block";
  moreContents[i].style.display = "block";
}

function hideMoreContent(i) {
  hideMoreContents[i].style.display = "none";
  showMoreContents[i].style.display = "inline-block";
  moreContents[i].style.display = "none";
}

function hideAllMoreContent() {
  moreContents.forEach((_content, i) => hideMoreContent(i));
}

dropdowns.forEach((dropdown, index) => {
  const content = dropdownContents[index]; 

  dropdown.addEventListener("click", () => {
    if (activeDropdown == dropdown) {
      dropdown.style.backgroundColor = "";
      dropdown.classList.remove("active");
      hideAllMoreContent();
      content.style.display = "none";
      activeDropdown = null;
    } 
    else {
      if (activeDropdown) {
        const previousIndex = Array.from(dropdowns).indexOf(activeDropdown);
        dropdownContents[previousIndex].style.display = "none";
        hideMoreContent(previousIndex);
        activeDropdown.style.backgroundColor = "";
        activeDropdown.classList.remove("active");
      }

      content.style.display = "block";
      dropdown.style.backgroundColor = "#e950ff";
      dropdown.classList.add("active");
      activeDropdown = dropdown;
      scrollToElement(content);
    }
  });

  dropdown.addEventListener("mouseenter", () => {
    if (!activeDropdown) {
      content.style.display = "block";
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (!activeDropdown) {
      content.style.display = "none";
    }
  });

  showMoreContents[index].addEventListener("click", () => {  
    showMoreContent(index);
    scrollToElement(content);
  });
  hideMoreContents[index].addEventListener("click", () => {
    hideMoreContent(index);
    scrollToElement(content);
  });
});