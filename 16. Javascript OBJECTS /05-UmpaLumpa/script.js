/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 4 print “Umpa” instead of the number 
  - For the multiples of 5 print “Lumpa”. 
  - For numbers which are multiples of both 4 and 5 print “Umpa-Lumpa”

  An array with numbers 1-25 has been provided.
*/

var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

arrNumber.forEach(x => {
  if(x%20==0){
    arrNumber.splice(x-1, 1, "Umpa-Lumpa");
  }else if(x%5==0){
    arrNumber.splice(x-1, 1, "Lumpa");;
  }else if(x%4==0){
    arrNumber.splice(x-1, 1, "Umpa");;
  }
})
console.log(arrNumber)
