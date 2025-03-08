const container = document.getElementById("container");
if (!container) {
  throw new Error("No container found");
}
container.style.border = "1px solid black";
const newSketchPadButton = document.getElementById("button");
newSketchPadButton.style.marginBottom = "15px";
let squareOpacity = 0;

newSketchPadButton.addEventListener("click", () => {
	const userInput = getUserInput();
	if (!!userInput) {
		container.innerHTML = "";
		squareOpacity = 0;
		initializeGrid(userInput);
	}
});
container.style.width = "800px";
container.style.display = "flex";
container.style.flexWrap = "wrap";

function getUserInput() {
	while (true) {
		const userInput = prompt("Enter new grid size(Maximum of 100)");
		console.log(userInput);
		if (userInput === null) {
			break;
		} else if (!!userInput && userInput <= 100) {
			if (!isNaN(Number(userInput))) {
				return userInput;
			}
		} else {
			alert("Please enter value under 100");
			continue;
		}
	}
}

function initializeGrid(gridSize = 16) {
	for (let i = 0; i < gridSize ** 2; i++) {
		const square = document.createElement("div");
		const squareSize = 800 / gridSize;

		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;
		square.style.opacity = squareOpacity;
		square.addEventListener("mouseenter", (e) => {
			e.target.style.backgroundColor = `rgb(${getRandomRGBValue()},${getRandomRGBValue()},${getRandomRGBValue()})`;
			if (square.style.opacity < 1) {
				square.style.opacity = squareOpacity += 0.1;
			}
		});

		container.appendChild(square);
	}
}

function getRandomRGBValue() {
	return Math.floor(Math.random() * 256);
}









initializeGrid();