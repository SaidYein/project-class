// var name = prompt("Enter a name");
// var h = prompt("Enter your height in m");
// var w = prompt("Enter your weight in kg");

// var BMI = function (h, w) {
//   return (w / h ** 2).toFixed(2)
// }

// if (BMI(h, w) > 30) {
//   console.log(`${BMI(h, w)} and considered as OBESE`)
// } else if (30 > BMI(h, w) && BMI(h, w) > 25) {
//   console.log(`${BMI(h, w)} and considered as OWERWEIGHT`)
// } else if (25 > BMI(h, w) && BMI(h, w) > 18.5) {
//   console.log(`${BMI(h, w)} and considered as NORMAL`)
// } else {
//   console.log(BMI(h, w) + " and considered as UNDERWEIGHT")
// }
// [1, 2, 3,4,5] 


var a=prompt("enter 'a'")
var b=prompt("enter 'b'")
var c=prompt("enter 'c'")

function calculator() {
  return (-b + sqrt(b**2 - 4*a*c))/2*a;
}
function calculator1() {
  return (-b - sqrt(b**2 - 4*a*c))/2*a;
}
console.log(`Your equation is ${a}x2 + ${b}x + ${c} = 0. and solutions are ${calculator()} and ${calculator1()}`)