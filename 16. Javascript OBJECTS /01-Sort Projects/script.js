/*
Create a function which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted numbers in ascending and descending order 

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];
let filtered=[];

examineData = (x) => typeof(x);
console.log(examineData("Elamin"));

handleFilter = (arr) => newArray = arr.filter(item =>(parseInt(item) === item));

console.log(handleFilter(arrCase2));

typeNumber = (arr) => {
  for(i=0; i<arr.length; i++){
    if(parseInt(arr[i])==arr[i]){
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
console.log(typeNumber(arrCase1))