let pages = [
    { id: "#circle", className: 'show' },
    { id: ".result-card", className: "show" },
    { id: "#choose", className: "show"}
]

const fadeIn = function (element, className) {
    const elements = document.querySelectorAll(element);
    elements.forEach((el) => {
        setTimeout(() => {
            el.classList.add(className);
        }, 500);
    });
};

window.onload = function () {
    for (const page of pages) {
        fadeIn(page.id, page.className);
    }
}


