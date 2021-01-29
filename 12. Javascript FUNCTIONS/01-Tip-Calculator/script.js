var arr=[];
var arrTip=[];
var total=0;
var budget =prompt("enter your budget")

for(i=0; i<4; i++){
arr.push(prompt("Enter bill" +(i+1)));
console.log("Optimal tip amount is: "+calculateTips(arrTip[i]));
total+=Number(arr[i]);
}

function calculateTips() {
  if (arr[i] > 200) {
    arrTip[i] =arr[i]* 0.1;
  } else if (arr[i] >= 50 && arr[i] <= 200) {
    arrTip[i] =arr[i]*  0.15;
  } else {
    arrTip[i] =arr[i]* 0.2;
  }
  arrTip.push(arr[i])
  return arrTip[i];
}

function totalTip(){
  var totaltip = arrTip[0]*1 +arrTip[1]*1+arrTip[2]*1+arrTip[3]*1;
  return totaltip;
}

function budgetDust(){
  return remain = budget-(total+totalTip());
}

if(budget*0.2<=budgetDust()){
  console.log("your bills' total cost is " +total+ "\n and total tips' cost is "+totalTip());
}else{
  console.log("WARNING. You exeeded 80% of your budget \n Your bills' total cost is " +total+ "\n and total tips' cost is "+totalTip());
}



// for(i=0; i<4; 1++){

// }



// function remainedBudget(budget) {
//   return budget - (total+bill);
// }
// console.log(remainedBudget(), calculateTips());

// var bill1 = 80;
// var bill2 = 75;
// var bill3 = 124;
// var bill4 = 268;
// var totalBill = bill1 + bill2 + bill3 + bill4;

// console.log(totalBill);

// var totalBudget = 750;

// //var totalSpent = totalBill + getTotalTip();

// //console.log(totalSpent)

// console.log(calculateTips(bill1));
// console.log(calculateTips(bill2));
// console.log(calculateTips(bill3));
// console.log(calculateTips(bill4));

// function getTotalTip() {
//   return calculateTips(bill1) + calculateTips(bill2) + calculateTips(bill3) + calculateTips(bill4);
// }

// getTotalTip();

// function budgetDust() {
//   if (totalBill + getTotalTip() > totalBudget * 0.8) {
//       return 'ending fund';
//   } else {
//       return 'continue';
//   }
// }

// budgetDust();

// var i;
// var paid = [124, 48, 75, 268];

// getTotalTips(paid);

// function calculateTips(bill) {
//   if (bill > 200) {
//     bill *= 0.1;
//   } else if (bill >= 50 && bill <= 200) {
//     bill *= 0.15;
//   } else {
//     bill *= 0.2;
//   }
//   return bill;
// }

// function getTotalTips(paid) {
//     var total = 0;
//     for (i = 0; i < 4; i++) {
//         total += calculateTips(paid[i]);
//         //console.log(bill);
//     }
//     console.log(total);
// }