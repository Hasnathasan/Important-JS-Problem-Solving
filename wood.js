function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const cftPerChair = 3;
    const cftPerTable = 10;
    const cftPerBed = 50;
    let totalCftOfChair = cftPerChair * chairQuantity;
    let totalCftOfTable = cftPerTable * tableQuantity;
    let totalCftOfBed = cftPerBed * bedQuantity;
    const totalCft = totalCftOfChair + totalCftOfTable + totalCftOfBed;
    return totalCft;
}


let totalCftAns = woodCalculator(2, 4, 3);
console.log(totalCftAns, "CFT"); 