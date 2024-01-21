function fibonacci(array){
    let fibonacci = array;
    for(let i = 2; i < 10; i++){
        let nextNum = array[i-1] + array[i-2];
        fibonacci.push(nextNum);
    }
    return fibonacci;
}


let sampleArray = [0, 1];
let fiboArray = fibonacci(sampleArray);
console.log(fiboArray);