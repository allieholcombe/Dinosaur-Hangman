var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessWord;
// The line below is the same as $(document).ready...
$(function(){
  for(i = 0; i < 9; i++){
    $('#letter-box').append("<div class='letter choose-letter'>" + letters[i] + "</div>");
  }
  for(j = 9; j < 18; j++){
    $('#letter-box2').append("<div class='letter choose-letter'>" + letters[j] + "</div>");
  }
  for(k = 18; k < 26; k++){
    $('#letter-box3').append("<div class='letter choose-letter'>" + letters[k] + "</div>");
  }

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
  .then(function(response){
    guessWord = response[0].toString();
    console.log(guessWord);
    var wordArray = guessWord.split('');
    console.log(wordArray);
    wordArray.forEach(function(letter) {
      $('#letter-spaces').append("<div class='letter blank " + letter + "'></div>");
    })
  });
});
