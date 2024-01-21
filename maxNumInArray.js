function maxNum(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        let arrayNum = array[i];
        if (arrayNum > largest) {
            largest = arrayNum;
        }
    }
    return largest;
}

let sanpleArray = [34, 54, 23, 75, 23, 43];
let maxNumAns = maxNum(sanpleArray);
console.log(maxNumAns);



// Let's try again 
function minNum(array) {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {
        let arrayNum = array[i];
        if (arrayNum < minNum) {
            minNum = arrayNum;
        }
    }
    return minNum;
}



let array = [34, 54, 23, 75, 23, 43, 10];
let minNumAns = minNum(array);
console.log(minNumAns);