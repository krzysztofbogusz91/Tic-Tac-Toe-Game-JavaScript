const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;


//sets game timmig; 
setInterval(game, 1000 / 60);

function lines() {
    //lines Y
    ctx.fillStyle = 'green'
    ctx.fillRect(178, 0, 4, 540);
    ctx.fillStyle = 'green'
    ctx.fillRect(362, 0, 4, 540);

    //linesX
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 178, 540, 4);

    ctx.fillStyle = 'green'
    ctx.fillRect(0, 362, 540, 4);
}

function eks() {
    ctx.moveTo(360, 180);
    ctx.lineTo(180, 360);

    //need to work on it some more

    ctx.moveTo(180, 180);
    ctx.lineTo(360, 360);
    ctx.stroke();
    ctx.strokeStyle = "black";
}

function ring() {

    ctx.beginPath();
    //ctx.arc(90/X, 90/Ycoordinate, 70/radius, 0, 2 * Math.PI);
    ctx.arc(90, 90, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "red";
}

function game() {
    lines();
    ring();
    eks();

}
