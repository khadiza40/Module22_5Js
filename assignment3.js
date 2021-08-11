//3 no problem solve answer --> Count Delivery Cost
//function start with parameter as shirt Quantity value

function deliveryCost(shirtQuantity) {
    //if enter string or other key then throw this error line
    if (typeof shirtQuantity != 'number') {
        return "please enter a number!";

    }
    //if enter negative or other key then throw this error line
    if (shirtQuantity < 1) {
        return "please enter valid quantity which is greater than 0 !";

    }
    let ShirtdeliveryCost ;

    //shirt delivery cost for  0 t0 100 shirt's quantity 
    if (shirtQuantity <= 100) {
        ShirtdeliveryCost = shirtQuantity * 100;

    }
    //shirt delivery cost for  101 t0 200 shirt's quantity 
    else if (shirtQuantity >= 101 && shirtQuantity <= 200) {
        const restQuantity = shirtQuantity - 100; //more quantity of 100
        /*  for 1st 100 quantity (100*100) ,
      MORE 100 quantity (restQuantity*80) 
        */
        ShirtdeliveryCost = (restQuantity * 80) + (100 * 100);


    }
    //shirt delivery cost for  greater than 200 shirt's quantity 
    else if (shirtQuantity > 200) {
        const restQuantity = shirtQuantity - 200;  //more quantity of 200
        /*  for 1st 100 quantity (100*100) , 2nd 100 quantity (100*80)
        MORE 200 quantity (restQuantity*50) 
          */
        ShirtdeliveryCost = (restQuantity * 50) + (100 * 100) + (100 * 80);


    }
    ////return total delivery cost
    return ShirtdeliveryCost;

}
//function end
console.log(deliveryCost(379));