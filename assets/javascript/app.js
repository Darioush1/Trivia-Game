var correct = true;
var incorrect = false;
// var answer = '<p class="answers"></p>';
var thisQuestion = 0;
var playerChoice;


var questionsQA = [
    {
        question: "Who was the first president?",
        answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
        correctAnswer: "President George Washington",
    },

    {
        question: "Who was the second president?",
        answer: ["John Adams", "Bill Clinton", "Aohn Jdmas", "President George Washingtons other Dad"],
        correctAnswer: "John Adams",
    }
]

$('.container').ready(function () {
    $('#questionBox').hide();
})




function generateAnswersText() {

    for (let i = 0; i < questionsQA.length; i++) {

        $('#question-text').text(questionsQA[this.thisQuestion].question);
        for (let j = 0; j < questionsQA[this.thisQuestion].answer.length; j++) {

            console.log(questionsQA[this.thisQuestion].answer[j]);

            $('.answers' + j).text(questionsQA[this.thisQuestion].answer[j]);
        }
    }
};



function playerGuess() {
    if (playerChoice == questionsQA[this.questionsQA].correctAnswer) {
        console.log("correct")
    } else if (playerChoice !== questionsQA[this.questionsQA].correctAnswer) {
        console.log('naw')
    }
};

$('.gameStartButton').on('click', function () {

    $('#question-box1').remove();
    $('#questionBox').show();
    generateAnswersText();

});

$('.answers').on('click', function () {
    let playerChoice = $(this).text();
    console.log("Player Choice: " + playerChoice);
    playerGuess();
    console.log(questionsQA.correctAnswer);
});


