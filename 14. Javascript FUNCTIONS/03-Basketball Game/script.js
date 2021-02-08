
let scoreJohn=[]; 
let scoreMary=[];
let scoreMike=[];
for(i=0; i<3; i++){
    scoreJohn.push(prompt("Enter John's scores"+i+"/3"));
}
for(i=0; i<3; i++){
    scoreMike.push(prompt("Enter Mike's scores"+i+"/3"));
}
for(i=0; i<3; i++){
    scoreMary.push(prompt("Enter Marry's scores"+i+"/3"));
}

function av(arr){
    return (arr[0]*1+arr[1]*1+arr[2]*1)/3;
}

function solution(){
    if (av(scoreJohn) > av(scoreMike) && av(scoreJohn) > av(scoreMary)){
        console.log('John\'s team wins with ' + scoreJohn.reduce((a,b)=>a*1+b*1,0) + ' points');
    } else if(av(scoreMike) > av(scoreJohn) && av(scoreMike) > av(scoreMary)) {
        console.log('Mike\'s team wins with ' + scoreMike.reduce((a,b)=>a*1+b*1,0) + ' points');
    } else if (av(scoreMary) > av(scoreJohn) && av(scoreMary) > av(scoreMike)) {
        console.log('Mary\'s team wins with ' + scoreMary.reduce((a,b)=>a*1+b*1,0) + ' points');
    } else {
        console.log('There is a draw');
    }
}

solution();
