
// var myAge = 32 ; // your age
// var earlyYears = 2 ; // early years of dog
// earlyYears = earlyYears * 10.5 ;
// var laterYears = myAge - 2;
// laterYears = laterYears * 4;
// var myAgeInDogYears = laterYears + earlyYears ;

// var earlyYears1 = earlyYears / 10.5 ;
// var laterYears1 = myAge - 2;
// laterYears1 = laterYears1 / 4;
// var myAgeInDogYears1 = laterYears1 + earlyYears1 ;


// var myName = "Said".toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is the same as ${myAgeInDogYears1} dog years.`)

alert("Welcome to DogAge calculator.")
var dog = "Dog";
var human = "Human";
var str0 = "dog";
var str1= prompt( "Type in your selection from the followings; (Ex: dog ) \n 1.'dog' \n 2.'human'");

var age = prompt("enter the age: ");
var earlyYears = 2 ;
var laterYears = age - 2;

if (str1.toLowerCase() == str0 ) { 
  var dogAge = age ;

  earlyYears = earlyYears * 10.5 ;
  laterYears = laterYears * 4;
  var HumanYears = laterYears + earlyYears ;

  alert(`The "Dog Age" you've entered is ${dogAge}. It is equivalent to ${HumanYears} years old in "Human Years"`)

} else {
  var humanAge = age ;

  earlyYears = earlyYears / 10.5 ;
  laterYears = laterYears / 4;
  var DogYears = laterYears + earlyYears ;

  alert(`The "Human Age" you've entered is ${humanAge}. If you were a dog, you would have lived ${DogYears.toFixed(1)} years`)
}