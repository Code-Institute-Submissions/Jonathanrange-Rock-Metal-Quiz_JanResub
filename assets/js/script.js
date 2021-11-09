let questions = [
    {
        question: 'Which band is often cited as being one of the founders of heavy metal?',
        answers: {
            A: 'The Who',
            B: 'ABBA',
            C: 'Black Sabbath',
            D: 'Pink Floyd'
        },
        correctAnswer: 'Black Sabbath' 
    },
    {
        question: 'Finish the following lyrics: "We will, we will ..."',
        answers: {
            A: 'Give you a haircut',
            B: 'Rock you',
            C: 'Eat dinner',
            D: 'Punch you in the face'
        },
        correctAnswer: 'Rock you'
    },
    {
        question: 'Rock and metal music is often characterized by the use of distortion on a particular instrument. Which one?',
        answers: {
            A: 'Guitar',
            B: 'Trombone',
            C: 'Piano',
            D: 'Bass'
        },
        correctAnswer: 'Guitar' 
    },
    {
        question: 'In 1969, Jimi Hendrix played at one of the most legendary music festivals of all time. What was it called?',
        answers: {
            A: 'Flower Power',
            B: 'Lollapalooza',
            C: 'Woodstock',
            D: 'Ragnarök'
        },
        correctAnswer: 'Woodstock' 
    },
    {
        question: 'Metal shows are infamous for their crazy crowds, with people running into each other as a sort of ritual. This is often referred to as a ...',
        answers: {
            A: 'Dance',
            B: 'Way to get to know each other',
            C: 'Party',
            D: 'Moshpit'
        },
        correctAnswer: 'Moshpit' 
    },
    {
        question: 'What is, without a doubt, the best music genre in the world?',
        answers: {
            A: 'Metal',
            B: 'Metal',
            C: 'Metal',
            D: 'Metal (Preferably LOUD)'
        },
        correctAnswer: 'A, B, C, D'
    }
]
let questionBox = document.getElementById('question-box');
let questionH2 = document.getElementById('question-h2')
let answerButton = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');
let b1 = document.getElementById('button-1');
let b2 = document.getElementById('button-2');
let b3 = document.getElementById('button-3');
let b4 = document.getElementById('button-4');


nextButton.addEventListener('click', nextQuestion);

questionH2.innerHTML = questions[0].question;
answerButton[0].innerHTML = questions[0].answers.A;
answerButton[1].innerHTML = questions[0].answers.B;
answerButton[2].innerHTML = questions[0].answers.C;
answerButton[3].innerHTML = questions[0].answers.D;


let q = 1;
let a = 1;
function nextQuestion(){
    questionH2.innerHTML = questions[q].question;
    q++;
    
    answerButton[0].innerHTML = questions[a].answers.A;
    answerButton[1].innerHTML = questions[a].answers.B;
    answerButton[2].innerHTML = questions[a].answers.C;
    answerButton[3].innerHTML = questions[a].answers.D;
    a++;
}


