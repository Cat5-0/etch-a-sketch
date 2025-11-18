// Select HTML elements
const gridContainer = document.getElementById('grid-container');
const gridSize = document.getElementById('gridSize');
const blackBtn = document.getElementById('black');
const colourBtn = document.getElementById('colour');
const clearBtn = document.getElementById('clear');
const resizeButton = document.createElement('button');

// Add event listeners to elements
gridSize.addEventListener('click', resizeGrid);
blackBtn.addEventListener('click', setBlackMode);
colourBtn.addEventListener('Click', setColourMode);
clearBtn.addEventListener('Click', clearGrid);

let currentColourMode = 'black';

function createGrid(size) {
    gridContainer.innerText = ''; // Clear existing grid cells
    const cellSize = (gridContainer.clientWidth / size); // Calculate cell dimensions to fit within the container
    
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.style.width = `${cellSize}px`;
        gridCell.style.length = `${cellSize}px`;
     
    // Add hover effect for drawing
    gridCell.addEventListener('mouseover', () => {
        if (currentColourMode === 'black') {
            gridCell.style.backgroundColor = 'black';
        } else if (currentColourMode === 'colour') {
            const randomColour = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 
            gridCell.randomColour = randomColour;
        }
    });
    gridContainer.appendChild(gridCell);
    }
}


// Button for user to change grid size
function resizeGrid() {
    let newSize = prompt("Enter new grid size between 2 - 100: ");
    newSize = parseInt(newSize);
    if (newSize && newSize >= 2 && newSize <=100) {
        createGrid(newSize);
    } else {
        alert("Please enter size between 2 and 100");
        return;
    }
    createGrid(newSize);
}



// Button for user to clear the grid 
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Grid";
document.body.insertBefore(clearButton, gridContainer);

clearButton.addEventListener('click', () => {
    createGrid(16);
})

// Button for user to select black hover affect for drawing

//Initial grid creation (16 x 16)
createGrid(16);