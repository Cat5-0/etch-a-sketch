const gridContainer = document.getElementById('grid-container');

function createGrid(size) {
    // Clear existing grid cells
    gridContainer.innerText = '';

    // Calculate cell dimensions to fit within the container
    const cellSize = (gridContainer.clientWidth / size);
        
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.style.width = `${cellSize}px`;
        gridCell.style.length = `${cellSize}px`;
     
    // Add hover effect for drawing
    gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
    });
    gridContainer.appendChild(gridCell);
    }
}
//Initial grid creation (16 x 16)
createGrid(16);

// Button for user to change grid size
const resizeButton = document.createElement('button');
resizeButton.textContent = "Change Grid Size";
// Add button before container
document.body.insertBefore(resizeButton, gridContainer);

resizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size between 2 - 100: ");
    newSize = parseInt(newSize);

    if (newSize >= 2 && newSize <=100) {
        createGrid(newSize);
    } else {
        alert("Please enter size between 2 and 100");
    }
})

// Button for user to clear the grid 
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Grid";
document.body.insertBefore(clearButton, gridContainer);

clearButton.addEventListener('click', () => {
    createGrid(16);
})
