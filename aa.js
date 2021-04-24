const getQuestion = () => {
  array = [];
  let choice = [];
  questions.forEach((item) => {
    array.push(item.question);
  });

  let random = Math.floor(Math.random() * array.length);

  for (let index = 0; index < array.length; index++) {
    return (question.innerText = array[random]);
  }
  questionCounter++;

  if (array.length === 0 || questionCounter > maxQuestion) {
  }
};

const getAnswer = (index) => {
  getQuestion();

  array = [];
  questions.forEach((item) => {
    array.push(item.choices);
  });

  for (let index = 0; index < array.length; index++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    answer[index].innerText = array[randomIndex];
  }
};
