
// const random = Math.random()*3;   // Create random number

const getRandEvent = () => {
  let arr=['Marathon', 'Triathlon', 'Pentathlon'];
  return arr[Math.floor(Math.random()*3)];
};


// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {
  let trainingDays;
  switch(activity){
    case "Marathon":
      trainingDays = 50;
      break
    case "Triathlon":
      trainingDays = 75;
      break;
    case "Pentathlon":
      trainingDays = 100;
      break;
  }
return trainingDays;
};

const logEvent = (athlete, activity) => {
  console.log(`${athlete}'s activity is: ${activity}`);
};

const logTime =(athlete, days) => {
  console.log(`${athlete}'s time to train is: ${days} days`);
};

const athlete = 'Nala';
const sport = getRandEvent();
const days = getTrainingDays(sport);

logEvent(athlete, sport);
logTime(athlete, days);
