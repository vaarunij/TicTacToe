var cell;
var symbol = "O";
var numMoves = 0;
var xCount = 0;
var oCount = 0;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var currentMove = "O";

function changeBox(cell) {
    startNow();
    currentMove = currentMove == "X" ? "O" : "X"
    if (cell.value == "") {
        cell.value = symbol;
        numMoves++;
        document.score.currentMove.value = currentMove;
    } else {
        alert("Pick another square");

    }
    if (checkWin()) {
        alert("Player " + cell.value + " wins! ")
        currentMove = "O";
        if (symbol == "X") {
            xCount++;
            document.score.xscore.value = xCount;
            document.score.currentMove.value = currentMove;
        } else {
            oCount++;
            document.score.oscore.value = oCount;
            document.score.currentMove.value = currentMove;
        }
        clearBtn();

    }
    if (numMoves == 9) {
        alert("This game was a tie");

        clearBtn();
        return;
    } else {
        changeSymbol();
    }
}

function changeSymbol() {

    if (symbol == "O") {
        symbol = "X";

    } else {
        symbol = "O";

    }


}

function checkWin() {




    with(document.tictactoe) {
        if ((b1.value == "X") && (b2.value == "X") && (b3.value == "X"))
            return true;
        else if ((b4.value == "X") && (b5.value == "X") && (b6.value == "X"))
            return true;
        else if ((b7.value == "X") && (b8.value == "X") && (b9.value == "X"))
            return true;
        else if ((b1.value == "X") && (b4.value == "X") && (b7.value == "X"))
            return true;
        else if ((b2.value == "X") && (b5.value == "X") && (b8.value == "X"))
            return true;
        else if ((b3.value == "X") && (b6.value == "X") && (b9.value == "X"))
            return true;
        else if ((b1.value == "X") && (b5.value == "X") && (b9.value == "X"))
            return true;
        else if ((b3.value == "X") && (b5.value == "X") && (b7.value == "X"))
            return true;



        else if ((b1.value == "O") && (b2.value == "O") && (b3.value == "O"))
            return true;
        if ((b4.value == "O") && (b5.value == "O") && (b6.value == "O"))
            return true;
        if ((b7.value == "O") && (b8.value == "O") && (b9.value == "O"))
            return true;
        if ((b1.value == "O") && (b4.value == "O") && (b7.value == "O"))
            return true;
        if ((b2.value == "O") && (b5.value == "O") && (b8.value == "O"))
            return true;
        if ((b3.value == "O") && (b6.value == "O") && (b9.value == "O"))
            return true;
        if ((b1.value == "O") && (b5.value == "O") && (b9.value == "O"))
            return true;
        if ((b3.value == "O") && (b5.value == "O") && (b7.value == "O"))
            return true;

    }
}

function clearBtn() {
    document.tictactoe.b1.value = "";
    document.tictactoe.b2.value = "";
    document.tictactoe.b3.value = "";
    document.tictactoe.b4.value = "";
    document.tictactoe.b5.value = "";
    document.tictactoe.b6.value = "";
    document.tictactoe.b7.value = "";
    document.tictactoe.b8.value = "";
    document.tictactoe.b9.value = "";
    symbol = "O";
    numMoves = 0;
    currentMove = "O";
    clearInterval(gameTimer);
}

function erase() {
    xCount = 0;
    oCount = 0;

    alert("All square! Have fun!");
}



function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    var gameTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Player 1 : " + document.getElementById("oscore").value + " Player 2 : " + document.getElementById("xscore").value + " Game Over! ");


        }
    }, 1000);

}

function startNow() {

    var threeMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(threeMinutes, display);
    startNow = function() {};
};