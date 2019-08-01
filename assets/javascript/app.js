var correct = true;
var incorrect = false;
var answer = '<p class="answers"></p>';
var thisQuestion=0;

var questionsQA = [{

    question: "Who was the first president?",
    answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
    correctAnswer: "President George Washington",
}]

$('.container').ready( function(){
    $('#questionBox').hide();
})

  
  $('.answers').on('click', function () {
      let playerChoice = $(this).attr('question-text');
      console.log(playerChoice)
  });

// function generateAnswersSquare ( ) {

//     for (var i = 0; i < questionsQA[this.questionsQA].answer.length ; i++) {

//         $('.answers').html(questionsQA[this.questionsQA].answer[i] );
//         $('#question-box').append('<p class="answers" id=" ' + questionsQA[this.thisQuestion].answer[i] + ' "> </p>' );
//         $('#' + questionsQA[this.thisQuestion].answer[i] + '').html(" ' + questionsQA[this.thisQuestion].answer[i] + ' ")
//         $('.question-text').html(questionsQA[this.thisQuestion].question);

//         console.log('this is the thing ' +  questionsQA[this.thisQuestion].answer[i] + ' ' + i);

//     }
// };
     
  function nextQuestion ( ) {
    
    var randomAnswer = Math.floor(Math.random() * 4) + 1;
    var correctAnswerDom = questionsQA[this.thisQuestion].correctAnswer;
    var wrongAnswer;
   // generateAnswersSquare();

 
};

$('.gameStartButton').on( 'click',  function ( ) {
    nextQuestion ( );
    $('#question-box1').remove();
    $('#questionBox').show();

})




    

