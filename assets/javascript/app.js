/*eslint-env browser*/
/*global $*/

$(document).ready(function () {
  //creating integer variables

  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unAnswered = 10;



  //created counter 
  var maxSecondsPerQuestion=15;
  var count;
  

  //created start button function so when button is clicked starts timer
  $("#start").on("click", function () {
    $("#start").hide();
    nextPhase();
  });
  //creating functions needed

  //countdown initiates
  function decrement() {
    
    count--;
    $("#timer").html(count);
    if (count === 0) {
      reactToTimeRunningOut();
      nextPhase();

    }
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

  function reactToTimeRunningOut() {
    if (count===0){
      nextPhase();
    }
  }

  let activeQuestionIndex = -1;
  var timerIntervalID;

  function nextPhase() {
    $("#activeQuestion").empty();
    $("#activeAnswers").empty();
    activeQuestionIndex++;
    $('#activeQuestion').append(questions[activeQuestionIndex].prompt);
    questions[activeQuestionIndex].availableAnswers.forEach(function (answer){
      $('#activeAnswers').append($('<div>' + answer +'</div>'));  
    })
   count = maxSecondsPerQuestion;
    if (timerIntervalID) clearInterval(timerIntervalID)
    timerIntervalID = setInterval(decrement, 1000);
  }


  //questions and answers array
  const questions = [
    {
      prompt: 'In Aladdin, what is the name of Jasmine’s pet tiger?',
      availableAnswers: [
        'Rajah', //correct
        'Chetto',
        'Bethaizor',
        'Liseth'
      ],
      correctAnswerIndex: 0
    },
    {
      prompt: 'In Peter Pan, Captain Hook had a hook on which one of his hands?',
      availableAnswers: [
        'His Right Foot',
        'His Right',
        'His Left',  //correct
        'His Left Foot'
      ],
      correctAnswerIndex: 2
    },
    {
      prompt: 'After being on earth, where did Hercules first meet his father Zeus?',
      availableAnswers: [
        'Mount Olympus',
        'Prometheus Accadamy',
        'In the Temple of Zeus',  //correct
        'Phils Island'
      ],
      correctAnswerIndex: 2
    },
    {
      prompt: 'In Toy Story, what game does the slinky play?',
      availableAnswers: [
        'Uno',
        'Checkers',  //correct
        'Zurg Game',
        'Solitair'
      ],
      correctAnswerIndex: 1
    },
    {
      prompt: 'In Hercules, Hades promised not to harm Megara provided that Hercules give up his strength. How long did he have to agree to give up his strength for?',
      availableAnswers: [
        '36 Hours',
        '12 Hours',
        '48 Hours',
        '24 Hours'  //correct
      ],
      correctAnswerIndex: 3
    },
    {
      prompt: 'What was the name of the dragon (god wanna be) in Mulan and who provided his voice?',
      availableAnswers: [
        'Mushu by Eddie Murphy',  //correct
        'Mitsuki by Patrick Warburton',
        'Nessie by Phil Harris',
        'Pete by James Woods'
      ],
      correctAnswerIndex: 0
    },
    {
      prompt: 'In Lady & the Tramp, by what name did Tony call Tramp? ',
      availableAnswers: [
        'Scooter',
        'Butch',  //correct
        'Copper',
        'Lucky'
      ],
      correctAnswerIndex: 1
    },
    {
      prompt: 'What was the name of the whale in Pinocchio?',
      availableAnswers: [
        'Laboon',
        'Old Tom',
        'Migaloo',
        'Monstro'  //correct
      ],
      correctAnswerIndex: 3
    },
    {
      prompt: 'In the Little Mermaid when Ariel sees Prince Eric, what type of celebration was happening on the ship??',
      availableAnswers: [
        'A Anniversary',
        'A Birthday Party',  //correct
        'Engagement Party',
        'Graduation Party'
      ],
      correctAnswerIndex: 1
    },
    {
      prompt: 'Which Disney movie was the first to be nominated for an Oscar?',
      availableAnswers: [
        'Beauty and the Beast',  //correct
        'Hurcules',
        'Dumbo',
        'Toy Story'
      ],
      correctAnswerIndex: 0
    }
  ]
  console.log(questions);



});