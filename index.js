 const questionEL = document.getElementById('question')
const a_choice = document.getElementById('a_choice');
const b_choice = document.getElementById('b_choice');
const c_choice = document.getElementById('c_choice');
const d_choice = document.getElementById('d_choice');
const btn= document.querySelector(" .submit-btn");
 
console.log(d_choice)

 let nextQuestion = 0 ;

const questData= [
    {
        question: "Which is the popular language?",
        a: "Java",
        b: "Phython",
        c: "C",
        d: "JavaScript",
        correct: "d"
    },
    {
        question : "Which language is the oldest language ?",
        a: "Java",
        b: "C",
        c: "Phython",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Who is the richest person in the world ?" ,
        a : "Elon Musk",
        b: "Bill Gates ",
        c : "Anil Ambani",
        d : "None of them",
        correct : "a"
    }
]

function quest(){
 const currentQuiz = questData[nextQuestion];
 questionEL.innerText =currentQuiz.question ;
 a_choice.innerText = currentQuiz.a;
 b_choice.innerText = currentQuiz.b;
 c_choice.innerText = currentQuiz.c;
 d_choice.innerText = currentQuiz.d;

 nextQuestion++;
}

quest();

btn.addEventListener('click',quest)