let quizContainer = document.querySelector("#quiz");
let quizResult = document.querySelector("#quiz-result");

init();

function init() {
  let file = quizContainer.getAttribute("file");
  let xhr = new XMLHttpRequest();

  xhr.open("GET", file, true);

  xhr.onload = function () {
    if (this.status != 200) {
      console.log("something fucked up");
    }

    let xml = this.responseXML;
    setupQuiz(xml);
  };

  xhr.send();
}

function setupQuiz(xml) {
  let quiz = xml.querySelector("quiz");
  let questions = quiz.querySelectorAll("question");

  questions.forEach((question, questionIdx) => {
    let text = question.getAttribute("text");

    let questionContainer = createQuestionContainer();
    quizContainer.appendChild(questionContainer);

    let p = createParagraphElement(text);
    questionContainer.appendChild(p);

    [...question.children].forEach((option, optionIdx) => {
      let isAnswer = !!option.getAttribute("is-answer");

      let optionContainer = createOptionContainer();
      questionContainer.appendChild(optionContainer);

      let name = questionIdx.toString();
      let id = name + optionIdx.toString();

      let radioInput = createRadioInput(option.textContent, name, id, isAnswer);
      let label = createLabel(option.textContent, id);

      optionContainer.appendChild(radioInput);
      optionContainer.appendChild(label);
    });
  });
}

function createQuestionContainer() {
  questionContainer = document.createElement("div");
  questionContainer.classList.add("question");

  return questionContainer;
}

function createParagraphElement(text) {
  let p = document.createElement("p");
  p.textContent = text;

  return p;
}

function createOptionContainer(text) {
  let option = document.createElement("div");
  option.classList.add("option");

  return option;
}

function createRadioInput(value, name, id, isAnswer) {
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  input.setAttribute("is-answer", isAnswer);

  return input;
}

function createLabel(value, id) {
  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = " " + value;

  return label;
}

function mark() {
  let questions = [...quizContainer.querySelectorAll(".question")];
  let correct = 0;
  let total = questions.length;

  questions.forEach((question) => {
    let options = [...question.querySelectorAll("input")];
    options.forEach((option) => {
      if (option.getAttribute("is-answer") == "true" && option.checked) {
        correct += 1;
      }
    });
  });

  let percent = (correct * 100) / total;
  quizResult.textContent = `You scored ${percent}% with ${correct} out of ${total} correct!`;
}
