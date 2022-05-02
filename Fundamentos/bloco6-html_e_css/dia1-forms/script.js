const paragrafo = document.getElementsByTagName("p")[1];
console.log(paragrafo);
paragrafo.id = "item-obrigatorio";
paragrafo.style.background = "bisque";
paragrafo.innerHTML = "* Item obrigatório";


function handleSubmit(event) {
    // event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
        alert('Dados inválidos');
      } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
      }
}

window.onload = function() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', clear);
    const enterButton = document.querySelector("#enter");
    enterButton.addEventListener("click",handleSubmit);
}

function clear() {
    const formElements = document.querySelectorAll("input");
    const textArea = document.querySelector("textarea");
    const selectBox = document.querySelector("select");
    for(let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
    selectBox.selected = false;
}

// Função para validar dados:

function textInputValidation() {
    const email = document.querySelector("#email").value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = document.querySelector('#full-name').value.length;
    const invalidName = name < 10 || name > 40;

    const resume = document.querySelector('#resumo-pessoal').value.length;
    const invalidResume = reason > 500;

    if (invalidEmail || invalidName || invalidResume) {
        return false;
    }
    else {
        return true;
    }
}
