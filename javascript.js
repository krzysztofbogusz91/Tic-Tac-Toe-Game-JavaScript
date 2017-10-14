// -- Canvas and game --//
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "lightgrey";
canvas.width = 540;
canvas.height = 540;

const cw = canvas.width;
const ch = canvas.height;

//sets game timmer;
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

var valCo;
var valPl = "X";
//for check if sopt is empty
var taken = false;

var winner = "";
var positon = "";
//array of winns positions for checkin and for Ai
var arrOfWins = [["I", "II", "III"], ["IV", "V", "VI"], ["VII", "VIII", "IX"], ["I", "IV", "VII"], ["II", "V", "VIII"], ["III", "VI", "IX"], ["I", "V", "IX"], ["VII", "V", "III"]];
// arrPosibleMoves - gives the posible computer or player moves!
var arrPosibleMoves = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


var aI;

/* -- Menu options --*/
var prom;
var showingMenu = true;
var showingWinScreen = false;

window.addEventListener('keydown', this.keyPress);
canvas.addEventListener('mousedown', handleMouseClick);
//on key press chose o||x
function keyPress(e) {
    var code = e.keyCode;
    console.log(code);
    if (code === 89) {
        player = "cros";
        showingMenu = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {

        player = "circ";
        showingMenu = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

}
//on click start new game
function handleMouseClick(evt) {
    if (showingWinScreen) {
        showingWinScreen = false;
        clearAll();
    }
}


// -- Canvas and game --//

// check if pased aray is close to winnig position
function isCloseToWinn(arr) {
    //for manpulating the give arr
    var editMe = [];

    arr.forEach(function (a) {
        //sets up a safe var for testing;
        editMe.push(a);
    });

    //test pushing vals to playerCordsMemoif winning than make it a new cords!
    arrPosibleMoves.forEach(function (a) {
        editMe.push(a);
        console.log(victoryOptions(editMe) + " a:" + a + " editMe:" + editMe);

        if (victoryOptions(editMe) === true) {
            positon = a;
            editMe.pop();
        } else {
            editMe.pop();
        }
    });

    if (positon !== "") {
        //return player winnig positon
        return positon;
    } else {
        //if player won't winn in next move return false;
        return false;
    }
}

//starts computer move
function computerMovesOne() {

    if (computerClick === false) {
        // makes sure computer always draws an circle loops unitl it find the empty spot;

        //if computer moves first than just switch for >=
        while (playerCordsMemo.length > computerCordsMemo.length) {
            computerDraws();
        }

        computerClick = true;
    }

}

//works on computer movment;
function computerDraws() {
    compLogic();
    if (player === "cros") {
        ring(arrCords[0], arrCords[1]);
    } else {
        eks(arrCords[0], arrCords[1]);
    }
}

//updates empty spots;
function clearSpots() {
    arrPosibleMoves = arrPosibleMoves.filter(function (a) {
        if (isItNotTakenComputer(a)) {
            return a;
        }
    });
}

function compLogic() {
    //updates empty spots;
    clearSpots();
    //computer shift to winning position if he see that this is winnig spot;
    if (isCloseToWinn(computerCordsMemo) !== false && arrPosibleMoves.indexOf(isCloseToWinn(computerCordsMemo)) !== -1) {
        valCo = positon;
    } else if (isCloseToWinn(playerCordsMemo) === false) {
        //gets random posible choice and sets sup cords;
        valCo = arrPosibleMoves[Math.floor(Math.random() * ((arrPosibleMoves.length - 1) - 0 + 1)) + 0];
    } else if (isCloseToWinn(playerCordsMemo) !== false && arrPosibleMoves.indexOf(positon) !== -1) {
        //if player is close to win put valCo there to block
        isCloseToWinn(playerCordsMemo);
        valCo = positon;
    } else {
        valCo = arrPosibleMoves[Math.floor(Math.random() * ((arrPosibleMoves.length - 1) - 0 + 1)) + 0];
    }

    if (valCo === "I") {
        x = 150;
        y = 150;
    } else if (valCo === "II") {
        y = 320;
        x = 50;
    } else if (valCo === "III") {
        y = 500;
        x = 150;
    } else if (valCo === "IV") {
        y = 150;
        x = 350;
    } else if (valCo === "V") {
        y = 350;
        x = 350;
    } else if (valCo === "VI") {
        y = 500;
        x = 350;
    } else if (valCo === "VII") {
        y = 150;
        x = 500;
    } else if (valCo === "VIII") {
        y = 340;
        x = 500;
    } else if (valCo === "IX") {
        y = 500;
        x = 500;
    }

    //updates computer memory spots;
    computerCordsMemo.push(valCo);
    //updates empty spots;
    clearSpots();
    console.log(arrPosibleMoves);
    console.log("ComputerLogic x,y" + x + y + valCo);
    return arrCords = [x, y];
}

//checks index's of computer and player memory for a passed val
function isItNotTakenComputer(val) {
    if (computerCordsMemo.indexOf(val) === -1 && playerCordsMemo.indexOf(val) === -1) {
        return true;
    } else {
        return false;
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

    }, false);

}

//function for updating player memory
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

}

//cheks if player spots is empty
function isItTaken(x, y) {
    if ((computerCordsMemo.indexOf(valPl) !== -1 && playerCordsMemo.indexOf(valPl) !== -1) && taken === false) {
        alert("taken!!!");
        taken = true;
        valPl = "X";

        //need to add restart player move from this spot! how?
    }
}

//looks for a winnig patern if there is one returns true
function victoryOptions(arr) {

    if (arr.indexOf("I") >= 0 && arr.indexOf("II") >= 0 && arr.indexOf("III") >= 0 ||
        arr.indexOf("IV") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VI") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("VIII") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("IV") >= 0 && arr.indexOf("VII") >= 0 ||
        arr.indexOf("II") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("VIII") >= 0 ||
        arr.indexOf("III") >= 0 && arr.indexOf("VI") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("I") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("IX") >= 0 ||
        arr.indexOf("VII") >= 0 && arr.indexOf("V") >= 0 && arr.indexOf("III") >= 0) {
        return true;
    } else {
        return false;
    }

}

function setUpWinner(arr) {
    //set up who is a winner;
    if (arrPosibleMoves.length === 0) {
        winner = "remis";
    } else if (arr === playerCordsMemo && victoryOptions(playerCordsMemo) === true) {
        winner = "player";
    } else if (arr !== playerCordsMemo && victoryOptions(computerCordsMemo) === true) {
        winner = "computer";
    }
    //if finds a winner or remis restart game and clear all var`s
    if (winner === "remis") {

        showingWinScreen = true;
        playerCordsMemo = [];
        computerCordsMemo = [];


    } else if (winner === "player") {

        showingWinScreen = true;
        playerCordsMemo = [];
        computerCordsMemo = [];


    } else if (winner === "computer") {

        showingWinScreen = true;
        playerCordsMemo = [];
        computerCordsMemo = [];

    }
}

//function for clearing up the board
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

//function for clearing cliked vars so palyer can move again;
function deblock() {
    cliked = false;
    computerClick = false;
}
//draws board lines
function lines() {
    //draws winnig screen
    if (showingWinScreen === true) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.height, canvas.width);
        ctx.fillStyle = "white";
        ctx.font = 'bold 50px Calibri';
        if (winner === "remis") {
            ctx.fillText(winner, 110, 200);
        } else {
            ctx.fillText(winner + " wins!!!", 110, 200);
        }

        ctx.font = 'italic 20px Calibri';
        ctx.fillText("click to continue", 10, 400);
        //draws menu start
    } else if (showingMenu === true) {

        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.height, canvas.width);
        ctx.fillStyle = "white";
        ctx.font = 'bold 120px Calibri';
        ctx.fillText("X || O", 110, 200);
        ctx.font = 'italic 25px Calibri';
        ctx.fillText("Do you want play as X ? Y / N", 10, 300);
        ctx.fillText("press button Y/N to continue as an X!", 10, 400);

        return;
        //draws game
    } else if (showingMenu === false) {

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
    setUpWinner(playerCordsMemo);
    setUpWinner(computerCordsMemo);
    lines();
    if (showingMenu === false) {
        playerClick();
        computerMovesOne()
        deblock();
    }
}
