let questions = [
  {
    question: "Which of the following is correct about JavaScript?",

    choices: [
      "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
      "Both the <head> section and the <body> section are correct",
      " The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
      "All of the above.",
    ],
    // choice1: "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages." ,
    // choice2: "Both the <head> section and the <body> section are correct" ,
    // choice3: " The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
    // choice4: "All of the above.",
    answer: 3,
  },

  {
    question:
      "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: [
      "global variable",
      "local variable",
      "Both of the above.",
      "None of the above.",
    ],
    // choice1: "global variable" ,
    // choice2: "local variable" ,
    // choice3: "Both of the above.",
    // choice4: "None of the above.",
    answer: 0,
  },

  {
    question: "Which built-in method returns the length of the string?",
    choices: ["length()", "size()", "index()", "None of the above."],
    // choice1: "length()" ,
    // choice2: "size()" ,
    // choice3: "index()",
    // choice4: "None of the above.",
    answer: 0,
  },

  {
    question: "Which of the following code creates an object?",
    choices: [
      "var book = Object();",
      "var book = new Object();",
      "var book = new OBJECT();",
      "var book = new Book();",
    ],
    // choice1: "var book = Object();" ,
    // choice2: "var book = new Object();" ,
    // choice3: "var book = new OBJECT();",
    // choice4: "var book = new Book();",
    answer: 1,
  },

  {
    question:
      "Which of the following function of Number object defines how many total digits to display of a number?",
    choices: [
      "toExponential()",
      "toFixed()",
      "toLocaleString()",
      "toPrecision()",
    ],
    // choice1: "toExponential()" ,
    // choice2: "toFixed()" ,
    // choice3: "toLocaleString()",
    // choice4: "toPrecision()",
    answer: 3,
  },

  {
    question:
      " Which of the following function of String object extracts a section of a string and returns a new string?",
    choices: ["slice()", "split()", "replace()", "search()"],
    // choice1: "slice()" ,
    // choice2: "split()" ,
    // choice3: "replace()",
    // choice4: "search()",
    answer: 0,
  },
];

const question = document.querySelector("#question");
const scoreText = document.querySelector("#score");
const answer = document.querySelectorAll(".choice-text");
const progressBarFull = document.querySelector("#progressBarFull");
const progressText = document.querySelector("#progressText");

let questionCounter = 1;
const maxQuestion = 6;
const SCORE_POINTS = 100;
let score = 0;

let answer1;
const getQuestion = () => {
  let random = Math.floor(Math.random() * questions.length);

  question.innerText = questions[random].question;
  answer1 = questions[random].answer;
  for (let index = 0; index < questions[random].choices.length; index++) {
    answer[index].innerText = questions[random].choices[index];
  }

  progressText.innerText = `Question ${questionCounter} of ${maxQuestion}`;
  progressBarFull.style.width = `${(questionCounter / maxQuestion) * 100}%`;
  questionCounter++;

  questions.splice(random, 1);
};
getQuestion();
const nextQuestion = (number) => {
  if (questions.length === 0) {
    localStorage.setItem("mostRecentScore", score);

    setTimeout(() => {
      return window.location.assign("end.html");
    }, 1000);
  }

  if (answer1 == number) {
    document.getElementById(number).style.backgroundColor = "green";
    scoreText.innerText = score += 100;
    // document.getElementById("true").play();
    setTimeout(() => {
      getQuestion();
      document.getElementById(number).style.backgroundColor = "teal";
    }, 1000);
  } else {
    document.getElementById(number).style.backgroundColor = "red";

    setTimeout(() => {
      getQuestion();
      document.getElementById(number).style.backgroundColor = "teal";
    }, 1000);
  }
};

var x = function playAudio() {
  x.play();
};

incrementScore = (num) => {
  score + num;
  scoreText.innerText = score;
};
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

nextQuestion();
