/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
/*FILTER TRANSPORT:
I am new to London and would like to know what transport I can take to different famous locations.
 
An array with London locations, and the forms of transport you can take to get there, have been provided.

 1.
Create a function which:

Accepts two arguments, one is an array which contains all London locations with transportation knowledge. The other is search value.

Returns an array containing only the names of where I can go if I only want to use a specific mode of transport.

For example: For "river boat", result should be like this; ["Greenwich", "London Bridge"]
Example-2 : findTransport(londonLocations , bus) = [“Angel”, “Greenwich”, “Tower Bridge”]

NOTE: Only the names should be returned, not the means of transport.

2. 
Now return a string of meaningful sentence, 
“You can go with <TRANSPORT> to the <LOCATION-1>, <LOCATION-2>.” 


Good luck!
*/
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]
let x = prompt("Which transportation do you prefer? \n1. bus\n2. tube\n3. river boat\n4. dlr\n5. air line");

londonPlaces = (arr, x) =>{
  return newArr = arr.map(item=>{
    if(item.includes(x)){
      return item[0];
    }})
  }
let y = londonPlaces(londonLocations, x);
  console.log(`You can go to ${y} by using ${x}`);

