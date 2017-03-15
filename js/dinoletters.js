var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var wordArray;

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

Word.prototype.putLetter = function(currentLetter, letterPutter) {
  console.log("backend:" + currentLetter);
  console.log(wordArray);
  for(i = 0; i < wordArray.length; i++){
    if(currentLetter === wordArray[i]){
      letterPutter(i, currentLetter);
    }
  }
}

Word.prototype.arrangeAlphabet = function(start, endPlusOne) {
  for(i = start; i < endPlusOne; i++){
    makeLetters(i, letters);
  }
}


exports.wordModule = Word;
