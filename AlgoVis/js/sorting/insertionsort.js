async function insertionsort() {
    let n = array.length;

    // Visualize initial state
    console.log("Initial Array:", array);

    // Perform Insertion Sort with visualization
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;

        // Move elements of insertion[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;

            // Visualize array after each shift
            // console.log("After shifting:", array);

            await new Promise(resolve => setTimeout(resolve, 500)); // Slow down for visualization
        }
        array[j + 1] = key;

        // Visualize array after key is inserted
        // console.log("After inserting key:", array);
        await new Promise(resolve => setTimeout(resolve, 500)); // Slow down for visualization
    }

    // Final sorted array
    console.log("Sorted Array:", array);
}