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
        question: "space filler",
        answer: ["space filler"],
        correctAnswer: "space filler",
    },

    {
        question: "Who was the second president?",
        answer: ["John Adams", "Bill Clinton", "Aohn Jdmas", "President George Washingtons other Dad"],
        correctAnswer: ["John Adams"],
    },
    
    {
        question: "space filler",
        answer: ["space filler"],
        correctAnswer: "space filler",
    },


    {
        question: "Who was the best president?",
        answer: ["President Comacho", "Abraham Lincoln", "Bill Paxton", "The Secret Elite"],
        correctAnswer: ["Abraham Lincoln"],
    }
];

$('.container').ready(function () {
    $('#questionBox').hide();
})



//funtion to make answers append to the page
function generateAnswersText() {

    for (let i = 0; i < questionsQA.length; i++) {

        $('#question-text').text(questionsQA[this.thisQuestion].question);

        for (let j = 0; j < questionsQA[this.thisQuestion].answer.length; j++) {
            $('.answers' + j).text(questionsQA[this.thisQuestion].answer[j]);
        }
    }
};

//function to stop the clock at zero
function timeOut() {
    $('#clock').text('you lost');
    if (sec === 0) {
        clearInterval(timeOut)
        clearInterval(countdown)
    }
};

//funtion to move on to next question in array and reset timer
function nextQuestion() {
    $('.nextQuestionButton').hide();
    $('.answers').show();
    thisQuestion++;
    generateAnswersText();
    setInterval(timeOut, 10000);
    setInterval(countdown, 1000);
};

//function to create timer
function countdown() {
    sec--;
    if(sec==0) {
        clearInterval(timeOut);
        clearInterval(countdown);
    };
  //  console.log('time left: ' + sec)
};

//function to create timer that will hide answers and present a new slide inbetween the answers
function inbetweenQuestionsCorrect ( ){
    $("#question-text").text('you did not mess up!');
    $('.answers').hide();
    $('.nextQuestionButton').show();
    clearInterval(timeOut);
    clearInterval(countdown);
};

//function to create a new slide that will show when the answer is wrong
function inbetweenQuestionsWrong ( ){
   $("#question-text").text('you did mess up!!! Mom hates you now!!');
   $('.answers').hide();
   $('.nextQuestionButton').show();
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


//start the game on click
$('.gameStartButton').on('click', function () {

    //let timer = setInterval(tim)
    $('#question-box1').remove();
    $('#questionBox').show();
    $('#timerSpot').html(sec);
    generateAnswersText();
    setInterval(timeOut, 10000);
    setInterval(countdown, 1000);
    $('.nextQuestionButton').hide();
});


//player selects an answer
$('.answers').on('click', function () {
    playerChoice =  $(this).html();
    playerGuess();
    thisQuestion++;
});

$('.nextQuestionButton').on('click', function () {
    nextQuestion();
});



