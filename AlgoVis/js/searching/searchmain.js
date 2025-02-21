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
    if(searchSelect.value == "Binary"){
        generateSortedArray();
    }
    else{
        generateArray();
    }
    
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
//////////// sorted array for binary
function generateSortedArray(){
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    array.sort((a, b) => a - b); // Sort the array for Binary Search
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


////////////////////////////////////////////////////////////////////
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
//for label searchselect.oninput
searchSelect.oninput = ()=> {

    let color1 = document.querySelector(".color1");
    let label1 = document.querySelector(".label1");
    
    let color2 = document.querySelector(".color2");
    let label2 = document.querySelector(".label2");
    
    let color3 = document.querySelector(".color3");
    let label3 = document.querySelector(".label3");

    if (searchSelect.value === "Linear") {
        // Linear Search
        color1.style.backgroundColor = "red";  // Element Visited
        label1.textContent = "Element Visited";

        color2.style.backgroundColor = "green"; // Element Found
        label2.textContent = "Element Found";

        color3.style.visibility = "hidden"; // Hide
        label3.style.visibility = "hidden";
    } 
    else if (searchSelect.value === "Binary") {
        // Binary Search
        color1.style.backgroundColor = "red";  // Iterating
        label1.textContent = "Iterating";

        color2.style.backgroundColor = "yellow"; // Element Visited
        label2.textContent = "Element Visited";

        color3.style.backgroundColor = "green"; // Element Found
        label3.textContent = "Element Found";

        color3.style.visibility = "visible"; // Show
        label3.style.visibility = "visible";
    }
    heading();
    if (searchSelect.value === "Binary") {
        array.sort((a, b) => a - b); // Sort the array for Binary Search
    }
    visualizearray();
};
//for Binary or Linear
// searchSelect.oninput = ()=>{
    
// }

function heading(){
    let heading = document.getElementById('heading');
    switch (searchSelect.value) {
        case "Linear":
            heading.innerHTML = "Linear Search Visualizer[0(n)]";
            break;
        case "Binary":
            heading.innerHTML = "Binary Search Visualizer [0(logn)]";
            break;
        default:
            heading.innerHTML = "Let start searching";
            break;
    }
}
