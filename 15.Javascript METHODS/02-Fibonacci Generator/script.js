var arr=[1,1];

function fibonacciGen (num) {
return num = prompt("How many Fibonacci Numbers you will create?") 
}

function fibonacciFinder (num) {
  for (i=2; i<num; i++){
    arr.push(arr[arr.length-1]+arr[arr.length-2])
  }
  return console.log(...arr)
}

fibonacciFinder(fibonacciGen());
