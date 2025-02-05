async function insertionsort() {
    let n = array.length;
    console.log("Initial Array:", array);
    for(let i = 0;i<array.length;i++){
        let j = i;
        while(j>0 && array[j-1]>array[j]){
            let temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;

            j--;
        }
    }
    console.log("Sorted Array:", array);
}