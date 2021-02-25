//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const hex = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
const btn1 =document.getElementById('button1')
const btn2 =document.getElementById('button2')

btn1.onclick=()=>{
  colorIndex = Math.floor(Math.random()*colors.length);
  bg = document.querySelector('body');
  bg.style.backgroundColor=colors[colorIndex];
}

btn2.onclick=()=>{
  hexColor="#"
  for(i=0; i<6; i++){
  hexIndex = Math.floor(Math.random()*hex.length);
  hexColor += hex[hexIndex] 
}
  bg = document.querySelector('body');
  bg.style.backgroundColor= hexColor
}
