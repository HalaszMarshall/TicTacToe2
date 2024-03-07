const cells = document.querySelector(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [ // 1. cells that have to match for win condition to be true
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
];

let options = ["", "", "", "", "", "", "", "", ""]; //empty arrays for all 9 cells
let currentPlayer = "X";
let running = false; //checking if game is running

initializeGame(); //Initiate function on page open

function initializeGame(){
cells.forEach(dell => cell.addEventListenet("click", restartBtn.addEventListener("click", restartGame);
statusText.textContent = `${currentPlayer}'s turn`))
}

function cellClicked(){

}

function updateCell(){

}

function changePlayer(){

}

function checkWinner(){

}

function restartGame(){

}