const refs = {
    body: document.querySelector("body"),
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
};

refs.button.addEventListener('click', handlerSymbols);

function handlerSymbols() {
    let inputValue = refs.input.value.trim();
    let textItems = Array.from(inputValue);

    textItems.forEach(handlerArray);
    
    function handlerArray(item, index) {
        refs.body.insertAdjacentHTML("beforeend", `<div id="${index}" class="elem${index}">${item}</div>`);
        const symbol = document.getElementById(`${index}`);
        symbol.addEventListener("mousedown", initialClick, false);
        console.log(symbol)
    }

    refs.input.value = '';
}

let moving = false;
let elem;

function moveElement(e) {
    let newX = e.clientX - 10;
    let newY = e.clientY - 10;

    elem.style.left = newX + "px";
    elem.style.top = newY + "px";
}

function initialClick(e) {
    if (moving) {
        document.removeEventListener("mousemove", moveElement);
        moving = !moving;
        return;
    }

    moving = !moving;
    elem = this;

    document.addEventListener("mousemove", moveElement, false);
}