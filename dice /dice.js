var choice = prompt("How many time do you want roll Dice ?")
function diceRoll (choice){
    for(var i = choice ; i>=1; i--){
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          }
                var x1 = getRandomArbitrary(1,6)
                var x2 = getRandomArbitrary(1,6)
                var sum = x1 + x2

    }
    alert(x1) 
    alert(x2)
    alert(sum)
    }
diceRoll(choice)

