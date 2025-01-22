// Global variables for array and settings
let array = [];
let arraySize = 10; // Default size
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

function div_update(bar, height, color) {
    setTimeout(() => {
        bar.style.height = `${height}px`;
        bar.style.backgroundColor = color;
    },1000);
}

function div_updates(bars, heights, color) {
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = `${heights[i]}px`;
        bars[i].style.backgroundColor = color;
    }
}