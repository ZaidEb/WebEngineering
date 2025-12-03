// -----------------------------
// Sorting class
// -----------------------------
class Sorting {

    // Quick Sort
    static quickSort(arr) {
        if (arr.length <= 1) return arr;

        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }

        return [...Sorting.quickSort(left), pivot, ...Sorting.quickSort(right)];
    }

    // Merge Sort
    static mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        return Sorting.merge(
            Sorting.mergeSort(left),
            Sorting.mergeSort(right)
        );
    }

    static merge(left, right) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) result.push(left[i++]);
            else result.push(right[j++]);
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}

// ---------------------------------------------
// Connect Sorting class with HTML user interface
// ---------------------------------------------

function initSortingUI() {
    const numbersInput = document.getElementById("numbersInput");
    const algorithmSelect = document.getElementById("algorithmSelect");
    const sortOutput = document.getElementById("sortOutput");
    const sortBtn = document.getElementById("sortBtn");

    sortBtn.addEventListener("click", function () {

        // Convert input text to number array
        let raw = numbersInput.value.trim();
        if (raw === "") {
            sortOutput.textContent = "Please enter some numbers!";
            return;
        }

        let arr = raw.split(/[\s,]+/).map(Number);

        if (arr.some(isNaN)) {
            sortOutput.textContent = "Invalid input! Use only numbers.";
            return;
        }

        let result;

        // Choose algorithm
        if (algorithmSelect.value === "merge") {
            result = Sorting.mergeSort(arr);
        } else if (algorithmSelect.value === "quick") {
            result = Sorting.quickSort(arr);
        }

        // Show the result
        sortOutput.textContent = result.join(" ");
    });
}

// Initialize UI when page loads
window.addEventListener("DOMContentLoaded", initSortingUI);
