function stringReverse(string) {
    var reverseString = '';
    for (let i = (string.length - 1); i >= 0; i--) {
        let stringcaracter = string[i];
        reverseString = reverseString.concat(stringcaracter);
    }
    return reverseString;
}


let string = 'Hasnat Hasan';
let reverseString = stringReverse(string);
console.log(reverseString);