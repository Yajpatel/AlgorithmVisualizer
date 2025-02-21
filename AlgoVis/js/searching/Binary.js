////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
async function binarySearch(target) {
    let left = 0, right = array.length - 1;
    
    // First, color all elements red
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "red"; // Full array red
    }
    await delay(arraySpeed);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Reset colors before highlighting the new range
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "#eee"; // Reset to default
        }

        // Color the current search range in red
        for (let i = left; i <= right; i++) {
            boxes[i].style.backgroundColor = "red";
        }
        await delay(arraySpeed);

        // Check if the target is at mid
        if (array[mid] == target) {
            boxes[mid].style.backgroundColor = "green"; // Highlight found element
            return;
        } else if (array[mid] < target) {
            left = mid + 1; // Narrow down to right half
        } else {
            right = mid - 1; // Narrow down to left half
        }
    }

    // If not found, reset colors
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#eee"; // Reset
    }
    alert("Element not found!");
}

// Delay function for animation effect
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




////////////////////  Rough Workkk ////////////////////
// function binarySearch(target) {
//     let left = 0, right = array.length - 1;
    
//     function animateStep(mid) {
//         let boxes = document.querySelectorAll(".box");

//         // Reset colors before each step
//         // boxes.forEach(box => box.style.backgroundColor = "red");

//         // Highlight the middle element
//         boxes[mid].style.backgroundColor = "yellow";

//         setTimeout(() => {
//             if (array[mid] == target) {
//                 // Found target, highlight green
//                 boxes[mid].style.backgroundColor = "green";
//             } else if (array[mid] > target) {
//                 // Target in left half, fade right side
//                 for (let i = mid; i <= right; i++) {
//                     boxes[i].style.backgroundColor = "lightcoral";
//                 }
//                 right = mid - 1;
//                 if (left <= right) setTimeout(() => animateStep(Math.floor((left + right) / 2)), arraySpeed);
//             } else {
//                 // Target in right half, fade left side
//                 for (let i = left; i <= mid; i++) {
//                     boxes[i].style.backgroundColor = "lightcoral";
//                 }
//                 left = mid + 1;
//                 if (left <= right) setTimeout(() => animateStep(Math.floor((left + right) / 2)), arraySpeed);
//             }
//         }, arraySpeed);
//     }

//     animateStep(Math.floor((left + right) / 2));
// }