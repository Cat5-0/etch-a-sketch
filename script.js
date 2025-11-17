const gridContainer = document.getElementById('gridContainer');
const gridSize = 16;

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
    }
}
createGrid(gridSize);