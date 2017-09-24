const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;

var player = "cros";
var computer = "circle";


//cordinats of the circle

var pos1X = 450;
var pos1Y = 455;
//I(90,90),II(80, 270), III(80, 450); II row(80, 270, 450)

//cordinates of the x middle X 350, Y 190 

var X = 170;
var Y = 10;
var X2 = 190;
var Y2 = 360;
/*
// I (
var X = 170;
var Y = 10;
var X2 = 170;
var Y2 = 10;
) 
II(
var X = 350;
var Y = 190;
var X2 =170;
var Y2 = 20;
)
III(
var X = 530;
var Y = 370;
var X2 = 170;
var Y2 = 20;
)

IV(

var X = 170;
var Y = 10;
var X2 = 190;
var Y2 = 360;

)
V(
var X = 350;
var Y = 190;
var X2 = 360;
var Y2 = 190;
)
VI(
var X = 530;
var Y = 370;
var X2 = 360;
var Y2 = 190;
)
VII(
var X = 170;
var Y = 10;
var X2 = 530;
var Y2 = 370;
)
VIII(
var X = 350;
var Y = 190;
var X2 = 530;
var Y2 = 370;

)
IX ( X,X2 = 530; Y,Y2 = 370)

*/
//sets game timmig; 
setInterval(game, 1000 / 60);

function lines() {
    //lines Y
    ctx.fillStyle = 'green'
    ctx.fillRect(174, 0, 4, 540);
    ctx.fillStyle = 'green'
    ctx.fillRect(364, 0, 4, 540);

    //linesX
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 174, 540, 4);

    ctx.fillStyle = 'green'
    ctx.fillRect(0, 364, 540, 4);
}

function eks() {
    ctx.moveTo(X2, Y);
    ctx.lineTo(Y2, X);

    ctx.moveTo(Y2, Y);
    ctx.lineTo(X2, X);
    ctx.stroke();

}




function ring(corX, corY) {

    ctx.beginPath();
    //ctx.arc(90/X, 90/Ycoordinate, 70/radius, 0, 2 * Math.PI);
    ctx.arc(corX, corY, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "black";
}

function game() {
    lines();
    ring(pos1X, pos1Y);
    eks();

}
