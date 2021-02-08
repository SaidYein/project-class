let arr=["Jenny", "Michael", "Chloe", "Timmy"];
function whoIsWashing(){
 return console.log(`${arr[Math.round(Math.random()*arr.length)]} is washing today`)
}
arr.push("Max");
whoIsWashing(); 