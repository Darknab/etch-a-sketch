
const container = document.querySelector(".container")

const squares = [];

function createGrid(gridSize) {
    squares.length = gridSize*gridSize;
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`

for (let i = 0; i < squares.length; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("square")
    container.appendChild(squares[i]);
    squares[i].addEventListener("mouseover", () => {
        squares[i].style.backgroundColor = randomColor();
        squares[i].style.transition = "0.1s" 
    })   
}
}

function randomColor() {
    const red = Math.floor(Math.random() * 256 );
    const green = Math.floor(Math.random() * 256 );
    const blue = Math.floor(Math.random() * 256 );
    return (`rgb(${red}, ${green}, ${blue})`);
}
createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    removeGrid();
    let userChoice;
    let validSelection = false
    do {
        userChoice = prompt("choose a new size", "");
        userChoice = parseInt(userChoice);
        if (userChoice > 0 && userChoice < 100) {
            validSelection = true;
        }
        else if (userChoice <= 0) {
            alert("please enter a valid number");
        }
        else if (userChoice > 100)  {
            alert("not that much!");
        }   
    }
    while (validSelection == false);;
    createGrid(userChoice);
})

function removeGrid() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
}