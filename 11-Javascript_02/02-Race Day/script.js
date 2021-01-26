
var age = prompt("What is your age:");

if(age<18){
  
  var youth;
  var no = Math.floor((Math.random()*1000)+1);
  console.log(`Your race number is ${no} and race time is 12:30 pm` );

}else if(age>18){
  var time = prompt("What time do you prefer to race:\n (1) 9:30\n(2) 11:00");

    if(time=="1"){

      no = Math.floor((Math.random()+1)*1000);
      console.log(`Your race number is ${no} and race time is 9:30 pm` );

    }else{

      no = Math.floor((Math.random()*1000)+1)
      console.log(`Your race number is ${no} and race time is 11:00 pm` );
    }

}else{
  console.log(`Please see the registration desk` );
}
