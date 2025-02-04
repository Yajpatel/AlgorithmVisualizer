function heapsort() {
    let n = array.length;
    console.log(array);
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (max element) with the last element
        [array[0], array[i]] = [array[i], array[0]];

        // Heapify the reduced heap
        heapify(i, 0);
    }

    console.log(array);
}

function heapify(n, i) {
    let largest = i; // Root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than current largest
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(n, largest);
    }
}
