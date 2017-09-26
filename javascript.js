// notes to my self
// need to set up win function when and who wins the game?
// - need to figure out how to look for patterns of win. 
//- need to by comparing arrays agein or any other posibitly;
// need to write logic for computer moves
//

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;

var player = "cros";
var computer = "circle";

//making sure player moves only onece
var cliked = false;

//saves all player and computer movments in memry;
var crosCordsMemo = [];
var circleCordsMemo = [];


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

//will look trough arrays for pattern maching if any of winng options will exisit it will pass mesege;
function victoryOptions(arr) {

    var winner = "";

    if (arr === crosCordsMemo) {
        winner = "CROS";
    } else {
        winner = "CIRCLE";
    }

    if (arr.indexOf("I") >= 0 && arr.indexOf("II") >= 0 && arr.indexOf("III") >= 0 ||
        arr.indexOf("IV") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VI") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("VIII") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("IV") >= 0 && arr.indexOf("VII") >= 0 ||
        arr.indexOf("II") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VIII") >= 0 ||
        arr.indexOf("III") >= 0 && arr.indexOf("VI") >= 0 && arr.indexOf("IV") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("III") >= 0) {
        alert(winner + " " + "wins the game!");
        crosCordsMemo = [];
        circleCordsMemo = [];
        clearAll();

    }

}

//function for clearing up the board!

function clearAll() {

}

//start writing the logic;
function computerMoves() {

}

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
        crosCordsMemo.push("I");
        var X = 170;
        var Y = 10;
        var X2 = 170;
        var Y2 = 10;
    } else if (y <= 171 && x <= 370) {
        crosCordsMemo.push("IV");
        var X = 170;
        var Y = 10;
        var X2 = 190;
        var Y2 = 360;
    } else if (y <= 171 && x <= 530) {
        crosCordsMemo.push("VII");
        var X = 170;
        var Y = 10;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 350 && x <= 171) {
        crosCordsMemo.push("II");
        var X = 350;
        var Y = 190;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 350 && x <= 370) {
        crosCordsMemo.push("V");
        var X = 350;
        var Y = 190;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 350 && x <= 530) {
        crosCordsMemo.push("VIII");
        var X = 350;
        var Y = 190;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 530 && x <= 171) {
        crosCordsMemo.push("III");
        var X = 530;
        var Y = 370;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 530 && x <= 370) {
        crosCordsMemo.push("VI");
        var X = 530;
        var Y = 370;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 530 && x <= 530) {
        crosCordsMemo.push("IX");
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
        circleCordsMemo.push("I");
        var corX = 90;
        var corY = 90;
    } else if (y <= 171 && x <= 370) {
        //IV pozycja
        circleCordsMemo.push("IV");
        var corX = 270;
        var corY = 90;
    } else if (y <= 171 && x <= 530) {
        //VII pozycja
        circleCordsMemo.push("VII");
        var corX = 450;
        var corY = 90;
    } else if (y <= 350 && x <= 171) {
        // II pozycja
        circleCordsMemo.push("II");
        var corX = 90;
        var corY = 270;
    } else if (y <= 350 && x <= 370) {
        //V pozycja
        circleCordsMemo.push("V");
        var corX = 270;
        var corY = 270;
    } else if (y <= 350 && x <= 530) {
        //VIII pozycja
        circleCordsMemo.push("VIII");
        var corX = 450;
        var corY = 270;
    } else if (y <= 530 && x <= 171) {
        // III pozycja
        circleCordsMemo.push("III");
        var corX = 90;
        var corY = 450;
    } else if (y <= 530 && x <= 370) {
        //VI pozycja
        circleCordsMemo.push("VI");
        var corX = 270;
        var corY = 450;
    } else if (y <= 530 && x <= 530) {
        //IX pozycja
        circleCordsMemo.push("IX");
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

//gets mouse position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
}

//mousemove to get cors while moving mouse; get pos on click
function playerClick() {
    canvas.addEventListener('click', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ' :X' + ',' + mousePos.y + ' :Y';

        if (player === "cros" && !cliked) {
            eks(mousePos.x, mousePos.y)

            console.log(crosCordsMemo);
            //changes cliked so player can have only one move!
            cliked = true;
        } else if (!cliked) {
            ring(mousePos.x, mousePos.y);
        }
        console.log(message);
    }, false);



}

//draws a game
function game() {
    lines();
    playerClick();
    victoryOptions(crosCordsMemo);
    victoryOptions(circleCordsMemo);
}
