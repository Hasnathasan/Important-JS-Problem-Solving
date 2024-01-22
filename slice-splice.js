let friends = [23, 53, 12, 74, 34, 79, 37, 62, 54];

// Returns a copy of a section of an array. 
let sliceArray = friends.slice(1, 4);
console.log(sliceArray);



// Removes elements from an array
// if necessary, inserts new elements in their place returning the deleted elements.
// 
// let spliceArray = friends.splice(1, 5);

let spliceArray1 = friends.splice(1, 5, 20, 400);
console.log(spliceArray1);
console.log(friends);

