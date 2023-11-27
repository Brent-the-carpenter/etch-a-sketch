const gridSize = 600;
let rows = 16;
let columns = 16;

const sketchPad = document.querySelector('.sketchpad');
sketchPad.style.width = `${gridSize}px`;
sketchPad.style.height = `${gridSize}px`;


function makeGridCells(){
  for (let i = 0; i < (rows * columns); i++ ){
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell')
    gridCell.style.width = `${(gridSize / rows) -2}px`;
    gridCell.style.height = `${(gridSize / columns) -2}px`;

    sketchPad.appendChild(gridCell);
  }
};
makeGridCells();