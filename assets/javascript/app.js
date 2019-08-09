var correct = true;
var incorrect = false;
// var answer = '<p class="answers"></p>';
var thisQuestion = 0;
var playerChoice = '';
var timer;
var sec = 10;
var points = 0;

var questionsQA = [
    {
        question: "Who was the first president?",
        answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
        correctAnswer: "President George Washington",
    },

    {
        question: "Who was the second president?",
        answer: ["John Adams", "Bill Clinton", "Aohn Jdmas", "President George Washingtons other Dad"],
        correctAnswer: ["John Adams"],
    }
];

$('.container').ready(function () {
    $('#questionBox').hide();
    console.log(sec);
    console.log(points)
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

function timeOut() {
    $('#clock').text('you lost');
    if (sec === 0) {
        console.log("HAPPY NEW YEAR!!");
    }
};

function nextQuestion() {
    thisQuestion++;
    generateAnswersText();
    setInterval(timeOut, 10000);

}

function playerGuess() {
   let  correctChoice = questionsQA[this.thisQuestion].correctAnswer;
    if (playerChoice === correctChoice) {
       
        console.log("function: " + playerChoice);
        nextQuestion()
        console.log()

    } else {
       
        console.log('correct answer: ' + questionsQA[this.thisQuestion].correctAnswer);
        nextQuestion();
    }
};

$('.gameStartButton').on('click', function () {

    //let timer = setInterval(tim)
    $('#question-box1').remove();
    $('#questionBox').show();
    $('#timerSpot').html(sec);
    generateAnswersText();
    setInterval(timeOut, 10000);

});

$('.answers').on('click', function () {
    let playerChoice =  $(this).html();
    console.log("Player Choice: " + playerChoice);
    playerGuess();
    console.log('this questions number: ' + thisQuestion);
    thisQuestion++;
});



