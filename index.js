
function Roll(){
    var player1_score = Math.floor((Math.random() * 6) + 1);
    var player2_score = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dice1").src = "./images/Dice"+player1_score+".png";
    document.getElementById("dice2").src = "./images/Dice"+player2_score+".png";
    if(player1_score > player2_score){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(player1_score === player2_score){
        document.querySelector("h1").innerHTML = "It's a Draw ";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins"
    }
}
