// shirt price=100; pant price=200; shoes price= 500;
//2nd problem solve --> total sales 
//function start with 3 parameter
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    //     //if enter string or other key then throw this error line
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoesQuantity != 'number') {
        return "please enter a number quantity!";

    }
    //     //if enter negative or other key then throw this error line
    if (shirtQuantity <0 || pantQuantity < 0 || shoesQuantity < 0) {
        return "please enter valid quantity which is equal/greater than 0!";
    }

    //product price list
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoesPrice = 500;

    //all product price calculation 
    let shirtPriceQuantity = shirtQuantity * shirtPrice;
    let pantPriceQuantity = pantQuantity * pantPrice;
    let shoesPriceQuantity = shoesQuantity * shoesPrice;

    //total
    let totalSalesAmount = shirtPriceQuantity + pantPriceQuantity + shoesPriceQuantity;
    //return total sales amount
    return totalSalesAmount;
}

//end function
console.log(totalSales(0, 0, "1"));