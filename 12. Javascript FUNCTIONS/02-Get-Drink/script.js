var money = prompt("insert the money");
var price = prompt("enter the price per bottle")

const calcBottles = function (money, price){
  return Math.floor(money/price);
}
const calcChange= function (money, price){
  return money-(calcBottles(money, price)*price)
}

console.log ("Here is your "+calcBottles(money, price)+" bottle of drinks and change is "+calcChange(money, price)+"$");


// var money =prompt("How much money do you give me?");
// var price= prompt("how many pieces am I going tobuy?")

// function calcBottles(money, price){
//   var quantity = Math.floor(money/price);
//   return quantity;
// }
// function calcChange(money, price){
//   var change = money%price;
//   return change.toFixed(2);
// }
// function getDrink(money, price){
//   console.log("Hello master. here is your " +calcBottles(money, price) +" drinks");
//   console.log("...and your change is " + calcChange(money, price)+ "$");
//   return getDrink;
// }

// getDrink(money, price);
