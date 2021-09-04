let canvas;
let ctx;

function createCanvas(id = 'none', width = 600, height = 400) {
    if (id !== 'none') {
        canavs = document.querySelector(`#${id}`);
    } else {
        canvas = document.querySelector('canvas');
    }
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
}

function fillRect(x, y, width, height, color = 'white') {
    ctx.color = color;
    ctx.fillRect(x, y, width, height);
}

function rect(x, y, width, height, strokeColor = 'black') {
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, width, height);
}

function strokedRect(x, y, width, height, color = 'white', strokeColor = 'black') {
    fillRect(x, y, width, height, color);
    rect(x, y, width, height, strokeColor);
}

function dot(x, y, radius, color = 'white') {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function circle(x, y, radius, color = 'white') {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function strokedDot(x, y, radius, color = 'white', strokeColor = 'black') {
    dot(x, y, radius, color);
    circle(x, y, radius, strokeColor);
}

function backGround(red = 255, blue = 255, green = 255, alpha = 1.0) {
    alpha = (alpha < 0 || alpha > 1) ? 1.0 : alpha;
    const color = `rgba(${red}, ${blue}, ${green}, ${alpha})`
    fillrect(0, 0, canvas.width, canvas.height, color);
}

function clearScreen(bgColor = 'white') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    fillrect(0, 0, canvas.width, canvas.height, bgColor);
}

function line(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();
}

function strokeWeight(weight) {
    ctx.lineWidth = weight;
}

function strokeColor(color) {
    ctx.strokeStyle = color;
}

function setColor(color) {
    ctx.fillStyle = color;
}