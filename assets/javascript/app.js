var correct = true;
var incorrect = false;
var thisQuestion = 0;
var playerChoice = ' ';
var sec = 0;
var setSec = 0;
var points = 0;
var numberOfQs = 0;
var timerSpot = document.getElementById('timerSpot');


var questionsQA = [
    {
        question: "Who was the first president?",
        answer: ["Dragon", "Dragon 2", "President George Washington", "President George Washingtons Dad"],
        correctAnswer: "President George Washington",
    },
    {
        question: "Who was the King of England during the Revolutionary War",
        answer: ["King George III", "Queen Elizabeth II", "King Harold IV", "King Henry II"],
        correctAnswer: "King George III",
    },

    {
        question: "Where was the ?",
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
    },
    {
        question: "space filler",
        answer: ["space filler"],
        correctAnswer: "space filler",
    },
    {
        question: "Which president had the biggest bathtub?",
        answer: ["Kyle", "William Howard Taft", "John F. Kennedy", "Lou Banks"],
        correctAnswer: "William Howard Taft",
    },

    {
        question: "Who was the King of England during the Revolutionary War",
        answer: ["King George III", "Queen Elizabeth II", "King Harold IV", "King Henry II"],
        correctAnswer: "King George III",
    }
];


//funtion to make answers append to the page
function generateAnswersText() {
    timeOutObj = setInterval(domTimer, 1000)
    for (let i = 0; i < questionsQA.length; i++) {

        $('#question-text').text(questionsQA[this.thisQuestion].question);

        for (let j = 0; j < questionsQA[this.thisQuestion].answer.length; j++) {
            $('.answers' + j).text(questionsQA[this.thisQuestion].answer[j]);
        }
    }
    $('#timerSpot').val(sec);
};

//function to stop the clock at zero
function timeOut() {
    $('#clock').text('you lost');
    console.log(sec);
    console.log('time out function')
    inbetweenQuestionsNoTime();
};

//adjust Dom timer
function domTimer() {
    if(sec> 0) {
        sec--;
        console.log("test", sec);
        $('#clock').html(sec);
    } else if(sec === 0) {
        console.log("TIME UP");
        timeOut();
        stopTimers();
    }
};

function stopTimers( ) {
    clearInterval(timeOutObj);
};

//funtion to move on to next question in array and reset timer
function nextQuestion() {
    $('#timerSpot').val(sec);
    $('.nextQuestionButton').hide();
    $('.answers').show();
    thisQuestion++; 
    generateAnswersText();
   
};

//function to create timer that will hide answers and present a new slide inbetween the answers
function inbetweenQuestionsCorrect() {
    sec = setSec;
    $("#question-text").text('you did not mess up!');
    $('.answers').hide();
    $('.nextQuestionButton').show();
    
};

//function to create a new slide that will show when the answer is wrong
function inbetweenQuestionsWrong() {
    sec = setSec;
    $("#question-text").text('Sorry, you got the wrong answer');
    $('.answers').hide();
    $('.nextQuestionButton').show();
};

function inbetweenQuestionsNoTime() {
    sec = setSec;
    $("#question-text").text('Times Up! ');
    $('.answers').hide();
    $('.nextQuestionButton').show();
 

};


//function that creates the players choice and holds the events depending on the results
function playerGuess() {

    let correctChoice = questionsQA[this.thisQuestion].correctAnswer;

    if (thisQuestion === 6) {
        showResults();
        $('#questionBox').hide();
    }  else if (playerChoice == correctChoice) {
        inbetweenQuestionsCorrect();
        points++;
        console.log(points)
       // stopTimers();
    } 
    else if (sec == 0 ){
       stopTimers();
       inbetweenQuestionsNoTime();
   } 
    else {
        console.log('correct answer: ' + questionsQA[this.thisQuestion].correctAnswer);
        inbetweenQuestionsWrong();
        console.log(points);
    }
};


//shows a message at the end of the game
function showResults() {
    $('#resultBox').show();
    if ( points >= 3) {
        $('.resultMessage').text("You Did Amazing!")
    } else if ( points === 2) {
        $('.resultMessage').text('Not Bad!')
    } else {
        $('.resultMessage').text('Better Luck Next Time!')
    }
};


//start the game on click
$('.gameStartButton').on('click', function () {
    sec = $('#secInput').val();
    setSec = $('#secInput').val();

    $('#question-box1').remove();
    $('#questionBox').show();
    $('#timerSpot').val(sec);
    generateAnswersText();
    // timeOutObj = setInterval(domTimer, 1000)
    $('.nextQuestionButton').hide();

});


//player selects an answer
$('.answers').on('click', function () {
    playerChoice = $(this).html();
    playerGuess();
    thisQuestion++;
    console.log('Question array number: ' + thisQuestion)
});

//this will eiher present the result page or the next question
$('.nextQuestionButton').on('click', function () {
    
    console.log('Question array number: ' + thisQuestion)
    if (thisQuestion == 6) {
        showResults();
        $('#questionBox').hide();
    } else {
    nextQuestion();
    }
});




$('.container').ready(function () {
    $('#questionBox').hide();
    $('#resultBox').hide()
});
