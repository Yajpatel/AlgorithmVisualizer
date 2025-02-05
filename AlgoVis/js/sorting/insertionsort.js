async function insertionsort() {
    let n = array.length;
    console.log("Initial Array:", array);
    for(let i = 0;i<array.length;i++){
        let j = i;
        while(j>0 && array[j-1]>array[j]){
            let temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;

            await swapBars(j-1, j);
            await new Promise((resolve) => setTimeout(resolve, 1000));  
            j--;
        }
    }
    console.log("Sorted Array:", array);
}


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

    bar2.style.transform = `translateX(${pos1 - pos2}px) translateY(200px)`;

    // Wait for the transition to complete
    // this time should be more else that swap color will change early
    // this is for red color to be visible
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Temporarily disable transitions before DOM manipulation
    bar1.style.transition = "none";
    

    // Reset transforms to avoid visual glitches
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0) translateY(0)";
    

    swapDivs(bar1,bar2)

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