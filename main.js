var getUserChoice = function (userInput){
    userInput = userInput.toLowerCase(); 
   
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
       return userInput;
    } else {
       console .log ("error!");
   
    }
   
   }
   
   var getCompChoice = function (){
       const randomNum = Math.floor(Math.random () * 2);
       if (randomNum === 0){
           return 'rock';
       } else if (randomNum === 1){
   return 'paper';
       } else if (randomNum === 2){
           return 'scissors';
       }
   } 
var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game was a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer wins!";
        } else {
            return "You win!";
        
    }
} else if (userChoice === 'paper'){
        if (userChoice === 'scissors') {
            return 'computer wins!'
        } else {
            return 'you win'
        }
    }else if (userChoice === 'scissors'){
        if (userChoice === 'rock') {
            return 'computer wins!'
        } else {
            return 'you win'
        }
    
    } else if (userChoice === 'bomb'){
        return 'you win'
    }
} 

var playGame = function (){
    var userChoice = getUserChoice('rock');
    console.log (userChoice);
    var computerChoice = getCompChoice();
    console.log (computerChoice);
  console.log (determineWinner(userChoice, computerChoice));
  

}

playGame();
