const refs = {
    body: document.querySelector("body"),
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
};


var div = document.getElementsByTagName('DIV')
refs.button.addEventListener('click', handlerSymbols);
function handlerSymbols() {
    let inputValue = refs.input.value.trim();
    let textItems = Array.from(inputValue);

    textItems.forEach(handlerItems);
    
    function handlerItems(item, index) {
        refs.body.insertAdjacentHTML("beforeend", `<div id="${index}" class="elem${index}">${item}</div>`);
        const symbol = document.getElementById(`${index}`);
        symbol.addEventListener("mousedown", initialClick, false);2
        // symbol.addEventListener("mouseup", collision);
    }

    refs.input.value = '';
}

// function collision($div1, $div2) {
//       var x1 = $div1.offset().left;
//       var y1 = $div1.offset().top;
//       var h1 = $div1.outerHeight(true);
//       var w1 = $div1.outerWidth(true);
//       var b1 = y1 + h1;
//       var r1 = x1 + w1;
//       var x2 = $div2.offset().left;
//       var y2 = $div2.offset().top;
//       var h2 = $div2.outerHeight(true);
//       var w2 = $div2.outerWidth(true);
//       var b2 = y2 + h2;
//       var r2 = x2 + w2;

//       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//       return true;
//     }

function divOnDiv() {
    coords.map(element => {
        if (element.tagName === 'DIV') {
            element.style.left = coords[0] + "px";
            element.style.top = coords[1] + "px";
            console.log(element)
        }
    })
}

let moving = false;
let elem;
let x;
let y;
let coords = [];

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

    x = e.clientX;
    y = e.clientY;
    coords.push([x, y]);

    moving = !moving;
    elem = this;

    document.addEventListener("mousemove", moveElement, false);
}
