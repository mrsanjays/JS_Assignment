const quizData = [
    {
        question: "What is the largest planet in our solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Earth",
        d: "Jupiter",
        answer: "d"
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        a: "China",
        b: "Japan",
        c: "South Korea",
        d: "Thailand",
        answer: "b"
      },
      {
        question: "Who painted the 'Mona Lisa'?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Michelangelo",
        answer: "b"
      },
      {
        question: "What is the chemical symbol for the element 'Iron'?",
        a: "Fe",
        b: "Ir",
        c: "In",
        d: "Io",
        answer: "a"
      },
      {
        question: "Which famous scientist formulated the three laws of motion?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        answer: "a"
      },
      {
        question: "What is the primary gas that makes up Earth's atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Helium",
        answer: "c"
      },
      {
        question: "Who wrote the play 'Hamlet'?",
        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Mark Twain",
        d: "Jane Austen",
        answer: "a"
      },
      {
        question: "What is the largest mammal on land?",
        a: "Elephant",
        b: "Giraffe",
        c: "Hippopotamus",
        d: "Rhinoceros",
        answer: "a"
      },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const questionEL = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    submitBtn.disabled = false; // Enable the button

    const currentQuizData = quizData[currentQuiz]
    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked)
            answer = answerEl.id;
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer == quizData[currentQuiz].answer){
            score += 10;
            submitBtn.disabled = true; // Disable the button until the next question is loaded
            setTimeout(() => {
                currentQuiz++;
                if(currentQuiz < quizData.length){
                    loadQuiz();
                } else {
                    alert(`Quiz Complete! You have scored ${score}/${quizData.length * 10}`); // Alert at the end of quiz
                    quiz.innerHTML = `
                        <h2>You have Scored ${score}/${quizData.length * 10}</h2>
                        <button onclick="location.reload()">Restart</button>
                    `
                }
            }, 1000); // Delay to show the alert
        } else {
            alert('Incorrect Answer. Try Again!'); // Alert for incorrect answer
        }
    } else {
        alert('Please select an answer!'); // Alert if no answer is selected
    }
})
