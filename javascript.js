// notes to my self
// need to write logic for computer moves
// //need to add restart player move from this spot! how??


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;


//sets game timmig;

var inter = setInterval(game, 1000 / 60);


var player = "cros";
var computer = "circle";

//making sure player moves only onece
var cliked = false;
var computerClick = false;

//saves all player and computer movments in memory;
var playerCordsMemo = [];
var computerCordsMemo = [];

var x;
var y;

//set up cords for drawing comp cords
var arrCords = [];
var arrCordsPropose = [];

var valCo = "X";
var valPl = "X";
//for check if sopt is empty
var taken = false;

//array of winns positions for checkin and for Ai
var arrOfWins = [["I", "II", "III"], ["IV", "V", "VI"], ["VII", "VIII", "IX"], ["I", "IV", "VII"], ["II", "V", "VIII"], ["III", "VI", "IX"], ["I", "V", "IX"], ["VII", "V", "III"]];

var aI = [];

function positionsToCords(val) {
    //somethin is wrong not all are geting drawn
    //change it for switch statment
    if (val === "I") {
        x = 150;
        y = 150;
    } else if (val === "II") {
        y = 320;
        x = 50;
    } else if (val === "III") {
        y = 500;
        x = 150;
    } else if (val === "IV") {
        y = 150;
        x = 350;
    } else if (val === "V") {
        y = 350;
        x = 350;
    } else if (val === "VI") {
        y = 500;
        x = 350;
    } else if (val = "VII") {
        y = 150;
        x = 500;
    } else if (val === "VIII") {
        y = 350;
        x = 500;
    } else if (val === "IX") {
        y = 500;
        x = 500;
    }
    console.log(x, y)
    return arrCords = [x, y];
}


//will look trough arrays for pattern maching if any of winng options will exisit it will pass mesege;
function victoryOptions(arr) {

    var winner = "";
    if (arr.length > 5) {
        winner = "REMIS";
        alert(winner);
        clearAll();
    } else if (arr === playerCordsMemo) {
        winner = "Player";
    } else {
        winner = "Computer";
    }

    if (arr.indexOf("I") >= 0 && arr.indexOf("II") >= 0 && arr.indexOf("III") >= 0 ||
        arr.indexOf("IV") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VI") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("VIII") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("IV") >= 0 && arr.indexOf("VII") >= 0 ||
        arr.indexOf("II") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VIII") >= 0 ||
        arr.indexOf("III") >= 0 && arr.indexOf("VI") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("III") >= 0) {
        alert(winner + " " + "wins the game!");
        playerCordsMemo = [];
        computerCordsMemo = [];
        clearAll();

    }

    /*SWITCH STATMENT
    
    switch(a)
    
    */
}

//function for clearing up the board!

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    valCo = "X";
    valPl = "X";
    cliked = false;
    computerClick = false;
    x;
    y;
    window.location.reload(true);
}

function getNewCords() {

    /*for (var i = 0; i < 25; i++) {
        x = Math.floor(Math.random() * (540 - 0 + 1)) + 0;
        y = Math.floor(Math.random() * (540 - 0 + 1)) + 0;

        aI[i].push(x);
        aI[i].push(y);

    }*/
    ///give it couple difrent trys save in arr, check player memo cords and firtly block a player, also try to get as close to maching positon as posible;
    //also check computer cods memo for maching positions and chose the closet to making it a winning position;

    if (playerCordsMemo.length <= 1 && computerCordsMemo.length <= 1) {
        x = Math.floor(Math.random() * (540 - 0 + 1)) + 0;
        y = Math.floor(Math.random() * (540 - 0 + 1)) + 0;


    } else {

        x = Math.floor(Math.random() * (540 - 0 + 1)) + 0;
        y = Math.floor(Math.random() * (540 - 0 + 1)) + 0;

    }



    return arrCords = [x, y];

}

//works on computer movment;
function computerMoves() {
    // get random cords 
    getNewCords();
    x = arrCords[0];
    y = arrCords[1];

    if (y <= 171 && x <= 171) {
        valCo = "I";
    } else if (y <= 171 && x <= 370) {
        valCo = "IV";
    } else if (y <= 171 && x <= 530) {
        valCo = "VII";
    } else if (y <= 350 && x <= 171) {
        valCo = "II";
    } else if (y <= 350 && x <= 370) {
        valCo = "V";
    } else if (y <= 350 && x <= 530) {
        valCo = "VIII";
    } else if (y <= 530 && x <= 171) {
        valCo = "III";
    } else if (y <= 530 && x <= 370) {
        valCo = "VI";
    } else if (y <= 530 && x <= 530) {
        valCo = "IX";
    }

    //flatend cords and manipulate it so it eiter bloks a player or drives to winnpositions as close as posible to the orginal cords. 


    //check if spot is empty, so computer is not playing empty spots
    while (computerCordsMemo.indexOf(valCo) === -1 && playerCordsMemo.indexOf(valCo) === -1) {
        //positionsToCords(valCo);
        if (player === "cros") {
            computerCordsMemo.push(valCo);
            ring(arrCords[0], arrCords[1]);
        } else {
            computerCordsMemo.push(valCo);
            eks(arrCords[0], arrCords[1]);
        }
    }



}


//gets mouse position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
}
//function for clearing cliked vars so palyer can move again;
function deblock() {
    cliked = false;
    computerClick = false;
}

//mousemove to get cors while moving mouse; get pos on click
function playerClick() {
    canvas.addEventListener('click', function (evt) {
        var mousePos = getMousePos(canvas, evt);

        taken = false;

        //need to work some more on this mechanism
        isItTaken(mousePos.x, mousePos.y);
        if (player === "cros" && !cliked && taken === false) {
            playerCheckSpot(mousePos.x, mousePos.y);

            eks(mousePos.x, mousePos.y)

            //changes cliked so player can have only one move!
            cliked = true;

            taken = false;



        } else if (!cliked && taken === false) {
            playerCheckSpot(mousePos.x, mousePos.y);
            ring(mousePos.x, mousePos.y);

            //changes cliked so player can have only one move!
            cliked = true;
            taken = false;
        }




        if (computerClick === false) {
            // prevents from blocking player move on the last spot may be need to change for the first player when comp starts than player has 4 moves....
            if (computerCordsMemo.length < 4) {
                // makes sure computer always draws an circle loops unitl it find the empty spot;
                while (playerCordsMemo.length > computerCordsMemo.length) {
                    computerMoves();
                }
            }
            computerClick = true;
        }

    }, false);


}

function isItTaken(x, y) {
    if ((computerCordsMemo.indexOf(valPl) !== -1 && playerCordsMemo.indexOf(valPl) !== -1) && taken === false) {
        alert("taken!!!");
        taken = true;
        valPl = "X";

        //need to add restart player move from this spot! how?
    }
}
//cheks if player spots is empty
function playerCheckSpot(x, y) {

    if (y <= 171 && x <= 171) {
        valPl = "I";
        playerCordsMemo.push(valPl);

    } else if (y <= 171 && x <= 370) {
        valPl = "IV";
        playerCordsMemo.push(valPl);

    } else if (y <= 171 && x <= 530) {
        valPl = "VII";
        playerCordsMemo.push(valPl);

    } else if (y <= 350 && x <= 171) {
        valPl = "II";
        playerCordsMemo.push(valPl);

    } else if (y <= 350 && x <= 370) {
        valPl = "V";
        playerCordsMemo.push(valPl);

    } else if (y <= 350 && x <= 530) {
        valPl = "VIII";
        playerCordsMemo.push(valPl);

    } else if (y <= 530 && x <= 171) {
        valPl = "III";
        playerCordsMemo.push(valPl);

    } else if (y <= 530 && x <= 370) {
        valPl = "VI";
        playerCordsMemo.push(valPl);

    } else if (y <= 530 && x <= 530) {
        valPl = "IX";
        playerCordsMemo.push(valPl);

    }

    console.log("valPl: " + valPl);
    console.log("valCo: " + valCo);
}


//draws board lines
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
//draws x
function eks(x, y) {

    if (y <= 171 && x <= 171) {
        //I
        var X = 170;
        var Y = 10;
        var X2 = 170;
        var Y2 = 10;
    } else if (y <= 171 && x <= 370) {
        //IV
        var X = 170;
        var Y = 10;
        var X2 = 190;
        var Y2 = 360;
    } else if (y <= 171 && x <= 530) {
        //VII");
        var X = 170;
        var Y = 10;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 350 && x <= 171) {
        //II");
        var X = 350;
        var Y = 190;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 350 && x <= 370) {
        //V");
        var X = 350;
        var Y = 190;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 350 && x <= 530) {
        //VIII");
        var X = 350;
        var Y = 190;
        var X2 = 530;
        var Y2 = 370;
    } else if (y <= 530 && x <= 171) {
        //"III");
        var X = 530;
        var Y = 370;
        var X2 = 170;
        var Y2 = 20;
    } else if (y <= 530 && x <= 370) {
        //"VI");
        var X = 530;
        var Y = 370;
        var X2 = 360;
        var Y2 = 190;
    } else if (y <= 530 && x <= 530) {
        //"IX");
        var X = 530;
        var Y = 370;
        var X2 = 530;
        var Y2 = 370;
    } else {
        return false;
    }
    //draws X
    ctx.moveTo(X2, Y);
    ctx.lineTo(Y2, X);

    ctx.moveTo(Y2, Y);
    ctx.lineTo(X2, X);
    ctx.stroke();

}

function ring(x, y) {

    if (y <= 171 && x <= 171) {
        //I
        var corX = 90;
        var corY = 90;
    } else if (y <= 171 && x <= 370) {
        //IV pozycja
        var corX = 270;
        var corY = 90;
    } else if (y <= 171 && x <= 530) {
        //VII pozycja
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
        //IX pozycja
        var corX = 450;
        var corY = 450;
    }

    //draws circle
    ctx.beginPath();
    //ctx.arc(90/X, 90/Ycoordinate, 70/radius, 0, 2 * Math.PI);
    ctx.arc(corX, corY, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "black";
}


//draws a game
function game() {
    lines();
    playerClick();
    deblock();
    victoryOptions(playerCordsMemo);
    victoryOptions(computerCordsMemo);
}
