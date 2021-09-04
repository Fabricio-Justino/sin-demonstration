const canvas = createCanvas();
const ctx = getContext();
let up;

clearScreen('black');

let x, y, radius;
x = 60, y = canvas.height / 2, radius = 50;

let angle = Math.PI/2;

const spots = [];

console.log(radiansToDeg(Math.PI));

update();

function update() {
    clearScreen('black');
    circle(x, y, radius, 'white');

    let point = {
        x: x + sin(angle) * radius,
        y: y + cos(angle) * radius,
        radius: radius - radius * (80 / 100),
        getArm() {
            return (x + y) - radius * 2;
        }
    };
    dot(point.x, point.y, point.radius, 'white');
    angle += 0.05;
    angle = (angle > Math.PI * 2) ? 0 : angle;

    line(point.x, point.y, point.getArm(), point.y);
    strokeColor('red');
    line(x + radius, y, canvas.width, y);
    strokeColor('white');
    spots.push({
        x: point.getArm(),
        y: point.y
    });
    render();
    up = requestAnimationFrame(update);
}

function stop() {
    cancelAnimationFrame(up);
}

function render() {
    ctx.beginPath();
    ctx.moveTo(spots[0].x, spots[0].y);

    for (let i = 0; i < spots.length; i++) {
        const spot = spots[i];
        ctx.lineTo(spot.x, spot.y);
        spot.x++;
    }
    
    if (spots.length > 410) spots.shift();
    
    ctx.stroke();
    ctx.closePath();
}