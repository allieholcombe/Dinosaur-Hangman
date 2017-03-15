var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// The line below is the same as $(document).ready...
$(function(){
    for(i = 0; i < 9; i++){
      $('#letter-box').append("<div class='letter'>" + letters[i] + "</div>");
    }
    for(j = 9; j < 18; j++){
      $('#letter-box2').append("<div class='letter'>" + letters[j] + "</div>");
    }
    for(k = 18; k < 26; k++){
      $('#letter-box3').append("<div class='letter'>" + letters[k] + "</div>");
    }
});
