function shopingCart(shopingProducts){
    let totalCost = 0;
    for(let i = 0; i < shopingProducts.length; i++){
        let product = shopingProducts[i];
        let productPrice = product.Price * product.quantity;
        let discount = productPrice * (product.discount / 100);
        let productPriceAfterDiscount = productPrice - discount;
        
        totalCost = totalCost + productPriceAfterDiscount;
    }
    return totalCost;
}



let shopingProducts = [
    {Name: 'Shirt', Price: 1000, quantity: 3, discount: 22},
    {Name: 'Pant', Price: 1500, quantity: 4, discount: 10},
    {Name: 'Shoe', Price: 3000, quantity: 2, discount: 12},
    {Name: 'Shocks', Price: 200, quantity: 3, discount: 50},
    {Name: 'Belt', Price: 500, quantity: 2, discount: 5},
    {Name: 'underware', Price: 5000, quantity: 5, discount: 3}
];
let totalPrice = shopingCart(shopingProducts);
console.log(totalPrice, "Tk.  Have a nice day sir 🤣😂😁😂");