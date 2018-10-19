// function reset () {
//   losses++;
//   document.getElementById("losses").textContent = losses;
//   wrongAnswerArray = [];
//   document.getElementById("guessed").textContent = wrongAnswerArray;
//   guesses = 10
//   document.getElementById("guessed").textContent = guesses;
//   word = words[Math.floor(Math.random() * words.length)];
// }

//Define array of words for computer to select one
var words = ["strangle", "choke", "suicide", "drown", "murder", "poison", "penalty", "behead", "starve", "stab", "coding"];
var wrongAnswerArray = [];
var wins = 0
var losses = 0

//Get computer to select one of the words from the array at random
var word = words[Math.floor(Math.random() * words.length)];

//Loop through the word and add underscores to equal how many spaces need to be added
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = " __ ";
}

//Display the spaces on page
document.getElementById("current-word").textContent = answerArray;

//Number of guesses user starts with
var guesses = 10; 
document.getElementById("remaining").textContent = guesses;

//create function on keyup "function(event)"
//store keyup value in var
//make conditional if letter exists in word or else 
  //if in word then push to array and display on document
  //if not in word than push to other array and subtract one of the guesses remaining

document.onkeyup = function(event) {                              
  var userInput = event.key;
  var l = word.length 
  var i = 0
  
  if (word[i] !== userInput) {
    wrongAnswerArray.push(" " +userInput);
    document.getElementById("guessed").textContent = wrongAnswerArray;
    guesses--;
    document.getElementById("remaining").textContent = guesses; 
    
    if (guesses ===0) {
      losses++;
      document.getElementById("losses").textContent = losses;
      wrongAnswerArray = [];
      document.getElementById("guessed").textContent = wrongAnswerArray;
      guesses = 10
      document.getElementById("remaining").textContent = guesses;
      word = words[Math.floor(Math.random() * words.length)];
      answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = " __ ";
      }
      document.getElementById("current-word").textContent = answerArray;
  }
}
  
  while(i<l){

    console.log(word[i],userInput)
    if (word[i]===userInput){
      answerArray[i]=userInput;
    document.getElementById("current-word").textContent = answerArray;
      console.log("hi",answerArray)
    } 
    i++
  } 
    // if (word ====)
};

// else if (i===l) {
//   wins.push(" "+ wins)
//   document.getElementById("wins").textContent = wins;


// if (answer === userChoice.toLowerCase()) {
//     wins++; guessesDone = [];
// }   if (answer !== userChoice) {
//     guessesLeft = guessesLeft-1;
// }   
// if  (guessesLeft <0) {
//     guessesLeft =10; losses++; guessesDone = [];
// }

  


  // if(word.indexOf(userInput) > -1) {
  //  //push correct word into the correct place in the answer array
  //  answerArray.forEach(function() {
  //    //what goes here to update the answer array at the correct location with the correct letter
           
  //  }); 
  //  document.getElementById("current-word").textContent = answerArray;
  // } else {
  //   wrongAnswerArray.push(userInput);
  //   document.getElementById("guessed").textContent = wrongAnswerArray;
  //   guesses --; 
  //   document.getElementById("remaining").textContent = guesses; 
  // }                    
