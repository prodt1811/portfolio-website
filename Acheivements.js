const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;

}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown",isDragging)
carousel.addEventListener("mousemove",dragging)