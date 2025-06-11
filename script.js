const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Shakespeare", "Tolstoy", "Hemingway"],
    answer: "Shakespeare"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.addEventListener("click", () => selectOption(option, q.answer));
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected, correct) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.classList.add("hide");
  optionsEl.classList.add("hide");
  nextBtn.classList.add("hide");
  scoreEl.classList.remove("hide");
  scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

showQuestion();
