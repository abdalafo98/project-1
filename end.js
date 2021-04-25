const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const say = document.querySelector("#say");
finalScore.innerText = mostRecentScore;

if (mostRecentScore <= 200) {
  say.innerText = "study more";
} else if (mostRecentScore == 300) {
  say.innerText = "Not Bad";
} else if (mostRecentScore == 400) {
  say.innerText = "Good";
} else if (mostRecentScore == 500) {
  say.innerText = "Very Good";
} else if (mostRecentScore == 600) {
  say.innerText = "Excellent";
}
