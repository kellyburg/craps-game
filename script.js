
var dieValues=[1, 2, 3, 4, 5, 6];

function rollDice(){
var die1, die2;
var sum;
die1=dieValues[Math.random()*dieValues.length];
die2=dieValues[Math.random()*dieValues.length];
return sum;
}

console.log(rollDice());

