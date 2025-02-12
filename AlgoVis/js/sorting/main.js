// Global variables for array and settings
let array = [];
let arraySize = 10; // Default size
let arraySpeed = 500; // Default speed
let c_delay = 2000;
const randomizeBtn = document.querySelector("#arr_randomize");
const sortBtn = document.querySelector("#arr_sort");
const algoSelect = document.querySelector("#algoselected");

const speed = document.getElementById("arr_speed");
const size = document.getElementById("arr_size");

speed.addEventListener("input", function () {
    updateSpeed(parseInt(speed.value));
});

size.addEventListener("input", function () {
    updateSize(parseInt(size.value));
});

function updateSpeed(speedValue) {
    switch (speedValue) {
        case 1: arraySpeed = 1700; break; // Slowest
        case 2: arraySpeed = 1500; break;
        case 3: arraySpeed = 1300; break;
        case 4: arraySpeed = 1100; break;
        case 5: arraySpeed = 900; break;
        case 6: arraySpeed = 700; break;
        case 7: arraySpeed = 500; break;
        case 8: arraySpeed = 100; break;
        case 9: arraySpeed = 50; break;
        case 10: arraySpeed = 10; break; // Fastest
        default: arraySpeed = 500; // Default case
    }
}

function updateSize(sizeValue) {
    switch (sizeValue) {
        case 3: arraySize = 3; //smallest
            generateArray();
        break;  
        case 6: arraySize = 6; 
            generateArray();    
        break;
        case 9: arraySize = 9;
            generateArray();     
        break;
        case 12: arraySize = 12; 
            generateArray();
        break;
        case 15: arraySize = 15;     
            generateArray();
        break;
        case 18: arraySize = 18;
            generateArray();
        break;
        case 21: arraySize = 21; 
            generateArray();
        break;
        case 24: arraySize = 24; 
            generateArray();
        break;
        case 27: arraySize = 27; 
            generateArray();
        break;
        case 30: arraySize = 30; // Largest
            generateArray();
        break; 
        default: arraySize = 10; // Default case
            // generateArray();
        break;
    }
}

// Initialize the array when the page loads
window.onload = () => generateArray();

// Store the bars in an array for later reference
let bars = [];

randomizeBtn.addEventListener("click",()=>{
    generateArray()
});

// Generate a random array and
// push to array
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
        // case "heap" : heapsort();
        // break;
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