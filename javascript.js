// notes to my self
// need to set up win function when and who wins the game?
// - need to figure out how to look for patterns of win. 
//- need to by comparing arrays agein or any other posibitly;
// need to write logic for computer moves
//


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;





var player = "cros";
var computer = "circle";

var cliked = false;
//cordinats of the circle



//cordinates of the x middle X 350, Y 190 
/*
var X = 170;
var Y = 10;
var X2 = 190;
var Y2 = 360;

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

function eks(x, y) {

    if (y <= 171 && x <= 171) {
        // I pozycja
        var X = 170;
        var Y = 10;
        var X2 = 170;
        var Y2 = 10;
    } else if (y <= 171 && x <= 370) {
        //IV pozycja
        var X = 170;
        var Y = 10;
        var X2 = 190;
        var Y2 = 360;
    } else if (y <= 171 && x <= 530) {
        //IV pozycja
        var X = 170;
        var Y = 10;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 350 && x <= 171) {
        // II pozycja
        var X = 350;
        var Y = 190;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 350 && x <= 370) {
        //V pozycja
        var X = 350;
        var Y = 190;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 350 && x <= 530) {
        //VIII pozycja
        var X = 350;
        var Y = 190;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 530 && x <= 171) {
        // III pozycja
        var X = 530;
        var Y = 370;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 530 && x <= 370) {
        //VI pozycja
        var X = 530;
        var Y = 370;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 530 && x <= 530) {
        //X pozycja
        var X = 530;
        var Y = 370;
        var X2 = 530;
        var Y2 = 370;
    } else {
        return false;
    }
    ctx.moveTo(X2, Y);
    ctx.lineTo(Y2, X);

    ctx.moveTo(Y2, Y);
    ctx.lineTo(X2, X);
    ctx.stroke();

}



function ring(x, y) {


    if (y <= 171 && x <= 171) {
        // I pozycja
        var corX = 90;
        var corY = 90;
    } else if (y <= 171 && x <= 370) {
        //IV pozycja
        var corX = 270;
        var corY = 90;
    } else if (y <= 171 && x <= 530) {
        //IV pozycja
        var corX = 450;
        var corY = 90;
    } else if (y <= 350 && x <= 171) {
        // II pozycja
        var corX = 90;
        var corY = 270;
    } else if (y <= 350 && x <= 370) {
        //V pozycja
        var corX = 270;
        var corY = 270;
    } else if (y <= 350 && x <= 530) {
        //VIII pozycja
        var corX = 450;
        var corY = 270;
    } else if (y <= 530 && x <= 171) {
        // III pozycja
        var corX = 90;
        var corY = 450;
    } else if (y <= 530 && x <= 370) {
        //VI pozycja
        var corX = 270;
        var corY = 450;
    } else if (y <= 530 && x <= 530) {
        //X pozycja
        var corX = 450;
        var corY = 450;
    } else {
        return false;
    }


    ctx.beginPath();
    //ctx.arc(90/X, 90/Ycoordinate, 70/radius, 0, 2 * Math.PI);
    ctx.arc(corX, corY, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "black";
}

//start writing the logic;
function computerMoves() {

}
//mousemove to get cors while moving mouse; get pos on click
function playerClick() {
    canvas.addEventListener('click', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ' :X' + ',' + mousePos.y + ' :Y';

        if (player === "cros" && !cliked) {
            eks(mousePos.x, mousePos.y)
            cliked = true;
        } else if (!cliked) {
            ring(mousePos.x, mousePos.y);
        }
        console.log(message);
    }, false);



}


//gets mouse position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
}

//draws a game
function game() {
    lines();
    playerClick();

}
