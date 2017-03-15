var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessWord;
var wordArray;

function compareLetters(){

}
// The line below is the same as $(document).ready...
$(function(){
  for(i = 0; i < 9; i++){
    $('#letter-box').append("<div class='letter choose-letter' data-val='" + letters[i] + "'><div class='overlay'></div>" + letters[i] + "</div>");
  }
  for(j = 9; j < 18; j++){
    $('#letter-box2').append("<div class='letter choose-letter' data-val='" + letters[j] + "'><div class='overlay'></div>" + letters[j] + "</div>");
  }
  for(k = 18; k < 26; k++){
    $('#letter-box3').append("<div class='letter choose-letter' data-val='" + letters[k] + "'><div class='overlay'></div>" + letters[k] + "</div>");
  }

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
  .then(function(response){
    guessWord = response[0].toString().toUpperCase();
    console.log(guessWord);
    wordArray = guessWord.split('');
    for(i = 0; i < wordArray.length; i++){
      $('#letter-spaces').append("<div class='letter blank' data-val='" + i + "'></div>");
    }
  });

  $('.choose-letter').click(function(){
    // $(this).children(':first').show();
    $(this).addClass('clicked');
    var currentLetter = $(this).data('val');
    console.log(currentLetter);
    for(i = 0; i < wordArray.length; i++){
      if(currentLetter === wordArray[i]){
        console.log("corrent! " + i);
        $('div.blank[data-val=' + i + ']').addClass('yellow');
        $('div.blank[data-val=' + i + ']').append(currentLetter);
      }
    }
  });



});
