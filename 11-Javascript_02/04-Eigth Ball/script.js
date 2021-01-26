var userName = prompt("Enter your name:");

if(userName == ""){
  alert("Welcome");
}else{
  alert(`Welcome ${userName}`);
}

var userQuestion = prompt("Write your question:");
console.log(`${userName}'s question is: "${userQuestion}."`);

var randomNumber = Math.floor(Math.random()*8);

if(userQuestion == ""){

  alert(`There is no question to asnwer`);
  
}else{
  
  switch(randomNumber){
    case 0:
      alert("Signs point to YES")
      break;
    case 1:
      alert("It is certain!")
      break;
    case 2:
      alert("It is decidedly so")
      break;
    case 3:
      alert("Cannot predict now.")
      break;
    case 4:
      alert("Do not count on it")
      break;
    case 5:
      alert("My sources say NO")
      break;
    case 6:
      alert("Outook not so good")
      break;
    case 7:
      alert("Reply hazy try again")
      break;
  }
    
}



