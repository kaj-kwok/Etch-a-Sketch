const container = document.getElementById('container');
const clearButton = document.querySelector("#clearButton");
const eraseAll = document.querySelector("#eraseAll");
var colorInput = document.querySelector("#colorButton");
const randomColorBtn = document.querySelector("#randomColorBtn");
const colorButtons = document.querySelector("#colorSelectors");
const shadedBtn = document.querySelector("#shadedButton");
const value = document.querySelector("#value");

//create grid
function createGrid(rows, columns){
    
    for (let i = 0; i < rows; i++) {
        for (let c = 0; c < columns; c++) { // loop rows by columns for a 16x16 grid
            let gridSquare = document.createElement("div");
            //gridSquare.textContent = (c + 1);  // see if it creates 16x16 divs
            container.appendChild(gridSquare).classList.add("--squares");
             container.style.gridTemplateColumns = 'repeat('+rows+', 1fr)';
             container.style.gridTemplateRows = 'repeat('+rows+', 1fr)';
             
        //      gridSquare.addEventListener('mouseover', function(event){
        //         event.target.style.backgroundColor = 'red';
            
        // })
    }
} value.innerHTML = ` \(${rows}x${rows}\)`;
}

createGrid(10, 10);


//on click random color picker
randomColorBtn.addEventListener('click', () => {
    var randomInput = `#`+randomColor();
    var squares = document.getElementsByClassName('--squares') // select all div squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function(event){
            var randomInput = `#`+randomColor();
            event.target.style.backgroundColor = randomInput;
   });
   }
})

// color selector
colorInput.addEventListener('click', () => {
    var squares = document.getElementsByClassName('--squares') // select all div squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = colorInput.value;
   });
}
})

//shaded selector
shadedBtn.addEventListener('click', () => {
    var squares = document.getElementsByClassName('--squares')
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseenter', function(event){
            let opacity = event.target.style.opacity;
            event.target.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2;
            event.target.style.backgroundColor = shadedBtn.value;
        })
    }
        })

//erase all button
eraseAll.addEventListener('click', function() {
    var squares = document.getElementsByClassName('--squares') // select all div squares
    for (let i = 0; i < squares.length; i++) { 
    squares[i].style.backgroundColor = "#FFFFFF"; // clear grid
    }
});

//clear button event listener
clearButton.addEventListener('click', function() {
    container.innerHTML = ""; // clear grid
   let size = prompt("Grid size", 10); {
    if (size === ""){   // if input is null
    size = 10;
    createGrid(size, size);
    }
    if (size > 50) {  // if input is > 50
    size = 50;
    createGrid(size, size);
    }
    if(size > 1 && size < 50){
        createGrid(size, size);
    }

    else { 
        size = 10;
        createGrid(size, size);
    }
   }
   
});
//random color generator
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16); 
}

