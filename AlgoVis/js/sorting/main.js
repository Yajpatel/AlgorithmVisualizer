// Global variables for array and settings
let array = [];
let arraySize = 8; // Default size
let arraySpeed =8; // Default speed
let c_delay = 2000;
const randomizeBtn = document.querySelector("#arr_randomize");
const sortBtn = document.querySelector("#arr_sort");
const algoSelect = document.querySelector("#algoselected");

// Initialize the array when the page loads
window.onload = () => generateArray();

// Store the bars in an array for later reference
let bars = [];

randomizeBtn.addEventListener("click",()=>{
    generateArray()
});

// Generate a random array and render it
function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 220) + 30);
    }
    visualizearray(); // Visualize the array
}

function visualizearray(){
    const container = document.querySelector(".array-container");
    container.innerHTML = ''; // Clear any existing bars
    
    bars = [];
    // Calculate the width of each bar based on array size
    // const barWidth = Math.floor(container.offsetWidth / array.length) - 2; // Subtract 2 for margin spacing
    
    // Create bars for each array element
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${array[i]}px`; // Set height based on value
        // bar.style.width = `${barWidth}px`; // Set dynamic width
        bar.innerHTML = array[i];
        container.appendChild(bar);
        bars.push(bar);
    }
}

sortBtn.addEventListener("click",()=>{
    sort();
});
function sort(){
    console.log(algoSelect.value);
    switch(algoSelect.value){
        case "bubble" : bubblesort();
        break;
        case "selection" : selectionsort();
        break;
        case "insertion" : insertionsort();
        break;
        case "quick" : quicksort();
        break;
        case "merge" : mergesort();
        break;
        case "heap" : heapsort();
        break;
        default : alert("please select algo first");
        break;
    }
}

// function div_update(bar, height, color) {
//     setTimeout(() => {
//         bar.style.height = `${height}px`;
//         bar.style.backgroundColor = color;
//     },1000);
// }

// function div_updates(bars, heights, color) {
//     for (let i = 0; i < bars.length; i++) {
//         bars[i].style.height = `${heights[i]}px`;
//         bars[i].style.backgroundColor = color;
//     }
// }

async function swapBars(index1, index2) {
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