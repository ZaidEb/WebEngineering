// Rekursion - Draw Circles

const rekInput = document.getElementById("rekursionInput");
const rekCanvas = document.getElementById("rekursionCanvas");
const rekBtn = document.getElementById("rekBtn");
const ctx = rekCanvas.getContext("2d");

// Draw circles with recursion
function drawCircles(left, top, size) {
    if (size > 10) {
        // Draw circle
        ctx.beginPath();
        ctx.arc(left + size/2, top + size/2, size/2, 0, Math.PI * 2);
        ctx.stroke();
        
        // Recursion
        let s = size / 2;
        let newTop = top + s / 2;
        
        drawCircles(left, newTop, s);      // left circle
        drawCircles(left + s, newTop, s);  // right circle
    }
}

// Button click to start
rekBtn.addEventListener("click", function() {
    let val = rekInput.value.trim();
    let size = parseInt(val);
    
    if (isNaN(size) || size < 10) {
        alert("Enter a number (e.g. 200)");
        return;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, rekCanvas.width, rekCanvas.height);
    ctx.strokeStyle = "#4CAF50";
    ctx.lineWidth = 2;
    
    // Start drawing
    let left = (rekCanvas.width - size) / 2;
    drawCircles(left, 10, size);
});
