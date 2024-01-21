let music = 'Sada sada kala kala rong jomece sada kala';
let music1 = music.toLowerCase();

let isExixs = 'SAda';
let lowerCase = isExixs.toLowerCase();
let isExixsInMusic = music1.startsWith(lowerCase);


console.log(isExixsInMusic);