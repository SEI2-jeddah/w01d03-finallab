var element =["rock","paper","scissors"]
var plyer1 = prompt("what is the plyer name? ")
alert("wish you lock " + plyer1)
var computerChoice = element[Math.floor(Math.random() * element.length)];
var userChoice = prompt("what are you choose (rock) (paper) or (scissors) ?")
function game (x,y){
    if (userChoice=="rock"&&computerChoice=="paper"){
        alert("loser")
    }
    else if (userChoice=="scissors"&&computerChoice=="rock"){
        alert("loser")
        }
        else if (userChoice=="paper"&&computerChoice=="scissors"){
            alert("loser")
            }
            if (userChoice=="paper"&&computerChoice=="rock"){
                alert("winer winer chiken diner")
            }
            else if (userChoice=="rock"&&computerChoice=="scissors"){
                alert("winer winer chiken diner")
                }
                else if (userChoice=="scissors"&&computerChoice=="paper"){
                    alert("winer winer chiken diner")
                    }
                    if (userChoice=="paper"&&computerChoice=="paper"){
                        alert("Draw")
                    }
                    else if (userChoice=="rock"&&computerChoice=="rock"){
                        alert("Draw")
                        }
                        else if (userChoice=="scissors"&&computerChoice=="scissors"){
                            alert("Draw")
                            }
}
game(computerChoice,userChoice)