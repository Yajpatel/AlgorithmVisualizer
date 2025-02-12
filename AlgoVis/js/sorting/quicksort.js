async function quicksort(){
    console.log("Initial array " + array);
    await qs(array,0,array.length-1);
    console.log("sorted Array "+array);

    // at end orange
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "orange";
    }
}

async function qs(array,low,high){
    if(low < high){
        let pivotIndex = await partition(array,low,high);
        // bars[pivotIndex].style.backgroundColor = "yellow";
        await qs(array,low,pivotIndex-1);
        await qs(array,pivotIndex+1,high);
        // bars[pivotIndex].style.backgroundColor = "blue";
    }
}

async function partition(array,low,high){
    let pivot = array[high];
    let index = low;

    bars[high].style.backgroundColor = "magenta";

    for(let i = low;i<high;i++){
        bars[i].style.backgroundColor = "red";
        if(array[i]<pivot){

            let temp1 = array[i];
            array[i] = array[index];
            array[index] = temp1;

            // bars[i].style.backgroundColor = "red";
            // bars[index].style.backgroundColor = "red";

            await swapBarsforQuick(i,index);
            
            bars[i].style.backgroundColor = "blue";
            bars[index].style.backgroundColor = "blue";

            await new Promise((resolve) => setTimeout(resolve, arraySpeed));

            index++;
        }
        else{
            bars[i].style.backgroundColor = "#5bc9b1"; // Default color
        }
        // bars[i].style.backgroundColor = "blue";
        // bars[i].style.backgroundColor = "#5bc9b1";
    }
    let temp = array[index];
    array[index] = array[high];
    array[high] = temp;

    // bars[high].style.backgroundColor = "#5bc9b1";
    await swapBarsforQuick(index,high);
    bars[index].style.backgroundColor = "green";
    // await new Promise((resolve)=>setTimeout(resolve,500));
    for (let i = low; i <= high; i++) {
        if (i !== index) bars[i].style.backgroundColor = "#5bc9b1";
    }

    return index;
}

async function swapBarsforQuick(index1, index2) {
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

    swapDivsforQuick(bar1,bar2)

    // Update the bars array
    let temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;
}


function swapDivsforQuick(id1, id2) {
    let div1 = id1;
    let div2 = id2;

    if (div1 && div2) {
        let parent = div1.parentNode;
        let sibling = div2.nextSibling === div1 ? div2 : div2.nextSibling;

        parent.insertBefore(div2, div1);
        parent.insertBefore(div1, sibling);
    }
}