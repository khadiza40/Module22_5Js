const Products = [
    {Name : 'Phone' , Price: 12000},
    {Name : 'Paper' , Price: 120},
    {Name : 'Potato' , Price: 60},
    {Name : 'Laptop' , Price: 62000},
    {Name : 'Watch' , Price: 2000},
];
let cheapestPrice =Products[0];
for(const Product of Products){
    if(Product.Price < cheapestPrice.Price){
      //console.log(Product);
      cheapestPrice = Product;  
    }
    
}
console.log(cheapestPrice);
//cntrl shift a