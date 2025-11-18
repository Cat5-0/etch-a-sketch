// Select HTML elements
const gridContainer = document.getElementById('grid-container');
const gridSize = document.getElementById('gridSize');
const blackBtn = document.getElementById('blackBtn');
const colourBtn = document.getElementById('colourBtn');
const clearBtn = document.getElementById('clearBtn');

// Add event listeners to elements
gridSize.addEventListener('click', resizeGrid);
blackBtn.addEventListener('click', setBlackMode);
colourBtn.addEventListener('click', setColourMode);
clearBtn.addEventListener('click', clearGrid);

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
            gridCell.style.backgroundColor = randomColour;
        }
    });
    gridContainer.appendChild(gridCell);
    }
}

// Function for user to change grid size
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

function setBlackMode() {
    currentColourMode = 'black';
}

function setColourMode() {
    currentColourMode = 'colour';
}

function clearGrid() {
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach(gridCell => {
        gridCell.style.backgroundColor = '';
    });
}
createGrid(16);