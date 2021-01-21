// const kelvin = 293 ;
// // kelvin başlangıç sabiti

// let celcius = kelvin - 273 ;
// // celcius başlangıç değeri

// let fahrenheit = Math.round(celcius * (9/5) + 32) ;
// //fahrenheit başlangıç değeri-rounded

// let newton = Math.floor(celcius*(33/100))

// console.log(`${kelvin} Kelvin is ${celcius} celcius degree  ${fahrenheit} degrees Fahrenheit, and ${newton} Newton.`) ;

// PROMPT //
var kelvin = prompt(`enter fahrenheit degree:`) ;

let celcius = kelvin - 273 ;

let fahrenheit = Math.round(celcius * (9/5) + 32) ;

let newton = Math.floor(celcius*(33/100)) ;
 if(kelvin!=null){

  alert(`${kelvin} Kelvin is 
  ${celcius} celcius degree  
  ${fahrenheit} degrees Fahrenheit, 
  and ${newton} Newton.`) ;

 }