const arrowBtns = document.querySelectorAll(".wrapper i");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel];


arrowBtns.forEach(btn => {
    btn.addEventListener("click", ()=> {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});