
function rollDice(){
var dieValues=[1, 2, 3, 4, 5, 6];
var die1, die2;
   
die1=dieValues[Math.floor(Math.random()*dieValues.length)];
die2=dieValues[Math.floor(Math.random()*dieValues.length)];
$(document).ready(function(){
    $("#die1").text(die1);
    $("#die2").text(die2);
    $("#sum").text(die1+die2);
});
return die1+die2;
}

$(document).ready(function(){
$("#roll").click(rollDice);

});


function playCraps(){
var isWinner;
var firstRoll=rollDice();
console.log(firstRoll);
if (firstRoll===7||firstRoll===11){
    isWinner=true;

}
else if (firstRoll===2||firstRoll===3||firstRoll===12){
    isWinner=false;
}
else {
    var point=firstRoll;
    var newRoll;
while(newRoll!==point&&newRoll!==7){
    newRoll=rollDice();
    console.log(newRoll);
    if(newRoll===7){
        isWinner=true;
    }
    if(newRoll===point){
        isWinner=false;
        
    }
}
}
console.log(isWinner);
return isWinner;
}
