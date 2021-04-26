const question = document.querySelector("#question");
const scoreText = document.querySelector("#score");
const answer = document.querySelectorAll(".choice-text");
const progressBarFull = document.querySelector("#progressBarFull");
const progressText = document.querySelector("#progressText");
const countdownEl = document.getElementById("countdown");

const maxQuestion = 6;

let questionCounter = 1;
let score = 0;
let answer1;
let time = 60;
let x;

const changeKey = (e) => {
  console.log(e);
  localStorage.setItem("quizType", e);
};

const getQuestion = (e) => {
  clearInterval(x);
  time = 60;
  x = setInterval(() => {
    countdownEl.innerText = `${time}`;
    time--;
    if (time === 0) {
      time = 60;

      clearInterval(x);
      getQuestion(localStorage.getItem("quizType"));
    }
  }, 1000);
  if (questions[e].length === 0) {
    localStorage.setItem("mostRecentScore", score);
    setTimeout(() => {
      return window.location.assign("end.html");
    }, 1000);
  }

  let random = Math.floor(Math.random() * questions[e].length);
  question.innerText = questions[e][random].question;

  answer1 = questions[e][random].answer;

  for (let index = 0; index < questions[e][random].choices.length; index++) {
    answer[index].innerText = questions[e][random].choices[index];
  }

  progressText.innerText = `Question ${questionCounter} of ${maxQuestion}`;
  progressBarFull.style.width = `${(questionCounter / maxQuestion) * 100}%`;
  questionCounter++;

  questions[e].splice(random, 1);
};

const nextQuestion = (number) => {
  if (answer1 == number) {
    score += 100;
    document.getElementById(number).style.backgroundColor = "green";
    scoreText.innerText = score;

    setTimeout(() => {
      let e = localStorage.getItem("quizType");
      getQuestion(e);
      document.getElementById(number).style.backgroundColor = "teal";
    }, 1000);
  } else {
    document.getElementById(number).style.backgroundColor = "red";

    setTimeout(() => {
      let e = localStorage.getItem("quizType");
      getQuestion(e);

      document.getElementById(number).style.backgroundColor = "teal";
    }, 1000);
  }
};
