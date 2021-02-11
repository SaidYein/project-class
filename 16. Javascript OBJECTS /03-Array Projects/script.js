
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let initials = countries.map(item=>item[0]+item[1]+item[2]);
let length = countries.map(item=> item.length);
var arraySplit = [];

for (i=0; i<countries.length; i++) {
  arraySplit.push(countries.slice(i,i+1)),
  arraySplit[i].push(initials[i], length[i])
}

console.log(...arraySplit);

// // Add "-" after every even number
const numbers = "315469781318158";
let numbersArray = numbers.split('')

for(i=0; i<numbersArray.length; i++){
  if(numbersArray[i]%2==0){
    numbersArray.splice(i+1,0,"-")
  }
}
let result=numbersArray.join('');
console.log(result);

// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
 var odd=[];
 arr.forEach(item=>{
   if(item%2 !== 0){
      return odd.push(item);
   }})
console.log(odd)