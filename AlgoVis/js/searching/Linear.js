async function linearSearch(target){
    let container = document.getElementById('x');
    let elements = container.children;
    let message = document.getElementById('message');
    // elements.classList.add('default');
    for(let i = 0;i<arraySize;i++){
        elements[i].classList.add('iterate');
        await new Promise(resolve => setTimeout(resolve, arraySpeed));
        if(array[i]==target){
            elements[i].classList.add('grow');
            message.innerHTML = `Element ${array[i]} found at index "${i}"`
            return;
        }
    }
}