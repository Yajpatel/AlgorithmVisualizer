async function insertionsort() {
    let n = array.length;
    console.log("Initial Array:", array);
    for(let i = 0;i<array.length;i++){
        let j = i;
        while(j>0 && array[j-1]>array[j]){

            // Color the bars during comparison
            bars[j - 1].style.backgroundColor = "red";
            bars[j].style.backgroundColor = "magenta";
            await new Promise((resolve) => setTimeout(resolve, 500));

            let temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;

            await swapBars(j-1, j);
            await new Promise((resolve) => setTimeout(resolve, 1000));  

            // After swap, color the swapped bars blue.
            bars[j-1].style.backgroundColor = "blue";
            bars[j].style.backgroundColor = "blue";
            await new Promise((resolve) => setTimeout(resolve, 1000));  

            j--;
        }
    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "orange";
    }
    console.log("Sorted Array:", array);
}


async function swapBars(index1, index2) {
    // Access bar elements by their DOM references
    let bar1 = bars[index1]; // the bar that will be shifted right
    let bar2 = bars[index2]; // the bar that is being inserted

    // Calculate their current positions 
    let pos1 = bar1.offsetLeft;
    let pos2 = bar2.offsetLeft;

    // Phase 1: Move bar2 (the one being inserted) down vertically
    bar2.style.transition = "transform 0.5s";
    bar2.style.transform = "translateY(250px)";
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Phase 2: While keeping bar2 down, move it horizontally into the new position
    let horizontalShift = pos1 - pos2; // bar2 should move from its original position to pos1
    bar2.style.transition = "transform 0.5s";
    bar2.style.transform = `translateY(250px) translateX(${horizontalShift}px)`;
    await new Promise((resolve) => setTimeout(resolve, 500));

    // At the same time, move bar1 horizontally to the right (from pos1 to pos2)
    let horizontalShiftBar1 = pos2 - pos1;
    bar1.style.transition = "transform 0.5s";
    bar1.style.transform = `translateX(${horizontalShiftBar1}px)`;
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Phase 3: Move bar2 back up into line (while keeping its horizontal shift)
    bar2.style.transition = "transform 0.5s";
    bar2.style.transform = `translateY(0) translateX(${horizontalShift}px)`;
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Reset transforms and transitions to avoid visual glitches
    bar1.style.transition = "none";
    bar2.style.transition = "none";
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0) translateY(0)";

    // Swap the divs in the DOM
    swapDivs(bar1, bar2);

    // Update the bars array
    let temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;
}


function swapDivs(id1, id2) {
    let div1 = id1;
    let div2 = id2;

    if (div1 && div2) {
        let parent = div1.parentNode;
        let sibling = div2.nextSibling === div1 ? div2 : div2.nextSibling;

        parent.insertBefore(div2, div1);
        parent.insertBefore(div1, sibling);
    }
}