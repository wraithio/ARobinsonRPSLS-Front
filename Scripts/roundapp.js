let cpu1round = document.getElementById("cpu1round");
let cpu5round = document.getElementById("cpu5round");
let cpu7round = document.getElementById("cpu7round");
let maxScore = 0;
cpu1round.addEventListener("click", function() {
  maxScore = 1
  saveToLocalStorage(maxScore)
});
cpu5round.addEventListener("click", function() {
  maxScore = 3
  saveToLocalStorage(maxScore)
});
cpu7round.addEventListener("click", function() {
  maxScore = 4
  saveToLocalStorage(maxScore)
});

function saveToLocalStorage(score)
{
  localStorage.setItem('score', JSON.stringify(score))

}


