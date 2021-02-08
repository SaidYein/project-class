// create variables containing strings
//Use an array to hold the value of the quotes
let a ='Beware of what you become in pursuit of what you want. - Jim Rohn';
let b ='It\'s not what happens to you, but how you react to it that matters. - Epictetus';
let c ='The best revenge is massive success. - Frank Sinatra';
let d ='You miss 100% of the shots you don\'t take. - Wayne Gretzy';
let e = 'Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
let f = 'Do not take life too seriously. You will not get out alive. - Elbert Hubbard';

let arrOfQuotes = [a,b,c,d,e,f];
let arrOfDays = ["Monday", "Tuesday", "Wednesday",  "Thursday", "Friday", "Saturday", "Sunday"]
arrOfQuotes.sort();

function randomQuote () {
  return arrOfQuotes[Math.floor(Math.random()*arrOfQuotes.length)];
}

function randomDay () {
  return arrOfDays[Math.floor(Math.random()*arrOfDays.length)];
}

function result(second, first){
  return console.log(`Today is ${first()} and today's quote is; ${second()}`)
}

result(randomQuote, randomDay);
