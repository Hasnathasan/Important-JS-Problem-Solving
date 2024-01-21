
// function maxNum(jim, dela, chinku){
//     if(jim > dela && jim > chinku){
//         var ans = "Jim"
//     }
//     if(dela > jim && dela > chinku){
//         var ans = "Dela"
//     }
//     if(chinku > dela && chinku > jim ){
//         var ans = "Chinku"
//     }
//     return ans;
// }




// function maxNum(jim, dela, chinku){
//     let ans = Math.max(jim, dela, chinku);
//     return ans;
// }




function maxNum(jim, dela, chinku){
    let ans = Math.min(jim, dela, chinku);
    return ans;
}





let jim = 97;
let dela = 85;
let chinku = 80;
let maxnumber = maxNum(jim, dela, chinku);
console.log(maxnumber);

