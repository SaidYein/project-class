//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";
let favoriteQuote = quote.split(' ');
favoriteQuote.pop();
favoriteQuote.push("Development","ThoughtWorks","Inc.")
favoriteQuote.splice(1, 1,"fool")
favoriteQuote.shift();
favoriteQuote.unshift("Any");
favoriteQuote.splice(7, 5, "computer");
console.log(favoriteQuote.length)
quote = favoriteQuote.join(" ");
console.log(quote);

