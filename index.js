const refs = {
    wrapper: document.querySelector(".wrapper"),
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
    text: document.querySelector(".text"),
};

refs.button.addEventListener('click', onClickRenderText);

function onClickRenderText(event) {
    event.preventDefault();
    refs.input.innerHTML = "";
    refs.text.textContent = refs.input.value.trim();
    let textItems = refs.text.textContent.split('');
    console.log(textItems)
    for (let i = 0; i < textItems.length; i++){
        const p = document.createElement('p');
        p.classList.add("element")
        refs.wrapper.appendChild(p)
    }
};


// refs.wrapper.addEventListener("mousemove", getClickPosition, false);

// function getClickPosition (e) { 
//  const runner = document.querySelector(".element");
//  let parentPosition = getPosition(e.currentTarget);
//  let xPosition = e.clientX - parentPosition.x - (runner.clientWidth);
//  let yPosition = e.clientY - parentPosition.y - (runner.clientHeight);
//  runner.style.left = xPosition + "px";
//  runner.style.top = yPosition + "px";
// }

// function getPosition(element) { 
//  let xPos = 0;
//  let yPos = 0;
//  while (element) {
//   if (element.tagName === "BODY") {
//    let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
//    let yScroll = element.scrollTop || document.documentElement.scrollTop;
//    xPos += (element.offsetLeft - xScroll + element.clientLeft);
//    yPos += (element.offsetTop - yScroll + element.clientTop);
//   } 
//   else {
//    xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//    yPos += (element.offsetTop - element.scrollTop + element.clientTop);
//   }
//   element = element.offsetParent;
//  }
//  return { x: xPos, y: yPos };
// }


let mouse = {
    x: 0,
    y: 0,
    dowm: false,
};

let selected = false;

window.onmousemove = function (e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
};

window.onmousedown = function () {
    mouse.down = true;
};

window.onmouseup = function () {
    mouse.down = false;
}