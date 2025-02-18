// Global variables for array and declarationb
let array = [];
let arraySize = 18; // Default size
let arraySpeed = 500; // Default speed


const resetbtn = document.getElementById("reset");
const searchbtn = document.getElementById("search");
const searchSelect = document.getElementById("searchselected");

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
            generateArray();
        break;
    }
}

// to initialize the array when the page loads
window.onload = () => generateArray();

resetbtn.addEventListener("click",()=>{
    generateArray()
});

// Generate a random array and
// push to array
function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    visualizearray(); // Visualize the array
}

function visualizearray(){
    let container = document.getElementById("x");
    container.innerHTML = "";
    // container.classList.add('searchcontainer');

    for(let i = 0;i<arraySize;i++){
        let box = document.createElement("div");
        let innerbox = document.createElement("div");
        box.classList.add('box');
        box.innerHTML = array[i];
        innerbox.classList.add('innerbox');
        innerbox.innerHTML = i;
        container.appendChild(box);
        box.appendChild(innerbox);
    }
}
searchbtn.addEventListener("click", () => {
    inputvalue(); // Call the inputvalue function when the search button is clicked
});

function inputvalue() {
    let target = document.getElementById("searchKey").value // Get the number input value

    // Check if a input number is entered
    if (!target) {
        alert("Please enter a value to search.");
        return;
    }
    
    // Call the search function if input number is not empty
    search(target);
}

function search(target) {
    switch (searchSelect.value) {
        case "Linear":
            linearSearch(parseInt(target)); 
            break;
        case "Binary":
            binarySearch(parseInt(target)); 
            break;
        default:
            alert("Please select a search algorithm.");
            break;
    }
}