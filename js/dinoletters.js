var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var wordArray;
var correctCounter = 0;
var counter = 0;

function Word(){
}

Word.prototype.getWord = function(letterSpacer) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
  .then(function(response){
    var guessWord = response[0].toString().toUpperCase();
    console.log(guessWord);
    wordArray = guessWord.split('');
    letterSpacer(wordArray);
  });
}

Word.prototype.putLetter = function(currentLetter, letterPutter, wrongCounter) {
  console.log("backend:" + currentLetter);
  console.log(wordArray);
  correctCounter = 0;
  for(i = 0; i < wordArray.length; i++){
    if(currentLetter === wordArray[i]){
      letterPutter(i, currentLetter);
      correctCounter += 1;
    }
  }
  if(correctCounter === 0){
    counter += 1;
    wrongCounter(counter);
    console.log("wrong");
    console.log(counter);
  }
}



exports.wordModule = Word;
