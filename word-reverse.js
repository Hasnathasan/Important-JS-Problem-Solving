// function wordReverse(name){
//     let wordDevide = name.split(' ');
//     let reversedWordArray = [];
//     for(let i = wordDevide.length - 1; i >= 0; i--){
//         let word = wordDevide[i];
//         reversedWordArray.push(word);
//     }
//     return reversedWordArray;
// }

// let sampleString = 'Hi I am Hasnat Hasan';
// let reverseWord = wordReverse(sampleString);
// console.log(reverseWord);




function wordDivide(sentence){
    let wordArray = sentence.split(' ');
    console.log(wordArray);
    let newArray = [];
    for(let i = wordArray.length - 1; i >= 0; i--){
        let word = wordArray[i];
        newArray.push(word);
    }
    return newArray;
}


let sentence = 'Hi I am Hasnat Hasan';
let divideWord = wordDivide(sentence);
console.log(divideWord);