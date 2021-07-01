const refs = {
    body: document.querySelector("body"),
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
};

let moving = false;
let elem;
let coords = [];
let rectangles = [];

refs.button.addEventListener('click', handlerSymbols);

function handlerSymbols() {
    let inputValue = refs.input.value.trim();
    let textItems = Array.from(inputValue);

    textItems.forEach((item, index) => {
        refs.body.insertAdjacentHTML("beforeend", `<div id="${index}" style="left: ${20 * index}px">${item}</div>`);
        const rect = document.getElementById(`${index}`);
        rect.addEventListener("mousedown", onDrag, false);
        rect.addEventListener("mouseup", onDrop);

        rectangles.push(rect);
    });

    refs.input.value = '';
}


function moveElement(e) {
    let newX = e.clientX - 10;
    let newY = e.clientY - 10;
    elem.style.left = newX + "px";
    elem.style.top = newY + "px";
}

function onDrag(e) {
    if (moving) {
        document.removeEventListener("mousemove", moveElement);
        moving = !moving;
        return;
    }

    coords = [e.clientX, e.clientY];

    moving = !moving;
    elem = this;
    document.addEventListener("mousemove", moveElement, false);
}

function onDrop(e) {
    var curRect = e.target.getBoundingClientRect();
    rectangles.forEach(r => {
        if (e.target != r) {
            var rec = r.getBoundingClientRect();
            var overlap = !(curRect.right < rec.left ||
                curRect.left > rec.right ||
                curRect.bottom < rec.top ||
                curRect.top > rec.bottom)

            if (overlap) {
                r.style.left = coords[0] + "px";
                r.style.top = coords[1] + "px";
            }
        }
    });
}