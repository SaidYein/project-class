//player1 -- 89 120 103
//player2 -- 116 94 123
var team1=[122, 120, 103];
var team2=[116, 99, 123];
var av1 = ((team1[0]+team1[1]+team1[2])/3).toFixed(2);
console.log(av1);
var av2 = ((team2[0]+team2[1]+team2[2])/3).toFixed(2);
console.log(av2);
if(av1>av2){
  console.log(`Team 1 won by average score`);
}else if(av2>av1){
  console.log(`Team 2 won by average score`);
}else{
  console.log(`It is a TIE`);
}