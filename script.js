const boxContainer = document.querySelector('.boxContainer');



function makerows (rows , columns){
  boxContainer.style.setProperty("--grid-rows", rows);
  boxContainer.style.setProperty("--grid-columns", columns);

  for (i = 0 ; i< (rows * columns); i++){
    let square = document.createElement('div');
    square.innerText = (i+1);
    boxContainer.appendChild(square).className = "grid-item";
  }

}
makerows(16,16);