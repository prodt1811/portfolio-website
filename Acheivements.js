const carousel = document.querySelector(".carousel");

const dragging =(e) => {
    console.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove",dragging)