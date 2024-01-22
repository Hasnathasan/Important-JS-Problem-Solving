let mobiles = [
    {Name : 'Samgsumg', Price: 20000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'iPhone', Price: 120000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'Samphony', Price: 10000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'Xaomi', Price: 60000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'Samgsung Galaxi', Price: 100000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'onePlus', Price: 110000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'Oppo', Price: 25000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'Vivo', Price: 18000, Camera: 64, color: 'Blue', prosesor: 'actopas8'},
    {Name : 'oneNote', Price: 700000, Camera: 64, color: 'Blue', prosesor: 'actopas8'}
]


function largePrice(mobiles){
    let largePriceMobile = mobiles[0];
    for(let i = 0; i < mobiles.length; i++){
        let mobile = mobiles[i];
        if(mobile.Price > largePriceMobile.Price){
            largePriceMobile = mobile;
        }
    }
    return largePriceMobile;
}

let inputmobiles = largePrice(mobiles);
console.log(inputmobiles);