async function bubblesort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Highlight the bars being compared
            bars[j].style.backgroundColor = "pink";
            bars[j + 1].style.backgroundColor = "pink";

            // this is for pink color to stay visible
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for visualization

            if (array[j] > array[j + 1]) {
                // for the time bars being swapped 
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.backgroundColor = "red";

                // for Swapping the elements in the array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Swap the bars visually
                await swapBarsforbubble(j, j + 1);
            }

            // Reset color after comparison
            bars[j].style.backgroundColor = "blue"; // Original color
            bars[j + 1].style.backgroundColor = "blue"; // Original color
        }
        // Mark the last sorted element as orange
        bars[array.length - i - 1].style.backgroundColor = "orange";
    }
    // Mark the first element as sorted after the loop ends
    bars[0].style.backgroundColor = "orange";
}

async function swapBarsforbubble(index1, index2) {
    // Access bar elements by their DOM references
    let bar1 = bars[index1];
    let bar2 = bars[index2];

    // Calculate their current positions 
    let pos1 = bar1.offsetLeft;
    let pos2 = bar2.offsetLeft;

    // Apply CSS transitions for smooth swapping
    bar1.style.transition = "transform 0.5s";
    bar2.style.transition = "transform 0.5s";

    // Apply the transform to swap positions
    bar1.style.transform = `translateX(${pos2 - pos1}px)`;
    bar2.style.transform = `translateX(${pos1 - pos2}px)`;

    // Wait for the transition to complete
    // this time should be more else that swap color will change early
    // this is for red color to be visible
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Temporarily disable transitions before DOM manipulation
    bar1.style.transition = "none";
    bar2.style.transition = "none";

    // Reset transforms to avoid visual glitches
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0)";

    bar1.parentNode.insertBefore(bar2, bar1);

    // Update the bars array
    let temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;
}

// async function swapBars(index1, index2) {
//     // Access bar elements by their DOM references
//     let bar1 = bars[index1];
//     let bar2 = bars[index2];

//     // Calculate their current positions 
//     let pos1 = bar1.offsetLeft;
//     let pos2 = bar2.offsetLeft;

//     // Apply CSS transitions for smooth swapping
//     bar1.style.transition = "transform 0.5s";
//     bar2.style.transition = "transform 0.5s";

//     // Apply the transform to swap positions
//     bar1.style.transform = `translateX(${pos2 - pos1}px)`;
//     bar2.style.transform = `translateX(${pos1 - pos2}px)`;

//     // Wait for the transition to complete
//     // this time should be more else that swap color will change early
//     // this is for red color to be visible
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Temporarily disable transitions before DOM manipulation
//     bar1.style.transition = "none";
//     bar2.style.transition = "none";

//     // Reset transforms to avoid visual glitches
//     bar1.style.transform = "translateX(0)";
//     bar2.style.transform = "translateX(0)";

//     bar1.parentNode.insertBefore(bar2, bar1);

//     // for make change in original array
//     let temp = bars[index1];
//     bars[index1] = bars[index2];
//     bars[index2] = temp;
// }

    // Allow transitions again for future animations
    // Imp Line
    // await new Promise((resolve) => setTimeout(resolve, 10)); // Small delay to ensure DOM updates
    // bar1.style.transition = "transform 1s";
    // bar2.style.transition = "transform 1s";



// for try and error
// async function bubblesort() {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             // Highlight the bars being compared
//             bars[j].style.backgroundColor = "pink";
//             bars[j + 1].style.backgroundColor = "pink";

//             await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for visualization

//             if (array[j] > array[j + 1]) {
//                 // Highlight the bars being swapped
//                 bars[j].style.backgroundColor = "red";
//                 bars[j + 1].style.backgroundColor = "red";

//                 // Swap the elements in the array
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;

//                 // Swap the bars visually
//                 await swapBars(j, j + 1);
//             }

//             // await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for visualization
//             // Reset color after comparison
//             bars[j].style.backgroundColor = "blue"; // Original color
//             bars[j + 1].style.backgroundColor = "blue";
//         }
//         // Mark the last sorted element as green
//         bars[array.length - i - 1].style.backgroundColor = "green";
//     }
//     // Mark the first element as sorted after the loop ends
//     bars[0].style.backgroundColor = "green";
// }

// // Function to visually swap the bars
// async function swapBars(index1, index2) {
//     // Access bar elements by their DOM references
//     let bar1 = bars[index1];
//     let bar2 = bars[index2];

//     // Calculate their current positions (offsetLeft gets the x-coordinate)
//     let pos1 = bar1.offsetLeft;
//     let pos2 = bar2.offsetLeft;

//     // Apply CSS transitions for smooth swapping
//     bar1.style.transition = "transform 1s";
//     bar2.style.transition = "transform 1s";

//     // Apply the transform to swap positions
//     bar1.style.transform = `translateX(${pos2 - pos1}px)`;
//     bar2.style.transform = `translateX(${pos1 - pos2}px)`;

//     // Wait for the transition to complete
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Reset transforms and update the DOM order
//     bar1.style.transform = "translateX(0)";
//     bar2.style.transform = "translateX(0)";

//     // bar1.style.transition = "none";
//     // bar2.style.transition = "none";
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     // Swap the bars in the DOM
//     bar1.parentNode.insertBefore(bar2, bar1);

//     // Swap the references in the bars array
//     let tempBar = bars[index1];
//     bars[index1] = bars[index2];
//     bars[index2] = tempBar;
// }