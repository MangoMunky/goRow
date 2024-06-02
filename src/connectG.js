//need to add a timer limit

var whiteP = "White";
var blackP = "Black"
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

            

            //checks if pressed a tile
            tile.addEventListener("click", setPiece);

            document.getElementById("board").append(tile);
            
        }
        board.push(row);
    }
}

function setPiece() {

    //testing audio playing feature
    /* var x = document.getElementById("myAudio"); 
    x.play(); */
    

    //checks if game is over
    if(gO){
        return
    }
    
    

    //splits x and y components
    let tile = this;
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    

    //console.log(board[r][c]);

    //makes sure you dont place a tile on another tile
    if(board[r][c] != blackP && board[r][c] != whiteP){

        //console.log(localStorage.getItem("OF", "on"));
        //console.log(cowboy);
        console.log(localStorage.getItem("OF", "on") + " sfx");
        console.log(localStorage.getItem("OF", "ooff") + " sfx");
        if(localStorage.getItem("OF", "on") == "on"){
            var mobS = document.getElementById("mobS");
            mobS.load();
            mobS.play();
        }

        //need to make some error handling for this because it doesnt work on my browser
        //makes tts of the current player

        
        /* if(localStorage.getItem("ttsOF", "on") == "on"){
            let utterance = new SpeechSynthesisUtterance((r+1) + " " + (c+1))
            speechSynthesis.speak(utterance);
        } */
        
        //marks the boards 2d array equal to the current player color
        board[r][c] = curP;
        //console.log(board[r][c]);
        

        
        console.log(tile)
        console.log(this);
    
        //sets tile color
        if(curP == whiteP) {
            tile.classList.add("whiteP")
            curP = blackP;
        }
        else{
            tile.classList.add("blackP")
            curP = whiteP;
        }
        
    }
    
    checkW();
    if(localStorage.getItem("sP", "on")=="on"){
        bot(tile);
    }
    setCP();
}

//checks if you won or not
function checkW() {
    let p = -4
    for (let r = 0; r < rows; r++) {
        for(let c = 0; c < columns; c++){
            if(board[r][c] != ' '){
                //horizontal win check
                if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3] && board[r][c+3] == board[r][c+4] && c<columns-4){
                    setW(r, c);
                    return;
                }
                //vertical win check
                if(r<rows-4){
                    if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c] && board[r+3][c] == board[r+4][c]){
                        setW(r, c);
                        return;
                    }
                }
                //diagonal down to right
                if(r<rows-4){
                    if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3] && board[r+3][c+3] == board[r+4][c+4]){
                        setW(r, c);
                        return;
                    }
                }
                //diagonal up to right
                if(r>3){
                    if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3] && board[r-3][c+3] == board[r-4][c+4]){
                        setW(r, c);
                        return;
                    }
                }
                
            }
        }
    }

}

//sets the winner
function setW(r, c) {
    let winner = document.getElementById("winner");
    if(board[r][c] == blackP){
        winner.innerText = "black wins";
    }
    else{
        winner.innerText = "white wins";
    }
    gO = true;
}

function setCP() {
    let sCP = document.getElementById("curP").textContent="current player is " + curP;
}

function bot(tile){
    let p = -4
    let checker = 0
    
    const danger = [];
    

        
    for (let r = 0; r < rows; r++) {
        danger.push(new Array(rows).fill(0));
        for(let c = 0; c < columns; c++){
            let checker = 0
            for(let rr = 0; rr < 4; rr++){
                
                if(board[r][c] != ' '){
                    //horizontal win check
                    if(board[r][c+rr] == board[r][c+rr+1] && board[r][c+rr]==whiteP){
                        checker++;

                        if(checker>0){
                            danger[r][c] = checker+1;
                            console.log(danger[r][c]+" fart" + checker)
                            if((board[r][c-1]==' ' && board[r][c+checker+1]==' ' && checker>1)){
                                document.getElementById((r-1).toString() + "-" +  c.toString()).classList.add("blackP");
                                board[r][c] = blackP;
                                console.log("UBER DANGER")
                                curP = whiteP;
                            }
                            else if((checker+1) == 4){
                                //makes board piece black
                                document.getElementById((r-1).toString() + "-" +  c.toString()).classList.add("blackP");
                                board[r][c] = blackP;
                                console.log("UBER DANGER")
                                curP = whiteP;

                            }
                            //console.log(danger[r][c])
                        }
                    }
                }   
            }
        }
    }
}
