const questionEL = document.getElementById('question')
const a_choice = document.getElementById('a_choice');
const b_choice = document.getElementById('b_choice');
const c_choice = document.getElementById('c_choice');
const d_choice = document.getElementById('d_choice');
const btn = document.querySelector(" .submit-btn");
const quiz = document.getElementById('quiz')

const ans = document.querySelectorAll('.ans')


let nextQuestion = 0;
let score = 0;

const questData = [
    {
        question: "Which is the popular language?",
        a: "Java",
        b: "Phython",
        c: "C",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which language is the oldest language ?",
        a: "Java",
        b: "C",
        c: "Phython",
        d: "JavaScript",
        correct: "b"
    },
    {
        question: "Who is the richest person in the world ?",
        a: "Elon Musk",
        b: "Bill Gates ",
        c: "Anil Ambani",
        d: "None of them",
        correct: "a"
    }
]

function quest() {
    deselect();
    const currentQuiz = questData[nextQuestion];
    questionEL.innerText = currentQuiz.question;
    a_choice.innerText = currentQuiz.a;
    b_choice.innerText = currentQuiz.b;
    c_choice.innerText = currentQuiz.c;
    d_choice.innerText = currentQuiz.d;


}
quest();

function select() {
let answer = undefined;

    ans.forEach((item) => {
        if (item.checked) {
            answer = item.id;
        }
    })
    return answer;
}

function deselect() {

    ans.forEach((item) => {
        item.checked = false;
    })
}



btn.addEventListener('click', () => {
    const answer = select();
    if (answer) {
        if (answer === questData[nextQuestion].correct) {
            score++
        }
        nextQuestion++;

        if (nextQuestion < questData.length) {

            quest();
        }
        else {
            quiz.innerHTML = `<h3> You scored ${score} out of ${questData.length}</h3> 

             <button onclick="location.reload()" class="btn">Reload</button>`
        }
    }


})
