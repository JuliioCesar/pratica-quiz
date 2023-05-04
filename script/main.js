import { questionsForQuiz } from "./listQuestions.js";
import { styleEdit } from "./styleEdit.js";

const inputName = document.querySelector("#nomeUsuario");
const button = document.querySelector("button");
const divQuestion = document.querySelector(".div-question");

button.addEventListener("click", () => {
    console.log(inputName.value);
    styleEdit();
    constructorLayoutQuiz();
});

function constructorLayoutQuiz() {

    const progressElement = document.createElement("p");
    const questionElement = document.createElement("h1");

    const divOptionsElement = document.createElement("div");
    divOptionsElement.className = 'div-options'

    const buttonNextQuestion = document.createElement("button");
    const img = document.createElement('img');
    img.src = 'image/ArrowVetor.png';
    

    buttonNextQuestion.innerHTML = "Proxima Questão"
    for (var i = 0; i < questionsForQuiz[1].options.length; i++) {

        const inputRadioElement = `<label><input type="radio" name="options" value="${questionsForQuiz[i].options[i]}">${questionsForQuiz[1].options[i]}</label>`;
        divOptionsElement.innerHTML += inputRadioElement;

    }

    progressElement.innerText = `Questões 1/${questionsForQuiz.length}`;
    
    questionElement.innerText = `${questionsForQuiz[0].question}`;
    
    divQuestion.appendChild(progressElement);
    divQuestion.appendChild(questionElement);
    divQuestion.appendChild(divOptionsElement);
    divQuestion.appendChild(buttonNextQuestion);
    buttonNextQuestion.appendChild(img);
}

