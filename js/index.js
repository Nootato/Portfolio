const heroSection = document.getElementById('hero');
const fixedImage = document.getElementById('pic-fixed');
const option = { threshold: 0.1 };

function intersect(entries) {
    const [entry] = entries; //intersectionObserver förväntar sig en Array, inte endast ett element
    fixedImage.classList.toggle('visible', !entry.isIntersecting);
}

const observer = new IntersectionObserver(intersect, option);

observer.observe(heroSection);

// Where I learnt about IntersectionObserver https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
