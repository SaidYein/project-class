// var massMark =97 ; 
// var massJohn =68 ;
// var heightMark = 1.86 ;
// var heightJohn = 1.65 ;

// var BMIJohn = massJohn / heightJohn**2;
// var BMIMark = massMark / heightMark**2;

// console.log ("John's BMI is :" + BMIJohn.toFixed(3) )
// console.log ("Mark's BMI is :" + BMIMark.toFixed(3) )

// if(BMIMark>BMIJohn){
//   console.log(`Is Mark's BMI is higher than John's? Answer is \"true\". Because Mark's BMI is: ${BMIMark.toFixed(3)} "and John's BMI is ${BMIJohn.toFixed(3) } `)
// } else {
//   console.log(`Is Mark's BMI is higher than John's?  Answer is \"false\". Because Mark's BMI is: ${BMIMark.toFixed(3)} "and John's BMI is ${BMIJohn.toFixed(3)} `)
// }
alert("Welcome to BMI calculator!") ;

var mass = prompt("Enter your weight (in kg)(Ex: 89)") ;
var height = prompt("Enter your height (in cm) (EX: 180 )") ;


height /= 100 ;

var BMI = Math.round(mass) / height**2 ;
BMI = BMI.toFixed(2) ;

if( (BMI < 18.5)){
  alert(`Your should eat more! Your BMI is ${BMI} and considered as UNDERWEIGHT. :(`) 
} 
else if (BMI<24.9){
  alert(`Keep up the good Work!  Your BMI is ${BMI} and it is NORMAL :)`) 
} 
else if (BMI<29.9){
  alert(`Watch out what you eat these days!  Your BMI is ${BMI} and you are OVERWEIGHT. :/ `) 
} 
else {
  alert(`You should see a dietician asap! Your BMI is ${BMI} and accounted as OBESE. :@ `) ;
}

