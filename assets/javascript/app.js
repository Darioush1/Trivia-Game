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
        question: "Who is the all time 3-Point leader in the history of the NBA",
        answer: ["George Hill", "Michael Jordan", "Grant Hill", "Ray Allen"],
        correctAnswer: "Ray Allen",
    },

    {
        question: "The nickname for a friend group consisting primarly of Frank Sinatra, Sammy Davis Jr., Dean Martin was called the...",
        answer: ["Shoe Shiners", "A Resonable Bunch", "The Rat Pack", "The Dock Boys"],
        correctAnswer: ["The Rat Pack"],
    },

    {
        question: "The lead singer Foo Fighters was also the _____ for Nirvana ",
        answer: ["Drummer", 'Lead Guitar', 'Bassist', 'Singer'],
        correctAnswer: "Drummer",
    },


    {
        question: "Which of the following is NOT a programming language",
        answer: ["Assembly Language", "JQuery", "Python", "Giddle"],
        correctAnswer: ["Giddle"],
    },
    {
        question: "In cooking a Roux consists of the following",
        answer: ["Flour & Butter", "Onions, Celery, & Carrots", "Egg & Cream", 'Garlic & Oil'],
        correctAnswer: "Flour & Butter",
    },
    {
        question: "Krump is a type of ____.",
        answer: ["Dance", "Football Move", "Drink", "Clothing"],
        correctAnswer: "Dance",
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
    $('#timerSpot').text('0');
    console.log(sec);
    console.log('time out function')
    inbetweenQuestionsNoTime();
};

//adjust Dom timer
function domTimer() {
    if(sec> 0) {
        sec--;
        $('#timerSpot').html(sec);
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
    sec = parseInt(sec) + 1;
    $('#timerSpot').val(sec);
    $('.nextQuestionButton').hide();
    $('.answers').show();
    generateAnswersText();
   
};

//function to create timer that will hide answers and present a new slide inbetween the answers
function inbetweenQuestionsCorrect() {
    sec = setSec;
    $("#question-text").text('you did not mess up!');
    $('.answers').hide();
    $('.nextQuestionButton').show();
    $('.timerSpot').hide();
    
};

//function to create a new slide that will show when the answer is wrong
function inbetweenQuestionsWrong() {
    sec = setSec;
    $("#question-text").text('Sorry, you got the wrong answer');
    $('.answers').hide();
    $('.nextQuestionButton').show();
    $('.timerSpot').hide();
};

function inbetweenQuestionsNoTime() {
    sec = setSec;
    $("#question-text").text('Times Up! ');
    $('.answers').hide();
    $('.nextQuestionButton').show();
 

};


//function that creates the players choice and holds the events depending on the results
function playerGuess() {
    stopTimers()
    let correctChoice = questionsQA[this.thisQuestion].correctAnswer;

    if (thisQuestion === 8) {
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
    if ( points >= 6) {
        $('.resultMessage').text("You Did Amazing! You got " + points + " right")
    } else if ( points >= 4) {
        $('.resultMessage').text("Not Bad! You got " + points + " right")
    } else {
        $('.resultMessage').text("Better Luck Next Time! You got " + points + " right")
    }
};


//start the game on click
$('.gameStartButton').on('click', function () {
    console.log('gameStartButton thisQuestion = ' + thisQuestion )
    sec = parseInt($('#secInput').val()) + 1;
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
    if (thisQuestion == 8) {
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
