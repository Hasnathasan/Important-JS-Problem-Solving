function removeDublicate(names) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (newArray.includes(name) === false) {
            newArray.push(name);
        }
    }
    return newArray;
}



let sampleArray = ['Hasnat', 'Hasan', 'Himu', 'Shiri', 'Hasan', 'Shamim', 'Shiri', 'Hasnat', 'Rubel'];
let unicArray = removeDublicate(sampleArray);
console.log(unicArray);