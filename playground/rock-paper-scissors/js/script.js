const rock = document.querySelector(".js-rock");
const paper = document.querySelector(".js-paper");
const scissor = document.querySelector(".js-scissor");
const message = document.querySelector(".js-message");

var playerChoice;
var computerChoice;
var result;

var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice < 0.67) {
    computerChoice = "paper";
}  else {
    computerChoice = "scissor";
}

console.log(computerChoice);

var rockSelected = rock.addEventListener('click', () => {
	playerChoice = "rock";
	if (computerChoice === playerChoice ) {
		result ="No winner";
	} else if (computerChoice === "paper" ) {
		result ="You loose, paper covers the stone"
	} else {
		result ="You win! rocks crushes sciscors!"
	}
	message.innerHTML = result;
	
});

var paperSelected = paper.addEventListener('click', () => {
	playerChoice = "paper";
	if (computerChoice === playerChoice ) {
		result ="No winner";
	} else if (computerChoice === "rock") {
		result ="You win, paper covers the stone";
	} else {
		result ="You loose! scissors cut the paper!";
	}
	message.innerHTML = result;
	
});

var scissorSelected = scissor.addEventListener('click', () => {
	playerChoice = "scissor";
	if (computerChoice === playerChoice ) {
		result = "No winner";
	} else if (computerChoice === "paper" ) {
		result ="You Win, ciscors cut the paper";
	} else {
		result ="You loose! rock crushes scissors!";
	}
	message.innerHTML = result;
	
});



if (rockSelected) {
	rock.style.backgroundColor = "orange";
}