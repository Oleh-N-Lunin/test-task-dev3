const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let width = 700, height = 700;

let mouse = {
    x: 0,
    y: 0,
    down: false,
};

let selected = false;

canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = '#d9ff9e';

context.fillStyle = '#985d5d';
context.strokeStyle = '#e6ff00';
context.lineWidth = 3;

let Runner = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Runner.prototype = {
    draw: function () {
        context.fillRunner(this.x, this.y, this.w, this.h);
    },

    stroke: function () {
        context.strokeRunner(this.x, this.y, this.w, this.h);
    },
};

const isCursorInRunner = function (runner) {
    return mouse.x > runner.x && mouse.x < runner.x + runner.w && mouse.y > runner.y && mouse.y < runner.y + runner.h;
};

let i, runner = [];
for (i = 0; i < 5; i++){
    runner.push(new Runner(50 + i * (50 + 20), 50, 50, 50));
}

setInterval(function () {
    context.clearRunner(0, 0, width, height);

    for (i in runner) {
        runner[i].draw();

        if (isCursorInRunner(runner[i])) {
        runner[i].stroke();
        }
    }

    if (selected) {
        selected.x = mouse.x;
        selected.y = mouse.y;
        selected.stroke();
    }
}, 30)

window.onmousemove = function () {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
};

window.onmousedown = function () {
    mouse.dowm = true;
    if (!selected) {
        let i;

        for (i in runner) {
            if (isCursorInRunner(runner[i])) {
                selected = runner[i]
            }
        }
    }
};

window.onmouseup = function () {
    mouse.dowm = false;
    selected = false;
};

