var Word = require('./../js/dinoletters.js').wordModule;

// The line below is the same as $(document).ready...
$(function(){
  var newWord = new Word();

  function letterSpacer(wordArray){
    for(i = 0; i < wordArray.length; i++){
      $('#letter-spaces').append("<div class='letter blank' data-val='" + i + "'></div>");
    }
  }

  function letterPutter(index, currentLetter){
    console.log("corrent! " + index );
    $('div.blank[data-val=' + index + ']').addClass('yellow');
    $('div.blank[data-val=' + index + ']').append(currentLetter);
  }

  function makeLetters(i, letters){
    $('#letter-box').append("<div class='letter choose-letter' data-val='" + letters[i] + "'><div class='overlay'></div>" + letters[i] + "</div>");
  }

  var currentWord = newWord.getWord(letterSpacer);


  newWord.arrangeAlphabet(0, 9);
  newWord.arrangeAlphabet(9, 18);
  newWord.arrangeAlphabet(18, 26);


  $('.choose-letter').click(function(){
    $(this).addClass('clicked');
    var currentLetter = $(this).data('val');
    console.log(currentLetter);
    newWord.putLetter(currentLetter, letterPutter);
  });
});
