var correct = true;
var incorrect = false;
//var timerCount = 30;
var thisQuestion = 0;
var playerChoice = ' ';
//var sec = 10;
var points = 0;
//var timerSpot = document.getElementById('timerSpot');
//var countStartNumber=30
//var timeOutObj;
//var domTimerObj;

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
];


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
    console.log(sec);
    console.log('time out function')
    inbetweenQuestionsNoTime();
};

//adjust Dom timer
function domTimer() {
    if(timerCount > 0) {
        timerCount--;
        console.log("test",timerCount);
        $('#clock').html(timerCount);
    } else if(timerCount === 0) {
        console.log("TIME UP");
        stopTimers();
    }
};

// var timeOutObj = setInterval(timeOut, 10000);
// var domTimerObj = setInterval(domTimer, 1000);

function stopTimers( ) {
    clearInterval(timeOutObj);
    // clearInterval(domTimerObj);
};

//funtion to move on to next question in array and reset timer
function nextQuestion() {
    $('.nextQuestionButton').hide();
    $('.answers').show();
    thisQuestion++;
    //timeOutObj = setInterval(domTimer, 1000)
    generateAnswersText();
   
};

//function to create timer that will hide answers and present a new slide inbetween the answers
function inbetweenQuestionsCorrect() {
    $("#question-text").text('you did not mess up!');
    $('.answers').hide();
    $('.nextQuestionButton').show();
    
};

//function to create a new slide that will show when the answer is wrong
function inbetweenQuestionsWrong() {
    $("#question-text").text('you did mess up!!! Mom hates you now!!');
    $('.answers').hide();
    $('.nextQuestionButton').show();
};

function inbetweenQuestionsNoTime() {
    $("#question-text").text('Just like that time in middle school when you didn\'t ask out Torry K. you hesistated. You loooose this round!');
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
  //   else if (sec == 0 ){
       // stopTimers();
  //  } 
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
        $('.resultMessage').text("You did it! The President has been saved from ninjas! Now Git!")
    } else if ( points === 2) {
        $('.resultMessage').text('You partially did it! You saved half the president! The good half!')
    } else {
        $('.resultMessage').text('The Ninjas have won, the country its doomed. Farewell friend')
    }
};


//start the game on click
$('.gameStartButton').on('click', function () {

    $('#question-box1').remove();
    $('#questionBox').show();
 //   $('#timerSpot').html(sec);
    generateAnswersText();
 //   timeOutObj = setInterval(domTimer, 1000)
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
  //  timeOutObj = setInterval(domTimer, 1000)
    }
});




$('.container').ready(function () {
    $('#questionBox').hide();
    $('#resultBox').hide()
});
