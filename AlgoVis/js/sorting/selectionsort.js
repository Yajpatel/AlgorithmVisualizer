async function selectionsort(){
    console.log(array);
    console.log(bars.map(bar => bar.style.height));
    for(let i = 0;i<array.length;i++){
        let min = i;
        for(j = i+1;j<array.length;j++){
            if(array[min] > array[j]){
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;

        // Swap bars visually
        await swapBars(i, min);
        await new Promise((resolve) => setTimeout(resolve, 1000));  
    }
    console.log(array);
    console.log("Sorted bars array:", bars.map(bar => bar.style.height));
}


async function swapBars(index1, index2) {
    let bar1 = bars[index1];
    let bar2 = bars[index2];

    let pos1 = bar1.offsetLeft;
    let pos2 = bar2.offsetLeft;

    // Apply smooth transitions
    bar1.style.transition = "transform 0.5s";
    bar2.style.transition = "transform 0.5s";

    // Move bars
    bar1.style.transform = `translateX(${pos2 - pos1}px)`;
    bar2.style.transform = `translateX(${pos1 - pos2}px)`;

    // Wait for animation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset transformations
    // bar1.style.transition = "none";
    // bar2.style.transition = "none";
    bar1.style.transform = "translateX(0)";
    bar2.style.transform = "translateX(0)";

    // Swap them in the DOM
    let parent = bar1.parentNode;
    if (bar1.nextSibling === bar2) {
        parent.insertBefore(bar2, bar1);
    } else {
        parent.insertBefore(bar1, bar2.nextSibling);
    }

    // Update the bars array
    let temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;
}