function ticketPrice(ticketQuantity) {
    const ticketPriceUnder100 = 100;
    const ticketPriceUnder200 = 90;
    const ticketPriceUpper200 = 70;

    if (ticketQuantity <= 100) {
        let price = ticketQuantity * ticketPriceUnder100;
        return price;
    }
    else if (ticketQuantity <= 200) {
        let priceUnder100 = 100 * ticketPriceUnder100;
        let pricerest = (ticketQuantity - 100) * ticketPriceUnder200;
        let price = priceUnder100 + pricerest;
        return price;
    }
    else if (ticketQuantity > 200) {
        let priceUnder100 = 100 * ticketPriceUnder100;
        let priceUnder200 = 100 * ticketPriceUnder200;
        let pricerest = (ticketQuantity - 200) * ticketPriceUpper200;
        let price = priceUnder100 + priceUnder200 + pricerest;
        return price;
    }
}

let ticketTotalPrice = ticketPrice(200);
console.log(ticketTotalPrice);