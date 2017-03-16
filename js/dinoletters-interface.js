var Word = require('./../js/dinoletters.js').wordModule;

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var spaceCounter;

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
    $('div.blank[data-val=' + index + ']').text(currentLetter);
  }

  function endGame(dinoName){
    $('#explosion').show();
    $('.stuff-box').hide();
    $('.dino-animation').css('overflow', 'visible');
    $('#you-lose').show().css('display', 'inline-block');
    $('#you-lose p span').text(dinoName);
    // $('#you-lose').show();
  }

  function winGame(dinoName){
    $('#you-win').text("You saved the " + dinoName + "! You win!");
  }

  function wrongCounter(counter){
    for (i = 2; i < 8; i++) {
      if (counter === i) {
        $('#comet').removeClass('comet-' + (i-1)).addClass('comet-' + i);
      }
      if (counter === 1) {
        $('#comet').addClass('comet-1').show();
      }
    }
  }

  wrongCounter(0);

  var currentWord = newWord.getWord(letterSpacer);

  for(i = 0; i < 9; i++){
    $('#letter-box').append("<div class='letter choose-letter' data-val='" + letters[i] + "'><div class='overlay'></div>" + letters[i] + "</div>");
  }
  for(j = 9; j < 18; j++){
    $('#letter-box2').append("<div class='letter choose-letter' data-val='" + letters[j] + "'><div class='overlay'></div>" + letters[j] + "</div>");
  }
  for(k = 18; k < 26; k++){
    $('#letter-box3').append("<div class='letter choose-letter' data-val='" + letters[k] + "'><div class='overlay'></div>" + letters[k] + "</div>");
  }


  $('.choose-letter').click(function(){
    $(this).addClass('clicked');
    var currentLetter = $(this).data('val');
    console.log(currentLetter);
    newWord.putLetter(currentLetter, letterPutter, wrongCounter, endGame, winGame);
  });

  $('#lose-again').click(function() {
    location.reload();
  })
});
