// Rekursion - Draw Squares

const sqInput = document.getElementById("squaresInput");
const sqCanvas = document.getElementById("squaresCanvas");
const sqBtn = document.getElementById("squaresBtn");
const ctx2 = sqCanvas.getContext("2d");

const margin = 4;

// Draw squares with recursion
function drawSquares(left, top, size) {
    if (size >= 16) {
        // Draw filled square
        ctx2.fillStyle = "#ccc";
        ctx2.fillRect(left, top, size, size);
        
        // Draw border
        ctx2.strokeStyle = "#000";
        ctx2.strokeRect(left, top, size, size);
        
        // Recursion (4 corners)
        let s = size / 2 - margin;
        drawSquares(left - s/2, top - s/2, s);
        drawSquares(left + size - s/2, top - s/2, s);
        drawSquares(left - s/2, top + size - s/2, s);
        drawSquares(left + size - s/2, top + size - s/2, s);
    }
}

// Button click to start
sqBtn.addEventListener("click", function() {
    let val = sqInput.value.trim();
    let size = parseInt(val);
    
    if (isNaN(size) || size < 16) {
        alert("Enter a number (e.g. 200)");
        return;
    }
    
    // Clear canvas
    ctx2.clearRect(0, 0, sqCanvas.width, sqCanvas.height);
    
    // Start drawing from center
    let left = (sqCanvas.width - size) / 2;
    let top = (sqCanvas.height - size) / 2;
    drawSquares(left, top, size);
});
