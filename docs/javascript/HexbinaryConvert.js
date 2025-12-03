const hexInput = document.getElementById("hexInput");
const binaryOutput = document.getElementById("binaryOutput");

const binInput = document.getElementById("binInput");
const hexOutput = document.getElementById("hexOutput");

/* HEX → BINARY */
hexInput.addEventListener("input", function () {
    let hexValue = hexInput.value.trim().replace(/\s+/g, "");

    if (!/^[0-9A-Fa-f]*$/.test(hexValue)) {
        binaryOutput.textContent = "Invalid hex value!";
        return;
    }

    if (hexValue === "") {
        binaryOutput.textContent = "-";
        return;
    }

    let binary = parseInt(hexValue, 16).toString(2).toUpperCase();
    binaryOutput.textContent = binary;
});

/* BINARY → HEX */
binInput.addEventListener("input", function () {
    let binValue = binInput.value.trim().replace(/\s+/g, "");

    if (!/^[01]*$/.test(binValue)) {
        hexOutput.textContent = "Invalid binary value!";
        return;
    }

    if (binValue === "") {
        hexOutput.textContent = "-";
        return;
    }

    let hex = parseInt(binValue, 2).toString(16).toUpperCase();
    hexOutput.textContent = hex;
});
