(function() {
//QUESTIONS
  function createQuiz(){
    // storing user's output -- 
    const output = [];
    // iterates through every question)
      shortQuiz.forEach((currentQuestion, questionNumber) => {
        // store answer choices
        const answers = [];
        // iterate through each avaiable answer for every question
        for(letter in currentQuestion.answers){
          // PUSH radio button onto every single possible answer - template literals add the HTML
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        };
        // PUSH question & answers to output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join('')} </div>`
        );
      }); // shortQuiz.forEach loop ends here
    // finally combine our output onto page
    quizContainer.innerHTML = output.join('');
  }
// RESULTS
  function displayResults() {
    //getting answer containers from quiz w user's choices
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // track score
    let numCorrect = 0;
    // iterate through each question & find answers
    shortQuiz.forEach( (currentQuestion, questionNumber) => {
      //- determines checked quests / if it's empty
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add 1 point to score current score
        numCorrect++;
        // color the questions the user answered correctly - gold
        answerContainers[questionNumber].style.color = 'gold';
      } // if answer is wrong or blank
       else{
        // color the incorrect / unanswered ques red
        answerContainers[questionNumber].style.color = 'darkred';
      }
    });
    // show number of correct answers out of total 
   resultsContainer.innerHTML = `Your score is ${numCorrect} out of ${shortQuiz.length}`;
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
 //shuffle questions - shortQuiz will take a random 10 ques from the quesbank var myQuestions
  function shuffle(arr) {
    for (let index = arr.length - 1; index > 0; index--) {
        const newIndex = Math.floor(Math.random() * (index + 1));
        [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]];
    }
    return arr;
  }
  const myQuestions = [
    {
      question: "My loneliness is killing me, I must confess, I still believe…",
      answers: {
        a: "Britney Spears",
        b: "Christina Aguilera",
        c: "Hilary Duff",
        d: "Jessica Simpson"
      },
      correctAnswer: "a"
    },
    {
      question: "Ain’t nothin’ but a heartache…",
      answers: {
        a: "Hanson",
        b: "Backstreet Boys",
        c: "NSYNC",
        d: "98 Degrees"
      },
      correctAnswer: "b"
    },
    {
      question: "I’m here to remind you of the mess you left when you went away…",
      answers: {
        a: "Dream",
        b: "Slipknot",
        c: "Alanis Morissette",
        d: "Sarah McLachlan"
      },
      correctAnswer: "c"
    },
    {
      question: " …taking is too easy, but that’s the way it is.",
      answers: {
        a: "Spice Girls",
        b: "S Club 7",
        c: "Aaron Carter",
        d: "Sir Mix A Lot"
      },
      correctAnswer: "a"
    },
    {
      question: "I will be the one to love and comfort you from now until the day I die.",
      answers: {
        a: "One Direction",
        b: "Red Hot Chili Peppers",
        c: "LEN",
        d: "B44"
      },
      correctAnswer: "d"
    },
    {
      question: "…all that glitter is gold, only shooting stars break the mold.",
      answers: {
        a: "Avril Lavinge",
        b: "Smash Mouth",
        c: "Alanis Morissette",
        d: "U2"
      },
      correctAnswer: "b"
    },
    {
      question: "Oh, my, God Becky…",
      answers: {
        a: "Sir Mix A Lot",
        b: "Prince",
        c: "Moffats",
        d: "Bloodhound Gang"
      },
      correctAnswer: "a"
    }, 
    {
      question: "Don’t go chasing waterfalls, please stick too the rivers and the lakes that you’re used to…",
      answers: {
        a: "All Saints",
        b: "Savage Garden",
        c: "98 Degrees",
        d: "TLC"
      },
      correctAnswer: "d"
    },
    {
      question: "If there was a problem, yo, I’ll solve it. Check out the hook while my DJ revolves it.",
      answers: {
        a: "Vanilla Ice",
        b: "Disturbed",
        c: "Tupac",
        d: "Celine Dion"
      },
      correctAnswer: "a"
    },
    {
      question: "I'll be your dream I'll be your wish I'll be your fantasy",
      answers: {
        a: "Alexisonfire",
        b: "Our Lady Peace",
        c: "Silverstein",
        d: "Savage Garden"
      },
      correctAnswer: "d"
    },
    {
      question: "I get knocked down but I get up again you’re never gonna keep me down",
      answers: {
        a: "Nickelback",
        b: "Beastie Boys",
        c: "ChumbaWamba",
        d: "Creed"
      },
      correctAnswer: "c"
    },
    {
      question: "With the lights out, it’s less dangerous. Here we are now, entertain us...",
      answers: {
        a: "Foo Fighters",
        b: "Radiohead",
        c: "Pearljam",
        d: "Nirvana"
      },
      correctAnswer: "d"
    },
    {
      question: "You have so many relationships in this life only one or two will last",
      answers: {
        a: "Aaron Carter",
        b: "Hanson",
        c: "LFO",
        d: "Moffats"
      },
      correctAnswer: "b"
    },
    {
      question: "I dream about a girl who's a mix of Destiny's Child Just a little touch Madonna's wild style With Janet Jackson's smile, throw in a body like Jennifer\'s...",
      answers: {
        a: "O-Town",
        b: "Dreamstreet",
        c: "S Club 7",
        d: "5ive"
      },
      correctAnswer: "a"
    },
     {
      question: "So you can take that cookie And stick it up your...",
      answers: {
        a: "Kid Rock",
        b: "System of a Down",
        c: "Destiny's Child",
        d: "Limp Bizkit"
      },
      correctAnswer: "d"
    },
     {
      question: "I'm a low brow but I rock a little know how / No time for the piggies or the hoosegow / Get smart get down with the pow wow/ Never been a better time than right now",
      answers: {
        a: "Foo Fighters",
        b: "Blink 182",
        c: "Red Hot Chili Peppers",
        d: "Rage Against the Machine"
      },
      correctAnswer: "c"
    },
     {
      question: "One, nothing wrong with me / Two, nothing wrong with me",
      answers: {
        a: "Drowning Pool",
        b: "Rage Against the Machine",
        c: "Backstreet Boys",
        d: "Smashing Pumpkins"
      },
      correctAnswer: "a"
    },
     {
      question: "It is a night for passion/ But the morning means goodbye/ Beware of what is flashing in her eyes/ She's going to get you",
      answers: {
        a: "Kylie Minogue",
        b: "Ace of Base",
        c: "Aqua",
        d: "Hall and Oats"
      },
      correctAnswer: "b"
    },
     {
      question: "I know you know, you know, so baby don't/ Pretend you wont keep me guessing if ya/ You will you wont don't want to play a game with you baby",
      answers: {
        a: "Ashlee Simpson",
        b: "Britney Spears",
        c: "Jessica Simpson",
        d: "Cristina Aguilera"
      },
      correctAnswer: "d"
    },
     {
      question: "On a Monday I am waiting on a Tuesday I am fading...",
      answers: {
        a: "Jann Arden",
        b: "Ashlee Simpson",
        c: "Macy Gray",
        d: "Pussy Cat Dolls"
      },
      correctAnswer: "b"
    },
     {
      question: "It's alright to tell me what you think about me I won't try to argue or hold it against you",
      answers: {
        a: "NOFX",
        b: "New Found Glory",
        c: "Blink 182",
        d: "Sum 41"
      },
      correctAnswer: "c"
    },
     {
      question: "Hoping for the best just hoping nothing happens, A thousand clever lines unread on clever napkins",
      answers: {
        a: "The Used",
        b: "Atreyu",
        c: "Taking Back Sunday",
        d: "Alexisonfire"
      },
      correctAnswer: "c"
    },
     {
      question: "Have I waited too long, Have I found that someone, Have I waited too long, Too see you",
      answers: {
        a: "New Found Glory",
        b: "Simple Plan",
        c: "Mest",
        d: "Less than Jake"
      },
      correctAnswer: "a"
    },
     {
      question: "Never made it as a wise man, I couldn't cut it as A poor man stealing",
      answers: {
        a: "Nine Inch Nails",
        b: "Tool",
        c: "Nickelback",
        d: "Theory of a dead man"
      },
      correctAnswer: "c"
    },
    {
     question: "My English teacher wanted to flunk me in Junior High Thanks a lot next semester I'll be thirty five",
     answers: {
      a: "DMX",
      b: "Eminem",
      c: "Kid Rock",
      d: "Dr. Dre"
      },
      correctAnswer: "b"
    }
  ];
  const shuffledQuestions = shuffle(myQuestions); // shuffle returned function 

  const shortQuiz = shuffledQuestions.slice(0, 10);

  submitButton.addEventListener("click", displayResults); // event listener
  createQuiz();
})();