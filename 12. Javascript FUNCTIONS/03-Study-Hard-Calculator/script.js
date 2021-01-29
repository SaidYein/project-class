var idealStudied=0;
var totalStudied=0;
var hours=[];
var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(i=0; i<7; i++){
  hours.push(prompt("Enter the ideal study hours for" +arr[i]));
  idealStudied+=Number(hours[i]);
  console.log(`${hours[i]} hours for ${arr[i]} `)
}
console.log(`You determined ideal study hours as ${idealStudied} hour(s)`)

for(i=0; i<7; i++){
  a = prompt("How many hours did you study for "+arr[i]+"?");
  getStudyHours();
}

console.log(`You have studied ${totalStudied} hours`)

if(totalStudied*1<idealStudied*1){
  console.log(`You havent studied enough and need to study ${debt()} hours more next week`)
}else if(totalStudied*1 == idealStudied*1){
  console.log(`You are doing weell. Ideal study hours goal accomplished!`)
}else{
  console.log(`You are studying too much! you need to study ${iDebt()} hours less next week`)
}

function getStudyHours(){
  return totalStudied= totalStudied*1 + a*1;
}

function debt(){
  return idealStudied*1-totalStudied*1;
}

function iDebt(){
  return totalStudied*1-idealStudied*1;
}