var correct = true;
var incorrect = false;
// var answer = '<p class="answers"></p>';
var thisQuestion = 0;
var playerChoice = ' ';
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
})




function generateAnswersText() {

    for (let i = 0; i < questionsQA.length; i++) {

        $('#question-text').text(questionsQA[this.thisQuestion].question);

        for (let j = 0; j < questionsQA[this.thisQuestion].answer.length; j++) {
         // console.log(questionsQA[this.thisQuestion].correctAnswer);
            $('.answers' + j).text(questionsQA[this.thisQuestion].answer[j]);
        }
    }
};

function timeOut() {
    $('#clock').text('you lost');
    if (sec === 0) {
        console.log('timeOut function hit zero');
        clearInterval(timeOut)
    }
};

function nextQuestion() {
    thisQuestion++;
    generateAnswersText();
    setInterval(timeOut, 10000);
    setInterval(countdown, 1000);
};

function countdown() {
    sec--;
    if(sec==0) {
        clearInterval(timeOut);
        clearInterval(countdown);
    };
    console.log('time left: ' + sec)
};

function inbetweenQuestionsCorrect ( ){
    $("#question-text").text('you did not mess up!');
    $('.answers').hide();
    clearInterval(timeOut);
    clearInterval(countdown);
};
function inbetweenQuestionsWrong ( ){
   $("#question-text").text('you did mess up!!! Mom hates you now!!');
   $('.answers').hide()
   clearInterval(timeOut);
   clearInterval(countdown);
};

function playerGuess() {
   let  correctChoice = questionsQA[this.thisQuestion].correctAnswer;
  console.log("playerGuess Function " + playerChoice);
  console.log("playerGuess Function answer " + correctChoice);
    if (playerChoice == correctChoice) {
        inbetweenQuestionsCorrect();
        points++;
        

    } else {
       
        console.log('correct answer: ' + questionsQA[this.thisQuestion].correctAnswer);
       inbetweenQuestionsWrong();
    }
};



$('.gameStartButton').on('click', function () {

    //let timer = setInterval(tim)
    $('#question-box1').remove();
    $('#questionBox').show();
    $('#timerSpot').html(sec);
    generateAnswersText();
    setInterval(timeOut, 10000);
    setInterval(countdown, 1000);
});

$('.answers').on('click', function () {
    playerChoice =  $(this).html();
    playerGuess();
    thisQuestion++;
});



