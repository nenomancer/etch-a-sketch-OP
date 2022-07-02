const container = document.querySelector(".container");
const gridSizeInput = document.querySelector("#grid-size");
const gridSizeButton = document.querySelector("#grid-size-button");
let gridSize = 16;
const minSize = 4;
const maxSize = 100;

gridSizeButton.addEventListener("click", () => {
  const newResolution = prompt("Enter new resolution (16 - 100)");
  if ((newResolution) => minSize && newResolution <= maxSize) {
    generateGrid(newResolution);
  } else {
    alert(`Please enter a value between ${minSize} and ${maxSize}`);
  }
});

const generateGrid = (gridSize) => {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
};

generateGrid(gridSize);
