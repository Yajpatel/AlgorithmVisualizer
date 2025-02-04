function mergeSort(arr, l, h) {
    if (l >= h) {
        return;
    }
    let mid = Math.floor((l + h) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, h);
    merge(arr, l, mid, h);
}

function merge(arr, l, mid, h) {
    let left = l;
    let right = mid + 1;
    let temp = [];
    let count = 0;

    while (left <= mid && right <= h) {
        if (arr[left] < arr[right]) {
            temp[count] = arr[left];
            left++;
        } else {
            temp[count] = arr[right];
            right++;
        }
        count++;
    }
    while (left <= mid) {
        temp[count] = arr[left];
        left++;
        count++;
    }
    while (right <= h) {
        temp[count] = arr[right];
        count++;
        right++;
    }
    for (let i = l, change = 0; i <= h; i++, change++) {
        arr[i] = temp[change];
    }
}

async function mergesort() {
    console.log(array);
    if (array.length <= 1) {
        return;
    }
    await mergeSort(array, 0, array.length - 1);
    console.log(array);
}
