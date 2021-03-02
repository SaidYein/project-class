// Setting the scores and selecting our HTML elements.
let computerScore = 0;
let playerScore = 0;
//Selectors
let comp_icon = document.getElementById('comp_icon');
let play_icon = document.getElementById('play_icon')
let p_score = document.getElementById('playerScore');
let c_score = document.getElementById('computerScore');
let result = document.getElementById('result');
let rock_icon = document.getElementById('rock');
let scissors_icon = document.getElementById('scissors');
let paper_icon = document.getElementById('paper');

let icons_array = [rock_icon, scissors_icon, paper_icon]

rock_icon.onclick=()=>{
  rnd = Math.floor(Math.random()*3)
  comp_icon.className = icons_array[rnd].className
  play_icon.className="fas fa-hand-rock"
  if (comp_icon.className === "fas fa-hand-scissors"){
    result.style.color="green";
    result.innerText = "You WIN!";
    p_score.innerText = Number(p_score.innerText) + 10;
  }else if(comp_icon.className === "fas fa-hand-paper"){
    result.innerText = "You LOST!";
    c_score.innerText = Number(c_score.innerText) + 10;
  }else{
    result.style.color="black";
    result.innerText = "It's a TIE!";
  }
  

}

scissors_icon.onclick=()=>{
  rnd = Math.floor(Math.random()*3)
  comp_icon.className = icons_array[rnd].className
  play_icon.className="fas fa-hand-scissors"
  if (comp_icon.className === "fas fa-hand-paper"){
    result.style.color="green";
    result.innerText = "You WIN!";
    p_score.innerText = Number(p_score.innerText) + 10;
  }else if(comp_icon.className === "fas fa-hand-rock"){
    result.innerText = "You LOST!";
    c_score.innerText = Number(c_score.innerText) + 10;
  }else{
    result.style.color="black";
    result.innerText = "It's a TIE!";
  }
}

paper_icon.onclick=()=>{
  rnd = Math.floor(Math.random()*3)
  comp_icon.className = icons_array[rnd].className
  play_icon.className="fas fa-hand-paper"
  if (comp_icon.className === "fas fa-hand-rock"){
    result.style.color="green";
    result.innerText = "You WIN!";
    p_score.innerText = Number(p_score.innerText) + 10;
  }else if(comp_icon.className === "fas fa-hand-scissors"){
    result.innerText = "You LOST!";
    c_score.innerText = Number(c_score.innerText) + 10;
  }else{
    result.style.color="black";
    result.innerText = "It's a TIE!";
  }
}
