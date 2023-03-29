// Lines 6-7 were edited according to
// iota's(https://stackoverflow.com/users/9513184/iota)
// answer to my question on stackoverflow.com.

const confirmCancel = () => {
  if (
    confirm("All your progress will be lost. Are you sure you want to leave?")
  ) {
    window.location.assign("index.html");
  } else {
    return false;
  }
};

const goBack = () => {
  window.history.back();
};

const resultCard = document.querySelector('.result-card');
const resultCardWidth = resultCard.offsetWidth;
const resultCardHeight = resultCard.offsetHeight;

resultCard.style.top = `calc(50% - ${resultCardHeight / 2}px)`;
resultCard.style.left = `calc(50% - ${resultCardWidth / 2}px)`;

console.log(resultCard);