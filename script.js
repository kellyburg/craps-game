var rollCount=0;
var point;
function rollDice(){
const dieValues=[1, 2, 3, 4, 5, 6];

var die1=dieValues[Math.floor(Math.random()*dieValues.length)];
var die2=dieValues[Math.floor(Math.random()*dieValues.length)];
var sum=die1+die2;
rollCount++;
$(document).ready(function(){
    $("#die1").text(die1);
    $("#die2").text(die2);
    $("#sum").text(sum);
});

function checkWinner(){
    var isWinner;
    
    //after the first roll, check if player has won or lost or set point number
    if(rollCount===1){
        if(sum===7||sum===11){
            isWinner=true;
            rollCount=0;
        }
        else if(sum===2||sum===3||sum===12){
            isWinner=false;
            rollCount=0;
        }
        else {
            point=sum;
            console.log("Point: "+ point);
        }

    }
    //check if roll equals point or 7, set isWinner and reset rollCount
    if(rollCount>1){
        if(sum===7){
            isWinner=true;
            rollCount=0; 
        }
        if(sum===point){
            isWinner=false;
            rollCount=0; 
       }
    }
    console.log(isWinner);
    return isWinner;
    }
    checkWinner();

return sum;
}

    $(document).ready(function(){
        $("#roll").click(rollDice);
        });




/*function playCraps(){
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
}*/

