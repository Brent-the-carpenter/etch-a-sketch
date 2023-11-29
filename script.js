const gridSize = 600;
let squaresPerSide = 16;

const resetButton = document.querySelector('#reset');


const sketchPad = document.querySelector('.sketchpad');
    sketchPad.style.width = sketchPad.style.height = `${gridSize}px`;

const sliderContainer = document.querySelector("#sliderContainer"); // container
const sliderInput = document.querySelector('#sliderinput'); // input 

const sliderValue = document.querySelector('#sliderValue'); // p elemennt
    sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value} resolution`
   


    function changeBackgroundColor() {
      this.style.backgroundColor = "black";
    }

    function makeGridCells(squaresPerSide){
      const widthOrHeight = `${(gridSize / squaresPerSide) -2}px  `;
      const numberOfSquares = (squaresPerSide * squaresPerSide) ;

          for (let i = 0; i < numberOfSquares; i++ ){
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell')
            gridCell.style.width = gridCell.style.height = widthOrHeight;

            sketchPad.appendChild(gridCell);
            gridCell.addEventListener("mouseover" , changeBackgroundColor)
          }
       }

    makeGridCells(sliderInput.value);
    
    function removeGridCells(){
        while (sketchPad.firstChild){
          sketchPad.removeChild(sketchPad.firstChild);
        }
         makeGridCells(sliderInput.value);
     }

    resetButton.addEventListener('click', removeGridCells)
    
    sliderInput.addEventListener('input', updateSlider)

    function updateSlider () {
        sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value} resolution`;
        removeGridCells();
      console.log(sliderValue); // test so see if event fires remove later
    }
   
//sliderInput.addEventListener('input', updateSlider)