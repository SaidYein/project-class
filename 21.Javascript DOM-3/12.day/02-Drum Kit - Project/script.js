let all_drums = document.querySelectorAll('.drum');

all_drums.forEach(item=>{
  item.onclick=()=>{
  audio = `./sounds/${item.value}.mp3`
  new Audio(audio).play()
  item.classList.add("pressed")
  setTimeout(()=>{item.classList.remove("pressed")}, 100)
  }
})
document.addEventListener("keypress", function (event){
  entryKey = event.key
  console.log(entryKey)
  audio = `sounds/tom-${entryKey}.mp3`
  new Audio(audio).play()
  button = document.querySelector(`.${entryKey}`)
  button.classList.add("pressed")
  setTimeout(()=>{button.classList.remove("pressed");}, 100);
})
