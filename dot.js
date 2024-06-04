document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const dot = document.getElementById('dot');
    const cellSize = 50; // Size of each cell in px
    const dotSize = 40; // Size of each grid dot in px

    function createGrid() {
        const cols = Math.floor(window.innerWidth / cellSize);
        const rows = Math.floor(window.innerHeight / cellSize);

        gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

        for (let i = 0; i < cols * rows; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-dot');
            cell.style.width = `${dotSize}px`;
            cell.style.height = `${dotSize}px`;
            cell.style.gridColumn = Math.floor(i % cols) + 1;
            cell.style.gridRow = Math.floor(i / cols) + 1;
            gridContainer.appendChild(cell);
        }
    }

    function moveDot() {
        const cols = Math.floor(window.innerWidth / cellSize);
        const rows = Math.floor(window.innerHeight / cellSize);
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);
        const newX = randomCol * cellSize + cellSize / 2 - dot.offsetWidth / 2;
        const newY = randomRow * cellSize + cellSize / 2 - dot.offsetHeight / 2;

        dot.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    createGrid();
    setInterval(moveDot, 1500); // Move dot every 2 seconds

    moveDot(); // Initial move

    window.addEventListener('resize', () => {
        gridContainer.innerHTML = '';
        createGrid();
        moveDot();
    });
});
