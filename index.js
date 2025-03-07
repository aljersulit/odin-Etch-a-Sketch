const container = document.getElementById("container");
if (!container) {
  throw new Error("No container found");
}
const newSketchPadButton = document.getElementById("button");


newSketchPadButton.addEventListener("click", () => {
  const userInput = getUserInput()
  if (!!userInput) {
    container.innerHTML = "";
    initializeGrid(userInput);
  }
})
container.style.width = "800px"
container.style.display = "flex"
container.style.flexWrap = "wrap"

function getUserInput() {
  while (true) {
    const userInput = prompt("Enter new grid size(Maximum of 100)");
    if (userInput !== null && userInput <= 100 ) {
      if (!isNaN(Number(userInput))) {
        return userInput;
      }
    } else {
      break;
    }
  }
}

function initializeGrid(gridSize = 16) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement('div');
    const squareSize = 800 / gridSize;
   
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = "black"
    square.addEventListener("mouseenter",(e) => {
      e.target.style.backgroundColor = "yellow";
    })
  
    container.appendChild(square);
  }
}

initializeGrid();