var whiteP = "w";
var blackP = "b"
var curP = whiteP;

//Game over function
var gO = false;

var board;

//board dimensions
var rows = 18;
var columns = 18;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    //creates rows
    for (let r = 0; r < rows; r++){
        let row = [];
        //creates columns
        for(let c = 0; c < columns; c++){

            row.push(' ');
            let tile = document.createElement("div");

            //inserts row and column position to tile
            tile.id = r.toString() + "-" +  c.toString();

            // adds css class
            tile.classList.add("tile");

            document.getElementById("board").append(tile);
            
        }
        board.push(row);
    }
}