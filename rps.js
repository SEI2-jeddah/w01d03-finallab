var userRoll = prompt("Rock, Paper, or Scissors?")
var answers = [ "Rock","Paper","Scissors"]
var comRoll = Math.floor(Math.random() * answers.length)

function getUserChoice( ){

  if (userRoll === "Rock" && answers[comRoll] === "Rock" ) 
  {
    console.log("the sam ")
    console.log(answers[comRoll] )
    return answers[comRoll] 
  }
  else if (userRoll === "Rock" && answers[comRoll] === "Paper"){
    console.log("the computer win ")
    return answers[comRoll] 
  }
  else if (userRoll === "Rock" && answers[comRoll] === "Scissors"){
    console.log("you win ")
    return answers[comRoll] 
  }
  else if (userRoll === "Scissors" && answers[comRoll] === "Scissors"){
    console.log("no one win ")
    return answers[comRoll] 
  }
  else if (userRoll === "Scissors" && answers[comRoll] === "Paper"){
    console.log("you win ")
  }
  else if (userRoll === "Scissors" && answers[comRoll] === "Rock" ){
    console.log("the computer win ")
  }
  else if (userRoll === "Paper" && answers[comRoll] === "Paper"){
    console.log("no one win ")
  }
  else if (userRoll === "Paper" && answers[comRoll] === "Rock"){
    console.log("the computer win ")
  }
  else if (userRoll === "Paper"  && answers[comRoll] === "Scissors"){
    console.log("user win ")
  }
  else {
    console.log("enter one of the option")
  } 
} 
getUserChoice()
alert(answer);