///////// GRADING ////////////////
// let score = prompt("Enter your score:");
// if(score<100){

//   if(score>79){
//     alert("You passed. Your grade is 'A'")
//   }else if(score>69){
//     alert("You passed. Your grade is 'B'")
//   }else if(score>59){
//     alert("You passed. Your grade is 'C'")
//   }else if(score>49){
//     alert("You passed conditionally. Your grade is 'D'")
//   }else {
//     alert("You are failed. Your grade is 'F'")
//   }

// }else {
//   alert(`${score} is invalid score`)
// }


/////////////////////////////////////////////////////////
///// CHECKING SEASONS //////////

// do{
// var season = prompt("Enter a month or type 'E' to quit")
//   switch(season.toLowerCase()){
//     case "september":
//     case "october":
//     case "november":
//       alert("It is Autumn");
//       break;
//     case "december":
//     case "january":
//     case "february":
//       alert("It is Winter");
//       break;
//     case "march":
//     case "april":
//     case "may":
//       alert("It is Spring");
//       break;
//     case "june":
//     case "july":
//     case "august":
//       alert("It is Summer");
//       break;
//     default:
//       alert(":/")
//   }
// }
// while(
//   season!="E"
// )
// alert("See you");

/////////////////////////////////////////////////////////
///// MONTH - DAY //////////
do{
var entry = prompt("Enter a month:").toLowerCase();
switch(entry){

  case "february":
    alert(`${entry} has 28 days.`);
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    alert(`${entry} has 30 days`);
    break;

  default:

    if(entry =='january' || entry =='march' || entry =='may'|| entry =='july' || entry =='august' || entry =='october' )
    { alert(`${entry} has 31 days`);
    } 
    else if(entry=="e")
    { alert("See you");
    } 
    else
    { alert('Invalid enrty');
    }
}
}while(entry!=='e')
