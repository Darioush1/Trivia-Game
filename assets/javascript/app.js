var correct = true;
var incorrect = false;
var gameStartButton = '<p class="answers" id="startGamePrompt"> Yo!!! you think ready for this???</p>';

// <br><br> <button id="gameStartButton">Yo Lets Do This!</button> 

  $('#question-box').append(gameStartButton); 
  $('.answers').append('<br><br> <button class="gameStartButton" id="startGamePrompt">Yo Lets Do This!</button>') ;

function generateAnswersSquare ( ) {
    for (var i = 0; i < 4 ; i++) {
        $('#question-box').append('<p class="answers"> </p>');
    }
};
     
  function nextQuestion ( ) {
    
    var randomAnswer = Math.floor(Math.random() * 4) + 1;
    var correctAnswer;
    var wrongAnswer;
    generateAnswersSquare();

    // $('#question-box').append('<p class="answers"> </p>');
    // $('#question-box').append('<p class="answers"> </p>');
    // $('#question-box').append('<p class="answers"> </p>');
    // $('#question-box').append('<p class="answers"> </p>');
};

$('.gameStartButton').on( 'click',  function ( ) {
    nextQuestion ( );
    $('#startGamePrompt').remove();
})


function assignAnswer ( ) {
    $('.answers').append()
}



    

