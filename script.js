let gridSize = 16;
const container = document.querySelector(".container")
//const square = document.createElement("div");
//square.classList.add = "square";
const squares = [];
squares.length = gridSize*gridSize;
container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`

for (let i = 0; i < squares.length; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("square")
    container.appendChild(squares[i]);
}