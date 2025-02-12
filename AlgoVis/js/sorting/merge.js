async function mergesort() {
    console.log("Initial Array:", array);

    let initialHeights = bars.map(bar => parseInt(bar.style.height));
    console.log("Initial Bars Heights:", initialHeights);

    if (array.length <= 1) return;
    await mergeSort(array, 0, array.length - 1);

    console.log("Final Sorted Array:", array);

    let sortedHeights = bars.map(bar => parseInt(bar.style.height));
    console.log("Final Sorted Bars Heights:", sortedHeights);

    // orange after finally sorted
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "orange";
    }
}

async function mergeSort(arr, l, h) {
    if (l >= h) return;
    let mid = Math.floor((l + h) / 2);

    await mergeSort(arr, l, mid);
    await mergeSort(arr, mid + 1, h);
    await merge(arr, l, mid, h);
}

async function merge(arr, l, mid, h) {
    let left = l;
    let right = mid + 1;
    let tempArr = [];
    let tempHeights = [];

    // console.log(`Merging from index ${l} to ${h}`);
    // console.log("Before Merge:", arr.slice(l, h + 1));

    while (left <= mid && right <= h) {
        bars[left].style.backgroundColor = "magenta";
        bars[right].style.backgroundColor = "magenta";
        await new Promise(resolve => setTimeout(resolve, arraySpeed));

        if (arr[left] <= arr[right]) {
            tempArr.push(arr[left]);
            tempHeights.push(bars[left].style.height);
            left++;
        } else {
            tempArr.push(arr[right]);
            tempHeights.push(bars[right].style.height);
            right++;
        }
        
    }

    while (left <= mid) {
        tempArr.push(arr[left]);
        tempHeights.push(bars[left].style.height);
        left++;
    }

    while (right <= h) {
        tempArr.push(arr[right]);
        tempHeights.push(bars[right].style.height);
        right++;
    }

    // Copy sorted values back into original array and update bars
    for (let i = l, k = 0; i <= h; i++, k++) {
        arr[i] = tempArr[k];
        bars[i].style.height = tempHeights[k];
        bars[i].innerHTML = tempArr[k];
        bars[i].style.backgroundColor = "blue"; // Mark as sorted
        await new Promise(resolve => setTimeout(resolve, arraySpeed));
    }

    // console.log(tempHeights)
    // console.log("After Merge:", arr.slice(l, h + 1));
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


