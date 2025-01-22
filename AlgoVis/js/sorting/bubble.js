async function bubblesort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements in the array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Swap the bars visually
                await swapBars(j, j + 1);
            }
        }
    }
}

// Function to visually swap the bars
async function swapBars(index1, index2) {
    // Access bar elements by their DOM references
    let bar1 = bars[index1];
    let bar2 = bars[index2];

    // Calculate their current positions (offsetLeft gets the x-coordinate)
    console.log(`${bar2.offsetLeft} ${bar1.offsetLeft}`)
    let pos1 = bar1.offsetLeft;
    let pos2 = bar2.offsetLeft;

    // Apply CSS transitions for smooth swapping
    bar1.style.transition = "transform 1s";
    bar2.style.transition = "transform 1s";

    // Apply the transform to swap positions
    bar1.style.transform = `translateX(${pos2 - pos1}px)`;
    bar2.style.transform = `translateX(${pos1 - pos2}px)`;

    // Wait for the transition to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset transforms and update the DOM order
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0)";

    // Swap the bars in the DOM
    bar1.parentNode.insertBefore(bar2, bar1);

    // Swap the references in the bars array
    let tempBar = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = tempBar;
}

