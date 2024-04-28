

const questions =[
    {
        question:"Which is type of credit card....? ",
        answer:[
            { text: "Master Card",correct:false } ,
            { text: " VISA",correct:false } ,
            { text: "Both a & b",correct:true } ,
            { text: "None of the above",correct:false} ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"Which is related to virtual Reality. ",
        answer:[
            { text: "Samsung VR",correct:false } ,
            { text: " Oculus VR",correct:false } ,
            { text: "Google cardboard",correct:false } ,
            { text: "All of the above",correct:true } ,
        ]
    },
    {
        question:"A vaild e-mail address is  ",
        answer:[
            { text: "Vrm.india.com",correct:false } ,
            { text: " vrm@india.com",correct:true} ,
            { text: "Vrm.@india.com",correct:false } ,
            { text: "@vrm@india.com",correct:false} ,
        ]
    },
    {
            question:"Which of the following is not an e-mail server. ",
        answer:[
            { text: "Rediff mail",correct:false } ,
            { text: " Outlook",correct:false } ,
            { text: "both a & b",correct:false } ,
            { text: "Linkden",correct:true } ,
        ]
    },
    {
            question:"QR code stand for ",
            answer:[
                { text: " Quick React Code",correct:false } ,
                { text: " Quick Result Code",correct:false } ,
                { text: "Quick Response Code",correct: true} ,
                { text: "Quick Restore Code",correct:false} ,
            ]

    },
    {
        question:"With the email we can attach the file  ",
        answer:[
            { text: "Not more than one",correct:false } ,
            { text: "Not more than two",correct:false } ,
            { text: "one",correct:false } ,
            { text: "None of these",correct:true } ,
        ]
    },
    {
        question:"In which year was the first email sent? ",
        answer:[
            { text: "1982",correct:false } ,
            { text: "1986",correct:false } ,
            { text: "1971",correct:true } ,
            { text: "1977",correct:false} ,
        ]
    },
    {
        question:"The domain name in an URL refers to the",
        answer:[
            { text: "protocol",correct:false } ,
            { text: " server",correct:true  } ,
            { text: "file name",correct:false } ,
            { text: "directory",correct:false } ,
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let question = currentQuestionIndex+1;
    questionElement.innerHTML = question+ " ."+ currentQuestion.
    question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add ("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";

}
function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();