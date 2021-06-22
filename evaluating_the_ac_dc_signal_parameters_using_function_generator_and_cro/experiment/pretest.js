
// Don't touch the below code

(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          //answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    
  
  // Don't touch the above code
  
  
  
  
  // Write your MCQs here --- Start --- --------------------
  
    const myQuestions = [
      {
        question: "CRO can be used to measure ___________",
        answers: {
          a: "Frequency",
          b: "AC Voltage",
          c: "DC Voltage",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "A CRO cannot be used for direct measurement of",
        answers: {
          a: "Frequency",
          b: "Power",
          c: "Current",
          d: "Voltage"
        },
        correctAnswer: "b"
      },
      {
        question: "Square wave and pulse wave are same in all aspects",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "In function generator, the function selector is used to select the desired",
        answers: {
          a: "Frequency",
          b: "Waveform",
          c: "Amplitude",
          d: "Voltage"
        },
        correctAnswer: "b"
      },
      {
        question: "The selected waveform in a function generator is available at",
        answers: {
          a: "VCO output",
          b: "Output Jack",
          c: "Function selector"
        },
        correctAnswer: "b"
      },
    ];
  
  
  
  
  // ---------------------------- End -------------------------------
  
  
  
  
  
  
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  