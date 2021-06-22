/*posttest JS*/

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
        question: "How is the waveform adjusted?",
        answers: {
          a: "by adjusting the voltage",
          b: "through shift controls",
          c: "by reducing the current",
          d: "by means of a galvanometer"
        },
        correctAnswer: "b"
      },
      {
        question: "How is error in measurement reduced?",
        answers: {
          a: "using r.m.s value",
          b: "using absolute value",
          c: "using peak to peak value",
          d: "using a voltmeter"
        },
        correctAnswer: "c"
      },
      {
        question: "Period of a waveform is obtained by which of the following relation?",
        answers: {
          a: "T = number of divisions occupied by 1 cycle×(time)",
          b: "T = number of divisions occupied by 1 cycle×(1⁄division)",
          c: "T = number of divisions occupied by 1 cycle×(time⁄division)",
          d: "T = number of divisions occupied by 1 cycle"
        },
        correctAnswer: "c"
      },
      {
        question: "How is frequency related to time period?",
        answers: {
          a: "square proportional",
          b: "not related",
          c: "directly proportional",
          d: "inversely proportional"
        },
        correctAnswer: "d"
      },
      {
        question: "In Real time sampling, bandwidth is limited",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "An oscilloscope with 20 to 50 GHz needs a slow speed.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "How many types of acquisition methods are there in a digital storage oscilloscope?",
        answers: {
          a: "3",
          b: "6",
          c: "2",
          d: "4"
        },
        correctAnswer: "a"
      },
    ];
  
  
  
  
  // ---------------------------- End -------------------------------
  
  
  
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  