var correct = true;
var incorrect = false;
var answerOptions = '<p class="answers"> Yo!!! you think ready for this???<br><br> <button id="gameStartButton">Yo Lets Do This!</button> </p>';


function nextQuestion () {
    
    var randomAnswer = Math.Floor(Math.random() * 4) + 1;
    var correctAnswer;
    var wrongAnswer;

    $('.question-box').append('<p class="answers"> </p>');
    
};


 function gameStart() {
    nextQuestion();
};


$(document).ready( function () {

    $('#question-box').append(answerOptions);    

});

$('#question-box')



    

