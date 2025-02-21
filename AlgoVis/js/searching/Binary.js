////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
async function binarySearch(target) {
    
    let left = 0;
    let right = array.length - 1;
    let flag = true;
    // initially color all elements red
    let boxes = document.getElementsByClassName("box");

    //for removing previous effects
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("scale"); 
    }

    //start
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "red"; // Full array red
    }
    await new Promise(resolve => setTimeout(resolve, arraySpeed));

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Reset colors before highlighting the new range
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "yellow"; // Reset to default
        }

        // Color the current search range in red
        for (let i = left; i <= right; i++) {
            boxes[i].style.backgroundColor = "red";
        }
        await new Promise(resolve => setTimeout(resolve, arraySpeed));

        // Check if the target is at mid
        if (array[mid] == target) {
            boxes[mid].style.backgroundColor = "green"; // Highlight found element
            boxes[mid].classList.add("scale");
            for (let i = 0; i < boxes.length; i++) {
                if (i !== mid) {
                    boxes[i].style.backgroundColor = "yellow"; // Reset all except found
                }
            }
            flag = false;
            message.innerHTML = `Element ${target} found at index "${mid}"`;
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
    if (flag) {
        message.innerHTML = `Element ${target} not found`;
    }
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