
const calculateCharacter = () =>{

alert(`Welcome back Said!`)

var tweet = prompt( "Please enter your tweet :")

var tweetCount = tweet.length ; // hold the no. of letters

var tweetLeft = 150 - tweetCount;

// console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`)

alert(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`)

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
