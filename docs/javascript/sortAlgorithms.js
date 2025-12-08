// -----------------------------
// Sorting class with step tracking for visualization
// -----------------------------
class Sorting {

    // Quick Sort (basic version for result)
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

    // Merge Sort (basic version for result)
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

    // Bubble Sort (basic version for result)
    static bubbleSort(arr) {
        let array = [...arr];
        let n = array.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }

    // ========== VISUALIZATION VERSIONS ==========

    // Bubble Sort with steps
    static bubbleSortSteps(arr) {
        let array = [...arr];
        let n = array.length;
        let steps = [];
        
        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            sorted: [],
            message: "Starting Bubble Sort - we will compare adjacent elements"
        });

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // Comparing step
                steps.push({
                    array: [...array],
                    comparing: [j, j + 1],
                    swapping: [],
                    sorted: Array.from({length: i}, (_, k) => n - 1 - k),
                    message: `Comparing ${array[j]} and ${array[j + 1]}`
                });

                if (array[j] > array[j + 1]) {
                    // Swapping step
                    steps.push({
                        array: [...array],
                        comparing: [],
                        swapping: [j, j + 1],
                        sorted: Array.from({length: i}, (_, k) => n - 1 - k),
                        message: `Swapping ${array[j]} and ${array[j + 1]} (${array[j]} > ${array[j + 1]})`
                    });

                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;

                    steps.push({
                        array: [...array],
                        comparing: [],
                        swapping: [],
                        sorted: Array.from({length: i}, (_, k) => n - 1 - k),
                        message: `Swapped! Array is now: [${array.join(", ")}]`
                    });
                }
            }
            // Mark element as sorted
            steps.push({
                array: [...array],
                comparing: [],
                swapping: [],
                sorted: Array.from({length: i + 1}, (_, k) => n - 1 - k),
                message: `Pass ${i + 1} complete! ${array[n - 1 - i]} is now in correct position`
            });
        }

        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            sorted: Array.from({length: n}, (_, k) => k),
            message: "Bubble Sort Complete!"
        });

        return steps;
    }

    // Quick Sort with steps (in-place version for visualization)
    static quickSortSteps(arr) {
        let array = [...arr];
        let steps = [];
        let sortedIndices = new Set();

        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            pivot: [],
            sorted: [],
            message: "Starting Quick Sort - we pick a pivot and partition around it"
        });

        function partition(low, high) {
            let pivot = array[high];
            let pivotIdx = high;
            
            steps.push({
                array: [...array],
                comparing: [],
                swapping: [],
                pivot: [pivotIdx],
                sorted: [...sortedIndices],
                message: `Pivot selected: ${pivot} (last element)`
            });

            let i = low - 1;

            for (let j = low; j < high; j++) {
                steps.push({
                    array: [...array],
                    comparing: [j, pivotIdx],
                    swapping: [],
                    pivot: [pivotIdx],
                    sorted: [...sortedIndices],
                    message: `Comparing ${array[j]} with pivot ${pivot}`
                });

                if (array[j] < pivot) {
                    i++;
                    if (i !== j) {
                        steps.push({
                            array: [...array],
                            comparing: [],
                            swapping: [i, j],
                            pivot: [pivotIdx],
                            sorted: [...sortedIndices],
                            message: `${array[j]} < ${pivot}, swapping ${array[i]} and ${array[j]}`
                        });

                        [array[i], array[j]] = [array[j], array[i]];

                        steps.push({
                            array: [...array],
                            comparing: [],
                            swapping: [],
                            pivot: [pivotIdx],
                            sorted: [...sortedIndices],
                            message: `Swapped! Array: [${array.join(", ")}]`
                        });
                    }
                }
            }

            if (i + 1 !== high) {
                steps.push({
                    array: [...array],
                    comparing: [],
                    swapping: [i + 1, high],
                    pivot: [],
                    sorted: [...sortedIndices],
                    message: `Placing pivot ${pivot} in correct position`
                });

                [array[i + 1], array[high]] = [array[high], array[i + 1]];
            }

            sortedIndices.add(i + 1);
            steps.push({
                array: [...array],
                comparing: [],
                swapping: [],
                pivot: [],
                sorted: [...sortedIndices],
                message: `Pivot ${pivot} is now at correct position ${i + 1}`
            });

            return i + 1;
        }

        function quickSortRecursive(low, high) {
            if (low < high) {
                let pi = partition(low, high);
                quickSortRecursive(low, pi - 1);
                quickSortRecursive(pi + 1, high);
            } else if (low === high) {
                sortedIndices.add(low);
            }
        }

        quickSortRecursive(0, array.length - 1);

        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            pivot: [],
            sorted: Array.from({length: array.length}, (_, k) => k),
            message: "Quick Sort Complete!"
        });

        return steps;
    }

    // Merge Sort with steps
    static mergeSortSteps(arr) {
        let array = [...arr];
        let steps = [];
        let n = array.length;

        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            sorted: [],
            ranges: [],
            message: "Starting Merge Sort - we divide and merge"
        });

        // Iterative merge sort for better visualization
        for (let size = 1; size < n; size *= 2) {
            for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
                let mid = Math.min(leftStart + size - 1, n - 1);
                let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

                if (mid < rightEnd) {
                    steps.push({
                        array: [...array],
                        comparing: [],
                        swapping: [],
                        sorted: [],
                        highlight: Array.from({length: rightEnd - leftStart + 1}, (_, i) => leftStart + i),
                        message: `Merging subarrays [${leftStart}..${mid}] and [${mid+1}..${rightEnd}]`
                    });

                    // Merge
                    let left = array.slice(leftStart, mid + 1);
                    let right = array.slice(mid + 1, rightEnd + 1);
                    let i = 0, j = 0, k = leftStart;

                    while (i < left.length && j < right.length) {
                        steps.push({
                            array: [...array],
                            comparing: [leftStart + i, mid + 1 + j],
                            swapping: [],
                            sorted: [],
                            message: `Comparing ${left[i]} and ${right[j]}`
                        });

                        if (left[i] <= right[j]) {
                            array[k] = left[i];
                            i++;
                        } else {
                            array[k] = right[j];
                            j++;
                        }
                        k++;

                        steps.push({
                            array: [...array],
                            comparing: [],
                            swapping: [],
                            sorted: [],
                            message: `Placed element. Array: [${array.join(", ")}]`
                        });
                    }

                    while (i < left.length) {
                        array[k] = left[i];
                        i++;
                        k++;
                    }

                    while (j < right.length) {
                        array[k] = right[j];
                        j++;
                        k++;
                    }

                    steps.push({
                        array: [...array],
                        comparing: [],
                        swapping: [],
                        sorted: [],
                        message: `Merged! Subarray is now: [${array.slice(leftStart, rightEnd + 1).join(", ")}]`
                    });
                }
            }
        }

        steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            sorted: Array.from({length: n}, (_, k) => k),
            message: "Merge Sort Complete!"
        });

        return steps;
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
        } else if (algorithmSelect.value === "bubble") {
            result = Sorting.bubbleSort(arr);
        }

        // Show the result
        sortOutput.textContent = result.join(" ");
    });
}

// Initialize UI when page loads
window.addEventListener("DOMContentLoaded", initSortingUI);
