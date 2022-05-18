const quizData = [
    {
        question: "Do you often use Alcohol in larger amounts or over a longer period of time than you intended?",
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "Have you for a while now wanted to cut back on Alcohol or made unsuccessful attempts to do so?",
        a: "Yes",
        b: "No",
        correct: "a"
    },
    {
        question: "Has your use of Alcohol resulted in your inability to meet your obligations at work, home, or school?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "Do you spend a great deal of time finding, using, or recovering from Alcohol?",
        a: "Yes",
        b: "No",
        correct: "a"
    },
    {
        question: "Do you have strong urges or powerful cravings to use Alcohol?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "Have you had to cut back on or abandon social, professional, or recreational activities due to your use of Alcohol?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "Have you repeatedly used Alcohol when it was hazardous to do so, such as while driving a car or operating machinery?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "Have you kept using Alcohol knowing that it has caused or worsened physical or mental health issues?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "When you attempt to cut back on or stop your use of Alcohol, have you experienced uncomfortable physical or mental health symptoms (withdrawal)?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
   
    {
        question: "Have you experienced diminished effects when you use Alcohol compared to the past and/or have you needed more Alcohol to feel the effects you’re seeking (tolerance)?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})