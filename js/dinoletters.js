var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var wordArray;
var correctCounter = 0;
var counter = 0;

function Word(){
  dinoName: "";
}

Word.prototype.getWord = function(letterSpacer) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
  .then(function(response){
    var dinoName = response[0].toString();
    Word.dinoName = dinoName;
    var guessWord = dinoName.toUpperCase();
    wordArray = guessWord.split('');
    letterSpacer(wordArray);
  });
}

Word.prototype.putLetter = function(currentLetter, letterPutter, wrongCounter, endGame, dinoName) {
  correctCounter = 0;
  for(i = 0; i < wordArray.length; i++){
    if(currentLetter === wordArray[i]){
      letterPutter(i, currentLetter);
      correctCounter += 1;
    }
  }
  if(correctCounter === 0){
    counter += 1;
    if (counter === 8) {
      endGame(Word.dinoName);
    } else {
      wrongCounter(counter);
    }
  }
}

exports.wordModule = Word;
