import { questionsForQuiz } from "./listQuestions.js";
import { styleEdit } from "./styleEdit.js";

const inputName = document.querySelector("#nomeUsuario");
const button = document.querySelector("button");
const divQuestion = document.querySelector(".div-question");
const divResult = document.querySelector(".div-result");

/*Variaveis global*/
let nextArrayNumber = 0;
let rightQuestions = 0;

button.addEventListener("click", () => {
    styleEdit();
    constructorLayoutQuiz();
});

function createElement(
    typeForElement,
    className,
    textContentForElement = null,
    attributesForElement = {}
) {
    const element = document.createElement(typeForElement);
    element.className = className;

    if (textContentForElement) {
        element.textContent = textContentForElement;
    }
    for (const attribute in attributesForElement) {
        element.setAttribute(attribute, attributesForElement[attribute]);
    }
    return element;
}

function createOptionsForQuiz(questions) {
    const options = questions.options;

    const divOptionsElement = createElement("div", "div-options");

    for (let i = 0; i < options.length; i++) {
        const label = createElement("label");
        const inputRadio = createElement("input", null, null, {
            type: "radio",
            name: "options",
            value: options[i],
        });
        inputRadio.addEventListener("click", () => {
                resultInputRadio(inputRadio, questionsForQuiz[nextArrayNumber]);
        });
        const optionText = createElement("span", null, options[i]);

        label.appendChild(inputRadio);
        label.appendChild(optionText);
        divOptionsElement.appendChild(label);
    }

    return divOptionsElement;
}


function constructorLayoutQuiz() {
   
    const progressElement = document.createElement("p", null);
    const questionElement = document.createElement("h1", null);
    const buttonNextQuestion = createElement("button", null, "Proxima Questão");

    const img = createElement("img", null, null, {
        src: "image/ArrowVetor.png",
    });
    
    buttonNextQuestion.addEventListener("click", () => {
        nextArrayNumber++;
        const currentQuestion = questionsForQuiz[nextArrayNumber]; // incrementa o número da pergunta atual
        questionElement.textContent = currentQuestion.question; // atualiza o texto da pergunta
        divOptionsElement.innerHTML = ""; // limpa as opções antigas
        progressElement.textContent = `Questões ${nextArrayNumber + 1}/${questionsForQuiz.length}`; // atualiza o texto do progresso''
        divOptionsElement.appendChild(createOptionsForQuiz(currentQuestion));
        
        if (nextArrayNumber + 1 >= questionsForQuiz.length) {
            console.log("cheguei")
            const buttonFinallyQuiz = createElement("button", null, "Finalizar Quiz");
            const img = createElement("img", null, null, {
                src: "image/ArrowVetor.png",
            });
            buttonNextQuestion.style.display = "none";

            buttonFinallyQuiz.appendChild(img);
            divQuestion.appendChild(buttonFinallyQuiz);
            buttonFinallyQuiz.addEventListener("click", (e) => {
                    avaliableQuestionsResult();
            });
        }
    });
     
    const divOptionsElement = createOptionsForQuiz(questionsForQuiz[nextArrayNumber]);

    questionElement.textContent = questionsForQuiz[0].question;
    progressElement.textContent = `Questões ${nextArrayNumber + 1}/${questionsForQuiz.length}`;
    
    divQuestion.appendChild(progressElement);
    divQuestion.appendChild(questionElement);
    divQuestion.appendChild(divOptionsElement);
    divQuestion.appendChild(buttonNextQuestion);
    buttonNextQuestion.appendChild(img);
}



function resultInputRadio(inputRadio, questions) {
    if (inputRadio.value === questions.answer) {
        console.log(rightQuestions)
        rightQuestions += 1;
    }
}

function avaliableQuestionsResult() {
    const elementResult = createElement("h1", null);
    const paragraphDescription = createElement("p", null);
    const buttonReaload = createElement("button", null, "Finalizar Quiz");

    divResult.style.display = "flex";
    divQuestion.style.display = "none";

    buttonReaload.addEventListener('click', () => { window.location.reload(true); })

    elementResult.textContent = `${rightQuestions}/${questionsForQuiz.length}`;
    paragraphDescription.textContent = `Parabéns, ${inputName.value} ! Você acertou ${rightQuestions} de ${questionsForQuiz.length} perguntas neste quiz. Isso mostra seu conhecimento e esforço em aprender.`;

    divResult.appendChild(elementResult);
    divResult.appendChild(paragraphDescription);
    divResult.appendChild(buttonReaload);
}





































/* 
codigo antigo

button.addEventListener("click", () => {
    console.log(inputName.value);
    styleEdit();
    constructorLayoutQuiz();
});

function constructorLayoutQuiz() {
    let nextArrayNumber = 0;
    const progressElement = document.createElement("p");
    const questionElement = document.createElement("h1");

    const divOptionsElement = document.createElement("div");
    divOptionsElement.className = 'div-options'

    const buttonNextQuestion = document.createElement("button");
    const img = document.createElement('img');
    img.src = 'image/ArrowVetor.png';
    
    buttonNextQuestion.addEventListener("click", () => {
        console.log("Next Question Clicked")
        nextArrayNumber = nextArrayNumber + 1;
        console.log(nextArrayNumber)
    })
    for (var i = 0; i < questionsForQuiz[nextArrayNumber].options.length; i++) {

        const inputRadioElement = `<label><input type="radio" name="options" value="${questionsForQuiz[i].options[i]}">${questionsForQuiz[nextArrayNumber].options[i]}</label>`;
        divOptionsElement.innerHTML += inputRadioElement;

    }

    buttonNextQuestion.innerHTML = "Proxima Questão"


    progressElement.innerText = `Questões 1/${questionsForQuiz.length}`;
    
    questionElement.innerText = `${questionsForQuiz[0].question}`;
    
    divQuestion.appendChild(progressElement);
    divQuestion.appendChild(questionElement);
    divQuestion.appendChild(divOptionsElement);
    divQuestion.appendChild(buttonNextQuestion);
    buttonNextQuestion.appendChild(img);
} */





/*
exemplos

function updateQuestion() {
    const currentQuestion = questionsForQuiz[nextArrayNumber];
    const options = currentQuestion.options;
  
    // atualiza o texto da pergunta
    questionElement.textContent = currentQuestion.question;
  
    // remove as opções de resposta atuais
    divOptionsElement.innerHTML = '';
  
    // cria e adiciona as novas opções de resposta
    for (let i = 0; i < options.length; i++) {
      const label = createElement("label");
      const inputRadio = createElement("input", null, null, {
        type: "radio",
        name: "options",
        value: options[i]
      });
  
      const optionText = createElement("span", null, options[i]);
  
      label.appendChild(inputRadio);
      label.appendChild(optionText);
      divOptionsElement.appendChild(label);
    }
  
    // atualiza o texto do progresso
    progressElement.textContent = `Questão ${nextArrayNumber + 1}/${questionsForQuiz.length}`;
  }
   */
