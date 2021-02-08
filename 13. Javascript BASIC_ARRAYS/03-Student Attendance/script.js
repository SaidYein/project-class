
let attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]
let late = attendances.length

attendances.push(["John", 9],["Ali", 10],["Joe", 8])
let late1 = attendances.length

attendances.splice(2, 1, ["Elamin", 7])

console.log(`Today, ${late1-late} students came late; First student is: ${attendances[6][0]}, and last student is ${attendances[8][0]}`)

let sum=0;
for(i=0; i<attendances.length; i++){
  sum += attendances[i][1]; 
}
let av = (sum/attendances.length).toFixed(2);
console.log("The average age of the class is: "+av);

attendances.shift();
attendances.splice(2,1);

let att=attendances.length;
console.log(`We finished class with ${att} students`);

console.log(JSON.stringify(attendances));