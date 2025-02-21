async function linearSearch(target) {
    let container = document.getElementById('x');
    let elements = container.children;
    let message = document.getElementById('message');

    // for removing previous search colors and effects
    for (let i = 0; i < arraySize; i++) {
        elements[i].classList.remove('iterate', 'grow'); 
        elements[i].classList.add('default'); 
    }

    let flag = true;

    for (let i = 0; i < arraySize; i++) {
        elements[i].classList.remove('default'); // Remove blue color while checking
        elements[i].classList.add('iterate'); // Highlight the current element
        await new Promise(resolve => setTimeout(resolve, arraySpeed));

        if (array[i] == target) {
            elements[i].classList.remove('iterate'); // remove red if it is the target
            elements[i].classList.add('grow'); // add red to visiting div
            message.innerHTML = `Element ${array[i]} found at index "${i}"`;
            flag = false;
            return;
        } 
        // else {
        //     // elements[i].classList.remove('iterate'); // Remove current check highlight
        //     elements[i].classList.add('default'); // Make it red again
        // }
    }

    if (flag) {
        message.innerHTML = `Element ${target} not found`;
    }
}

// async function linearSearch(target){
//     let container = document.getElementById('x');
//     let elements = container.children;
//     let message = document.getElementById('message');
//     let flag = true;
//     for(let i = 0;i<arraySize;i++){
//         elements[i].classList.add('iterate');
//         await new Promise(resolve => setTimeout(resolve, arraySpeed));
//         if(array[i]==target){
//             elements[i].classList.add('grow');
//             message.innerHTML = Element ${array[i]} found at index "${i}"
//             flag = false;
//             return;
//         }
//     }
//     if(flag == true){
//         message.innerHTML = Element ${target} not found;
//     }
// }
