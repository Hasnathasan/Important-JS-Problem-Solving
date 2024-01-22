function reverseString(str) {
  let ans = '';
  for (let i = str.length - 1; i >= 0; i--) {
    let caracter = str[i];
    ans = ans.concat(caracter);
  }
  return ans;
}

let input = "GeeksforGeeks";
let reverse = reverseString(input);
console.log(reverse);