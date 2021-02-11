/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

console.log(names.filter(x=>x[0]=='A' && x.length>7))

console.log(names.filter(x=>x[0]!=='A'))

/* EXPECTED OUTPUT */
// "Alexandra"
