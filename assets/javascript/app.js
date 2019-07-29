var correct = true;
var incorrect = false;
var gameStartButton = '<p class="answers" id="startGamePrompt"> Yo!!! you think ready for this???</p>';
var answer = '<p class="answers"></p>';
var thisQuestion=0;

var questionsQA = [{

    question: "Who was the first president?",
    answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
    correctAnswer: "President George Washington",
}]

// <br><br> <button id="gameStartButton">Yo Lets Do This!</button> 

  $('#question-box').append(gameStartButton); 
  $('.answers').append('<br><br> <button class="gameStartButton" id="startGamePrompt">Yo Lets Do This!</button>') ;

function generateAnswersSquare ( ) {

    for (var i = 0; i < questionsQA[this.thisQuestion].answer.length ; i++) {

        $('#question-box').append(
            '<p class="answers"> <span class="clickAble"></span></p>'
            );
        $('.clickAble').html(  +  questionsQA[this.thisQuestion].answer[i] + );
        $('.question-text').html(questionsQA[this.thisQuestion].question);
        
        console.log('this is the thing ' +  questionsQA[this.thisQuestion].answer[i] + ' ' + i);

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
};

//  "<button class='mainbutton' id='button' callquestion=' " + trivqs[this.currentQ].answers[i] + " '>
// " + trivqs[this.currentQ].answers[i] + "
// </button>"



    

