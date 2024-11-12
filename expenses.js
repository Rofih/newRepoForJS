/*const products = [ 
    { name: "Laptop", price: 1200 }, 
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 }, 
    { name: "Monitor", price: 200 }
];
function getProductPrices(obj){
    let overPricedItems = [];
    let discountedProducts = {};
    obj.forEach((num)=> {
        for(const property in num){
            if(num[property] > 50){
                overPricedItems.push(num);
            }
        }
    });
    overPricedItems.forEach((num)=> {
        for(const element in num){
            discountedProducts[element] = num[element]*0.1;
        }
    });
    return discountedProducts;
};
console.log(discountedProducts(products))*/
