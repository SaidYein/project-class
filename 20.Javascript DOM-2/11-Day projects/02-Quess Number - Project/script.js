const checkButton = document.getElementById('check_btn');
const guessed_number = document.getElementById('guess_input');
const message = document.querySelector('.message');
let point = document.querySelector('.score');
let refresh_btn = document.createElement('button'); 
let left = document.querySelector(".left");
let high_score = document.querySelector(".highscore");
refresh_btn.classList.add("btn");
refresh_btn.innerHTML="Again?";
refresh_btn.style.marginTop="5px";
let random = () =>{
  return Math.floor((Math.random()*25)+1);
  }  

no = random()
let highscore = "0"

refresh_btn.onclick = () => {
  point.innerHTML = '10';
  document.querySelector('body').style.backgroundColor="#222";
  message.innerText ="Start guessing...";
  guessed_number.value="";
}

checkButton.onclick=()=>{
  if(guessed_number.value>25 || guessed_number.value<1){
    message.innerText="Invalid entry! Please enter a number between \n1-25";
  }else{
    if(guessed_number.value > no ){
      message.innerText ="Nope! Go lower!";
      }else if(guessed_number.value < no){
        message.innerText ="Nope! Go higher!";
      }else{
        message.innerText ="You Win!";
        document.querySelector('body').style.backgroundColor="green";
        left.appendChild(refresh_btn);
        let score =Number(point.innerText)*10;
        if(score>highscore){
          high_score.innerText=score;
          highscore=score;
        }
      }
    if(point.innerHTML>0){
      point.innerHTML -= 1;
    }
    if(point.innerHTML == 0){
      message.innerText = "You Fool! \n You LOST!";
      document.querySelector('body').style.backgroundColor="red";
      left.appendChild(refresh_btn);
    }
  }
}

