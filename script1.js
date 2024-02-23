const questions = [
  {
    question: "Quais as camadas da pele?",
    answers: [
      { text: "Glabra, Derme e Hipoderme", correct: false },
      { text: "Epiderme, Derme e Hipoderme", correct: true },
      { text: "Epiderme, Derme e Telógena", correct: false },
      //{ text: "6", correct: false },
    ],
  },
  {
    question: "Quais as fases do pelo?",
    answers: [
      { text: "Anágena, Catágena e Telógena", correct: true },
      { text: "Anágena, Catágena e Pilosa", correct: false },
      { text: "Anágena, Catágeba e Epilada", correct: false },
      //{ text: "10", correct: false },
    ],
  },
  {
    question: "Posso epilar barba com cera?",
    answers: [
      { text: "Não, foi terminantemente proibida pela anvisa.", correct: false },
      { text: "Sim, em 2022 foi liberado pela Anvisa esse procedimento, porém só é aconselhado ser feito por profissional que tenha domínio do procedimento para que caso ache alguma intercorrência ele esteja apto a intervir", correct: true },
      { text: "Não, porém se houver o consentimento do cliente está liberado.", correct: false },
      //{ text: "Quinto", correct: false },
    ],
  },
  {
    question: "Quais são os métodos de Depilação e Epilação disponíveis no mercado?",
    answers: [
      { text: "Depilação química, Depilação com lâminas, Depilação a laser, Epilação com cera.", correct: false },
      { text: "Depilação química, Depilação com lâminas, Depilação a laser, Epilação com cera, Epilação com cera, Epilação com cera fria e cera morna(hidrossolúvel)", correct: false },
      { text: "Epilação com cera quente, cera fria, cera morna(hidrossolúvel),Depilação química, Depilação com lâminas, Depilação a laser,Epilação com cera rollon", correct: true },
      //{ text: "3", correct: false },
    ],
  },
  {
    question: "Quais os cuidados pré Epilatórios devem ser feitos pelo profissional de Epilação. E quais cuidados home care o cliente deve fazer em casa?",
    answers: [
      { text: "Assepsia das mãos da cliente, Assepsia da pele a ser epilada, Remoções dos resíduos de cera seguido de cosmético calmante e o cliente deve fazer o home care esfoliando e hidratando a pele.", correct: true },
      { text: "Assepsia da pele a ser epilada, Remoções dos resíduos de cera seguido de cosmético calmante e o cliente deve fazer o home care esfoliando e hidratando a pele.", correct: false },
      { text: "Assepsia das mãos da cliente, Assepsia da pele aser epilada, Remoções dos resíduos de cera seguido de cosmético calmante eo cliente deve fazer o home care esfoliando e hidratando a pele 1 dia antes da Epilação.", correct: false },
      //{ text: "56 metros quadrados", correct: false },
    ],
  },
  {
    question: "Quais os tipos de pele?",
    answers: [
      { text: "Seca e Oleosa", correct: false },
      { text: "Glabra e Pilosa", correct: true },
      { text: "Glabra e Mista", correct: false },
      //{ text: "12", correct: false },
    ],
  },
  {
    question: "A Preparacao da cabine seguindo as regras de biosseguraça e ética profissional são:",
    answers: [
      { text: "Higienização da maca e da cabine, atender em local adequado que ofereça privacidade, uso de material descartavel e nunca reaproveitar cera.", correct: true },
      { text: "Higienização da maca, posso compartilhar o espaco entre clientes e uso de material descartavel.", correct: false },
      { text: "Higienizaçãoo da maca e da cabine, uso de material descartavel e nunca reaproveitar cera.", correct: false },
      //{ text: "16", correct: false },
    ],
  },
  {
    question: "A estrutura do pelo é composta por:",
    answers: [
      { text: "Raiz e Caule", correct: false },
      { text: "Raiz e Bulbo", correct: false },
      { text: "Raiz e Haste", correct: true },
      //{ text: "2/5", correct: false },
    ],
  },
  {
    question: "Quais os os tipos de Epilação de Virilha?",
    answers: [
      { text: "Total, bigode de Hitler e Simples", correct: false },
      { text: "Completa, Cavada e Simples", correct: true },
      { text: "Total, Metade e Simples", correct: false },
      //{ text: "2/5", correct: false },
    ],
  },
  {
    question: "Quais as intercorréncias podem ocorrer pós Epilação?",
    answers: [
      { text: "Foliculite, Pelos Encravados, Hematomas, Queimadura por atrito e Hipercromias", correct: true },
      { text: "Nao ocorrem intercorréncias pós Epilação.", correct: false },
      { text: "Foliculite e pelos encravados.", correct: false },
      //{ text: "2/5", correct: false },
    ],
  },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próximo";
  console.log("Questions array:", questions);
  showQuestion();
}

function showQuestion() {
  resetState();
  console.log("Current question index:", currentQuestionIndex);
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} questões de ${questions.length}!`;
  nextButton.innerHTML = "Jogue Novamente!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }

});


startQuiz();
