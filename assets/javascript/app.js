$(document).ready(function () {
  //creating integer variables

  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unAnswered = 10;

  //created counter 
  var count = 5;
  var startCount;

  //created start button function so when button is clicked starts timer
  $("#start").on("click", function () {
    clearInterval(startCount);
    startCount = setInterval(decrement, 1000);
  });
  //creating functions needed

  //countdown initiates
  function decrement() {
    count--;
    $("#timer").html(count);
    $("#start").hide();
    if (count === 0) {
      stop();
      timesUp();
      nextPhase();//create a function for next phase..

    }
  }

  //stoptimer
  function stop() {
    clearInterval(startCount);
  }

  //correct answer//
  function right() {
    correctAnswer++;
    $("#correct-score").text("correct" + correctAnswer);//either figure out a way to manipulate dom or create correct score...
    nextPhase()
  }
  //incorrect answer//
  function wrong() {
    incorrectAnswer++;
    $("#incorrect-score").text("incorrect" + incorrectAnswer);
    nextPhase()
  }

  function timesUp() {
    unAnswered--;
    $("#unanswered-score").text("unanswered" + unAnswered);
    nextPhase()
  }

  //questions and answers array




});