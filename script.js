const container = document.getElementById('container');
const grid = document.querySelectorAll('--square');
const clearButton = document.querySelector("#clearButton");

//create grid
function createGrid(rows, columns){
    container.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let c = 0; c < columns; c++) { // loop rows by columns for a 16x16 grid
            let gridSquare = document.createElement("div");
            //gridSquare.textContent = (c + 1);  // see if it creates 16x16 divs
            container.appendChild(gridSquare).classList.add("--squares");
             container.style.gridTemplateColumns = 'repeat('+rows+', 1fr)';
             container.style.gridTemplateRows = 'repeat('+rows+', 1fr)';
        }
    }
}

createGrid(10, 10);

document.addEventListener('mouseover', function (e) {
    if(e.target.classList == '--squares'){
    e.target.classList.add('--filled');
}
});

//clear button event listener
clearButton.addEventListener('click', function() {
    var squares = document.getElementsByClassName('--squares') // select all div squares
    for (let i = 0; i < squares.length; i++) { 
        squares[i].classList.remove('--filled'); // need to loop to remove the class --filled from each div
    };
   let size = prompt("Grid size", 10);{
    createGrid(size, size);
    if (size > 50)
    size = 50;
   }
   
});

