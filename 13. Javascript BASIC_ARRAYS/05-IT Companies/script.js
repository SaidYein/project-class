let arr = [1,2,3,4,5,6,7];
let first = arr[0];
let mid = arr[Math.floor(arr.length/2)];
let last = arr[arr.length-1];
console.log(`${first} ${mid} ${last}`)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
let firstC = itCompanies[0];
let midC = itCompanies[Math.floor(itCompanies.length/2)];
let lastC = itCompanies[itCompanies.length-1];
console.log(`${firstC} ${midC} ${lastC}`)
console.log(itCompanies.join(", "));

for(i=0; i<itCompanies.length; i++){
  itCompanies[i]=itCompanies[i].toUpperCase();
}
console.log(itCompanies.join(", "));
itCompanies.splice(6, 0, "and")

itCompanies.push("are big IT companies")
console.log(itCompanies.join(", "));

let ibm = itCompanies.includes("IBM");
if(ibm){
  console.log("IBM");
}

itCompanies.sort();

let itCompaniesreversed=[]; //Reverse the array without reverse method
for(i=0; i<itCompanies.length; i++){
itCompaniesreversed.push(itCompanies[itCompanies.length-1-i]);
}
console.log(itCompaniesreversed);

console.log(itCompanies);
console.log(itCompaniesreversed.reverse());

itCompanies.splice(0, 3) //Slice out the first 3 companies from the array
console.log(itCompanies);

itCompanies.splice(itCompanies.length-3, 3) //Slice out the last 3 companies from the array
console.log(itCompanies);

itCompanies.splice(Math.floor(itCompanies.length/2), 1);
console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);



