let questions = [
    {
        question: '<strong>#1.</strong> Which band is often cited as being one of the founders of heavy metal?',
        answers: {
            A: 'The Who',
            B: 'ABBA',
            C: 'Black Sabbath',
            D: 'Pink Floyd'
        },
        correctAnswer: 'Black Sabbath' 
    },
    {
        question: '<strong>#2.</strong> Finish the following lyrics: "We will, we will ..."',
        answers: {
            A: 'Give you a haircut',
            B: 'Rock you',
            C: 'Eat dinner',
            D: 'Punch you in the face'
        },
        correctAnswer: 'Rock you'
    },
    {
        question: '<strong>#3.</strong> Rock and metal music is often characterized by the use of distortion on a particular instrument. Which one?',
        answers: {
            A: 'Guitar',
            B: 'Trombone',
            C: 'Piano',
            D: 'Bass'
        },
        correctAnswer: 'Guitar' 
    },
    {
        question: '<strong>#4.</strong> In 1969, Jimi Hendrix played at one of the most legendary music festivals of all time. What was it called?',
        answers: {
            A: 'Flower Power',
            B: 'Lollapalooza',
            C: 'Woodstock',
            D: 'Ragnarök'
        },
        correctAnswer: 'Woodstock' 
    },
    {
        question: '<strong>#5.</strong> Metal shows are infamous for their crazy crowds, with people running into each other as a sort of ritual. This is often referred to as a ...',
        answers: {
            A: 'Dance',
            B: 'Way to get to know each other',
            C: 'Party',
            D: 'Moshpit'
        },
        correctAnswer: 'Moshpit' 
    },
    {
        question: '<strong>#6.</strong> Who wrote the song "Enter Sandman"?',
        answers: {
            A: 'Metallica',
            B: 'Megadeth',
            C: 'Slayer',
            D: 'Anthrax'
        },
        correctAnswer: 'Metallica'
    },
    {
        question: '<strong>#7.</strong> Every new genre has its roots in another genre. From which one did rock originate?',
        answers: {
            A: 'Blues',
            B: 'Ancient Egyptian Folk Music',
            C: 'Techno',
            D: 'Funk'
        },
        correctAnswer: 'Blues'
    },
    {
        question: '<strong>#8.</strong> What is, without a doubt, the best music genre in the world?',
        answers: {
            A: 'Rap',
            B: 'Classical',
            C: 'Plastic',
            D: 'Metal (Preferably LOUD)'
        },
        correctAnswer: 'Metal (Preferably LOUD)'
    }
];

let quizBox = document.getElementById('quiz-box');
let questionH2 = document.getElementById('question-h2');
let answerButton = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let scoreTracker = document.getElementById('score');
let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 8;
let currentQuestion = 0;

scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

function revealAnswer(event) {
        if (this.innerHTML === questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            correct++;
            currentQuestion++;
            quizBox.style.backgroundColor = "chartreuse";
            questionH2.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
        } 
        else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            currentQuestion++;
            quizBox.style.backgroundColor = "red";
            questionH2.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questions[q].correctAnswer + '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
            } 
        else if (this.innerHTML === questions[q].correctAnswer && currentQuestion == q){
            quizBox.style.backgroundColor = "chartreuse";
            questionH2.innerHTML = 'Correct!';
            correct++;
            currentQuestion++;
        } 
        else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == q){
            quizBox.style.backgroundColor = "red";
            questionH2.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questions[q].correctAnswer + '</strong>';
            currentQuestion++;
        }
        
        scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;
}
let i;
for (i = 0; i < answerButton.length; i++){
    answerButton[i].addEventListener("click", revealAnswer);
}

questionH2.innerHTML = questions[q].question;
answerButton[0].innerHTML = questions[a].answers.A;
answerButton[1].innerHTML = questions[a].answers.B;
answerButton[2].innerHTML = questions[a].answers.C;
answerButton[3].innerHTML = questions[a].answers.D;

nextButton.addEventListener('click', nextQuestion);
function nextQuestion(){
    if (currentQuestion == totalQuestions){
        alert('Click the restart button to try again');
    }
    else if (currentQuestion > q){
        q++;
        a++;
        questionH2.innerHTML = questions[q].question;
        answerButton[0].innerHTML = questions[a].answers.A;
        answerButton[1].innerHTML = questions[a].answers.B;
        answerButton[2].innerHTML = questions[a].answers.C;
        answerButton[3].innerHTML = questions[a].answers.D;
        quizBox.style.backgroundColor = 'white';
    }
    else {
        alert('Please select your answer to continue');
    }
}

restartButton.addEventListener('click', restartQuiz);
function restartQuiz(){
    location.reload();
}
