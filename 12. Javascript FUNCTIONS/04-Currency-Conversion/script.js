var price = prompt("Enter the amount in pound (£):")
var q = prompt("Enter the number for the currency to convert:\n  (P) Pound\n (B) BRL ")
var a;

function converter(){
    if(q == "P" ){
        a="$"
        value = price*(1.4*0.99);
    }else{
        a="BRL"
        value = price*(5.7*0.99);
    }
    return value;
}

console.log(`${price}£ is ${converter()} ${a}.`);



// const USDEURrate = 1.4;
// const USDBRLrate = 5.7;

// var cur = prompt("Enter Currency: ");
// var price = prompt("How much? ");

// function converting (cur, price) {
//     if (cur === "EUR") {
//         return (price * USDEURrate).toFixed(2);
//     } else {
//         return ((price * 0.99) * USDBRLrate).toFixed(2);
//     }
// }


// console.log(converting(cur, 100));