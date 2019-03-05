/*
We are building a guessing game that will have the following functionality:

Program generates a random number at the start of each game
User's goal is to guess the correct number
User gets a set # of tries (default = 5)
Program tracks user's guesses and prevents duplicate guessing
Game ends when user guesses correctly or runs out of tries
*/

function guessingGame(){
    this.triesLimit = 5;    
    this.genRandom = function() {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    };
    this.numToGuess = this.genRandom();
    var guessing = new Array();
    this.play = function(_myGuess) {
        if ((typeof _myGuess === "number") && (this.triesLimit > 0) && (!guessing.includes(_myGuess))) {
            guessing.push(_myGuess);            
            if (_myGuess == this.numToGuess) {
                console.log("Congratulations!!, you won!, the number to guess was in fact " + this.numToGuess + "  This game is over :D");
                this.triesLimit = 0;
                return 1;
            }else{
                this.triesLimit--;
                return 2;  
            }                        
          }else{
             throw new Error ("You ran out of tries or set the tries limit to 0 or less");
          }    
    }    
}