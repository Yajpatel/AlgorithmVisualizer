async function selectionsort(){
    console.log(array);
    console.log(bars.map(bar => bar.style.height));
    for(let i = 0;i<array.length;i++){
        let min = i;

        bars[min].style.backgroundColor = "magenta";

        for(j = i+1;j<array.length;j++){

            bars[j].style.backgroundColor = "red";
            // for red color to be visible
            await new Promise((resolve) => setTimeout(resolve, arraySpeed));

            if (array[min] > array[j]) {
                // If a new minimum is found reset the previous min
                // remove color from min if new min found
                if (min !== i) {
                    bars[min].style.backgroundColor = "";
                    await new Promise((resolve) => setTimeout(resolve, arraySpeed));
                }
                //to give color to new min found 
                min = j;
                bars[min].style.backgroundColor = "magenta";
                //can be commented
                await new Promise((resolve) => setTimeout(resolve, arraySpeed));
            } else {
                // if not the min one set to default
                bars[j].style.backgroundColor = "";
                await new Promise((resolve) => setTimeout(resolve, arraySpeed));
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;

        // Swap bars visually
        await swapBarsforSelection(i, min);
        
        // After swap marking the sorted bar in blue
        bars[i].style.backgroundColor = "blue";

        await new Promise((resolve) => setTimeout(resolve, arraySpeed));  
    }
    console.log(array);
    console.log("Sorted bars array:", bars.map(bar => bar.style.height));
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "orange";
    }
}


async function swapBarsforSelection(index1, index2) {
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
    await new Promise((resolve) => setTimeout(resolve, arraySpeed));

    // Temporarily disable transitions before DOM manipulation
    bar1.style.transition = "none";
    bar2.style.transition = "none";

    // Reset transforms to avoid visual glitches
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0)";

    swapDivsforSelection(bar1,bar2)

    // Update the bars array
    let temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;
}


function swapDivsforSelection(id1, id2) {
    let div1 = id1;
    let div2 = id2;

    if (div1 && div2) {
        let parent = div1.parentNode;
        let sibling = div2.nextSibling === div1 ? div2 : div2.nextSibling;

        parent.insertBefore(div2, div1);
        parent.insertBefore(div1, sibling);
    }
}