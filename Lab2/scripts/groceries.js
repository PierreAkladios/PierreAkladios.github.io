
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "brocoli",
  lactose: true,
  nuts: true,
  organic: true,
  price: 1.99
},
{
  name: "bread",
  lactose: true,
  nuts: true,
  organic: true,
  price: 2.35
},
{
  name: "milk",
  lactose: false,
  nuts: true,
  organic: true,
  price: 2.99
},
{
  name: "peanut butter",
  lactose: true,
  nuts: false,
  organic: false,
  price: 3.56
},
{
  name: "trailmix snackpac",
  lactose: true,
  nuts: false,
  organic: false,
  price: 3.59
},
{
  name: "yogourt",
  lactose: false,
  nuts: true,
  organic: false,
  price: 5.64
},
{
  name: "groundbeef",
  lactose: true,
  nuts: true,
  organic: false,
  price: 8.97
},
{
  name: "salmon",
  lactose: true,
  nuts: true,
  organic: true,
  price: 10.00
},
{
  name: "pizza",
  lactose: false,
  nuts: true,
  organic: false,
  price: 11.00
},
{
  name: "cheese",
  lactose: false,
  nuts: true,
  organic: true,
  price: 12.00
},
];

var organicc = false;

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
let product_names = [];
var priceStr =" - ";
for (let i=0; i<prods.length; i+=1) {
  if ((restriction == "Lactose") && (prods[i].lactose == true)){
    priceStr = priceStr.concat(prods[i].price.toString());
    priceStr = priceStr.concat(" $");
    if(organicc == true){
      if(prods[i].organic == true){
        priceStr = priceStr.concat("organic");
      }
    }
    product_names.push(prods[i].name.concat(priceStr));
    priceStr = " - ";
  }
  else if ((restriction == "Nuts") && (prods[i].nuts == true)){
    priceStr = priceStr.concat(prods[i].price.toString());
    priceStr = priceStr.concat(" $");
    product_names.push(prods[i].name.concat(priceStr));
    priceStr = " - ";
  }
  else if (restriction == "None"){
    priceStr = priceStr.concat(prods[i].price.toString());
    priceStr = priceStr.concat(" $");
    product_names.push(prods[i].name.concat(priceStr));
    priceStr = " - ";
  }
}
return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
totalPrice = 0;
for (let i=0; i<products.length; i+=1) {
  if (chosenProducts.indexOf(products[i].name) > -1){
    totalPrice += products[i].price;
  }
}
return totalPrice;
}
//inspired by https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
function organicCheck(){
  // Get the checkbox
  var checkBox = document.getElementById("organic");
  if (checkBox.checked == true){
    organicc = true;
  }
  else{
    organicc = false;
  }
}
