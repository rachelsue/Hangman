function reset() {
  wrongAnswerArray = [];
  document.getElementById("guessed").textContent = wrongAnswerArray;
  guesses = 10;
  document.getElementById("remaining").textContent = guesses;
  word = words[Math.floor(Math.random() *words.length)];
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "  __  ";
  }
  document.getElementById("current-word").textContent = answerArray;
}

//Define array of words for computer to select one
var words = ["cowboys", "eagles", "quarterback", "runningback", "chargers", "holding", "penalty", "interception", "fumble", "touchdown", "fieldgoal"];

//Get computer to select one of the words from the array at random
var word = words[Math.floor(Math.random() * words.length)];

//Loop through the word and add underscores to equal how many spaces need to be added
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i+] = "  __  ";
}

var wrongAnswerArray = [];
var wins = 0;
var losses = 0;
var answer = [];

//Display the spaces on page
document.getElementById("current-word").textContent = answerArray;

//Number of guesses user starts with
var guesses = 10; 
document.getElementById("remaining").textContent = " " + guesses;

document.onkeyup = function(event) {
  var userInput = event.key;
  var l = word.length 
  var i = 0

  if(word[i] !== userInput) {
    wrongAnswerArray.push(" " + userInput);
    document.getElementById("guessed").textContent = wrongAnswerArray;
    guesses --;
    document.getElementById("remaining").textContent = " " + guesses;
    
    if(guesses === 0) {
      losses ++;
      document.getElementById("losses").textContent = " " + losses;
      //function
      reset();  
  } 
};

  if(answerArray.join("") === word) {
    wins ++;
    document.getElementById("wins").textContent = " "+ wins;
    reset();
  }

  while(i<l){

      console.log(word[i],userInput)
      if (word[i] === userInput){
        answerArray[i]= userInput;
        document.getElementById("current-word").textContent = answerArray;
        console.log("hi",answerArray);
      }
      i++ 
    }
  };