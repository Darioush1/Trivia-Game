var correct = true;
var incorrect = false;
// var answer = '<p class="answers"></p>';
var thisQuestion = 0;

var questionsQA = [
    {
        question: "Who was the first president?",
        answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
        correctAnswer: "President George Washington",
    }
]
// questionsQA[0].answer[i]

$('.container').ready(function () {
    $('#questionBox').hide();
})


$('.answers').on('click', function () {
    let playerChoice = $(this).attr('question-text');
    console.log(playerChoice)
});



function nextQuestion() {

    var randomAnswer = Math.floor(Math.random() * 4) + 1;
    var correctAnswerDom = questionsQA[this.thisQuestion].correctAnswer;
    var wrongAnswer;
    // generateAnswersSquare();
  //  generateAnswersText();


};

$('.gameStartButton').on('click', function () {
    nextQuestion();
    $('#question-box1').remove();
    $('#questionBox').show();
    generateAnswersText()

})

function generateAnswersText() {

    for (var i = 0; i < questionsQA[i].length; i++) {
        for(var j = 0;  j< questionsQA[i].answer.length; j++){
        $('.answers1').html(questionsQA[i].answer[j]);
        // $('#question-box').append('<p class="answers" id=" ' + questionsQA[this.thisQuestion].answer[i] + ' "> </p>' );
        //$('#' + questionsQA[this.thisQuestion].answer[i] + '').innerHTML(" ' + questionsQA[this.thisQuestion].answer[i] + ' ")
      //  $('.question-text').innerHTML(questionsQA[this.thisQuestion].question);

        console.log('this is the thing ' + questionsQA[i].answer[j]);
        }
    }
};




