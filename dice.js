let x = Math.floor(1 + Math.random() * 6) 
let y = Math.floor(1 + Math.random() * 6) 
let z = Math.floor(1 + Math.random() * 6)
let userin =prompt("how many dice you want to roll");
function rollDice() {

  if (userin == 2 ) {

  console.log("Dice rolled are "+ x +" and " + y + " Sum is ")
 return x + y 
 } else if ( userin == 3) 

 console.log("Dice rolled are "+ x +"," + y + "and" + z +" Sum is ")
return x + y + z

}
console.log(rollDice())