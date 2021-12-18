playerChoice = prompt("choose r, p, s")

var input = ["r", "p", "s"]



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log(getRandomInt(3));

var computerChoice = input[getRandomInt(3)]

console.log("this is the computer choice" + computerChoice)


var totalWins = 0
var totalLosses = 0
var totalTies = 0

if (computerChoice === playerChoice) {
    alert("it's a tie!")
    totalTies++
    console.log("you have tied " + totalTies + "many times")
} else if (computerChoice === "r" && playerChoice === "p") {
    alert("you won!")
} else if (computerChoice === "r" && playerChoice === "s") {
    alert("you lost!")
} else if (computerChoice === "p" && playerChoice === "r") {
    alert("you lost!")
} else if (computerChoice === "p" && playerChoice === "s") {
    alert("you won!")
} else if (computerChoice === "s" && playerChoice === "r") {
    alert("you won!")
} else if (computerChoice === "s" && playerChoice === "p") {
    alert("you lost!")
} 




