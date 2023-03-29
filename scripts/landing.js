const circle = document.querySelector('#circle');
const circleWidth = circle.offsetWidth;
const circleHeight = circle.offsetHeight;

const centerCircle = function () {
    circle.style.top = `calc(50% - ${circleHeight / 2}px)`;
    circle.style.left = `calc(50% - ${circleWidth / 2}px)`;
}

centerCircle();
window.addEventListener("resize", centerCircle);