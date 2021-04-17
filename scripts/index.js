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
