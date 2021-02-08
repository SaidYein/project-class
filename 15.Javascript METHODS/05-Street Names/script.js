/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
let arr=[
  "Carnaby Street",
  "Abchurch Lane",
  "Adam's Court",
  "Piccadilly Street",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
  "Brick Lane"]
let newArr=[];
  function laneChooser(){
    return newArr.push(arr.includes("Lane"));
  }
  console.log(...newArr)